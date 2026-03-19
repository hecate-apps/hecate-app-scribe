-module(document_content_revised_v1_tests).
-include_lib("eunit/include/eunit.hrl").

new_test() ->
    Event = document_content_revised_v1:new(<<"doc-1">>, <<"body">>, <<"abc123">>, 7000),
    Map = document_content_revised_v1:to_map(Event),
    ?assertEqual(<<"document_content_revised_v1">>, maps:get(event_type, Map)),
    ?assertEqual(<<"doc-1">>, maps:get(document_id, Map)),
    ?assertEqual(<<"body">>, maps:get(content_binary, Map)),
    ?assertEqual(<<"abc123">>, maps:get(content_hash, Map)),
    ?assertEqual(7000, maps:get(revised_at, Map)).

roundtrip_test() ->
    Event = document_content_revised_v1:new(<<"doc-2">>, <<"x">>, <<"hash">>, 8000),
    Map = document_content_revised_v1:to_map(Event),
    {ok, Event2} = document_content_revised_v1:from_map(Map),
    ?assertEqual(Map, document_content_revised_v1:to_map(Event2)).

from_map_invalid_test() ->
    ?assertEqual({error, invalid_document_content_revised_event},
                 document_content_revised_v1:from_map(#{})).
