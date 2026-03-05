-module(documents_api).
-export([init/2]).

init(Req0, State) ->
    case cowboy_req:method(Req0) of
        <<"GET">> ->
            get_documents_api:handle_get(Req0, State);
        <<"POST">> ->
            initiate_document_api:handle_post(Req0, State);
        _ ->
            app_scribed_api_utils:method_not_allowed(Req0)
    end.
