-module(document_moved_v1).
-behaviour(evoq_event).

-export([event_type/0]).
-export([new/1, new/3, to_map/1, from_map/1]).

-record(document_moved_v1, {
    document_id :: binary(),
    folder_id   :: binary() | undefined,
    moved_at    :: integer()
}).

-opaque document_moved_v1() :: #document_moved_v1{}.
-export_type([document_moved_v1/0]).

event_type() -> document_moved_v1.

-spec new(map()) -> document_moved_v1().
new(#{document_id := DocId, folder_id := FolderId, moved_at := MovedAt}) ->
    new(DocId, FolderId, MovedAt).

-spec new(binary(), binary() | undefined, integer()) -> document_moved_v1().
new(DocumentId, FolderId, MovedAt) ->
    #document_moved_v1{document_id = DocumentId, folder_id = FolderId, moved_at = MovedAt}.

-spec to_map(document_moved_v1()) -> map().
to_map(#document_moved_v1{document_id = DocId, folder_id = FolderId, moved_at = MovedAt}) ->
    #{
        event_type => <<"document_moved_v1">>,
        document_id => DocId,
        folder_id => FolderId,
        moved_at => MovedAt
    }.

-spec from_map(map()) -> {ok, document_moved_v1()} | {error, term()}.
from_map(#{document_id := DocId, folder_id := FolderId, moved_at := MovedAt}) ->
    {ok, new(DocId, FolderId, MovedAt)};
from_map(_) ->
    {error, invalid_document_moved_event}.
