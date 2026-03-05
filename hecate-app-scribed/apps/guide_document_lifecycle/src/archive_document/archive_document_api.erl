-module(archive_document_api).
-export([handle_delete/3]).

handle_delete(DocId, Req0, _State) ->
    Cmd = archive_document_v1:new(DocId),
    case maybe_archive_document:dispatch(Cmd) of
        {ok, _Version, _Events} ->
            app_scribed_api_utils:json_ok(#{
                document_id => DocId,
                archived => true
            }, Req0);
        {error, Reason} ->
            app_scribed_api_utils:json_error(400, Reason, Req0)
    end.
