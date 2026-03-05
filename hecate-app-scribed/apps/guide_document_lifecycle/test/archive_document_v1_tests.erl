-module(archive_document_v1_tests).
-include_lib("eunit/include/eunit.hrl").

new_test() ->
    Cmd = archive_document_v1:new(<<"doc-1">>),
    Map = archive_document_v1:to_map(Cmd),
    ?assertEqual(<<"doc-1">>, maps:get(document_id, Map)).

roundtrip_test() ->
    Cmd = archive_document_v1:new(<<"doc-2">>),
    Map = archive_document_v1:to_map(Cmd),
    {ok, Cmd2} = archive_document_v1:from_map(Map),
    ?assertEqual(Map, archive_document_v1:to_map(Cmd2)).

from_map_invalid_test() ->
    ?assertEqual({error, invalid_archive_document_command},
                 archive_document_v1:from_map(#{})).
