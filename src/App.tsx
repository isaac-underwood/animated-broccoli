import React from "react";
import { Routes, Route } from "react-router-dom";
import Search from "./templates/Search";
import "./App.css";
import Navigation from "./organisms/Navigation";
import { SearchContext } from "./SearchContext";
import Landing from "./templates/Landing";

function App() {
    return (
        <div className="h-screen">
            <Navigation />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </div>
    );
}

export default App;
