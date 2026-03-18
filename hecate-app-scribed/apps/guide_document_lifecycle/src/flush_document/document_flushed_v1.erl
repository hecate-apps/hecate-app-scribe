-module(document_flushed_v1).
-behaviour(evoq_event).

-export([event_type/0]).
-export([new/1, to_map/1, from_map/1]).

event_type() -> document_flushed_v1.

-spec new(map()) -> map().
new(#{document_id := DocId, content_binary := Content, content_hash := Hash}) ->
    #{
        event_type => <<"document_flushed_v1">>,
        document_id => DocId,
        content_binary => Content,
        content_hash => Hash,
        flushed_at => erlang:system_time(millisecond)
    }.

to_map(M) when is_map(M) -> M.
from_map(M) -> {ok, M}.
