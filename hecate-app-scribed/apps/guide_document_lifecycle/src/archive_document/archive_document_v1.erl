-module(archive_document_v1).
-behaviour(evoq_command).

-export([command_type/0]).
-export([new/1, to_map/1, from_map/1]).

-record(archive_document_v1, {
    document_id :: binary()
}).

-opaque archive_document_v1() :: #archive_document_v1{}.
-export_type([archive_document_v1/0]).

command_type() -> archive_document_v1.

-spec new(map() | binary()) -> {ok, archive_document_v1()} | {error, term()} | archive_document_v1().
new(Params) when is_map(Params) -> from_map(Params);
new(DocumentId) when is_binary(DocumentId) ->
    #archive_document_v1{document_id = DocumentId}.

-spec to_map(archive_document_v1()) -> map().
to_map(#archive_document_v1{document_id = DocId}) ->
    #{command_type => archive_document_v1, document_id => DocId}.

-spec from_map(map()) -> {ok, archive_document_v1()} | {error, term()}.
from_map(#{document_id := DocId}) ->
    {ok, new(DocId)};
from_map(_) ->
    {error, invalid_archive_document_command}.
