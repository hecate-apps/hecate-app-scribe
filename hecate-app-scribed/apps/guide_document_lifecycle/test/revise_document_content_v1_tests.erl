-module(revise_document_content_v1_tests).
-include_lib("eunit/include/eunit.hrl").

new_test() ->
    Cmd = revise_document_content_v1:new(<<"doc-1">>, <<"hello world">>),
    Map = revise_document_content_v1:to_map(Cmd),
    ?assertEqual(<<"doc-1">>, maps:get(document_id, Map)),
    ?assertEqual(<<"hello world">>, maps:get(content_binary, Map)).

roundtrip_test() ->
    Cmd = revise_document_content_v1:new(<<"doc-2">>, <<"{\"type\":\"doc\"}">>),
    Map = revise_document_content_v1:to_map(Cmd),
    {ok, Cmd2} = revise_document_content_v1:from_map(Map),
    ?assertEqual(Map, revise_document_content_v1:to_map(Cmd2)).

from_map_invalid_test() ->
    ?assertEqual({error, invalid_revise_document_content_command},
                 revise_document_content_v1:from_map(#{})).
