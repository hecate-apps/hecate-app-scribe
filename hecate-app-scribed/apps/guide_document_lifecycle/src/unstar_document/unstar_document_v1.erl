-module(unstar_document_v1).
-behaviour(evoq_command).

-export([command_type/0]).
-export([new/1, to_map/1, from_map/1]).

-record(unstar_document_v1, {
    document_id :: binary()
}).

-opaque unstar_document_v1() :: #unstar_document_v1{}.
-export_type([unstar_document_v1/0]).

command_type() -> unstar_document_v1.

-spec new(map() | binary()) -> {ok, unstar_document_v1()} | {error, term()} | unstar_document_v1().
new(Params) when is_map(Params) -> from_map(Params);
new(DocumentId) when is_binary(DocumentId) ->
    #unstar_document_v1{document_id = DocumentId}.

-spec to_map(unstar_document_v1()) -> map().
to_map(#unstar_document_v1{document_id = DocId}) ->
    #{command_type => unstar_document_v1, document_id => DocId}.

-spec from_map(map()) -> {ok, unstar_document_v1()} | {error, term()}.
from_map(#{document_id := DocId}) ->
    {ok, new(DocId)};
from_map(_) ->
    {error, invalid_unstar_document_command}.
