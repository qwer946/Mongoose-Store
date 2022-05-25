// Dependencies
const express = require("express");
const app = express();
require("dotenv").config();
// need to download npm mongoose step 2
const mongoose = require("mongoose");
// after we complete our schema we plug this in
const Book = require("./models/products");
// Database Connection step 2
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// step 2 to make sure your database is connected
// Database Connection Error/Success
// Define callback functions for various events
const db = mongoose.connection;
db.on("error", (err) => console.log(err.message + " is mongo not running?"));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));

// Middleware
// Body parser middleware: give us access to req.body
// step 3
app.use(express.urlencoded({ extended: true }));

// Create
// step 3 we are creating a route to say "recieved"
app.post("/books", (req, res) => {
  if (req.body.completed === "on") {
    //if checked, req.body.completed is set to 'on'
    req.body.completed = true;
  } else {
    //if not checked, req.body.completed is undefined
    req.body.completed = false;
  }
  // it is a function in mongoose, so we create Book
  Book.create(req.body, (error, createdBook) => {
    res.redirect("/books");
  });

  //   //   res.send(req.body);
});

// Routes / Controllers

// step 4 create a new route
// New
// create a new route
app.get("/books/new", (req, res) => {
  res.render("new.ejs");
});

// step 5 make a forEach loop in the index.ejs
// Index
// Creating a index route
app.get("/books", (req, res) => {
  Book.find({}, (error, allBooks) => {
    res.render("index.ejs", {
      books: allBooks,
    });
  });
});
// Seed DATA

// Routes / Controllers

// Seed

// Show
app.get("/books/:id", (req, res) => {
  Book.findById(req.params.id, (err, foundBook) => {
    res.render("show.ejs", {
      book: foundBook,
    });
  });
});
// Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server listening on port: ${PORT}`));
