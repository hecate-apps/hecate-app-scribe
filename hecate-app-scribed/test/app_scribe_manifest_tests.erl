%%% @doc Tests for app_scribe:manifest/0.
%%%
%%% The manifest is the contract between the plugin and the frontend.
%%% The frontend fetches /plugin/{name}/api/manifest and uses the fields
%%% to render the plugin. Missing fields = broken frontend.
-module(app_scribe_manifest_tests).

-include_lib("eunit/include/eunit.hrl").

%% -- Required Fields --
%% These fields are required by hecate-web's PluginManifest type:
%%   { name: string, version: string, icon: string,
%%     description: string, tag: string }

manifest_returns_map_test() ->
    M = app_scribe:manifest(),
    ?assert(is_map(M)).

manifest_has_name_test() ->
    M = app_scribe:manifest(),
    ?assert(maps:is_key(name, M)),
    ?assert(is_binary(maps:get(name, M))).

manifest_has_version_test() ->
    M = app_scribe:manifest(),
    ?assert(maps:is_key(version, M)),
    ?assert(is_binary(maps:get(version, M))).

manifest_has_description_test() ->
    M = app_scribe:manifest(),
    ?assert(maps:is_key(description, M)),
    ?assert(is_binary(maps:get(description, M))).

manifest_has_icon_test() ->
    M = app_scribe:manifest(),
    ?assert(maps:is_key(icon, M)),
    ?assert(is_binary(maps:get(icon, M))).

%% CRITICAL: Frontend uses manifest.tag to know which custom element to create.
%% Without this field, the plugin UI cannot load.
manifest_has_tag_test() ->
    M = app_scribe:manifest(),
    ?assert(maps:is_key(tag, M)),
    Tag = maps:get(tag, M),
    ?assert(is_binary(Tag)),
    ?assertNotEqual(<<>>, Tag).

%% Tag must match what the web component registers as
manifest_tag_is_scribe_studio_test() ->
    M = app_scribe:manifest(),
    ?assertEqual(<<"scribe-studio">>, maps:get(tag, M)).

%% Name must not have org prefix — it's used for route construction
manifest_name_has_no_org_prefix_test() ->
    M = app_scribe:manifest(),
    Name = maps:get(name, M),
    ?assertEqual(nomatch, binary:match(Name, <<"/">>)).

%% Name must match the plugin directory name
manifest_name_is_hecate_app_scribe_test() ->
    M = app_scribe:manifest(),
    ?assertEqual(<<"hecate-app-scribe">>, maps:get(name, M)).
