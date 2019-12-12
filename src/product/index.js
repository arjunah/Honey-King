import React from "react";

function Product ({ products }) {
    const productList = products.map(product => {
        return (
            <div key={product.id} className="Product">
                <img src={product.imageURL} alt="Honey Product"/>
                <div className="ProductInfo">
                    <h2 className="ProductName">{product.name}</h2>
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