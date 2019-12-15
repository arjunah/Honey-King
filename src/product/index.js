import React from "react";

function Product ({ products }) {
    const productList = products.map(product => {
        let status;
        let statusClass;
        if (product.quantity === 0) {
            status = "OUT OF STOCK";
            statusClass = "out-of-stock";
        } else if (product.quantity > 0 && product.quantity <= 10) {
            status = "FEW IN STOCK";
            statusClass = "few-in-stock";
        } else {
            status = "IN STOCK";
            statusClass = "in-stock";
        }
        return (
            <div key={product._id} className="product">
                <img src={product.imageURL} alt="Honey Product"/>
                <div className="product-info">
                    <h2 className="product-name">{product.name}</h2>
                    <div className={statusClass}>{status}</div>
                    <div className="price-wrapper">
                        <div className="product-price">{product.price} BGN</div>
                        <button className="buy-button">Buy</button>
                    </div>
                </div>
            </div>
        )
    })
    return productList;
}

export default Product;