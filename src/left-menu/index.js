import React from "react";
import { Link } from "react-router-dom";

function LeftMenu () {
    return (
        <div className="LeftMenu">
            <Link to="/">Honey Products</Link>
            <ul className="product-list-menu">
                <Link to="/honey">Honey</Link>
                <Link to="/propolis">Propolis</Link>
                <Link to="/pollen">Bee Pollen</Link>
                <Link to="/beeswax">Beeswax</Link>
            </ul>
            <Link to="/delivery">Orders &amp; Delivery</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/about">About Us</Link>
        </div>
    )
}

export default LeftMenu;