%%% @doc GET /info — exposes content directory path for Tauri-native file I/O.
-module(scribe_info_api).
-export([init/2]).

init(Req0, _State) ->
    case cowboy_req:method(Req0) of
        <<"GET">> ->
            #{data_dir := DataDir} = persistent_term:get(app_scribe_config),
            ContentDir = filename:join(DataDir, "content"),
            app_scribed_api_utils:json_ok(#{
                content_dir => list_to_binary(ContentDir),
                format => <<"scribe">>,
                extension => <<".scribe">>
            }, Req0);
        _ ->
            app_scribed_api_utils:method_not_allowed(Req0)
    end.
