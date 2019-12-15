import React, { Fragment, useState, useEffect } from "react";
import Product from "../product";
import { db, routes } from "../db-service";


function HoneyProducts ({ product }) {

    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);

    let url;
    switch (product) {
        case "Honey": url = routes.getHoney; break;
        case "Propolis": url = routes.getPropolis; break;
        case "Bee Pollen": url = routes.getPollen; break;
        case "Beeswax": url = routes.getBeeswax; break;
        default: url = routes.getProducts;
    }

    async function getProducts (url) {
        const items = await db.get(url);
        setProducts(items);
        setLoading(false);
    }
    
    useEffect(() => {
        getProducts(url)
    }, [url]);

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    } else {
        return (
            <Fragment>
                <h1>{product || "All Products"}</h1>
                <div className="HoneyProducts">
                    <Product products={products} />
                </div>
            </Fragment>
        )
    }
}

export default HoneyProducts;