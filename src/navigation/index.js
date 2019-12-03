import React from "react";
import "./navigation.css";
import MenuLinks from "../menu-links";
import ProfileLink from "../profile-link";
import ShoppingCart from "../shopping-cart";

function Navigation () {
    return (
        <nav className="Navigation">
            <div className="nav-links">
                <MenuLinks />
            </div>
            <div className="nav-userinfo">
                <ProfileLink />
                <ShoppingCart />
            </div>
        </nav>
    )
}

export default Navigation;