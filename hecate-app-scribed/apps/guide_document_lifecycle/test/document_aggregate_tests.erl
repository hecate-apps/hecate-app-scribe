-module(document_aggregate_tests).
-include_lib("eunit/include/eunit.hrl").

-include("document_status.hrl").

stream_id_test() ->
    ?assertEqual(<<"document-doc-123">>, document_aggregate:stream_id(<<"doc-123">>)).

initial_state_test() ->
    {ok, State} = document_aggregate:init(<<"doc-1">>),
    ?assertNotEqual(undefined, State).

execute_initiate_test() ->
    {ok, State} = document_aggregate:init(<<"doc-1">>),
    Payload = #{command_type => initiate_document,
                document_id => <<"doc-1">>, title => <<"Test">>, owner => <<"alice">>},
    {ok, [EventMap]} = document_aggregate:execute(State, Payload),
    ?assertEqual(<<"document_initiated_v1">>, maps:get(event_type, EventMap)).

execute_initiate_duplicate_test() ->
    {ok, State0} = document_aggregate:init(<<"doc-1">>),
    InitEvent = #{event_type => <<"document_initiated_v1">>,
                  document_id => <<"doc-1">>, title => <<"Test">>,
                  owner => <<"alice">>, created_at => 1000},
    State1 = document_aggregate:apply(State0, InitEvent),
    Payload = #{command_type => initiate_document,
                document_id => <<"doc-1">>, title => <<"Dup">>, owner => <<"bob">>},
    ?assertEqual({error, already_initiated}, document_aggregate:execute(State1, Payload)).

execute_rename_after_initiate_test() ->
    {ok, State0} = document_aggregate:init(<<"doc-1">>),
    InitEvent = #{event_type => <<"document_initiated_v1">>,
                  document_id => <<"doc-1">>, title => <<"Old">>,
                  owner => <<"alice">>, created_at => 1000},
    State1 = document_aggregate:apply(State0, InitEvent),
    Payload = #{command_type => rename_document,
                document_id => <<"doc-1">>, new_title => <<"New">>},
    {ok, [EventMap]} = document_aggregate:execute(State1, Payload),
    ?assertEqual(<<"document_renamed_v1">>, maps:get(event_type, EventMap)).

execute_rename_before_initiate_test() ->
    {ok, State} = document_aggregate:init(<<"doc-1">>),
    Payload = #{command_type => rename_document,
                document_id => <<"doc-1">>, new_title => <<"New">>},
    ?assertEqual({error, document_not_modifiable}, document_aggregate:execute(State, Payload)).

execute_archive_test() ->
    {ok, State0} = document_aggregate:init(<<"doc-1">>),
    InitEvent = #{event_type => <<"document_initiated_v1">>,
                  document_id => <<"doc-1">>, title => <<"Test">>,
                  owner => <<"alice">>, created_at => 1000},
    State1 = document_aggregate:apply(State0, InitEvent),
    Payload = #{command_type => archive_document, document_id => <<"doc-1">>},
    {ok, [EventMap]} = document_aggregate:execute(State1, Payload),
    ?assertEqual(<<"document_archived_v1">>, maps:get(event_type, EventMap)).

execute_archive_prevents_modify_test() ->
    {ok, State0} = document_aggregate:init(<<"doc-1">>),
    State1 = document_aggregate:apply(State0,
        #{event_type => <<"document_initiated_v1">>,
          document_id => <<"doc-1">>, title => <<"T">>,
          owner => <<"a">>, created_at => 1000}),
    State2 = document_aggregate:apply(State1,
        #{event_type => <<"document_archived_v1">>,
          document_id => <<"doc-1">>, archived_at => 2000}),
    RenamePayload = #{command_type => rename_document,
                      document_id => <<"doc-1">>, new_title => <<"X">>},
    ?assertEqual({error, document_not_modifiable},
                 document_aggregate:execute(State2, RenamePayload)).

execute_double_archive_test() ->
    {ok, State0} = document_aggregate:init(<<"doc-1">>),
    State1 = document_aggregate:apply(State0,
        #{event_type => <<"document_initiated_v1">>,
          document_id => <<"doc-1">>, title => <<"T">>,
          owner => <<"a">>, created_at => 1000}),
    State2 = document_aggregate:apply(State1,
        #{event_type => <<"document_archived_v1">>,
          document_id => <<"doc-1">>, archived_at => 2000}),
    Payload = #{command_type => archive_document, document_id => <<"doc-1">>},
    ?assertEqual({error, already_archived}, document_aggregate:execute(State2, Payload)).

execute_unknown_command_test() ->
    {ok, State} = document_aggregate:init(<<"doc-1">>),
    ?assertEqual({error, unknown_command},
                 document_aggregate:execute(State, #{command_type => bogus})).

apply_unknown_event_test() ->
    {ok, State} = document_aggregate:init(<<"doc-1">>),
    State2 = document_aggregate:apply(State, #{event_type => <<"unknown_v1">>}),
    ?assertEqual(State, State2).

apply_event_binary_key_test() ->
    {ok, State0} = document_aggregate:init(<<"doc-1">>),
    State1 = document_aggregate:apply(State0,
        #{<<"event_type">> => <<"document_initiated_v1">>,
          <<"document_id">> => <<"doc-1">>, <<"title">> => <<"T">>,
          <<"owner">> => <<"a">>, <<"created_at">> => 1000}),
    %% Should be able to rename now (means INITIATED flag was set)
    Payload = #{command_type => rename_document,
                document_id => <<"doc-1">>, new_title => <<"X">>},
    {ok, _} = document_aggregate:execute(State1, Payload).
