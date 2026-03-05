-module(hecate_app_scribed_app).
-behaviour(application).

-export([start/2, stop/1]).

-dialyzer({nowarn_function, [start_event_store/0]}).

-include_lib("reckon_db/include/reckon_db.hrl").

start(_StartType, _StartArgs) ->
    case application:get_env(hecate_app_scribed, enabled, true) of
        false ->
            logger:info("[hecate_app_scribed] Disabled by config"),
            {ok, spawn(fun() -> receive stop -> ok end end)};
        true ->
            ok = app_scribed_paths:ensure_layout(),
            ok = start_event_store(),
            ok = start_cowboy(),
            logger:info("[hecate_app_scribed] Started, socket at ~s",
                        [app_scribed_paths:socket_path("api.sock")]),
            hecate_app_scribed_sup:start_link()
    end.

stop(_State) ->
    ok = cowboy:stop_listener(app_scribed_http),
    cleanup_socket(),
    ok.

start_event_store() ->
    DataDir = app_scribed_paths:reckon_path("documents"),
    ok = filelib:ensure_path(DataDir),
    Config = #store_config{
        store_id = documents_store,
        data_dir = DataDir,
        mode = single,
        writer_pool_size = 3,
        reader_pool_size = 3,
        gateway_pool_size = 1,
        options = #{}
    },
    case reckon_db_sup:start_store(Config) of
        {ok, _Pid} -> ok;
        {error, {already_started, _Pid}} -> ok;
        {error, Reason} ->
            logger:error("[hecate_app_scribed] Failed to start documents_store: ~p", [Reason]),
            {error, Reason}
    end.

start_cowboy() ->
    SocketPath = app_scribed_paths:socket_path("api.sock"),
    cleanup_socket_file(SocketPath),
    StaticDir = static_dir(),
    Routes = [
        {"/health", app_scribed_health_api, []},
        {"/manifest", app_scribed_manifest_api, []},
        {"/ui/[...]", cowboy_static, {dir, StaticDir, [{mimetypes, cow_mimetypes, all}]}},
        {"/api/documents", documents_api, []},
        {"/api/documents/:document_id", document_by_id_api, []},
        {"/api/documents/:document_id/content", document_content_api, []}
    ],
    Dispatch = cowboy_router:compile([{'_', Routes}]),
    TransOpts = #{
        socket_opts => [{ifaddr, {local, SocketPath}}],
        num_acceptors => 5
    },
    ProtoOpts = #{
        env => #{dispatch => Dispatch},
        idle_timeout => 600000,
        request_timeout => 600000
    },
    {ok, _} = cowboy:start_clear(app_scribed_http, TransOpts, ProtoOpts),
    ok.

cleanup_socket() ->
    SocketPath = app_scribed_paths:socket_path("api.sock"),
    cleanup_socket_file(SocketPath).

cleanup_socket_file(Path) ->
    case file:delete(Path) of
        ok -> ok;
        {error, enoent} -> ok;
        {error, Reason} ->
            logger:warning("[hecate_app_scribed] Failed to remove socket ~s: ~p", [Path, Reason]),
            ok
    end.

static_dir() ->
    PrivDir = code:priv_dir(hecate_app_scribed),
    filename:join(PrivDir, "static").
