import React from "react";

function HoneyProducts (props) {
    return (
        <div>
            <h1>Honey Products</h1>
            <p>{props.product || "All products."}</p>
        </div>
    )
}

export default HoneyProducts;