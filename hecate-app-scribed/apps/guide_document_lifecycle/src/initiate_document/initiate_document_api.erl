-module(initiate_document_api).
-export([handle_post/2]).

handle_post(Req0, _State) ->
    case app_scribed_api_utils:read_json_body(Req0) of
        {ok, Body, Req1} ->
            Title = app_scribed_api_utils:get_field(<<"title">>, Body, <<"Untitled">>),
            Owner = app_scribed_api_utils:get_field(<<"owner">>, Body, <<"anonymous">>),
            FileId = app_scribed_api_utils:get_field(<<"file_id">>, Body, undefined),
            %% If file_id is provided, use it as the document_id
            %% so scribe's stream ID matches briefcase's file_id
            DocId = case FileId of
                undefined -> generate_id();
                _ -> FileId
            end,
            FolderId = app_scribed_api_utils:get_field(<<"folder_id">>, Body, undefined),
            Cmd = initiate_document_v1:new(DocId, Title, Owner, FolderId),
            case maybe_initiate_document:dispatch(Cmd) of
                {ok, _Version, _Events} ->
                    app_scribed_api_utils:json_ok(201, #{
                        document_id => DocId,
                        file_id => FileId,
                        title => Title,
                        owner => Owner
                    }, Req1);
                {error, Reason} ->
                    app_scribed_api_utils:json_error(400, Reason, Req1)
            end;
        {error, invalid_json, Req1} ->
            app_scribed_api_utils:bad_request(<<"Invalid JSON">>, Req1)
    end.

generate_id() ->
    Ts = integer_to_binary(erlang:system_time(millisecond)),
    Rand = binary:encode_hex(crypto:strong_rand_bytes(4)),
    <<"doc-", Ts/binary, "-", Rand/binary>>.
