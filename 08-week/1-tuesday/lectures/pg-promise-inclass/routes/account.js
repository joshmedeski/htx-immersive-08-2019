const express = require("express");
const router = express.Router();
const db = require("../database");

function loginRedirect(req, res, next) {
  if (req.session.user_id) {
    res.redirect("/account/dashboard");
  } else {
    next();
  }
}

function authenticate(req, res, next) {
  // if not logged in, go to login page
  if (!req.session.user_id) {
    res.redirect("/account/login");
  } else {
    // otherwise continue what you were doing
    next();
  }
}

// URI: /account/
router.get("/", authenticate, (req, res) => {
  res.render("account/account");
});

router.get("/registration", (req, res) => {
  res.render("account/registration");
});

router.post("/new", async (req, res) => {
  try {
    // create user
    await db.createUser(req.body.email, req.body.password);
    res.redirect("/account/login?registeredSuccessfully=true");
  } catch (e) {
    console.error(e);
    res.send(e);
  }
});

// /account/dashboard
router.get("/dashboard", authenticate, (req, res) => {
  if (!req.session.favMovies) req.session.favMovies = [];
  res.render("account/dashboard", {
    favMovies: req.session.favMovies,
    name: req.session.name || "buddy"
  });
});

router.get("/settings", authenticate, (req, res) => {
  res.render("account/settings");
});

router.post("/add", authenticate, (req, res) => {
  if (req.session) {
    req.session.favMovies.push({ title: req.body.title });
  }
  res.redirect("/account/dashboard");
});

router.get("/login", loginRedirect, function(req, res) {
  let data = {};
  if (req.query.registeredSuccessfully) data.registeredSuccessfully = true;
  res.render("account/login", data);
});

router.get("/logout", function(req, res) {
  req.session.destroy();
  res.redirect("/account/login");
});

router.post("/login", async function(req, res) {
  try {
    // check that user exists with email
    let user = await db.findUser(req.body.email);
    if (!user) throw new Error("No user found, please try again");
    // check that password matches db password
    if (user.password == req.body.password) {
      // save user's info to session
      req.session.user_id = user.id;
      res.redirect("/account/dashboard");
    } else {
      throw new Error("Login failed, check your username and password");
    }
  } catch (e) {
    console.error(e);
    res.send(e);
  }
});

module.exports = router;
