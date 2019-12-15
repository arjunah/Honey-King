import React from "react";
import ProfileLink from "../profile-link";
import ShoppingCart from "../shopping-cart";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="navigation">
            <div className="nav-links">
                <Link to="/">Honey Products</Link>
                <Link to="/delivery">Orders &amp; Delivery</Link>
                <Link to="/contacts">Contacts</Link>
                <Link to="/about">About Us</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </div>
            <div className="nav-userinfo">
                <Link to="/logout">Logout</Link>
                <ProfileLink />
                <ShoppingCart />
            </div>
        </nav>
    )
}

export default Navigation;