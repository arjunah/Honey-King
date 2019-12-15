import React from "react";
import { Link } from "react-router-dom";
import Logo from "../static/honey-king-logo.png";

function LeftMenu () {
    return (
        <div className="left-container">
            <div className="logo">
                <img src={Logo} alt="Honey King"/>
            </div>
            <div className="left-menu">
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
        </div>
    )
}

export default LeftMenu;