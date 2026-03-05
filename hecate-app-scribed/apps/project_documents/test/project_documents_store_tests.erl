-module(project_documents_store_tests).
-include_lib("eunit/include/eunit.hrl").

%% Test the store module can be compiled and its API is correct.
%% Full integration tests require the application running.

module_exports_test() ->
    Exports = project_documents_store:module_info(exports),
    ?assert(lists:member({start_link, 0}, Exports)),
    ?assert(lists:member({execute, 1}, Exports)),
    ?assert(lists:member({execute, 2}, Exports)),
    ?assert(lists:member({query, 1}, Exports)),
    ?assert(lists:member({query, 2}, Exports)).
