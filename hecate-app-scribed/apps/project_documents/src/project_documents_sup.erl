%%% @doc Top-level supervisor for project_documents (PRJ).
%%%
%%% Supervises the documents read model store and the merged projection.
%%% The store creates the ETS table; the projection joins it via
%%% evoq_read_model_ets named table support.
%%% @end
-module(project_documents_sup).
-behaviour(supervisor).

-export([start_link/0, init/1]).

start_link() ->
    supervisor:start_link({local, ?MODULE}, ?MODULE, []).

init([]) ->
    StoreOpts = #{store_id => documents_store},
    SupFlags = #{strategy => one_for_one, intensity => 10, period => 10},
    Children = [
        %% Read model query facade (must start first — creates ETS table)
        #{id => project_documents_store,
          start => {project_documents_store, start_link, []},
          restart => permanent, type => worker},
        %% Merged projection: all document lifecycle events -> scribe_documents ETS
        #{id => document_lifecycle_to_index,
          start => {evoq_projection, start_link, [document_lifecycle_to_index, #{}, StoreOpts]},
          restart => permanent, type => worker}
    ],
    {ok, {SupFlags, Children}}.
