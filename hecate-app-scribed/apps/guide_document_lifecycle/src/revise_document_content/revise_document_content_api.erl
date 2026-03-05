-module(revise_document_content_api).
-export([handle_put/3]).

handle_put(DocId, Req0, _State) ->
    case app_scribed_api_utils:read_json_body(Req0) of
        {ok, Body, Req1} ->
            Content = app_scribed_api_utils:get_field(<<"content">>, Body),
            case Content of
                undefined ->
                    app_scribed_api_utils:bad_request(<<"content required">>, Req1);
                _ ->
                    ContentBin = case is_binary(Content) of
                        true -> Content;
                        false -> json:encode(Content)
                    end,
                    Cmd = revise_document_content_v1:new(DocId, ContentBin),
                    case maybe_revise_document_content:dispatch(DocId, Cmd) of
                        {ok, _Version, _Events} ->
                            app_scribed_api_utils:json_ok(#{
                                document_id => DocId,
                                revised => true
                            }, Req1);
                        {error, Reason} ->
                            app_scribed_api_utils:json_error(400, Reason, Req1)
                    end
            end;
        {error, invalid_json, Req1} ->
            app_scribed_api_utils:bad_request(<<"Invalid JSON">>, Req1)
    end.
