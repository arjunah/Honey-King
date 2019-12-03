import React from "react";

function Footer () {
    const year = new Date().getFullYear();
    return (
        <footer className= "Footer">
            <p>All rights reserved. &copy; {year}, Honey King &trade;</p>         
        </footer>
    )
}

export default Footer;