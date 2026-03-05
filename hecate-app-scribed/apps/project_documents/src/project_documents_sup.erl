-module(project_documents_sup).
-behaviour(supervisor).

-export([start_link/0, init/1]).

start_link() ->
    supervisor:start_link({local, ?MODULE}, ?MODULE, []).

init([]) ->
    SupFlags = #{strategy => one_for_one, intensity => 10, period => 10},
    Children = [
        #{id => project_documents_store,
          start => {project_documents_store, start_link, []},
          restart => permanent, type => worker},
        worker(document_initiated_v1_to_documents),
        worker(document_renamed_v1_to_documents),
        worker(document_archived_v1_to_documents),
        worker(document_content_revised_v1_to_documents)
    ],
    {ok, {SupFlags, Children}}.

worker(Module) ->
    #{id => Module,
      start => {Module, start_link, []},
      restart => permanent, type => worker}.
