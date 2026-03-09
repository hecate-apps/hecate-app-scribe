%%% @doc Top-level supervisor for the Scribe in-VM plugin.
%%%
%%% Supervises domain application supervisors:
%%%   - project_documents_sup (PRJ — SQLite read model + projections)
%%%   - guide_document_lifecycle_sup (CMD — currently empty, reserved)
%%%   - query_documents_sup (QRY — currently empty, reserved)
%%% @end
-module(app_scribe_sup).
-behaviour(supervisor).

-export([start_link/0, init/1]).

start_link() ->
    supervisor:start_link({local, ?MODULE}, ?MODULE, []).

init([]) ->
    SupFlags = #{strategy => one_for_one, intensity => 10, period => 60},
    Children = [
        #{id => project_documents_sup,
          start => {project_documents_sup, start_link, []},
          restart => permanent, type => supervisor},
        #{id => guide_document_lifecycle_sup,
          start => {guide_document_lifecycle_sup, start_link, []},
          restart => permanent, type => supervisor},
        #{id => query_documents_sup,
          start => {query_documents_sup, start_link, []},
          restart => permanent, type => supervisor}
    ],
    {ok, {SupFlags, Children}}.
