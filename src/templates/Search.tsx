import React from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

function Search() {
    const state = useLocation();
    const [searchParamsValue, setSearchParamsValue] = useSearchParams(state.search);

    return <div>
        test
    </div>;
}

export default Search;
