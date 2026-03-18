-define(DOC_INITIATED, 1).   %% 2^0
-define(DOC_RENAMED,   2).   %% 2^1
-define(DOC_ARCHIVED,  4).   %% 2^2
-define(DOC_REVISED,   8).   %% 2^3
-define(DOC_MOVED,    16).   %% 2^4
-define(DOC_STARRED,  32).   %% 2^5

-define(DOC_FLAG_MAP, #{
    ?DOC_INITIATED => <<"Initiated">>,
    ?DOC_RENAMED   => <<"Renamed">>,
    ?DOC_ARCHIVED  => <<"Archived">>,
    ?DOC_REVISED   => <<"Revised">>,
    ?DOC_MOVED     => <<"Moved">>,
    ?DOC_STARRED   => <<"Starred">>
}).
