-module(maybe_star_document).

-export([handle/1, handle_from_map/1, dispatch/1]).

-dialyzer({nowarn_function, [dispatch/1]}).
-dialyzer({nowarn_function, [handle/1]}).

-include_lib("evoq/include/evoq.hrl").

-spec handle_from_map(map()) -> {ok, [map()]} | {error, term()}.
handle_from_map(Payload) ->
    DocId = maps:get(document_id, Payload, maps:get(<<"document_id">>, Payload, undefined)),
    Cmd = star_document_v1:new(DocId),
    handle(Cmd).

-spec handle(star_document_v1:star_document_v1()) ->
    {ok, [map()]} | {error, term()}.
handle(Command) ->
    #{document_id := DocId} = star_document_v1:to_map(Command),
    case is_binary(DocId) andalso byte_size(DocId) > 0 of
        true ->
            StarredAt = erlang:system_time(millisecond),
            Event = document_starred_v1:new(DocId, StarredAt),
            {ok, [document_starred_v1:to_map(Event)]};
        false ->
            {error, document_id_required}
    end.

-spec dispatch(star_document_v1:star_document_v1()) ->
    {ok, non_neg_integer(), [map()]} | {error, term()}.
dispatch(Cmd) ->
    #{document_id := DocId} = star_document_v1:to_map(Cmd),
    StreamId = document_aggregate:stream_id(DocId),
    CmdMap = star_document_v1:to_map(Cmd),
    EvoqCmd = #evoq_command{
        command_type = star_document,
        aggregate_type = document_aggregate,
        aggregate_id = StreamId,
        payload = CmdMap#{command_type => star_document},
        metadata = #{timestamp => erlang:system_time(millisecond)}
    },
    evoq_dispatcher:dispatch(EvoqCmd, #{
        store_id => documents_store,
        adapter => reckon_evoq_adapter,
        consistency => eventual
    }).
