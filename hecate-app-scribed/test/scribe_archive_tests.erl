-module(scribe_archive_tests).
-include_lib("eunit/include/eunit.hrl").

-define(TMP, "/tmp/scribe_archive_test").

setup() ->
    del_dir_recursive(?TMP),
    ok = filelib:ensure_path(?TMP),
    ok.

cleanup() ->
    del_dir_recursive(?TMP),
    ok.

del_dir_recursive(Dir) ->
    case file:list_dir(Dir) of
        {ok, Files} ->
            lists:foreach(fun(F) ->
                Path = filename:join(Dir, F),
                case filelib:is_dir(Path) of
                    true -> del_dir_recursive(Path);
                    false -> file:delete(Path)
                end
            end, Files),
            file:del_dir(Dir);
        {error, _} ->
            ok
    end.

path(Name) ->
    filename:join(?TMP, Name).

new_archive_test() ->
    setup(),
    P = path("new.scribe"),
    ok = scribe_archive:new(P),
    {ok, Entries} = scribe_archive:read(P),
    ?assert(maps:is_key(<<"manifest.json">>, Entries)),
    ?assert(maps:is_key(<<"content.yjs">>, Entries)),
    cleanup().

write_and_read_content_test() ->
    setup(),
    P = path("content.scribe"),
    Content = <<"hello yjs binary">>,
    ok = scribe_archive:write_content(P, Content),
    {ok, Read} = scribe_archive:read_content(P),
    ?assertEqual(Content, Read),
    cleanup().

read_missing_returns_error_test() ->
    setup(),
    P = path("missing.scribe"),
    ?assertMatch({error, _}, scribe_archive:read_content(P)),
    cleanup().

manifest_updated_on_write_test() ->
    setup(),
    P = path("manifest.scribe"),
    ok = scribe_archive:write_content(P, <<"some content">>),
    {ok, ManifestBin} = scribe_archive:read_part(P, <<"manifest.json">>),
    Manifest = json:decode(ManifestBin),
    ?assertEqual(<<"scribe">>, maps:get(<<"format">>, Manifest)),
    ?assertEqual(1, maps:get(<<"version">>, Manifest)),
    ?assert(maps:get(<<"last_modified_at">>, Manifest) > 0),
    ?assert(maps:get(<<"word_count">>, Manifest) >= 0),
    cleanup().

snapshots_test() ->
    setup(),
    P = path("snap.scribe"),
    Content = <<"snapshot content">>,
    ok = scribe_archive:write_content(P, Content),

    %% No snapshots yet
    {ok, []} = scribe_archive:list_snapshots(P),

    %% Create snapshot
    ok = scribe_archive:write_snapshot(P, <<"draft-1">>, Content),
    {ok, Names} = scribe_archive:list_snapshots(P),
    ?assertEqual([<<"draft-1">>], Names),

    %% Read snapshot
    {ok, SnapContent} = scribe_archive:read_snapshot(P, <<"draft-1">>),
    ?assertEqual(Content, SnapContent),

    %% Content still there
    {ok, Read} = scribe_archive:read_content(P),
    ?assertEqual(Content, Read),
    cleanup().

multiple_snapshots_test() ->
    setup(),
    P = path("multi.scribe"),
    ok = scribe_archive:write_content(P, <<"v1">>),
    ok = scribe_archive:write_snapshot(P, <<"draft-1">>, <<"v1">>),
    ok = scribe_archive:write_content(P, <<"v2">>),
    ok = scribe_archive:write_snapshot(P, <<"draft-2">>, <<"v2">>),

    {ok, Names} = scribe_archive:list_snapshots(P),
    ?assertEqual(2, length(Names)),

    {ok, S1} = scribe_archive:read_snapshot(P, <<"draft-1">>),
    ?assertEqual(<<"v1">>, S1),
    {ok, S2} = scribe_archive:read_snapshot(P, <<"draft-2">>),
    ?assertEqual(<<"v2">>, S2),
    cleanup().

write_part_creates_archive_test() ->
    setup(),
    P = path("part.scribe"),
    ok = scribe_archive:write_part(P, <<"styles.json">>, <<"{}">>),
    {ok, Data} = scribe_archive:read_part(P, <<"styles.json">>),
    ?assertEqual(<<"{}">>, Data),
    cleanup().
