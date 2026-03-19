-module(document_aggregate).
-behaviour(evoq_aggregate).

-include("document_status.hrl").

-export([state_module/0, init/1, execute/2, apply/2]).
-export([stream_id/1]).

%% ===================================================================
%% Evoq aggregate callbacks
%% ===================================================================

state_module() -> document_state.

init(AggregateId) ->
    {ok, document_state:new(AggregateId)}.

-spec stream_id(binary()) -> binary().
stream_id(DocumentId) ->
    <<"document-", DocumentId/binary>>.

execute(State, #{command_type := CmdType} = Payload) ->
    do_execute(CmdType, State, Payload);
execute(_State, _Unknown) ->
    {error, unknown_command}.

apply(State, Event) ->
    document_state:apply_event(State, Event).

%% ===================================================================
%% Command routing
%% ===================================================================

do_execute(initiate_document, State, Payload) ->
    case document_state:to_map(State) of
        #{status := S} when S band ?DOC_INITIATED =/= 0 ->
            {error, already_initiated};
        _ ->
            maybe_initiate_document:handle_from_map(Payload)
    end;

do_execute(rename_document, State, Payload) ->
    case can_modify(State) of
        true -> maybe_rename_document:handle_from_map(Payload);
        false -> {error, document_not_modifiable}
    end;

do_execute(archive_document, State, Payload) ->
    #{status := S} = document_state:to_map(State),
    case S band ?DOC_ARCHIVED of
        0 ->
            case S band ?DOC_INITIATED of
                0 -> {error, not_initiated};
                _ -> maybe_archive_document:handle_from_map(Payload)
            end;
        _ -> {error, already_archived}
    end;

do_execute(move_document, State, Payload) ->
    case can_modify(State) of
        true -> maybe_move_document:handle_from_map(Payload);
        false -> {error, document_not_modifiable}
    end;

do_execute(star_document, State, Payload) ->
    case can_modify(State) of
        true ->
            #{starred := Starred} = document_state:to_map(State),
            case Starred of
                true -> {error, already_starred};
                false -> maybe_star_document:handle_from_map(Payload)
            end;
        false -> {error, document_not_modifiable}
    end;

do_execute(unstar_document, State, Payload) ->
    case can_modify(State) of
        true ->
            #{starred := Starred} = document_state:to_map(State),
            case Starred of
                false -> {error, not_starred};
                true -> maybe_unstar_document:handle_from_map(Payload)
            end;
        false -> {error, document_not_modifiable}
    end;

do_execute(_Unknown, _State, _Payload) ->
    {error, unknown_command}.

%% ===================================================================
%% Internal
%% ===================================================================

can_modify(State) ->
    #{status := S} = document_state:to_map(State),
    (S band ?DOC_INITIATED =/= 0) andalso (S band ?DOC_ARCHIVED =:= 0).
