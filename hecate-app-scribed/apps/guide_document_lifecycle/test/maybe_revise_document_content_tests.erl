-module(maybe_revise_document_content_tests).
-include_lib("eunit/include/eunit.hrl").

handle_valid_test() ->
    Cmd = revise_document_content_v1:new(<<"doc-1">>, <<"{\"type\":\"doc\"}">>),
    {ok, [EventMap]} = maybe_revise_document_content:handle(Cmd),
    ?assertEqual(<<"document_content_revised_v1">>, maps:get(event_type, EventMap)),
    ?assertEqual(<<"doc-1">>, maps:get(document_id, EventMap)),
    ?assertEqual(<<"{\"type\":\"doc\"}">>, maps:get(content_binary, EventMap)),
    ?assert(is_binary(maps:get(content_hash, EventMap))),
    ?assert(is_integer(maps:get(revised_at, EventMap))).

content_hash_is_sha256_hex_test() ->
    Cmd = revise_document_content_v1:new(<<"doc-1">>, <<"hello">>),
    {ok, [EventMap]} = maybe_revise_document_content:handle(Cmd),
    Hash = maps:get(content_hash, EventMap),
    %% SHA256 hex is 64 chars
    ?assertEqual(64, byte_size(Hash)).

handle_non_binary_content_test() ->
    Cmd = revise_document_content_v1:new(<<"doc-1">>, undefined),
    ?assertEqual({error, content_required}, maybe_revise_document_content:handle(Cmd)).
