-module(maybe_revise_document_content).

-export([handle/1, handle_from_map/1, dispatch/2]).

-dialyzer({nowarn_function, [dispatch/2]}).
-dialyzer({nowarn_function, [handle/1]}).

-include_lib("evoq/include/evoq.hrl").

-spec handle_from_map(map()) -> {ok, [map()]} | {error, term()}.
handle_from_map(Payload) ->
    DocId = maps:get(document_id, Payload, maps:get(<<"document_id">>, Payload, undefined)),
    Content = maps:get(content_binary, Payload, maps:get(<<"content_binary">>, Payload, undefined)),
    Cmd = revise_document_content_v1:new(DocId, Content),
    handle(Cmd).

-spec handle(revise_document_content_v1:revise_document_content_v1()) ->
    {ok, [map()]} | {error, term()}.
handle(Command) ->
    #{document_id := DocId, content_binary := Content}
        = revise_document_content_v1:to_map(Command),
    case is_binary(Content) of
        true ->
            Hash = binary:encode_hex(crypto:hash(sha256, Content)),
            RevisedAt = erlang:system_time(millisecond),
            Event = document_content_revised_v1:new(DocId, Content, Hash, RevisedAt),
            {ok, [document_content_revised_v1:to_map(Event)]};
        false ->
            {error, content_required}
    end.

-spec dispatch(binary(), revise_document_content_v1:revise_document_content_v1()) ->
    {ok, non_neg_integer(), [map()]} | {error, term()}.
dispatch(DocId, Cmd) ->
    StreamId = document_aggregate:stream_id(DocId),
    CmdMap = revise_document_content_v1:to_map(Cmd),
    EvoqCmd = #evoq_command{
        command_type = revise_document_content,
        aggregate_type = document_aggregate,
        aggregate_id = StreamId,
        payload = CmdMap#{command_type => revise_document_content},
        metadata = #{timestamp => erlang:system_time(millisecond)}
    },
    evoq_dispatcher:dispatch(EvoqCmd, #{
        store_id => documents_store,
        adapter => reckon_evoq_adapter,
        consistency => eventual
    }).
