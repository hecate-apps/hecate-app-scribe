-module(document_renamed_v1_tests).
-include_lib("eunit/include/eunit.hrl").

new_test() ->
    Event = document_renamed_v1:new(<<"doc-1">>, <<"New">>, 5000),
    Map = document_renamed_v1:to_map(Event),
    ?assertEqual(document_renamed_v1, maps:get(event_type, Map)),
    ?assertEqual(<<"doc-1">>, maps:get(document_id, Map)),
    ?assertEqual(<<"New">>, maps:get(new_title, Map)),
    ?assertEqual(5000, maps:get(renamed_at, Map)).

roundtrip_test() ->
    Event = document_renamed_v1:new(<<"doc-2">>, <<"T">>, 6000),
    Map = document_renamed_v1:to_map(Event),
    {ok, Event2} = document_renamed_v1:from_map(Map),
    ?assertEqual(Map, document_renamed_v1:to_map(Event2)).

from_map_invalid_test() ->
    ?assertEqual({error, invalid_document_renamed_event},
                 document_renamed_v1:from_map(#{})).
