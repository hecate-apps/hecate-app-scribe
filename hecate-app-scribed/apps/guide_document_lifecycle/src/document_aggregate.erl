-module(document_aggregate).
-behaviour(evoq_aggregate).

-include("document_status.hrl").

-export([init/1, execute/2, apply/2]).
-export([initial_state/0, apply_event/2, stream_id/1]).

-record(doc_state, {
    document_id  :: binary() | undefined,
    title        :: binary() | undefined,
    owner        :: binary() | undefined,
    status       :: non_neg_integer(),
    content_hash :: binary() | undefined,
    created_at   :: integer() | undefined,
    updated_at   :: integer() | undefined
}).

%% ===================================================================
%% Evoq callbacks
%% ===================================================================

init(_AggregateId) ->
    {ok, initial_state()}.

initial_state() ->
    #doc_state{
        document_id = undefined,
        title = undefined,
        owner = undefined,
        status = 0,
        content_hash = undefined,
        created_at = undefined,
        updated_at = undefined
    }.

-spec stream_id(binary()) -> binary().
stream_id(DocumentId) ->
    <<"document-", DocumentId/binary>>.

execute(State, #{command_type := CmdType} = Payload) ->
    do_execute(CmdType, State, Payload);
execute(_State, _Unknown) ->
    {error, unknown_command}.

apply(State, Event) ->
    apply_event(State, Event).

apply_event(State, #{<<"event_type">> := EventType} = Event) ->
    do_apply(EventType, State, Event);
apply_event(State, #{event_type := EventType} = Event) when is_binary(EventType) ->
    do_apply(EventType, State, Event);
apply_event(State, #{event_type := EventType} = Event) when is_atom(EventType) ->
    do_apply(atom_to_binary(EventType), State, Event);
apply_event(State, _) ->
    State.

%% ===================================================================
%% Command routing
%% ===================================================================

do_execute(initiate_document, State, Payload) ->
    case State#doc_state.status band ?DOC_INITIATED of
        0 -> maybe_initiate_document:handle_from_map(Payload);
        _ -> {error, already_initiated}
    end;

do_execute(rename_document, State, Payload) ->
    case can_modify(State) of
        true -> maybe_rename_document:handle_from_map(Payload);
        false -> {error, document_not_modifiable}
    end;

do_execute(revise_document_content, State, Payload) ->
    case can_modify(State) of
        true -> maybe_revise_document_content:handle_from_map(Payload);
        false -> {error, document_not_modifiable}
    end;

do_execute(archive_document, State, Payload) ->
    case State#doc_state.status band ?DOC_ARCHIVED of
        0 ->
            case State#doc_state.status band ?DOC_INITIATED of
                0 -> {error, not_initiated};
                _ -> maybe_archive_document:handle_from_map(Payload)
            end;
        _ -> {error, already_archived}
    end;

do_execute(_Unknown, _State, _Payload) ->
    {error, unknown_command}.

%% ===================================================================
%% Event application
%% ===================================================================

do_apply(<<"document_initiated_v1">>, State, Event) ->
    State#doc_state{
        document_id = get_field(<<"document_id">>, document_id, Event),
        title = get_field(<<"title">>, title, Event),
        owner = get_field(<<"owner">>, owner, Event),
        created_at = get_field(<<"created_at">>, created_at, Event),
        updated_at = get_field(<<"created_at">>, created_at, Event),
        status = State#doc_state.status bor ?DOC_INITIATED
    };

do_apply(<<"document_renamed_v1">>, State, Event) ->
    State#doc_state{
        title = get_field(<<"new_title">>, new_title, Event),
        updated_at = get_field(<<"renamed_at">>, renamed_at, Event),
        status = State#doc_state.status bor ?DOC_RENAMED
    };

do_apply(<<"document_content_revised_v1">>, State, Event) ->
    State#doc_state{
        content_hash = get_field(<<"content_hash">>, content_hash, Event),
        updated_at = get_field(<<"revised_at">>, revised_at, Event),
        status = State#doc_state.status bor ?DOC_REVISED
    };

do_apply(<<"document_archived_v1">>, State, Event) ->
    State#doc_state{
        updated_at = get_field(<<"archived_at">>, archived_at, Event),
        status = State#doc_state.status bor ?DOC_ARCHIVED
    };

do_apply(_UnknownType, State, _Event) ->
    State.

%% ===================================================================
%% Internal
%% ===================================================================

can_modify(#doc_state{status = S}) ->
    (S band ?DOC_INITIATED =/= 0) andalso (S band ?DOC_ARCHIVED =:= 0).

get_field(BinKey, AtomKey, Event) ->
    maps:get(BinKey, Event, maps:get(AtomKey, Event, undefined)).
