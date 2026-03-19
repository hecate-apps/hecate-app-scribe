-module(document_archived_v1).
-behaviour(evoq_event).

-export([event_type/0]).
-export([new/1, new/2, to_map/1, from_map/1]).

-record(document_archived_v1, {
    document_id :: binary(),
    archived_at :: integer()
}).

-opaque document_archived_v1() :: #document_archived_v1{}.
-export_type([document_archived_v1/0]).

event_type() -> document_archived_v1.

-spec new(map()) -> document_archived_v1().
new(#{document_id := DocId, archived_at := ArchivedAt}) ->
    new(DocId, ArchivedAt).

-spec new(binary(), integer()) -> document_archived_v1().
new(DocumentId, ArchivedAt) ->
    #document_archived_v1{document_id = DocumentId, archived_at = ArchivedAt}.

-spec to_map(document_archived_v1()) -> map().
to_map(#document_archived_v1{document_id = DocId, archived_at = ArchivedAt}) ->
    #{
        event_type => <<"document_archived_v1">>,
        document_id => DocId,
        archived_at => ArchivedAt
    }.

-spec from_map(map()) -> {ok, document_archived_v1()} | {error, term()}.
from_map(#{document_id := DocId, archived_at := ArchivedAt}) ->
    {ok, new(DocId, ArchivedAt)};
from_map(_) ->
    {error, invalid_document_archived_event}.
