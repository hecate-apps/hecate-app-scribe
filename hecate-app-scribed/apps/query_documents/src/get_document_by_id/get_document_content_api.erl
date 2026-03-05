-module(get_document_content_api).
-export([handle_get/3]).

handle_get(DocId, Req0, _State) ->
    Sql = "SELECT content, content_hash, revised_at
           FROM document_content WHERE document_id = ?1",
    case project_documents_store:query(Sql, [DocId]) of
        {ok, [[Content, ContentHash, RevisedAt]]} ->
            app_scribed_api_utils:json_ok(#{
                document_id => DocId,
                content => Content,
                content_hash => ContentHash,
                revised_at => RevisedAt
            }, Req0);
        {ok, []} ->
            app_scribed_api_utils:json_ok(#{
                document_id => DocId,
                content => <<"{}">>,
                content_hash => <<>>,
                revised_at => <<>>
            }, Req0);
        {error, Reason} ->
            app_scribed_api_utils:json_error(500, Reason, Req0)
    end.
