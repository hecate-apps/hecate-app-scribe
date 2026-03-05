-module(document_content_revised_v1_to_documents).
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
        documents_store, event_type, <<"document_content_revised_v1">>,
        <<"prj_document_content_revised">>, #{start_from => 0, subscriber_pid => self()}
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
    Content = get_field(<<"content_binary">>, content_binary, Data),
    ContentHash = get_field(<<"content_hash">>, content_hash, Data),
    RevisedAt = get_field(<<"revised_at">>, revised_at, Data),
    RevisedAtBin = integer_to_binary(RevisedAt),
    ContentSize = byte_size(Content),
    ContentSizeBin = integer_to_binary(ContentSize),

    project_documents_store:execute(
        "UPDATE documents SET content_size = ?1, status = status | 8, updated_at = ?2
         WHERE document_id = ?3",
        [ContentSizeBin, RevisedAtBin, DocId]
    ),

    project_documents_store:execute(
        "INSERT OR REPLACE INTO document_content
         (document_id, content, content_hash, revised_at)
         VALUES (?1, ?2, ?3, ?4)",
        [DocId, Content, ContentHash, RevisedAtBin]
    ).

get_field(BinKey, AtomKey, Data) ->
    maps:get(BinKey, Data, maps:get(AtomKey, Data, undefined)).
