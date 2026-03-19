%%% @doc Read and write .scribe archives (ZIP format).
%%%
%%% A .scribe file is a ZIP archive containing:
%%%   manifest.json  — format version, timestamps, word count
%%%   content.yjs    — Y.js document state (text + formatting)
%%%   comments.yjs   — Y.js shared type (comments, annotations)
%%%   styles.json    — custom styles, theme overrides
%%%   settings.json  — editor preferences (zoom, spell-check, layout)
%%%   media/         — embedded images ({hash}.{ext})
%%%   snapshots/     — named version snapshots ({name}.yjs)
-module(scribe_archive).

-export([read/1, write/2, read_part/2, write_part/3]).
-export([read_content/1, write_content/2]).
-export([list_snapshots/1, read_snapshot/2, write_snapshot/3]).
-export([new/1]).

%% @doc Create a new empty .scribe archive with just a manifest.
new(Path) ->
    Manifest = manifest_json(0, 0),
    Content = <<>>,
    Files = [
        {"manifest.json", Manifest},
        {"content.yjs", Content}
    ],
    write_zip(Path, Files).

%% @doc Read the full archive as a map of {filename => binary}.
read(Path) ->
    case zip:unzip(to_list(Path), [memory]) of
        {ok, Entries} ->
            Map = maps:from_list([{list_to_binary(N), D} || {N, D} <- Entries]),
            {ok, Map};
        {error, _} = Err ->
            Err
    end.

%% @doc Write a full archive from a map of {filename => binary}.
write(Path, EntriesMap) ->
    Files = [{binary_to_list(N), D} || {N, D} <- maps:to_list(EntriesMap)],
    write_zip(Path, Files).

%% @doc Read a single part from the archive.
read_part(Path, PartName) ->
    PartStr = binary_to_list(PartName),
    case zip:unzip(to_list(Path), [{file_list, [PartStr]}, memory]) of
        {ok, [{_, Data}]} -> {ok, Data};
        {ok, []} -> {error, not_found};
        {error, _} = Err -> Err
    end.

%% @doc Update a single part in the archive (read-modify-write).
write_part(Path, PartName, Data) ->
    case read(Path) of
        {ok, Entries} ->
            Updated = Entries#{PartName => Data},
            write(Path, Updated);
        {error, enoent} ->
            %% Archive doesn't exist — create with this part + manifest
            Manifest = manifest_json(byte_size(Data), erlang:system_time(millisecond)),
            Entries = #{
                <<"manifest.json">> => Manifest,
                PartName => Data
            },
            write(Path, Entries)
    end.

%% @doc Read content.yjs from the archive.
read_content(Path) ->
    read_part(Path, <<"content.yjs">>).

%% @doc Write content.yjs to the archive, updating manifest timestamps.
write_content(Path, ContentBytes) ->
    Now = erlang:system_time(millisecond),
    case read(Path) of
        {ok, Entries} ->
            %% Update content and manifest
            OldManifest = parse_manifest(maps:get(<<"manifest.json">>, Entries, <<"{}">>)),
            WordCount = estimate_word_count(ContentBytes),
            NewManifest = OldManifest#{
                <<"last_modified_at">> => Now,
                <<"word_count">> => WordCount
            },
            Updated = Entries#{
                <<"content.yjs">> => ContentBytes,
                <<"manifest.json">> => iolist_to_binary(json:encode(NewManifest))
            },
            write(Path, Updated);
        {error, enoent} ->
            %% New archive
            WordCount = estimate_word_count(ContentBytes),
            Manifest = manifest_json(WordCount, Now),
            Entries = #{
                <<"manifest.json">> => Manifest,
                <<"content.yjs">> => ContentBytes
            },
            Entries2 = maps:from_list([{binary_to_list(K), V} || {K, V} <- maps:to_list(Entries)]),
            write_zip(Path, maps:to_list(Entries2))
    end.

%% @doc List snapshot names in the archive.
list_snapshots(Path) ->
    case read(Path) of
        {ok, Entries} ->
            Names = [filename:basename(binary_to_list(K), ".yjs")
                     || K <- maps:keys(Entries),
                        binary:match(K, <<"snapshots/">>) =/= nomatch],
            {ok, [list_to_binary(N) || N <- Names]};
        {error, _} = Err ->
            Err
    end.

%% @doc Read a named snapshot.
read_snapshot(Path, SnapshotName) ->
    PartName = <<"snapshots/", SnapshotName/binary, ".yjs">>,
    read_part(Path, PartName).

%% @doc Save a named snapshot (copy of current content.yjs).
write_snapshot(Path, SnapshotName, ContentBytes) ->
    PartName = <<"snapshots/", SnapshotName/binary, ".yjs">>,
    write_part(Path, PartName, ContentBytes).

%%====================================================================
%% Internal
%%====================================================================

write_zip(Path, FileList) ->
    PathStr = to_list(Path),
    ok = filelib:ensure_dir(PathStr),
    case zip:create(PathStr, FileList, []) of
        {ok, _} -> ok;
        {error, _} = Err -> Err
    end.

to_list(B) when is_binary(B) -> binary_to_list(B);
to_list(L) when is_list(L) -> L.

manifest_json(WordCount, Now) ->
    iolist_to_binary(json:encode(#{
        <<"format">> => <<"scribe">>,
        <<"version">> => 1,
        <<"created_at">> => Now,
        <<"last_modified_at">> => Now,
        <<"word_count">> => WordCount
    })).

parse_manifest(Bin) ->
    try json:decode(Bin)
    catch _:_ -> #{}
    end.

%% Rough word count estimate from Y.js binary size.
%% Real word count requires decoding the Y.js state — this is a proxy.
estimate_word_count(<<>>) -> 0;
estimate_word_count(Bytes) -> max(0, byte_size(Bytes) div 6).
