-module(document_content_revised_v1).
-behaviour(evoq_event).

-export([event_type/0]).
-export([new/1, new/4, to_map/1, from_map/1]).

-record(document_content_revised_v1, {
    document_id    :: binary(),
    content_binary :: binary(),
    content_hash   :: binary(),
    revised_at     :: integer()
}).

-opaque document_content_revised_v1() :: #document_content_revised_v1{}.
-export_type([document_content_revised_v1/0]).

event_type() -> document_content_revised_v1.

-spec new(map()) -> document_content_revised_v1().
new(#{document_id := DocId, content_binary := Content,
     content_hash := Hash, revised_at := RevisedAt}) ->
    new(DocId, Content, Hash, RevisedAt).

-spec new(binary(), binary(), binary(), integer()) -> document_content_revised_v1().
new(DocumentId, ContentBinary, ContentHash, RevisedAt) ->
    #document_content_revised_v1{
        document_id = DocumentId,
        content_binary = ContentBinary,
        content_hash = ContentHash,
        revised_at = RevisedAt
    }.

-spec to_map(document_content_revised_v1()) -> map().
to_map(#document_content_revised_v1{
    document_id = DocId,
    content_binary = Content,
    content_hash = Hash,
    revised_at = RevisedAt
}) ->
    #{
        event_type => document_content_revised_v1,
        document_id => DocId,
        content_binary => Content,
        content_hash => Hash,
        revised_at => RevisedAt
    }.

-spec from_map(map()) -> {ok, document_content_revised_v1()} | {error, term()}.
from_map(#{document_id := DocId, content_binary := Content,
           content_hash := Hash, revised_at := RevisedAt}) ->
    {ok, new(DocId, Content, Hash, RevisedAt)};
from_map(_) ->
    {error, invalid_document_content_revised_event}.
