const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
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

app.post("/users", async (req, res) => {
  try {
    // check if email already exists
    let user = await db.checkForUser(req.body.email);
    if (user) {
      throw new Error("Issue with email or password");
    }
    // encrypt password
    // post to database
  } catch (e) {
    res.send(e);
  }
});

app.listen(3000);
