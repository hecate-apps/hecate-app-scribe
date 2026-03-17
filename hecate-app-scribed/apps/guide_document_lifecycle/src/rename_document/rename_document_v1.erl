-module(rename_document_v1).
-behaviour(evoq_command).

-export([command_type/0]).
-export([new/1, new/2, to_map/1, from_map/1]).

-record(rename_document_v1, {
    document_id :: binary(),
    new_title   :: binary()
}).

-opaque rename_document_v1() :: #rename_document_v1{}.
-export_type([rename_document_v1/0]).

command_type() -> rename_document_v1.

-spec new(map()) -> {ok, rename_document_v1()} | {error, term()}.
new(Params) -> from_map(Params).

-spec new(binary(), binary()) -> rename_document_v1().
new(DocumentId, NewTitle) ->
    #rename_document_v1{document_id = DocumentId, new_title = NewTitle}.

-spec to_map(rename_document_v1()) -> map().
to_map(#rename_document_v1{document_id = DocId, new_title = NewTitle}) ->
    #{command_type => rename_document_v1, document_id => DocId, new_title => NewTitle}.

-spec from_map(map()) -> {ok, rename_document_v1()} | {error, term()}.
from_map(#{document_id := DocId, new_title := NewTitle}) ->
    {ok, new(DocId, NewTitle)};
from_map(_) ->
    {error, invalid_rename_document_command}.
