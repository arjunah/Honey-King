const { model, Schema } = require("mongoose");
const { validateURLProtocol } = require("./validators");

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Product name is required!"],
            minlength: [3, "The product name must be at least 3 characters!"]
        },
        description: {
            type: String,
            required: [true, "Description is required!"],
            maxlength: [500, "Description cannot be longer than 500 characters!"]
        },
        imageURL: {
            type: String,
            required: [true, "Image is required!"],
            validate: [validateURLProtocol, "The image URL is not valid!"]
        },
        price: {
            type: Number,
            required: [true, "Price is required!"],
            min: [0, "Price cannot be a negative number!"]
        },
        quantity: {
            type: Number,
            required: [true, "Quantity is required!"],
            min: [0, "Quantity cannot be a negative number!"]
        },
        type: {
            type: String,
            required: [true, "Product type is required!"],
            minlength: [3, "The product type must be at least 3 characters!"]
        }
    });

const Product = model("Product", productSchema);

module.exports = Product;