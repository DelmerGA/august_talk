var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override");



var books = [
  { title: "Alice's Adventures in Wonderland",
    author: "Lewis Carol"
  },
  {
    title: "The Lion, the Witch, and the Wardrobe",
    author: "C.S. Lewis"
  },
  {
    author: "Upton Sinclair",
    title: "The Jungle"
  },
  {
    author: "Sinclair Lewis",
    title: "Main Street"
  }
];

//app.engine("html", require("ejs").renderFile)
app.set("view_engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", function(req, res) {
  res.render("books/index.ejs", {books: books});
});

app.get("/books", function(req, res) {
  res.render("books/index.ejs", {books: books});
});


// books new
app.get("/books/new", function (req, res) {
  var locals  = { 
                  book: {}, 
                  method: "",
                  id: ''
                }
  res.render("books/new.ejs", locals);
});

// books create
app.post("/books", function (req, res) {
  console.log(req.body.book);
  books.push(req.body.book);
  res.redirect("/");
});


// edit method
app.get("/books/:id/edit", function (req, res) {
  console.log(books[req.params.id]);
  var id = req.params.id;
  var locals = {
                book: books[id],
                method: "_method=put",
                id: id
                };

  res.render("books/edit.ejs", locals)
});

// update method
app.put("/books/:id", function (req, res) {
  console.log(req.params, req.body)
  console.log(books[req.params.id]);
  books[req.params.id] = req.body.book;
  res.redirect("/");
});

app.listen(3000, function() {
  console.log("app running ");
});