-module(document_archived_v1_to_documents).
-behaviour(gen_server).

-export([start_link/0]).
-export([init/1, handle_call/3, handle_cast/2, handle_info/2, terminate/2]).

-dialyzer({nowarn_function, [init/1, terminate/2]}).

-include_lib("evoq/include/evoq_types.hrl").

-record(state, {subscription_id :: binary() | undefined}).

start_link() ->
    gen_server:start_link({local, ?MODULE}, ?MODULE, [], []).

init([]) ->
    {ok, SubId} = evoq_subscriptions:subscribe(
        documents_store, event_type, <<"document_archived_v1">>,
        <<"prj_document_archived">>, #{start_from => 0, subscriber_pid => self()}
    ),
    {ok, #state{subscription_id = SubId}}.

handle_call(_Request, _From, State) -> {reply, {error, unknown_call}, State}.
handle_cast(_Msg, State) -> {noreply, State}.

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
    Sql = "UPDATE documents SET status = status | 4, updated_at = ?1
           WHERE document_id = ?2",
    project_documents_store:execute(Sql, [ArchivedAtBin, DocId]).

get_field(BinKey, AtomKey, Data) ->
    maps:get(BinKey, Data, maps:get(AtomKey, Data, undefined)).
