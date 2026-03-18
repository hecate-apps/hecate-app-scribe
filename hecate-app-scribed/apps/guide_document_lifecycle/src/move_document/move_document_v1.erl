-module(move_document_v1).
-behaviour(evoq_command).

-export([command_type/0]).
-export([new/1, new/2, to_map/1, from_map/1]).

-record(move_document_v1, {
    document_id :: binary(),
    folder_id   :: binary() | undefined
}).

-opaque move_document_v1() :: #move_document_v1{}.
-export_type([move_document_v1/0]).

command_type() -> move_document_v1.

-spec new(map()) -> {ok, move_document_v1()} | {error, term()}.
new(Params) when is_map(Params) -> from_map(Params).

-spec new(binary(), binary() | undefined) -> move_document_v1().
new(DocumentId, FolderId) ->
    #move_document_v1{document_id = DocumentId, folder_id = FolderId}.

-spec to_map(move_document_v1()) -> map().
to_map(#move_document_v1{document_id = DocId, folder_id = FolderId}) ->
    #{command_type => move_document_v1, document_id => DocId, folder_id => FolderId}.

-spec from_map(map()) -> {ok, move_document_v1()} | {error, term()}.
from_map(#{document_id := DocId} = Map) ->
    FolderId = maps:get(folder_id, Map, undefined),
    {ok, new(DocId, FolderId)};
from_map(_) ->
    {error, invalid_move_document_command}.
