%%% @doc Scribe plugin callback module.
%%%
%%% Implements the hecate_plugin behaviour for in-VM loading.
%%% When loaded by hecate_plugin_loader, this module provides:
%%%   - ReckonDB store config (documents_store)
%%%   - Cowboy routes (mounted under /plugin/hecate-app-scribe/api/)
%%%   - Static dir (frontend assets at /plugin/hecate-app-scribe/)
%%%   - Plugin manifest
%%% @end
-module(app_scribe).
-behaviour(hecate_plugin).

-include_lib("hecate_sdk/include/hecate_plugin.hrl").

-export([init/1, routes/0, store_config/0, static_dir/0, manifest/0, flag_maps/0]).

-spec init(map()) -> {ok, map()} | {error, term()}.
init(#{plugin_name := PluginName, store_id := StoreId, data_dir := DataDir}) ->
    logger:info("[app-scribe] Initializing plugin ~s (store: ~p, data: ~s)",
                [PluginName, StoreId, DataDir]),
    %% Store app_scribe config so domain modules can find paths
    persistent_term:put(app_scribe_config, #{
        plugin_name => PluginName,
        store_id => StoreId,
        data_dir => DataDir
    }),
    %% Start domain supervisors
    case app_scribe_sup:start_link() of
        {ok, Pid} ->
            logger:info("[app-scribe] Supervision tree started (~p)", [Pid]),
            {ok, #{sup_pid => Pid}};
        {error, {already_started, Pid}} ->
            logger:info("[app-scribe] Supervision tree already running (~p)", [Pid]),
            {ok, #{sup_pid => Pid}};
        {error, Reason} ->
            logger:error("[app-scribe] Failed to start supervision tree: ~p", [Reason]),
            {error, Reason}
    end.

-spec routes() -> [{string(), module(), term()}].
routes() ->
    [
        {"/documents", documents_api, []},
        {"/documents/:document_id", document_by_id_api, []},
        {"/documents/:document_id/content", document_content_api, []}
    ].

-spec store_config() -> #hecate_store_config{}.
store_config() ->
    #hecate_store_config{
        store_id = documents_store,
        dir_name = "documents",
        description = "Scribe document event store"
    }.

-spec static_dir() -> string() | none.
static_dir() ->
    "priv/static".

-spec manifest() -> map().
manifest() ->
    #{
        name => <<"hecate-app-scribe">>,
        display_name => <<"Scribe">>,
        version => <<"0.2.0">>,
        description => <<"Document editor plugin">>,
        icon => <<"pencil2">>,
        tag => <<"scribe-studio">>,
        min_sdk_version => <<"0.6.0">>
    }.

-spec flag_maps() -> #{binary() => evoq_bit_flags:flag_map()}.
flag_maps() ->
    #{}.  %% No aggregates yet — scribe uses simple CRUD for now
