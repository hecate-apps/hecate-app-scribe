-module(get_documents_api).
-export([handle_get/2]).

handle_get(Req0, _State) ->
    Sql = "SELECT document_id, title, owner, status, content_size, created_at, updated_at
           FROM documents WHERE status & 4 = 0 ORDER BY updated_at DESC",
    case project_documents_store:query(Sql) of
        {ok, Rows} ->
            Documents = lists:map(fun row_to_map/1, Rows),
            app_scribed_api_utils:json_ok(#{documents => Documents}, Req0);
        {error, Reason} ->
            app_scribed_api_utils:json_error(500, Reason, Req0)
    end.

row_to_map([DocId, Title, Owner, Status, ContentSize, CreatedAt, UpdatedAt]) ->
    #{
        document_id => DocId,
        title => Title,
        owner => Owner,
        status => Status,
        content_size => ContentSize,
        created_at => CreatedAt,
        updated_at => UpdatedAt
    }.
