-module(get_document_by_id_api).
-export([handle_get/3]).

handle_get(DocId, Req0, _State) ->
    Sql = "SELECT document_id, title, owner, status, content_size, created_at, updated_at
           FROM documents WHERE document_id = ?1",
    case project_documents_store:query(Sql, [DocId]) of
        {ok, [[DId, Title, Owner, Status, ContentSize, CreatedAt, UpdatedAt]]} ->
            app_scribed_api_utils:json_ok(#{
                document_id => DId,
                title => Title,
                owner => Owner,
                status => Status,
                content_size => ContentSize,
                created_at => CreatedAt,
                updated_at => UpdatedAt
            }, Req0);
        {ok, []} ->
            app_scribed_api_utils:not_found(Req0);
        {error, Reason} ->
            app_scribed_api_utils:json_error(500, Reason, Req0)
    end.
