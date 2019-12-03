import React, { Fragment } from "react";
import "./menu-links.css";
import { Link } from "react-router-dom";

function MenuLinks () {
    return (
        <Fragment>
            <Link to="/">Honey Products</Link>
            <Link to="login/">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/logout">Logout</Link>
        </Fragment>
    )
}

export default MenuLinks;