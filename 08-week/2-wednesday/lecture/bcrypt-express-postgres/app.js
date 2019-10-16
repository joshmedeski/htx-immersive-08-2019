const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();

app.use(
  session({
    secret: "whatever we want, as long as no one else knows what it is",
    resave: false,
    saveUninitialized: true
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "pug");

// other code goes here

app.listen(3000);
