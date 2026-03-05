-module(app_scribed_manifest_api).
-export([init/2]).

init(Req0, State) ->
    case cowboy_req:method(Req0) of
        <<"GET">> ->
            {ok, Vsn} = application:get_key(hecate_app_scribed, vsn),
            Body = json:encode(#{
                <<"name">> => <<"scribe">>,
                <<"display_name">> => <<"Scribe">>,
                <<"version">> => list_to_binary(Vsn),
                <<"icon">> => <<16#270F/utf8>>,
                <<"description">> => <<"Document Editor">>,
                <<"tag">> => <<"scribe-studio">>
            }),
            Req1 = cowboy_req:reply(200, #{
                <<"content-type">> => <<"application/json">>,
                <<"access-control-allow-origin">> => <<"*">>
            }, Body, Req0),
            {ok, Req1, State};
        _ ->
            app_scribed_api_utils:method_not_allowed(Req0)
    end.
