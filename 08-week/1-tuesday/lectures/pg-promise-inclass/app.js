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

app.get("/movies", async function(req, res) {
  let data = {};
  data.movies = await db.getMovies();
  res.render("movies", data);
});

// app.get("/movies", async function(req, res) {
//   db.getMovies().then(movies => {
//     let data = {};
//     data.movies = movies;
//     res.render("movies", data);
//   });
// });

app.get("/movies/:id", async function(req, res) {
  try {
    let data = {};
    if (req.session.user_id) data.isLoggedIn = true;
    data.movieId = req.params.id;
    // check if logged in
    data.movie = await db.getMovie(req.params.id);
    res.render("movie", data);
  } catch (e) {
    console.error(e);
    res.status(404);
    res.send("Movie not found");
  }
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
