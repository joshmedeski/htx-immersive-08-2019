const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const port = 3000;
const app = express();
const accountRouter = require("./routes/account");

app.set("view engine", "pug");

app.use(
  session({
    secret: "whatever the heck we want because we can",
    resave: false,
    saveUninitialized: true
  })
);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/account", accountRouter);

app.get("/", function(req, res) {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

const movies = [
  { title: "Lord of the Rings", slug: "lotr" },
  { title: "Star Wars", slug: "starwars" },
  { title: "Pulp Fiction", slug: "pulpfiction" },
  { title: "The Ring", slug: "thering" },
  { title: "Coco", slug: "coco" },
  { title: "Up", slug: "up" },
  { title: "Finding Nemo", slug: "findingnemo" }
];

app.get("/movies", function(req, res) {
  res.render("movies", { movies: movies });
});

app.get("/movies/:movie", function(req, res) {
  let filteredMovies = movies.filter(movie => {
    return movie.slug === req.params.movie;
  });
  console.log(filteredMovies);
  if (filteredMovies.length < 1) {
    res.send("Movie not found");
  }
  res.render("movie", { movie: filteredMovies[0] });
});

app.get("/about/us", function(req, res) {
  res.render("about", { title: "Hey", message: "Hello there!" });
});

app.get("/dashboard", function(req, res) {
  res.render("dashboard");
});

app.listen(port, () => {
  console.log(`Port ${port} is running`);
});
