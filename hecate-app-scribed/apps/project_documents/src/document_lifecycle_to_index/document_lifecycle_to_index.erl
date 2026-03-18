%%% @doc Merged projection: all document lifecycle events -> scribe_documents ETS read model.
%%%
%%% Replaces 4 individual projections that each subscribed independently
%%% to the same read model, causing race conditions when events arrived
%%% before document_initiated_v1 had created the entry.
%%%
%%% By handling ALL event types in a single projection, events are processed
%%% sequentially per stream, eliminating the race.
%%%
%%% Content is NOT stored in the read model. Only metadata (content_hash,
%%% content_size) is tracked. Content is loaded on-demand from the event
%%% store by replaying the document's stream.
%%%
%%% Status bit flags defined in document_status.hrl:
%%%   ?DOC_INITIATED = 1
%%%   ?DOC_RENAMED   = 2
%%%   ?DOC_ARCHIVED  = 4
%%%   ?DOC_REVISED   = 8
%%%   ?DOC_MOVED     = 16
%%%   ?DOC_STARRED   = 32
%%% @end
-module(document_lifecycle_to_index).
-behaviour(evoq_projection).
-export([interested_in/0, init/1, project/4]).

-include_lib("guide_document_lifecycle/include/document_status.hrl").

-define(TABLE, scribe_documents).

interested_in() ->
    [<<"document_initiated_v1">>,
     <<"document_renamed_v1">>,
     <<"document_moved_v1">>,
     <<"document_starred_v1">>,
     <<"document_unstarred_v1">>,
     <<"document_content_revised_v1">>,
     <<"document_flushed_v1">>,
     <<"document_archived_v1">>].

