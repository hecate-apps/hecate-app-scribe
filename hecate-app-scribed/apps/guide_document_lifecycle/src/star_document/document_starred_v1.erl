-module(document_starred_v1).
-behaviour(evoq_event).

-export([event_type/0]).
-export([new/1, new/2, to_map/1, from_map/1]).

-record(document_starred_v1, {
    document_id :: binary(),
    starred_at  :: integer()
}).

-opaque document_starred_v1() :: #document_starred_v1{}.
-export_type([document_starred_v1/0]).

event_type() -> document_starred_v1.

-spec new(map()) -> document_starred_v1().
new(#{document_id := DocId, starred_at := StarredAt}) ->
    new(DocId, StarredAt).

-spec new(binary(), integer()) -> document_starred_v1().
new(DocumentId, StarredAt) ->
    #document_starred_v1{document_id = DocumentId, starred_at = StarredAt}.

-spec to_map(document_starred_v1()) -> map().
to_map(#document_starred_v1{document_id = DocId, starred_at = StarredAt}) ->
    #{
        event_type => document_starred_v1,
        document_id => DocId,
        starred_at => StarredAt
    }.

-spec from_map(map()) -> {ok, document_starred_v1()} | {error, term()}.
from_map(#{document_id := DocId, starred_at := StarredAt}) ->
    {ok, new(DocId, StarredAt)};
from_map(_) ->
    {error, invalid_document_starred_event}.
