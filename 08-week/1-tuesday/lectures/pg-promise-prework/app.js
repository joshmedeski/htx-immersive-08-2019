const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const db = require("./database");
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

app.get("/movies", async (req, res) => {
  let movies = await db.getAllMovies();
  res.render("movies", { movies: movies });
});

app.get("/movies/:id", async (req, res) => {
  let movie = await db.getMovie(req.params.id);
  res.render("movie", { movie: movie });
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
