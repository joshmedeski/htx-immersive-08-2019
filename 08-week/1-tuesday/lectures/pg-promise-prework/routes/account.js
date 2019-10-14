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

// /account/dashboard
router.get("/dashboard", authenticate, async (req, res) => {
  let data = {};
  data.name = req.session.name || "buddy";
  data.favMovies = await db.getFavorites(req.session.user_id);
  res.render("account/dashboard", data);
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

router.get("/register", loginRedirect, function(req, res) {
  res.render("account/register");
});

router.post("/register", async (req, res) => {
  try {
    await db.registerUser(req.body.email, req.body.password);
    res.redirect("/account/login?registeredSuccessfully=true");
  } catch (e) {
    res.redirect("/account/registration?error=true");
    console.error(e);
  }
});

router.post("/favorites", async (req, res) => {
  try {
    await db.addToFavorites(req.body.movie_id, req.session.user_id);
    res.redirect("/account/dashboard");
  } catch (e) {
    console.error(e);
  }
});

router.get("/logout", function(req, res) {
  req.session.destroy();
  res.redirect("/account/login");
});

router.post("/login", async function(req, res) {
  let user = await db.login(req.body.email, req.body.password);
  if (req.session) {
    req.session.user_id = user.id;
  }
  // check if user's email and password are valid
  // save login state for browser
  res.redirect("/account/dashboard");
});

module.exports = router;
