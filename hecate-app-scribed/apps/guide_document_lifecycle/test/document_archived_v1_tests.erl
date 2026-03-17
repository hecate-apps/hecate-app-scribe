-module(document_archived_v1_tests).
-include_lib("eunit/include/eunit.hrl").

new_test() ->
    Event = document_archived_v1:new(<<"doc-1">>, 9000),
    Map = document_archived_v1:to_map(Event),
    ?assertEqual(document_archived_v1, maps:get(event_type, Map)),
    ?assertEqual(<<"doc-1">>, maps:get(document_id, Map)),
    ?assertEqual(9000, maps:get(archived_at, Map)).

roundtrip_test() ->
    Event = document_archived_v1:new(<<"doc-2">>, 10000),
    Map = document_archived_v1:to_map(Event),
    {ok, Event2} = document_archived_v1:from_map(Map),
    ?assertEqual(Map, document_archived_v1:to_map(Event2)).

from_map_invalid_test() ->
    ?assertEqual({error, invalid_document_archived_event},
                 document_archived_v1:from_map(#{})).
