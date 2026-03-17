-module(maybe_initiate_document_tests).
-include_lib("eunit/include/eunit.hrl").

handle_valid_test() ->
    Cmd = initiate_document_v1:new(<<"doc-1">>, <<"My Doc">>, <<"alice">>),
    {ok, [EventMap]} = maybe_initiate_document:handle(Cmd),
    ?assertEqual(document_initiated_v1, maps:get(event_type, EventMap)),
    ?assertEqual(<<"doc-1">>, maps:get(document_id, EventMap)),
    ?assertEqual(<<"My Doc">>, maps:get(title, EventMap)),
    ?assertEqual(<<"alice">>, maps:get(owner, EventMap)),
    ?assert(is_integer(maps:get(created_at, EventMap))).

handle_empty_document_id_test() ->
    Cmd = initiate_document_v1:new(<<>>, <<"Title">>, <<"alice">>),
    ?assertEqual({error, document_id_required}, maybe_initiate_document:handle(Cmd)).

handle_empty_title_test() ->
    Cmd = initiate_document_v1:new(<<"doc-1">>, <<>>, <<"alice">>),
    ?assertEqual({error, title_required}, maybe_initiate_document:handle(Cmd)).

handle_empty_owner_test() ->
    Cmd = initiate_document_v1:new(<<"doc-1">>, <<"Title">>, <<>>),
    ?assertEqual({error, owner_required}, maybe_initiate_document:handle(Cmd)).

handle_from_map_test() ->
    Payload = #{document_id => <<"doc-3">>, title => <<"From Map">>, owner => <<"bob">>},
    {ok, [EventMap]} = maybe_initiate_document:handle_from_map(Payload),
    ?assertEqual(<<"doc-3">>, maps:get(document_id, EventMap)).

handle_from_map_binary_keys_test() ->
    Payload = #{<<"document_id">> => <<"doc-4">>, <<"title">> => <<"Bin">>, <<"owner">> => <<"carl">>},
    {ok, [EventMap]} = maybe_initiate_document:handle_from_map(Payload),
    ?assertEqual(<<"doc-4">>, maps:get(document_id, EventMap)).
