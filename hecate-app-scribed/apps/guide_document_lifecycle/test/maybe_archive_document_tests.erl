-module(maybe_archive_document_tests).
-include_lib("eunit/include/eunit.hrl").

handle_valid_test() ->
    Cmd = archive_document_v1:new(<<"doc-1">>),
    {ok, [EventMap]} = maybe_archive_document:handle(Cmd),
    ?assertEqual(document_archived_v1, maps:get(event_type, EventMap)),
    ?assertEqual(<<"doc-1">>, maps:get(document_id, EventMap)),
    ?assert(is_integer(maps:get(archived_at, EventMap))).

handle_empty_id_test() ->
    Cmd = archive_document_v1:new(<<>>),
    ?assertEqual({error, document_id_required}, maybe_archive_document:handle(Cmd)).
