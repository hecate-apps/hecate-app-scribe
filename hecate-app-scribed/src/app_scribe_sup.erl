%%% @doc Top-level supervisor for the Scribe in-VM plugin.
%%%
%%% Supervises:
%%%   - evoq_store_subscription for documents_store (event routing to projections)
%%%   - project_documents_sup (PRJ — ETS read model + merged projection)
%%%   - guide_document_lifecycle_sup (CMD)
%%%   - query_documents_sup (QRY)
%%%
%%% The store subscription MUST start after the projection supervisor
%%% (which registers handlers in the event type registry). Otherwise
%%% events replay before handlers are registered and get dropped.
%%% @end
-module(app_scribe_sup).
-behaviour(supervisor).

-export([start_link/0, init/1]).

start_link() ->
    supervisor:start_link({local, ?MODULE}, ?MODULE, []).

init([]) ->
    SupFlags = #{strategy => one_for_one, intensity => 10, period => 60},
    Children = [
        %% PRJ first — registers event type handlers
        #{id => project_documents_sup,
          start => {project_documents_sup, start_link, []},
          restart => permanent, type => supervisor},
        #{id => guide_document_lifecycle_sup,
          start => {guide_document_lifecycle_sup, start_link, []},
          restart => permanent, type => supervisor},
        #{id => query_documents_sup,
          start => {query_documents_sup, start_link, []},
          restart => permanent, type => supervisor},
        %% Store subscription LAST — routes events to registered handlers
        #{id => evoq_store_sub_documents_store,
          start => {evoq_store_subscription, start_link, [documents_store]},
          restart => permanent, type => worker}
    ],
    {ok, {SupFlags, Children}}.
