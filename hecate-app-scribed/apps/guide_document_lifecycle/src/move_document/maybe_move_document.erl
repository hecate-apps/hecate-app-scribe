-module(maybe_move_document).

-export([handle/1, handle_from_map/1, dispatch/1]).

-dialyzer({nowarn_function, [dispatch/1]}).
-dialyzer({nowarn_function, [handle/1]}).

-include_lib("evoq/include/evoq.hrl").

-spec handle_from_map(map()) -> {ok, [map()]} | {error, term()}.
handle_from_map(Payload) ->
    DocId = maps:get(document_id, Payload, maps:get(<<"document_id">>, Payload, undefined)),
    FolderId = maps:get(folder_id, Payload, maps:get(<<"folder_id">>, Payload, undefined)),
    Cmd = move_document_v1:new(DocId, FolderId),
    handle(Cmd).

-spec handle(move_document_v1:move_document_v1()) ->
    {ok, [map()]} | {error, term()}.
handle(Command) ->
    #{document_id := DocId, folder_id := FolderId} = move_document_v1:to_map(Command),
    case is_binary(DocId) andalso byte_size(DocId) > 0 of
        true ->
            MovedAt = erlang:system_time(millisecond),
            Event = document_moved_v1:new(DocId, FolderId, MovedAt),
            {ok, [document_moved_v1:to_map(Event)]};
        false ->
            {error, document_id_required}
    end.

-spec dispatch(move_document_v1:move_document_v1()) ->
    {ok, non_neg_integer(), [map()]} | {error, term()}.
dispatch(Cmd) ->
    #{document_id := DocId} = move_document_v1:to_map(Cmd),
    StreamId = document_aggregate:stream_id(DocId),
    CmdMap = move_document_v1:to_map(Cmd),
    EvoqCmd = #evoq_command{
        command_type = move_document,
        aggregate_type = document_aggregate,
        aggregate_id = StreamId,
        payload = CmdMap#{command_type => move_document},
        metadata = #{timestamp => erlang:system_time(millisecond)}
    },
    evoq_dispatcher:dispatch(EvoqCmd, #{
        store_id => documents_store,
        adapter => reckon_evoq_adapter,
        consistency => eventual
    }).
