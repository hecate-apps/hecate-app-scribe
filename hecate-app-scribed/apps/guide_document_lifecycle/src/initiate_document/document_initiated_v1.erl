-module(document_initiated_v1).
-behaviour(evoq_event).

-export([event_type/0]).
-export([new/1, new/4, new/5, new/6, to_map/1, from_map/1]).

-record(document_initiated_v1, {
    document_id :: binary(),
    title       :: binary(),
    owner       :: binary(),
    folder_id   :: binary() | undefined,
    file_id     :: binary() | undefined,
    created_at  :: integer()
}).

-opaque document_initiated_v1() :: #document_initiated_v1{}.
-export_type([document_initiated_v1/0]).

event_type() -> document_initiated_v1.

-spec new(map()) -> document_initiated_v1().
new(#{document_id := DocId, title := Title, owner := Owner, created_at := CreatedAt} = Map) ->
    FolderId = maps:get(folder_id, Map, undefined),
    FileId = maps:get(file_id, Map, undefined),
    new(DocId, Title, Owner, FolderId, FileId, CreatedAt).

-spec new(binary(), binary(), binary(), integer()) -> document_initiated_v1().
new(DocumentId, Title, Owner, CreatedAt) ->
    new(DocumentId, Title, Owner, undefined, undefined, CreatedAt).

-spec new(binary(), binary(), binary(), binary() | undefined, integer()) -> document_initiated_v1().
new(DocumentId, Title, Owner, FolderId, CreatedAt) when is_integer(CreatedAt) ->
    new(DocumentId, Title, Owner, FolderId, undefined, CreatedAt).

-spec new(binary(), binary(), binary(), binary() | undefined, binary() | undefined, integer()) -> document_initiated_v1().
new(DocumentId, Title, Owner, FolderId, FileId, CreatedAt) ->
    #document_initiated_v1{
        document_id = DocumentId,
        title = Title,
        owner = Owner,
        folder_id = FolderId,
        file_id = FileId,
        created_at = CreatedAt
    }.

-spec to_map(document_initiated_v1()) -> map().
to_map(#document_initiated_v1{
    document_id = DocumentId,
    title = Title,
    owner = Owner,
    folder_id = FolderId,
    file_id = FileId,
    created_at = CreatedAt
}) ->
    #{
        event_type => <<"document_initiated_v1">>,
        document_id => DocumentId,
        title => Title,
        owner => Owner,
        folder_id => FolderId,
        file_id => FileId,
        created_at => CreatedAt
    }.

-spec from_map(map()) -> {ok, document_initiated_v1()} | {error, term()}.
from_map(#{document_id := DocId, title := Title, owner := Owner, created_at := CreatedAt} = Map) ->
    FolderId = maps:get(folder_id, Map, undefined),
    FileId = maps:get(file_id, Map, undefined),
    {ok, new(DocId, Title, Owner, FolderId, FileId, CreatedAt)};
from_map(_) ->
    {error, invalid_document_initiated_event}.
