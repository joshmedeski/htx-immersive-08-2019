const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const accountRouter = require("./routes/account");
const drinksRouter = require("./routes/drinks");
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

app.use("/account", accountRouter);
app.use("/drinks", drinksRouter);

app.get("/login", (req, res) => {
  let data = {};
  if (req.query.registeredSuccessfully) data.registeredSuccessfully = true;
  if (req.query.loggedOutSuccessfully) data.loggedOutSuccessfully = true;
  res.render("login", data);
});

app.get("/logout", (req, res) => {
  let data = {};
  req.session.destroy();
  res.redirect("/login?loggedOutSuccessfully=true");
});

app.post("/login", async (req, res) => {
  try {
    // check user exists in db
    let dbUser = await db.checkForUser(req.body.email);
    console.log(dbUser);
    if (!dbUser) throw new Error("Login failed");
    bcrypt.compare(req.body.password, dbUser.password, (err, same) => {
      if (err) throw err;
      // check the password matches
      if (!same) throw new Error("Incorrect password");
      // login and redirect (save user_id to session, go to dashboard)
      console.log("DB USER ID", dbUser.id);
      req.session.user_id = dbUser.id;
      res.redirect("/account");
    });
  } catch (e) {
    res.send(e);
  }
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
