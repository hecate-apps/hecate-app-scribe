%%% @doc Scribe plugin callback module.
%%%
%%% Pure document editor — no event sourcing.
%%% Content stored as .scribe files (Y.js state in ZIP archives).
%%% All metadata (name, folder, star, archive) managed by Briefcase.
-module(app_scribe).
-behaviour(hecate_plugin).

-include_lib("hecate_sdk/include/hecate_plugin.hrl").

-export([init/1, routes/0, store_config/0, static_dir/0, manifest/0, flag_maps/0]).

-spec init(map()) -> {ok, map()} | {error, term()}.
init(#{plugin_name := PluginName, data_dir := DataDir}) ->
    logger:info("[app-scribe] Initializing plugin ~s (data: ~s)", [PluginName, DataDir]),
    persistent_term:put(app_scribe_config, #{
        plugin_name => PluginName,
        data_dir => DataDir
    }),
    %% Ensure content directory exists
    ContentDir = filename:join(DataDir, "content"),
    ok = filelib:ensure_path(ContentDir),
    {ok, #{}}.

-spec routes() -> [{string(), module(), term()}].
routes() ->
    [
        {"/content/:item_id", document_content_api, []}
    ].

-spec store_config() -> none.
store_config() ->
    none.

-spec static_dir() -> string() | none.
static_dir() ->
    "priv/static".

-spec manifest() -> map().
manifest() ->
    #{
        name => <<"hecate-app-scribe">>,
        display_name => <<"Scribe">>,
        version => <<"0.5.0">>,
        description => <<"Document editor">>,
        icon => <<"page_facing_up">>,
        tag => <<"scribe-studio">>,
        min_sdk_version => <<"0.6.0">>,
        file_types => [
            #{
                type => <<"scribe">>,
                label => <<"Document">>,
                icon => <<"page_facing_up">>,
                can_create => true,
                import_extensions => [<<".md">>, <<".txt">>, <<".html">>]
            }
        ]
    }.

-spec flag_maps() -> #{binary() => evoq_bit_flags:flag_map()}.
flag_maps() ->
    #{}.
