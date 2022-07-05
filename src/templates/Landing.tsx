import React, { useCallback, useContext, useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
import SearchInput from "../atoms/SearchInput";
import { SearchContext } from "../SearchContext";

function Landing() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState<string>("");

    const onSearchInputChange = useCallback((value: string) => {
        setSearchTerm(value);
    }, []);

    const handleSearchButtonClick = useCallback(() => {
        navigate({
            pathname: "/search",
            search: `?${createSearchParams({ q: searchTerm })}`,
        });
    }, [navigate, searchTerm]);

    return (
        <header className="h-[100%] px-4 flex flex-col gap-8 justify-center items-center grow md:shrink-0 mx-auto text-center">
            <h1 className="text-4xl">Search for a song to uncover awesomeness.</h1>
            <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
                Search
            </label>
            <div className="relative min-w-[61.8%] md:max-w-[720px] w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
                <SearchInput
                    className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChangeCallback={onSearchInputChange}
                    placeholder="Type a song name"
                />
                <button
                    type="submit"
                    onClick={handleSearchButtonClick}
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Search
                </button>
            </div>
        </header>
    );
}

export default Landing;
