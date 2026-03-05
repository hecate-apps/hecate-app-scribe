-module(revise_document_content_v1).

-export([new/2, to_map/1, from_map/1]).

-record(revise_document_content_v1, {
    document_id    :: binary(),
    content_binary :: binary()
}).

-opaque revise_document_content_v1() :: #revise_document_content_v1{}.
-export_type([revise_document_content_v1/0]).

-spec new(binary(), binary()) -> revise_document_content_v1().
new(DocumentId, ContentBinary) ->
    #revise_document_content_v1{document_id = DocumentId, content_binary = ContentBinary}.

-spec to_map(revise_document_content_v1()) -> map().
to_map(#revise_document_content_v1{document_id = DocId, content_binary = Content}) ->
    #{document_id => DocId, content_binary => Content}.

-spec from_map(map()) -> {ok, revise_document_content_v1()} | {error, term()}.
from_map(#{document_id := DocId, content_binary := Content}) ->
    {ok, new(DocId, Content)};
from_map(_) ->
    {error, invalid_revise_document_content_command}.
