import React from "react";
import "./menu-links.css";
import { Link } from "react-router-dom";

function MenuLinks () {
    return (
        <ul>
            <Link to="/">Honey Products</Link>
            <Link to="login/">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/logout">Logout</Link>
        </ul>
    )
}

export default MenuLinks;