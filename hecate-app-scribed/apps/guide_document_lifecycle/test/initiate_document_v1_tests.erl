-module(initiate_document_v1_tests).
-include_lib("eunit/include/eunit.hrl").

new_creates_command_test() ->
    Cmd = initiate_document_v1:new(<<"doc-1">>, <<"My Doc">>, <<"alice">>),
    Map = initiate_document_v1:to_map(Cmd),
    ?assertEqual(<<"doc-1">>, maps:get(document_id, Map)),
    ?assertEqual(<<"My Doc">>, maps:get(title, Map)),
    ?assertEqual(<<"alice">>, maps:get(owner, Map)).

to_map_roundtrip_test() ->
    Cmd = initiate_document_v1:new(<<"doc-2">>, <<"Title">>, <<"bob">>),
    Map = initiate_document_v1:to_map(Cmd),
    {ok, Cmd2} = initiate_document_v1:from_map(Map),
    ?assertEqual(Map, initiate_document_v1:to_map(Cmd2)).

from_map_missing_fields_test() ->
    ?assertEqual({error, invalid_initiate_document_command},
                 initiate_document_v1:from_map(#{title => <<"x">>})).
