%%% @doc Read/write document content as a file.
%%%
%%% Content is stored as a .scribe file (Y.js state binary)
%%% at {data_dir}/content/{document_id}.scribe.
%%% Not event-sourced — just a file on disk.
-module(get_document_content_api).
-export([handle_get/3, handle_put/3]).

handle_get(DocId, Req0, _State) ->
    Path = content_path(DocId),
    case file:read_file(Path) of
        {ok, Bytes} ->
            Content = base64:encode(Bytes),
            Hash = binary:encode_hex(crypto:hash(sha256, Bytes)),
            app_scribed_api_utils:json_ok(#{
                document_id => DocId,
                content => Content,
                content_hash => Hash
            }, Req0);
        {error, enoent} ->
            app_scribed_api_utils:json_ok(#{
                document_id => DocId,
                content => <<>>,
                content_hash => <<>>
            }, Req0)
    end.

handle_put(DocId, Req0, _State) ->
    case app_scribed_api_utils:read_json_body(Req0) of
        {ok, Body, Req1} ->
            Content = app_scribed_api_utils:get_field(<<"content">>, Body),
            case Content of
                undefined ->
                    app_scribed_api_utils:bad_request(<<"content required">>, Req1);
                _ ->
                    Bytes = base64:decode(Content),
                    Path = content_path(DocId),
                    ok = filelib:ensure_dir(Path),
                    ok = file:write_file(Path, Bytes),
                    Hash = binary:encode_hex(crypto:hash(sha256, Bytes)),
                    app_scribed_api_utils:json_ok(#{
                        document_id => DocId,
                        saved => true,
                        content_hash => Hash
                    }, Req1)
            end;
        {error, invalid_json, Req1} ->
            app_scribed_api_utils:bad_request(<<"Invalid JSON">>, Req1)
    end.

content_path(DocId) ->
    case persistent_term:get(app_scribe_config, undefined) of
        #{data_dir := DataDir} ->
            filename:join([DataDir, "content", binary_to_list(DocId) ++ ".scribe"]);
        undefined ->
            filename:join([app_scribed_paths:base_dir(), "content", binary_to_list(DocId) ++ ".scribe"])
    end.
