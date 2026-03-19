-module(document_renamed_v1).
-behaviour(evoq_event).

-export([event_type/0]).
-export([new/1, new/3, to_map/1, from_map/1]).

-record(document_renamed_v1, {
    document_id :: binary(),
    new_title   :: binary(),
    renamed_at  :: integer()
}).

-opaque document_renamed_v1() :: #document_renamed_v1{}.
-export_type([document_renamed_v1/0]).

event_type() -> document_renamed_v1.

-spec new(map()) -> document_renamed_v1().
new(#{document_id := DocId, new_title := NewTitle, renamed_at := RenamedAt}) ->
    new(DocId, NewTitle, RenamedAt).

-spec new(binary(), binary(), integer()) -> document_renamed_v1().
new(DocumentId, NewTitle, RenamedAt) ->
    #document_renamed_v1{document_id = DocumentId, new_title = NewTitle, renamed_at = RenamedAt}.

-spec to_map(document_renamed_v1()) -> map().
to_map(#document_renamed_v1{document_id = DocId, new_title = NewTitle, renamed_at = RenamedAt}) ->
    #{
        event_type => <<"document_renamed_v1">>,
        document_id => DocId,
        new_title => NewTitle,
        renamed_at => RenamedAt
    }.

-spec from_map(map()) -> {ok, document_renamed_v1()} | {error, term()}.
from_map(#{document_id := DocId, new_title := NewTitle, renamed_at := RenamedAt}) ->
    {ok, new(DocId, NewTitle, RenamedAt)};
from_map(_) ->
    {error, invalid_document_renamed_event}.
