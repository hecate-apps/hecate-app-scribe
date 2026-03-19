-module(document_content_api).
-export([init/2]).

init(Req0, State) ->
    DocId = cowboy_req:binding(document_id, Req0),
    case cowboy_req:method(Req0) of
        <<"GET">> ->
            get_document_content_api:handle_get(DocId, Req0, State);
        <<"PUT">> ->
            get_document_content_api:handle_put(DocId, Req0, State);
        _ ->
            app_scribed_api_utils:method_not_allowed(Req0)
    end.
