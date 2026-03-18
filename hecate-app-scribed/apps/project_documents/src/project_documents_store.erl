%%% @doc Query facade for the scribe_documents ETS read model.
%%%
%%% Provides typed access to the shared scribe_documents ETS table.
%%% The table is created here (first to start) and shared with
%%% the merged projection via evoq_read_model_ets named table support.
%%% @end
-module(project_documents_store).
-behaviour(gen_server).

-include_lib("guide_document_lifecycle/include/document_status.hrl").

-export([start_link/0]).
-export([list_documents/0, get_document/1, get_document_by_file_id/1]).
-export([put_document/2, delete_document/1]).
-export([init/1, handle_call/3, handle_cast/2, handle_info/2, terminate/2]).

-define(TABLE, scribe_documents).

-spec start_link() -> {ok, pid()} | {error, term()}.
start_link() ->
    gen_server:start_link({local, ?MODULE}, ?MODULE, [], []).

%%====================================================================
%% Query API (reads directly from public ETS — no gen_server call)
%%====================================================================

%% @doc List all non-archived documents, sorted by updated_at descending.
-spec list_documents() -> {ok, [map()]}.
list_documents() ->
    All = ets:tab2list(?TABLE),
    Active = [Doc || {_Key, #{status := S} = Doc} <- All,
                     S band ?DOC_ARCHIVED =:= 0],
    Sorted = lists:sort(fun(#{updated_at := A}, #{updated_at := B}) ->
        A > B
    end, Active),
    {ok, Sorted}.

%% @doc Get a single document by document_id.
-spec get_document(binary()) -> {ok, map()} | {error, not_found}.
get_document(DocId) ->
    case ets:lookup(?TABLE, DocId) of
        [{_, Doc}] -> {ok, Doc};
        [] -> {error, not_found}
    end.

%% @doc Get a document by file_id (scans all entries).
-spec get_document_by_file_id(binary()) -> {ok, map()} | {error, not_found}.
get_document_by_file_id(FileId) ->
    MatchSpec = [{{'$1', '$2'},
                  [{'=:=', {map_get, file_id, '$2'}, {const, FileId}}],
                  ['$2']}],
    case ets:select(?TABLE, MatchSpec) of
        [Doc | _] -> {ok, Doc};
        [] -> {error, not_found}
    end.

%% @doc Insert or update a document in the ETS table.
-spec put_document(binary(), map()) -> ok.
put_document(DocId, Doc) ->
    true = ets:insert(?TABLE, {DocId, Doc}),
    ok.

%% @doc Delete a document from the ETS table.
-spec delete_document(binary()) -> ok.
delete_document(DocId) ->
    true = ets:delete(?TABLE, DocId),
    ok.

%%====================================================================
%% gen_server (owns the ETS table)
%%====================================================================

init([]) ->
    ?TABLE = ets:new(?TABLE, [set, public, named_table, {read_concurrency, true}]),
    {ok, #{}}.

handle_call(_Request, _From, State) ->
    {reply, {error, unknown_call}, State}.

handle_cast(_Msg, State) ->
    {noreply, State}.

handle_info(_Info, State) ->
    {noreply, State}.

terminate(_Reason, _State) ->
    ok.
