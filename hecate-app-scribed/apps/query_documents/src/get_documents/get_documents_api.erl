-module(get_documents_api).
-export([handle_get/2]).

handle_get(Req0, _State) ->
    case project_documents_store:list_documents() of
        {ok, Documents} ->
            app_scribed_api_utils:json_ok(#{documents => Documents}, Req0);
        {error, Reason} ->
            app_scribed_api_utils:json_error(500, Reason, Req0)
    end.
