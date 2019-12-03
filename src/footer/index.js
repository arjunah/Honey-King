import React from "react";
import "./footer.css"

function Footer () {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>All rights reserved. &copy; {year}, Honey King &trade;</p>         
        </footer>
    )
}

export default Footer;