init(_Config) ->
    {ok, RM} = evoq_read_model:new(evoq_read_model_ets, #{name => ?TABLE}),
    {ok, #{}, RM}.

project(#{data := Data} = Event, _Metadata, State, RM) ->
    EventType = get_event_type(Event),
    do_project(EventType, Data, State, RM).

%% --- document_initiated_v1: INSERT new document record ---

do_project(<<"document_initiated_v1">>, Data, State, RM) ->
    DocId = gf(document_id, Data),
    FileId = gf(file_id, Data),
    Title = gf(title, Data),
    Owner = gf(owner, Data),
    FolderId = gf(folder_id, Data),
    CreatedAt = gf(created_at, Data),
    Status = ?DOC_INITIATED,
    Doc = #{
        document_id    => DocId,
        file_id        => FileId,
        title          => Title,
        folder_id      => FolderId,
        owner          => Owner,
        starred        => false,
        status         => Status,
        status_label   => evoq_bit_flags:to_string(Status, ?DOC_FLAG_MAP),
        available_actions => available_actions(Status),
        content_hash   => undefined,
        content_size   => 0,
        created_at     => CreatedAt,
        updated_at     => CreatedAt
    },
    {ok, RM2} = evoq_read_model:put(DocId, Doc, RM),
    {ok, State, RM2};

%% --- document_renamed_v1: UPDATE title ---

do_project(<<"document_renamed_v1">>, Data, State, RM) ->
    DocId = gf(document_id, Data),
    case evoq_read_model:get(DocId, RM) of
        {ok, #{status := S} = Doc} ->
            NewStatus = S bor ?DOC_RENAMED,
            Updated = Doc#{
                title          => gf(new_title, Data),
                status         => NewStatus,
                status_label   => evoq_bit_flags:to_string(NewStatus, ?DOC_FLAG_MAP),
                available_actions => available_actions(NewStatus),
                updated_at     => gf(renamed_at, Data)
            },
            {ok, RM2} = evoq_read_model:put(DocId, Updated, RM),
            {ok, State, RM2};
        {error, not_found} ->
            {skip, State, RM}
    end;

%% --- document_moved_v1: UPDATE folder_id ---

do_project(<<"document_moved_v1">>, Data, State, RM) ->
    DocId = gf(document_id, Data),
    case evoq_read_model:get(DocId, RM) of
        {ok, #{status := S} = Doc} ->
            NewStatus = S bor ?DOC_MOVED,
            Updated = Doc#{
                folder_id      => gf(folder_id, Data),
                status         => NewStatus,
                status_label   => evoq_bit_flags:to_string(NewStatus, ?DOC_FLAG_MAP),
                available_actions => available_actions(NewStatus),
                updated_at     => gf(moved_at, Data)
            },
            {ok, RM2} = evoq_read_model:put(DocId, Updated, RM),
            {ok, State, RM2};
        {error, not_found} ->
            {skip, State, RM}
    end;

%% --- document_starred_v1: SET starred flag ---

do_project(<<"document_starred_v1">>, Data, State, RM) ->
    DocId = gf(document_id, Data),
    case evoq_read_model:get(DocId, RM) of
        {ok, #{status := S} = Doc} ->
            NewStatus = S bor ?DOC_STARRED,
            Updated = Doc#{
                starred        => true,
                status         => NewStatus,
                status_label   => evoq_bit_flags:to_string(NewStatus, ?DOC_FLAG_MAP),
                available_actions => available_actions(NewStatus),
                updated_at     => gf(starred_at, Data)
            },
            {ok, RM2} = evoq_read_model:put(DocId, Updated, RM),
            {ok, State, RM2};
        {error, not_found} ->
            {skip, State, RM}
    end;

%% --- document_unstarred_v1: CLEAR starred flag ---

do_project(<<"document_unstarred_v1">>, Data, State, RM) ->
    DocId = gf(document_id, Data),
    case evoq_read_model:get(DocId, RM) of
        {ok, #{status := S} = Doc} ->
            %% Clear the STARRED bit
            NewStatus = S band (bnot ?DOC_STARRED),
            Updated = Doc#{
                starred        => false,
                status         => NewStatus,
                status_label   => evoq_bit_flags:to_string(NewStatus, ?DOC_FLAG_MAP),
                available_actions => available_actions(NewStatus),
                updated_at     => gf(unstarred_at, Data)
            },
            {ok, RM2} = evoq_read_model:put(DocId, Updated, RM),
            {ok, State, RM2};
        {error, not_found} ->
            {skip, State, RM}
    end;

%% --- document_content_revised_v1: UPDATE content_hash and content_size only ---

do_project(<<"document_content_revised_v1">>, Data, State, RM) ->
    DocId = gf(document_id, Data),
    case evoq_read_model:get(DocId, RM) of
        {ok, #{status := S} = Doc} ->
            ContentBinary = gf(content_binary, Data),
            ContentSize = case ContentBinary of
                B when is_binary(B) -> byte_size(B);
                _ -> 0
            end,
            NewStatus = S bor ?DOC_REVISED,
            Updated = Doc#{
                content_hash   => gf(content_hash, Data),
                content_size   => ContentSize,
                status         => NewStatus,
                status_label   => evoq_bit_flags:to_string(NewStatus, ?DOC_FLAG_MAP),
                available_actions => available_actions(NewStatus),
                updated_at     => gf(revised_at, Data)
            },
            {ok, RM2} = evoq_read_model:put(DocId, Updated, RM),
            {ok, State, RM2};
        {error, not_found} ->
            {skip, State, RM}
    end;

%% --- document_flushed_v1: UPDATE content_hash and content_size only ---

do_project(<<"document_flushed_v1">>, Data, State, RM) ->
    DocId = gf(document_id, Data),
    case evoq_read_model:get(DocId, RM) of
        {ok, #{status := S} = Doc} ->
            ContentBinary = gf(content_binary, Data),
            ContentSize = case ContentBinary of
                B when is_binary(B) -> byte_size(B);
                _ -> 0
            end,
            NewStatus = S bor ?DOC_REVISED,
            Updated = Doc#{
                content_hash   => gf(content_hash, Data),
                content_size   => ContentSize,
                status         => NewStatus,
                status_label   => evoq_bit_flags:to_string(NewStatus, ?DOC_FLAG_MAP),
                available_actions => available_actions(NewStatus),
                updated_at     => gf(flushed_at, Data)
            },
            {ok, RM2} = evoq_read_model:put(DocId, Updated, RM),
            {ok, State, RM2};
        {error, not_found} ->
            {skip, State, RM}
    end;

%% --- document_archived_v1: DELETE from ETS (remove from index) ---

do_project(<<"document_archived_v1">>, Data, State, RM) ->
    DocId = gf(document_id, Data),
    case evoq_read_model:get(DocId, RM) of
        {ok, _Doc} ->
            {ok, RM2} = evoq_read_model:delete(DocId, RM),
            {ok, State, RM2};
        {error, not_found} ->
            {skip, State, RM}
    end;

%% --- Unknown event type: skip ---

do_project(_Unknown, _Data, State, RM) ->
    {skip, State, RM}.

%% --- Available Actions ---

available_actions(Status) ->
    case Status band ?DOC_ARCHIVED of
        0 -> [<<"rename">>, <<"revise">>, <<"move">>, <<"star">>, <<"archive">>];
        _ -> []
    end.

%% --- Helpers ---

get_event_type(#{event_type := T}) when is_binary(T) -> T;
get_event_type(_) -> undefined.

gf(Key, Data) -> app_scribed_api_utils:get_field(Key, Data).
