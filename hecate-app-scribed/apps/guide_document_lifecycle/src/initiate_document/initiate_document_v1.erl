-module(initiate_document_v1).
-behaviour(evoq_command).

-export([command_type/0]).
-export([new/1, new/3, to_map/1, from_map/1]).

-record(initiate_document_v1, {
    document_id :: binary(),
    title       :: binary(),
    owner       :: binary()
}).

-opaque initiate_document_v1() :: #initiate_document_v1{}.
-export_type([initiate_document_v1/0]).

command_type() -> initiate_document_v1.

-spec new(map()) -> {ok, initiate_document_v1()} | {error, term()}.
new(Params) -> from_map(Params).

-spec new(binary(), binary(), binary()) -> initiate_document_v1().
new(DocumentId, Title, Owner) ->
    #initiate_document_v1{
        document_id = DocumentId,
        title = Title,
        owner = Owner
    }.

-spec to_map(initiate_document_v1()) -> map().
to_map(#initiate_document_v1{
    document_id = DocumentId,
    title = Title,
    owner = Owner
}) ->
    #{
        command_type => initiate_document_v1,
        document_id => DocumentId,
        title => Title,
        owner => Owner
    }.

-spec from_map(map()) -> {ok, initiate_document_v1()} | {error, term()}.
from_map(#{document_id := DocId, title := Title, owner := Owner}) ->
    {ok, new(DocId, Title, Owner)};
from_map(_) ->
    {error, invalid_initiate_document_command}.
