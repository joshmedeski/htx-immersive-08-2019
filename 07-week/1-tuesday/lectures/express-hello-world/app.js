const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello People");
});

// /movies?sort=asc&by=title
app.get("/movies", (req, res) => {
  console.log(req.query.sort);
  console.log(req.query.by);
  res.json([
    { title: "Lord of the Rings", year: 2001 },
    { title: "Star Wars", year: 1977 }
  ]);
});

app.get("/genres", (req, res) => {
  res.json(["Action", "Horror", "Thriller", "Comedy"]);
});

app.get("/genres/:genre", (req, res) => {
  res.send(`${req.param.genre} movies`);
});

app.post("/movies", (req, res) => {
  console.log(req.body);
  res.send(`${req.body.title} added successfully`);
});

app.listen(PORT, () => {
  console.log(`Express application is running on port ${PORT}`);
});
