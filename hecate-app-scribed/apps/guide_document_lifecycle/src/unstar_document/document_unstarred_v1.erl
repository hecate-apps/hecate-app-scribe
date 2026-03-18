-module(document_unstarred_v1).
-behaviour(evoq_event).

-export([event_type/0]).
-export([new/1, new/2, to_map/1, from_map/1]).

-record(document_unstarred_v1, {
    document_id  :: binary(),
    unstarred_at :: integer()
}).

-opaque document_unstarred_v1() :: #document_unstarred_v1{}.
-export_type([document_unstarred_v1/0]).

event_type() -> document_unstarred_v1.

-spec new(map()) -> document_unstarred_v1().
new(#{document_id := DocId, unstarred_at := UnstarredAt}) ->
    new(DocId, UnstarredAt).

-spec new(binary(), integer()) -> document_unstarred_v1().
new(DocumentId, UnstarredAt) ->
    #document_unstarred_v1{document_id = DocumentId, unstarred_at = UnstarredAt}.

-spec to_map(document_unstarred_v1()) -> map().
to_map(#document_unstarred_v1{document_id = DocId, unstarred_at = UnstarredAt}) ->
    #{
        event_type => document_unstarred_v1,
        document_id => DocId,
        unstarred_at => UnstarredAt
    }.

-spec from_map(map()) -> {ok, document_unstarred_v1()} | {error, term()}.
from_map(#{document_id := DocId, unstarred_at := UnstarredAt}) ->
    {ok, new(DocId, UnstarredAt)};
from_map(_) ->
    {error, invalid_document_unstarred_event}.
