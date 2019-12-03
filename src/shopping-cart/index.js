import React from "react";
import "./shopping-cart.css";
import { Link } from "react-router-dom";

function ShoppingCart () {
    return (
        <Link to="/checkout">Cart</Link>
    )
}

export default ShoppingCart;