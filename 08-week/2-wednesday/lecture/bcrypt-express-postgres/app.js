const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const db = require("./helpers/database");
const app = express();

app.use(
  session({
    secret: "whatever we want, as long as no one else knows what it is",
    resave: false,
    saveUninitialized: true
  })
);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  let data = {};
  if (req.query.registeredSuccessfully) data.registeredSuccessfully = true;

  res.render("login", data);
});

app.post("/users", async (req, res) => {
  try {
    // check if email already exists
    let user = await db.checkForUser(req.body.email);
    if (user) {
      throw new Error("Issue with email or password");
    }
    // encrypt password
    bcrypt.hash(req.body.password, 10, (err, encrypted) => {
      if (err) throw err;
      // post to database
      db.createUser(req.body.email, encrypted);
      res.redirect("/login?registeredSuccessfully=true");
    });
  } catch (e) {
    res.send(e);
  }
});

app.listen(3000);
