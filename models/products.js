// Schema is a blueprint that will organize our data

// we are adding mongoose to this file
const mongoose = require("mongoose");

// we are creating a new book schema object.
const storeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  img: { type: String },
  price: { type: Number, min: 0 },
  qty: { type: Number, min: 0 },
});

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
