-module(maybe_initiate_document).

-export([handle/1, handle_from_map/1, dispatch/1]).

-dialyzer({nowarn_function, [dispatch/1]}).
-dialyzer({nowarn_function, [handle/1]}).

-include_lib("evoq/include/evoq.hrl").

-spec handle_from_map(map()) -> {ok, [map()]} | {error, term()}.
handle_from_map(Payload) ->
    DocId = maps:get(document_id, Payload, maps:get(<<"document_id">>, Payload, undefined)),
    Title = maps:get(title, Payload, maps:get(<<"title">>, Payload, undefined)),
    Owner = maps:get(owner, Payload, maps:get(<<"owner">>, Payload, undefined)),
    Cmd = initiate_document_v1:new(DocId, Title, Owner),
    handle(Cmd).

-spec handle(initiate_document_v1:initiate_document_v1()) ->
    {ok, [map()]} | {error, term()}.
handle(Command) ->
    #{document_id := DocId, title := Title, owner := Owner}
        = initiate_document_v1:to_map(Command),
    case validate(DocId, Title, Owner) of
        ok ->
            CreatedAt = erlang:system_time(millisecond),
            Event = document_initiated_v1:new(DocId, Title, Owner, CreatedAt),
            {ok, [document_initiated_v1:to_map(Event)]};
        {error, Reason} ->
            {error, Reason}
    end.

-spec dispatch(initiate_document_v1:initiate_document_v1()) ->
    {ok, non_neg_integer(), [map()]} | {error, term()}.
dispatch(Cmd) ->
    #{document_id := DocId} = initiate_document_v1:to_map(Cmd),
    StreamId = document_aggregate:stream_id(DocId),
    CmdMap = initiate_document_v1:to_map(Cmd),
    EvoqCmd = #evoq_command{
        command_type = initiate_document,
        aggregate_type = document_aggregate,
        aggregate_id = StreamId,
        payload = CmdMap#{command_type => initiate_document},
        metadata = #{timestamp => erlang:system_time(millisecond)}
    },
    evoq_dispatcher:dispatch(EvoqCmd, #{
        store_id => documents_store,
        adapter => reckon_evoq_adapter,
        consistency => eventual
    }).

validate(DocId, Title, Owner) ->
    case {byte_size(DocId), byte_size(Title), byte_size(Owner)} of
        {0, _, _} -> {error, document_id_required};
        {_, 0, _} -> {error, title_required};
        {_, _, 0} -> {error, owner_required};
        _ -> ok
    end.
