-module(rename_document_api).
-export([handle_put/3]).

-include_lib("evoq/include/evoq.hrl").

handle_put(DocId, Req0, _State) ->
    case app_scribed_api_utils:read_json_body(Req0) of
        {ok, Body, Req1} ->
            NewTitle = app_scribed_api_utils:get_field(<<"title">>, Body),
            case NewTitle of
                undefined ->
                    app_scribed_api_utils:bad_request(<<"title required">>, Req1);
                _ ->
                    Cmd = rename_document_v1:new(DocId, NewTitle),
                    case maybe_rename_document:dispatch(DocId, Cmd) of
                        {ok, _Version, _Events} ->
                            %% Sync name to Briefcase file index (best-effort, same BEAM VM)
                            sync_briefcase_name(DocId, NewTitle),
                            app_scribed_api_utils:json_ok(#{
                                document_id => DocId,
                                title => NewTitle
                            }, Req1);
                        {error, Reason} ->
                            app_scribed_api_utils:json_error(400, Reason, Req1)
                    end
            end;
        {error, invalid_json, Req1} ->
            app_scribed_api_utils:bad_request(<<"Invalid JSON">>, Req1)
    end.

%% @doc Sync the document name to Briefcase's file index.
%% Best-effort — if Briefcase isn't available or the file doesn't exist,
%% we silently ignore. The document's name is authoritative in Scribe;
%% Briefcase's copy is a convenience for the file listing.
sync_briefcase_name(FileId, NewTitle) ->
    try
        Cmd = #evoq_command{
            command_type = rename_file,
            aggregate_type = file_aggregate,
            aggregate_id = FileId,
            payload = #{
                command_type => <<"rename_file">>,
                file_id => FileId,
                name => NewTitle
            },
            metadata = #{timestamp => erlang:system_time(millisecond)}
        },
        Opts = #{
            store_id => briefcase_store,
            adapter => reckon_evoq_adapter,
            consistency => eventual
        },
        evoq_dispatcher:dispatch(Cmd, Opts)
    catch
        _:_ -> ok  %% Briefcase may not be running (e.g., older daemon)
    end.
