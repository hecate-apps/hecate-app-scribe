-module(get_documents_api).
-export([handle_get/2]).

handle_get(Req0, _State) ->
    {ok, Documents} = project_documents_store:list_documents(),
    app_scribed_api_utils:json_ok(#{documents => Documents}, Req0).
