%%% @doc Scribe daemon application.
%%%
%%% In container mode: starts standalone Cowboy + ReckonDB store.
%%% In in-VM mode: no-op (app_scribe callback handles initialization).
%%%
%%% The application is kept for OTP compliance but the real entry point
%%% for in-VM plugins is app_scribe:init/1.
%%% @end
-module(hecate_app_scribed_app).
-behaviour(application).

-export([start/2, stop/1]).

start(_StartType, _StartArgs) ->
    %% In in-VM mode, app_scribe:init/1 is the entry point.
    %% This application start is a no-op — the plugin loader handles everything.
    logger:info("[hecate_app_scribed] Application started (in-VM mode)"),
    hecate_app_scribed_sup:start_link().

stop(_State) ->
    ok.
