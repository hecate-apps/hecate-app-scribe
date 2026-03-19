%%% @doc Content API for .scribe files.
%%%
%%% GET /content/:item_id — read content (base64 Y.js state)
%%% PUT /content/:item_id — write content (base64 Y.js state)
-module(document_content_api).
-export([init/2]).

init(Req0, _State) ->
    ItemId = cowboy_req:binding(item_id, Req0),
    case cowboy_req:method(Req0) of
        <<"GET">>  -> handle_get(ItemId, Req0);
        <<"PUT">>  -> handle_put(ItemId, Req0);
        _          -> app_scribed_api_utils:method_not_allowed(Req0)
    end.

handle_get(ItemId, Req0) ->
    Path = content_path(ItemId),
    case file:read_file(Path) of
        {ok, Bytes} ->
            app_scribed_api_utils:json_ok(#{
                item_id => ItemId,
                content => base64:encode(Bytes),
                content_hash => binary:encode_hex(crypto:hash(sha256, Bytes))
            }, Req0);
        {error, enoent} ->
            app_scribed_api_utils:json_ok(#{
                item_id => ItemId,
                content => <<>>,
                content_hash => <<>>
            }, Req0)
    end.

handle_put(ItemId, Req0) ->
    case app_scribed_api_utils:read_json_body(Req0) of
        {ok, Body, Req1} ->
            Content = app_scribed_api_utils:get_field(<<"content">>, Body),
            case Content of
                undefined ->
                    app_scribed_api_utils:bad_request(<<"content required">>, Req1);
                _ ->
                    Bytes = base64:decode(Content),
                    Path = content_path(ItemId),
                    ok = filelib:ensure_dir(Path),
                    ok = file:write_file(Path, Bytes),
                    app_scribed_api_utils:json_ok(#{
                        item_id => ItemId,
                        saved => true,
                        content_hash => binary:encode_hex(crypto:hash(sha256, Bytes))
                    }, Req1)
            end;
        {error, invalid_json, Req1} ->
            app_scribed_api_utils:bad_request(<<"Invalid JSON">>, Req1)
    end.

content_path(ItemId) ->
    #{data_dir := DataDir} = persistent_term:get(app_scribe_config),
    filename:join([DataDir, "content", binary_to_list(ItemId) ++ ".scribe"]).
