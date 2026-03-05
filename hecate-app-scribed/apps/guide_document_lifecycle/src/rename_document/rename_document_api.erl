-module(rename_document_api).
-export([handle_put/3]).

handle_put(DocId, Req0, _State) ->
    case app_scribed_api_utils:read_json_body(Req0) of
        {ok, Body, Req1} ->
            NewTitle = app_scribed_api_utils:get_field(<<"title">>, Body),
            case NewTitle of
                undefined ->
                    app_scribed_api_utils:bad_request(<<"title required">>, Req1);
                _ ->
                    Cmd = rename_document_v1:new(DocId, NewTitle),
                    case maybe_rename_document:dispatch(DocId, Cmd) of
                        {ok, _Version, _Events} ->
                            app_scribed_api_utils:json_ok(#{
                                document_id => DocId,
                                title => NewTitle
                            }, Req1);
                        {error, Reason} ->
                            app_scribed_api_utils:json_error(400, Reason, Req1)
                    end
            end;
        {error, invalid_json, Req1} ->
            app_scribed_api_utils:bad_request(<<"Invalid JSON">>, Req1)
    end.
