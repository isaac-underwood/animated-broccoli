import React from "react";
import { useSearchParams } from "react-router-dom";

export const SearchContext = React.createContext(useSearchParams);
