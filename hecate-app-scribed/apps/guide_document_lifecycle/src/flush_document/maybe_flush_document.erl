-module(maybe_flush_document).

-export([handle/1, handle_from_map/1, dispatch/2]).

-dialyzer({nowarn_function, [dispatch/2]}).
-dialyzer({nowarn_function, [handle/1]}).

-include_lib("evoq/include/evoq.hrl").

-spec handle_from_map(map()) -> {ok, [map()]} | {error, term()}.
handle_from_map(Payload) ->
    case flush_document_v1:from_map(Payload) of
        {ok, Cmd} -> handle(Cmd);
        {error, _} = Err -> Err
    end.

-spec handle(flush_document_v1:flush_document_v1()) ->
    {ok, [map()]} | {error, term()}.
handle(Command) ->
    #{document_id := DocId, content_binary := Content}
        = flush_document_v1:to_map(Command),
    case is_binary(Content) of
        true ->
            Hash = binary:encode_hex(crypto:hash(sha256, Content)),
            Event = document_flushed_v1:new(#{
                document_id => DocId,
                content_binary => Content,
                content_hash => Hash
            }),
            {ok, [Event]};
        false ->
            {error, content_required}
    end.

-spec dispatch(binary(), flush_document_v1:flush_document_v1()) ->
    {ok, non_neg_integer(), [map()]} | {error, term()}.
dispatch(DocId, Cmd) ->
    StreamId = document_aggregate:stream_id(DocId),
    CmdMap = flush_document_v1:to_map(Cmd),
    EvoqCmd = #evoq_command{
        command_type = flush_document,
        aggregate_type = document_aggregate,
        aggregate_id = StreamId,
        payload = CmdMap#{command_type => flush_document},
        metadata = #{timestamp => erlang:system_time(millisecond)}
    },
    evoq_dispatcher:dispatch(EvoqCmd, #{
        store_id => documents_store,
        adapter => reckon_evoq_adapter,
        consistency => eventual
    }).
