import React, { Fragment } from "react";
import Product from "../product";

function HoneyProducts ({ product }) {

    const products = [
        {
            id: 1,
            name: "Herbal Mix",
            description: "Honey from garden herbs.",
            quantity: 3,
            price: 10,
            type: "honey",
            imageURL: "https://png2.cleanpng.com/sh/7e49e2b4ce807c07b4a6b6361c847203/L0KzQYm3UsAzN6NBfZH0aYP2gLBuTfhwdpZARdh1YYbygn7vjB5mgV51htk2dILkfsT3ggJmdqUygd9qZ3WwRbKAVPFiOJI8T9Y8ZUCxQ4eBUsI2O2o2TaMCNUm4QYW9VMkxQF91htk=/kisspng-honey-flavor-honey-png-transparent-image-5a74aa0a77d3e0.3682253915175951464908.png"
        },
        {
            id: 2,
            name: "Herbal Mix",
            description: "Honey from garden herbs.",
            quantity: 3,
            price: 10,
            type: "honey",
            imageURL: "https://png2.cleanpng.com/sh/7e49e2b4ce807c07b4a6b6361c847203/L0KzQYm3UsAzN6NBfZH0aYP2gLBuTfhwdpZARdh1YYbygn7vjB5mgV51htk2dILkfsT3ggJmdqUygd9qZ3WwRbKAVPFiOJI8T9Y8ZUCxQ4eBUsI2O2o2TaMCNUm4QYW9VMkxQF91htk=/kisspng-honey-flavor-honey-png-transparent-image-5a74aa0a77d3e0.3682253915175951464908.png"
        },
        {
            id: 3,
            name: "Bee Pollen",
            description: "Honey from garden herbs.",
            quantity: 3,
            price: 10,
            type: "pollen",
            imageURL: "https://png2.cleanpng.com/sh/7e49e2b4ce807c07b4a6b6361c847203/L0KzQYm3UsAzN6NBfZH0aYP2gLBuTfhwdpZARdh1YYbygn7vjB5mgV51htk2dILkfsT3ggJmdqUygd9qZ3WwRbKAVPFiOJI8T9Y8ZUCxQ4eBUsI2O2o2TaMCNUm4QYW9VMkxQF91htk=/kisspng-honey-flavor-honey-png-transparent-image-5a74aa0a77d3e0.3682253915175951464908.png"
        },
        {
            id: 4,
            name: "Beeswax",
            description: "Honey from garden herbs.",
            quantity: 3,
            price: 10,
            type: "beeswax",
            imageURL: "https://png2.cleanpng.com/sh/7e49e2b4ce807c07b4a6b6361c847203/L0KzQYm3UsAzN6NBfZH0aYP2gLBuTfhwdpZARdh1YYbygn7vjB5mgV51htk2dILkfsT3ggJmdqUygd9qZ3WwRbKAVPFiOJI8T9Y8ZUCxQ4eBUsI2O2o2TaMCNUm4QYW9VMkxQF91htk=/kisspng-honey-flavor-honey-png-transparent-image-5a74aa0a77d3e0.3682253915175951464908.png"
        },
        {
            id: 5,
            name: "Herbal Mix",
            description: "Honey from garden herbs.",
            quantity: 3,
            price: 10,
            type: "honey",
            imageURL: "https://png2.cleanpng.com/sh/7e49e2b4ce807c07b4a6b6361c847203/L0KzQYm3UsAzN6NBfZH0aYP2gLBuTfhwdpZARdh1YYbygn7vjB5mgV51htk2dILkfsT3ggJmdqUygd9qZ3WwRbKAVPFiOJI8T9Y8ZUCxQ4eBUsI2O2o2TaMCNUm4QYW9VMkxQF91htk=/kisspng-honey-flavor-honey-png-transparent-image-5a74aa0a77d3e0.3682253915175951464908.png"
        },
        {
            id: 6,
            name: "Herbal Mix",
            description: "Honey from garden herbs.",
            quantity: 3,
            price: 10,
            type: "honey",
            imageURL: "https://png2.cleanpng.com/sh/7e49e2b4ce807c07b4a6b6361c847203/L0KzQYm3UsAzN6NBfZH0aYP2gLBuTfhwdpZARdh1YYbygn7vjB5mgV51htk2dILkfsT3ggJmdqUygd9qZ3WwRbKAVPFiOJI8T9Y8ZUCxQ4eBUsI2O2o2TaMCNUm4QYW9VMkxQF91htk=/kisspng-honey-flavor-honey-png-transparent-image-5a74aa0a77d3e0.3682253915175951464908.png"
        },
        {
            id: 7,
            name: "Bee Pollen",
            description: "Honey from garden herbs.",
            quantity: 3,
            price: 10,
            type: "pollen",
            imageURL: "https://png2.cleanpng.com/sh/7e49e2b4ce807c07b4a6b6361c847203/L0KzQYm3UsAzN6NBfZH0aYP2gLBuTfhwdpZARdh1YYbygn7vjB5mgV51htk2dILkfsT3ggJmdqUygd9qZ3WwRbKAVPFiOJI8T9Y8ZUCxQ4eBUsI2O2o2TaMCNUm4QYW9VMkxQF91htk=/kisspng-honey-flavor-honey-png-transparent-image-5a74aa0a77d3e0.3682253915175951464908.png"
        },
        {
            id: 8,
            name: "Propolis",
            description: "Honey from garden herbs.",
            quantity: 3,
            price: 10,
            type: "propolis",
            imageURL: "https://png2.cleanpng.com/sh/7e49e2b4ce807c07b4a6b6361c847203/L0KzQYm3UsAzN6NBfZH0aYP2gLBuTfhwdpZARdh1YYbygn7vjB5mgV51htk2dILkfsT3ggJmdqUygd9qZ3WwRbKAVPFiOJI8T9Y8ZUCxQ4eBUsI2O2o2TaMCNUm4QYW9VMkxQF91htk=/kisspng-honey-flavor-honey-png-transparent-image-5a74aa0a77d3e0.3682253915175951464908.png"
        }
    ];

    return (
        <Fragment>
            <h1>{product || "All Products"}</h1>
            <div className="HoneyProducts">
                <Product products={products} />
            </div>
        </Fragment>
    )
}

export default HoneyProducts;