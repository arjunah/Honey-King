import React from "react";
import { Link } from "react-router-dom";

function LeftMenu () {
    return (
        <div className="LeftMenu">
            <Link to="/">Honey Products</Link>
            <ul className="product-list-menu">
                <Link to="/">Honey</Link>
                <Link to="/">Propolis</Link>
                <Link to="/">Bee Pollen</Link>
                <Link to="/">Beeswax</Link>
            </ul>
            <Link to="/delivery">Orders &amp; Delivery</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/about">About Us</Link>
        </div>
    )
}

export default LeftMenu;