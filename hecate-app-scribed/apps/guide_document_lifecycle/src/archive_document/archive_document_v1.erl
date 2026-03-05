-module(archive_document_v1).

-export([new/1, to_map/1, from_map/1]).

-record(archive_document_v1, {
    document_id :: binary()
}).

-opaque archive_document_v1() :: #archive_document_v1{}.
-export_type([archive_document_v1/0]).

-spec new(binary()) -> archive_document_v1().
new(DocumentId) ->
    #archive_document_v1{document_id = DocumentId}.

-spec to_map(archive_document_v1()) -> map().
to_map(#archive_document_v1{document_id = DocId}) ->
    #{document_id => DocId}.

-spec from_map(map()) -> {ok, archive_document_v1()} | {error, term()}.
from_map(#{document_id := DocId}) ->
    {ok, new(DocId)};
from_map(_) ->
    {error, invalid_archive_document_command}.
