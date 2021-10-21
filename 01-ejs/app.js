const express = require("express");
const morgen = require("morgan")
const app = express();

app.set("view engine", "ejs");

app.listen(3000);

// middelware & static files
app.use(express.static('public'))

app.use(morgen('dev'))



app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio deleniti quisquam aspernatur",
    },
    {
      title: "Mario finds star",
      snippet:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio deleniti quisquam aspernatur",
    },
    {
      title: "How to defeat bowser",
      snippet:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio deleniti quisquam aspernatur",
    },
  ];
  res.render("index", { title: "Home", blogs });
});



app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
