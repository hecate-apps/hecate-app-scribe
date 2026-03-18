-module(project_documents_store_tests).
-include_lib("eunit/include/eunit.hrl").

%% Test the store module can be compiled and its API is correct.

module_exports_test() ->
    Exports = project_documents_store:module_info(exports),
    ?assert(lists:member({start_link, 0}, Exports)),
    ?assert(lists:member({list_documents, 0}, Exports)),
    ?assert(lists:member({get_document, 1}, Exports)),
    ?assert(lists:member({get_document_by_file_id, 1}, Exports)),
    ?assert(lists:member({put_document, 2}, Exports)),
    ?assert(lists:member({delete_document, 1}, Exports)).
