-module(rename_document_v1_tests).
-include_lib("eunit/include/eunit.hrl").

new_test() ->
    Cmd = rename_document_v1:new(<<"doc-1">>, <<"New Title">>),
    Map = rename_document_v1:to_map(Cmd),
    ?assertEqual(<<"doc-1">>, maps:get(document_id, Map)),
    ?assertEqual(<<"New Title">>, maps:get(new_title, Map)).

roundtrip_test() ->
    Cmd = rename_document_v1:new(<<"doc-2">>, <<"Title 2">>),
    Map = rename_document_v1:to_map(Cmd),
    {ok, Cmd2} = rename_document_v1:from_map(Map),
    ?assertEqual(Map, rename_document_v1:to_map(Cmd2)).

from_map_invalid_test() ->
    ?assertEqual({error, invalid_rename_document_command},
                 rename_document_v1:from_map(#{})).
