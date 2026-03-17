-module(document_initiated_v1).
-behaviour(evoq_event).

-export([event_type/0]).
-export([new/1, new/4, to_map/1, from_map/1]).

-record(document_initiated_v1, {
    document_id :: binary(),
    title       :: binary(),
    owner       :: binary(),
    created_at  :: integer()
}).

-opaque document_initiated_v1() :: #document_initiated_v1{}.
-export_type([document_initiated_v1/0]).

event_type() -> document_initiated_v1.

-spec new(map()) -> document_initiated_v1().
new(#{document_id := DocId, title := Title, owner := Owner, created_at := CreatedAt}) ->
    new(DocId, Title, Owner, CreatedAt).

-spec new(binary(), binary(), binary(), integer()) -> document_initiated_v1().
new(DocumentId, Title, Owner, CreatedAt) ->
    #document_initiated_v1{
        document_id = DocumentId,
        title = Title,
        owner = Owner,
        created_at = CreatedAt
    }.

-spec to_map(document_initiated_v1()) -> map().
to_map(#document_initiated_v1{
    document_id = DocumentId,
    title = Title,
    owner = Owner,
    created_at = CreatedAt
}) ->
    #{
        event_type => document_initiated_v1,
        document_id => DocumentId,
        title => Title,
        owner => Owner,
        created_at => CreatedAt
    }.

-spec from_map(map()) -> {ok, document_initiated_v1()} | {error, term()}.
from_map(#{document_id := DocId, title := Title, owner := Owner, created_at := CreatedAt}) ->
    {ok, new(DocId, Title, Owner, CreatedAt)};
from_map(_) ->
    {error, invalid_document_initiated_event}.
