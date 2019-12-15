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
            <div key={product._id} className="Product">
                <img src={product.imageURL} alt="Honey Product"/>
                <div className="ProductInfo">
                    <h2 className="ProductName">{product.name}</h2>
                    <div className={statusClass}>{status}</div>
                    <div className="PriceWrapper">
                        <div className="ProductPrice">{product.price} BGN</div>
                        <button className="BuyButton">Buy</button>
                    </div>
                </div>
            </div>
        )
    })
    return productList;
}

export default Product;