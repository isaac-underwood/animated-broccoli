import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

const DEBOUNCE_TIME: number = 100;

export interface SearchInputProps extends React.ComponentPropsWithoutRef<"input"> {
    onChangeCallback: (value: string) => void;
}
function SearchInput({ onChangeCallback, ...props }: SearchInputProps) {
    const [searchValue, setSearchValue] = useState<string>("");
    const debouncedSearchValue = useDebounce(searchValue, DEBOUNCE_TIME);

    useEffect(() => {
        if (debouncedSearchValue) {
            onChangeCallback(debouncedSearchValue);
        }
    }, [debouncedSearchValue, onChangeCallback]);

    function handleSearchInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setSearchValue(event.target.value);
    }

    return (
        <input
            aria-label={props["aria-label"]}
            className={props.className}
            type={props.type}
            placeholder={props.placeholder}
            onChange={handleSearchInputChange}
        />
    );
}

export default SearchInput;
