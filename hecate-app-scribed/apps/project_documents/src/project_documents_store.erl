-module(project_documents_store).
-behaviour(gen_server).

-export([start_link/0, execute/1, execute/2, query/1, query/2]).
-export([init/1, handle_call/3, handle_cast/2, handle_info/2, terminate/2]).

-record(state, {db :: esqlite3:esqlite3()}).

start_link() ->
    gen_server:start_link({local, ?MODULE}, ?MODULE, [], []).

execute(Sql) -> execute(Sql, []).
execute(Sql, Params) -> gen_server:call(?MODULE, {execute, Sql, Params}).

query(Sql) -> query(Sql, []).
query(Sql, Params) -> gen_server:call(?MODULE, {query, Sql, Params}).

init([]) ->
    DbPath = resolve_db_path(),
    ok = filelib:ensure_dir(DbPath),
    {ok, Db} = esqlite3:open(DbPath),
    ok = create_tables(Db),
    {ok, #state{db = Db}}.

resolve_db_path() ->
    case persistent_term:get(app_scribe_config, undefined) of
        #{data_dir := DataDir} ->
            %% In-VM mode: use plugin data dir
            SqliteDir = filename:join(DataDir, "sqlite"),
            ok = filelib:ensure_path(SqliteDir),
            filename:join(SqliteDir, "project_documents.db");
        undefined ->
            %% Standalone container mode (fallback)
            app_scribed_paths:sqlite_path("project_documents.db")
    end.

handle_call({execute, Sql, Params}, _From, #state{db = Db} = State) ->
    Result = case Params of
        [] -> esqlite3:exec(Db, Sql);
        _ ->
            case esqlite3:q(Db, Sql, Params) of
                Rows when is_list(Rows) -> ok;
                {error, _} = Err -> Err
            end
    end,
    {reply, Result, State};

handle_call({query, Sql, Params}, _From, #state{db = Db} = State) ->
    Result = case esqlite3:q(Db, Sql, Params) of
        Rows when is_list(Rows) -> {ok, Rows};
        {error, _} = Err -> Err
    end,
    {reply, Result, State};

handle_call(_Request, _From, State) ->
    {reply, {error, unknown_call}, State}.

handle_cast(_Msg, State) -> {noreply, State}.
handle_info(_Info, State) -> {noreply, State}.

terminate(_Reason, #state{db = Db}) ->
    esqlite3:close(Db).

create_tables(Db) ->
    ok = esqlite3:exec(Db, "PRAGMA journal_mode=WAL"),
    ok = esqlite3:exec(Db, "PRAGMA synchronous=NORMAL"),

    ok = esqlite3:exec(Db, "CREATE TABLE IF NOT EXISTS documents (
        document_id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        owner TEXT NOT NULL,
        status INTEGER NOT NULL DEFAULT 1,
        content_size INTEGER NOT NULL DEFAULT 0,
        created_at TEXT NOT NULL,
        updated_at TEXT NOT NULL
    )"),

    ok = esqlite3:exec(Db, "CREATE TABLE IF NOT EXISTS document_content (
        document_id TEXT PRIMARY KEY,
        content BLOB NOT NULL,
        content_hash TEXT NOT NULL,
        revised_at TEXT NOT NULL,
        FOREIGN KEY (document_id) REFERENCES documents(document_id)
    )"),

    ok.
