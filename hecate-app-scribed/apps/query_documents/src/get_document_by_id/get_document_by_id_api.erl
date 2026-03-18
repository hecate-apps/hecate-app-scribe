-module(get_document_by_id_api).
-export([handle_get/3]).

handle_get(DocId, Req0, _State) ->
    %% Support lookup by file_id via query param: ?file_id=true
    Result = case cowboy_req:match_qs([{file_id, [], undefined}], Req0) of
        #{file_id := <<"true">>} ->
            project_documents_store:get_document_by_file_id(DocId);
        _ ->
            project_documents_store:get_document(DocId)
    end,
    case Result of
        {ok, Doc} ->
            app_scribed_api_utils:json_ok(Doc, Req0);
        {error, not_found} ->
            app_scribed_api_utils:not_found(Req0)
    end.
