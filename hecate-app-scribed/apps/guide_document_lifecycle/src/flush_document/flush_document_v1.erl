-module(flush_document_v1).
-behaviour(evoq_command).

-export([command_type/0]).
-export([new/1, new/2, to_map/1, from_map/1]).

-record(flush_document_v1, {
    document_id    :: binary(),
    content_binary :: binary()
}).

-opaque flush_document_v1() :: #flush_document_v1{}.
-export_type([flush_document_v1/0]).

command_type() -> flush_document.

-spec new(map()) -> {ok, flush_document_v1()} | {error, term()}.
new(Params) -> from_map(Params).

-spec new(binary(), binary()) -> flush_document_v1().
new(DocumentId, ContentBinary) ->
    #flush_document_v1{document_id = DocumentId, content_binary = ContentBinary}.

-spec to_map(flush_document_v1()) -> map().
to_map(#flush_document_v1{document_id = DocId, content_binary = Content}) ->
    #{command_type => flush_document, document_id => DocId, content_binary => Content}.

-spec from_map(map()) -> {ok, flush_document_v1()} | {error, term()}.
from_map(Map) ->
    DocId = gv(document_id, Map),
    Content = gv(content_binary, Map),
    case {DocId, Content} of
        {undefined, _} -> {error, document_id_required};
        {_, undefined} -> {error, content_required};
        _ -> {ok, new(DocId, Content)}
    end.

gv(K, M) -> case maps:find(K, M) of {ok, V} -> V; error -> maps:get(atom_to_binary(K), M, undefined) end.
