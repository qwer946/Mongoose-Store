// Schema is a blueprint that will organize our data

// we are adding mongoose to this file
const mongoose = require("mongoose");

// we are creating a new book schema object.
const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  img: String,
  price: Number,
  qty: Number,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
