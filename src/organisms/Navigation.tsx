import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="h-14 flex px-8 py-4 absolute">
            <Link to="/">Animated Broccoli</Link>
        </nav>
    );
}

export default Navigation;
