import React from "react";
import { Link } from "react-router-dom";

function Footer () {
    const year = new Date().getFullYear();
    return (
        <footer className= "Footer">
            <p className="footer-links">
                <Link to="/">Honey Products</Link>
                <Link to="/delivery">Orders &amp; Delivery</Link>
                <Link to="/contacts">Contacts</Link>
                <Link to="/about">About Us</Link>
            </p>
            <p>All rights reserved. &copy; {year}, Honey King &trade;</p>         
        </footer>
    )
}

export default Footer;