-module(document_state).
%% Follows evoq_state convention

-include("document_status.hrl").

-export([new/1, apply_event/2, to_map/1]).

-record(doc_state, {
    document_id  :: binary() | undefined,
    title        :: binary() | undefined,
    owner        :: binary() | undefined,
    status       :: non_neg_integer(),
    content_hash :: binary() | undefined,
    created_at   :: integer() | undefined,
    updated_at   :: integer() | undefined
}).

-spec new(binary()) -> #doc_state{}.
new(_AggregateId) ->
    #doc_state{
        document_id = undefined,
        title = undefined,
        owner = undefined,
        status = 0,
        content_hash = undefined,
        created_at = undefined,
        updated_at = undefined
    }.

-spec apply_event(#doc_state{}, map()) -> #doc_state{}.
apply_event(S, #{event_type := Type} = E) when is_atom(Type) ->
    apply_event(S, E#{event_type := atom_to_binary(Type, utf8)});

apply_event(State, #{<<"event_type">> := EventType} = Event) ->
    do_apply(EventType, State, Event);
apply_event(State, #{event_type := EventType} = Event) when is_binary(EventType) ->
    do_apply(EventType, State, Event);
apply_event(State, _) ->
    State.

-spec to_map(#doc_state{}) -> map().
to_map(#doc_state{
    document_id = DocId,
    title = Title,
    owner = Owner,
    status = Status,
    content_hash = ContentHash,
    created_at = CreatedAt,
    updated_at = UpdatedAt
}) ->
    #{
        document_id => DocId,
        title => Title,
        owner => Owner,
        status => Status,
        content_hash => ContentHash,
        created_at => CreatedAt,
        updated_at => UpdatedAt
    }.

%% ===================================================================
%% Internal - event application
%% ===================================================================

do_apply(<<"document_initiated_v1">>, State, Event) ->
    State#doc_state{
        document_id = get_field(<<"document_id">>, document_id, Event),
        title = get_field(<<"title">>, title, Event),
        owner = get_field(<<"owner">>, owner, Event),
        created_at = get_field(<<"created_at">>, created_at, Event),
        updated_at = get_field(<<"created_at">>, created_at, Event),
        status = State#doc_state.status bor ?DOC_INITIATED
    };

do_apply(<<"document_renamed_v1">>, State, Event) ->
    State#doc_state{
        title = get_field(<<"new_title">>, new_title, Event),
        updated_at = get_field(<<"renamed_at">>, renamed_at, Event),
        status = State#doc_state.status bor ?DOC_RENAMED
    };

do_apply(<<"document_content_revised_v1">>, State, Event) ->
    State#doc_state{
        content_hash = get_field(<<"content_hash">>, content_hash, Event),
        updated_at = get_field(<<"revised_at">>, revised_at, Event),
        status = State#doc_state.status bor ?DOC_REVISED
    };

do_apply(<<"document_archived_v1">>, State, Event) ->
    State#doc_state{
        updated_at = get_field(<<"archived_at">>, archived_at, Event),
        status = State#doc_state.status bor ?DOC_ARCHIVED
    };

do_apply(_UnknownType, State, _Event) ->
    State.

%% ===================================================================
%% Internal helpers
%% ===================================================================

get_field(BinKey, AtomKey, Event) ->
    maps:get(BinKey, Event, maps:get(AtomKey, Event, undefined)).
