// Schema is a blueprint that will organize our data

// we are adding mongoose to this file
const mongoose = require("mongoose");

// we are creating a new book schema object.
const productSchema = new mongoose.Schema({
  name: { type: "string", required: true },
  description: { type: "string", required: true },
  img: { type: "string", required: true },
  price: { type: "string", required: true },
  qty: { type: "string", required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
