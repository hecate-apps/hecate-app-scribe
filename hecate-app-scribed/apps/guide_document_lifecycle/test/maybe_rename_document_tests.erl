-module(maybe_rename_document_tests).
-include_lib("eunit/include/eunit.hrl").

handle_valid_test() ->
    Cmd = rename_document_v1:new(<<"doc-1">>, <<"New Title">>),
    {ok, [EventMap]} = maybe_rename_document:handle(Cmd),
    ?assertEqual(<<"document_renamed_v1">>, maps:get(event_type, EventMap)),
    ?assertEqual(<<"doc-1">>, maps:get(document_id, EventMap)),
    ?assertEqual(<<"New Title">>, maps:get(new_title, EventMap)),
    ?assert(is_integer(maps:get(renamed_at, EventMap))).

handle_empty_title_test() ->
    Cmd = rename_document_v1:new(<<"doc-1">>, <<>>),
    ?assertEqual({error, title_required}, maybe_rename_document:handle(Cmd)).

handle_from_map_test() ->
    Payload = #{document_id => <<"doc-2">>, new_title => <<"Updated">>},
    {ok, [EventMap]} = maybe_rename_document:handle_from_map(Payload),
    ?assertEqual(<<"Updated">>, maps:get(new_title, EventMap)).
