-module(maybe_rename_document).

-export([handle/1, handle_from_map/1, dispatch/2]).

-dialyzer({nowarn_function, [dispatch/2]}).
-dialyzer({nowarn_function, [handle/1]}).

-include_lib("evoq/include/evoq.hrl").

-spec handle_from_map(map()) -> {ok, [map()]} | {error, term()}.
handle_from_map(Payload) ->
    DocId = maps:get(document_id, Payload, maps:get(<<"document_id">>, Payload, undefined)),
    NewTitle = maps:get(new_title, Payload, maps:get(<<"new_title">>, Payload, undefined)),
    Cmd = rename_document_v1:new(DocId, NewTitle),
    handle(Cmd).

-spec handle(rename_document_v1:rename_document_v1()) ->
    {ok, [map()]} | {error, term()}.
handle(Command) ->
    #{document_id := _DocId, new_title := NewTitle} = rename_document_v1:to_map(Command),
    case validate(NewTitle) of
        ok ->
            RenamedAt = erlang:system_time(millisecond),
            Event = document_renamed_v1:new(_DocId, NewTitle, RenamedAt),
            {ok, [document_renamed_v1:to_map(Event)]};
        {error, Reason} ->
            {error, Reason}
    end.

-spec dispatch(binary(), rename_document_v1:rename_document_v1()) ->
    {ok, non_neg_integer(), [map()]} | {error, term()}.
dispatch(DocId, Cmd) ->
    StreamId = document_aggregate:stream_id(DocId),
    CmdMap = rename_document_v1:to_map(Cmd),
    EvoqCmd = #evoq_command{
        command_type = rename_document,
        aggregate_type = document_aggregate,
        aggregate_id = StreamId,
        payload = CmdMap#{command_type => rename_document},
        metadata = #{timestamp => erlang:system_time(millisecond)}
    },
    evoq_dispatcher:dispatch(EvoqCmd, #{
        store_id => documents_store,
        adapter => reckon_evoq_adapter,
        consistency => eventual
    }).

validate(NewTitle) when is_binary(NewTitle), byte_size(NewTitle) > 0 -> ok;
validate(_) -> {error, title_required}.
