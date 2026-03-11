-module(document_archived_v1_to_documents).
-behaviour(gen_server).

-export([start_link/0]).
-export([init/1, handle_call/3, handle_cast/2, handle_info/2, terminate/2]).

-dialyzer({nowarn_function, [init/1, terminate/2]}).

-include_lib("evoq/include/evoq_types.hrl").
-include_lib("guide_document_lifecycle/include/document_status.hrl").

-record(state, {subscription_id :: binary() | undefined}).

start_link() ->
    gen_server:start_link({local, ?MODULE}, ?MODULE, [], []).

init([]) ->
    self() ! try_subscribe,
    {ok, #state{}}.

handle_call(_Request, _From, State) -> {reply, {error, unknown_call}, State}.
handle_cast(_Msg, State) -> {noreply, State}.

handle_info(try_subscribe, #state{subscription_id = undefined} = State) ->
    case evoq_subscriptions:subscribe(
        documents_store, event_type, <<"document_archived_v1">>,
        <<"prj_document_archived">>, #{start_from => 0, subscriber_pid => self()}
    ) of
        {ok, SubId} ->
            {noreply, State#state{subscription_id = SubId}};
        _Error ->
            erlang:send_after(1000, self(), try_subscribe),
            {noreply, State}
    end;
handle_info({events, Events}, State) ->
    lists:foreach(fun(#evoq_event{data = Data}) ->
        project(Data)
    end, Events),
    {noreply, State};
handle_info(_Info, State) ->
    {noreply, State}.

terminate(_Reason, #state{subscription_id = SubId}) ->
    case SubId of
        undefined -> ok;
        _ -> evoq_subscriptions:unsubscribe(documents_store, SubId)
    end.

project(Data) ->
    DocId = get_field(<<"document_id">>, document_id, Data),
    ArchivedAt = get_field(<<"archived_at">>, archived_at, Data),
    ArchivedAtBin = integer_to_binary(ArchivedAt),
    NewStatus = current_status(DocId) bor ?DOC_ARCHIVED,
    StatusLabel = evoq_bit_flags:to_string(NewStatus, ?DOC_FLAG_MAP),
    Actions = json:encode(available_actions(NewStatus)),
    Sql = "UPDATE documents SET status = ?1, status_label = ?2,
           available_actions = ?3, updated_at = ?4 WHERE document_id = ?5",
    project_documents_store:execute(Sql, [NewStatus, StatusLabel, Actions, ArchivedAtBin, DocId]).

current_status(DocId) ->
    case project_documents_store:query("SELECT status FROM documents WHERE document_id = ?1", [DocId]) of
        {ok, [[Status]]} -> Status;
        _ -> 0
    end.

available_actions(Status) ->
    case evoq_bit_flags:has(Status, ?DOC_ARCHIVED) of
        true  -> [];
        false -> [<<"rename">>, <<"revise">>, <<"archive">>]
    end.

get_field(BinKey, AtomKey, Data) ->
    maps:get(BinKey, Data, maps:get(AtomKey, Data, undefined)).
