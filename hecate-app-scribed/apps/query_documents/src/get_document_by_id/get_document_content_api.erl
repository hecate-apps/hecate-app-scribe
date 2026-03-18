%%% @doc Load document content on-demand from the event store.
%%%
%%% Content is no longer stored in the read model (ETS). Instead, we
%%% replay the document's event stream and extract the content from
%%% the last document_content_revised_v1 event.
%%% @end
-module(get_document_content_api).
-export([handle_get/3]).

handle_get(DocId, Req0, _State) ->
    StreamId = document_aggregate:stream_id(DocId),
    case evoq_event_store:read_all(documents_store, StreamId, forward) of
        {ok, Events} ->
            {Content, ContentHash, RevisedAt} = extract_last_content(Events),
            app_scribed_api_utils:json_ok(#{
                document_id => DocId,
                content => Content,
                content_hash => ContentHash,
                revised_at => RevisedAt
            }, Req0);
        {error, _Reason} ->
            %% Stream not found or empty — return empty content
            app_scribed_api_utils:json_ok(#{
                document_id => DocId,
                content => <<"{}">>,
                content_hash => <<>>,
                revised_at => <<>>
            }, Req0)
    end.

%% @doc Walk the event list and return content from the last content_revised event.
%% Returns {Content, ContentHash, RevisedAt} or defaults if no content event found.
extract_last_content(Events) ->
    extract_last_content(Events, {<<"{}">>, <<>>, <<>>}).

extract_last_content([], Acc) ->
    Acc;
extract_last_content([Event | Rest], Acc) ->
    EventType = get_event_type(Event),
    case EventType of
        <<"document_content_revised_v1">> ->
            Data = maps:get(data, Event, Event),
            Content = gf(content_binary, Data),
            Hash = gf(content_hash, Data),
            RevisedAt = gf(revised_at, Data),
            RevisedAtBin = case RevisedAt of
                R when is_integer(R) -> integer_to_binary(R);
                R when is_binary(R) -> R;
                _ -> <<>>
            end,
            extract_last_content(Rest, {Content, Hash, RevisedAtBin});
        _ ->
            extract_last_content(Rest, Acc)
    end.

get_event_type(#{event_type := T}) when is_binary(T) -> T;
get_event_type(#{<<"event_type">> := T}) when is_binary(T) -> T;
get_event_type(_) -> undefined.

gf(Key, Data) -> app_scribed_api_utils:get_field(Key, Data).
