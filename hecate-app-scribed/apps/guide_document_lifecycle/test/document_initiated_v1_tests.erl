-module(document_initiated_v1_tests).
-include_lib("eunit/include/eunit.hrl").

new_creates_event_test() ->
    Event = document_initiated_v1:new(<<"doc-1">>, <<"Title">>, <<"alice">>, 1000),
    Map = document_initiated_v1:to_map(Event),
    ?assertEqual(document_initiated_v1, maps:get(event_type, Map)),
    ?assertEqual(<<"doc-1">>, maps:get(document_id, Map)),
    ?assertEqual(<<"Title">>, maps:get(title, Map)),
    ?assertEqual(<<"alice">>, maps:get(owner, Map)),
    ?assertEqual(1000, maps:get(created_at, Map)).

roundtrip_test() ->
    Event = document_initiated_v1:new(<<"doc-2">>, <<"T">>, <<"bob">>, 2000),
    Map = document_initiated_v1:to_map(Event),
    {ok, Event2} = document_initiated_v1:from_map(Map),
    ?assertEqual(Map, document_initiated_v1:to_map(Event2)).

from_map_invalid_test() ->
    ?assertEqual({error, invalid_document_initiated_event},
                 document_initiated_v1:from_map(#{bad => data})).
