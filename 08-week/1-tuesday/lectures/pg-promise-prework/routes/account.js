const express = require("express");
const router = express.Router();

function loginRedirect(req, res, next) {
  if (req.session.name) {
    res.redirect("/account/dashboard");
  } else {
    next();
  }
}

function authenticate(req, res, next) {
  // if not logged in, go to login page
  if (!req.session.name) {
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
  res.render("account/login");
});

router.get("/logout", function(req, res) {
  req.session.destroy();
  res.redirect("/account/login");
});

router.post("/login", function(req, res) {
  console.log(req.body);
  if (req.session) {
    console.log("session is working");
    req.session.name = req.body.name;
  }
  // check if user's email and password are valid
  // save login state for browser
  res.redirect("/account/dashboard");
});

module.exports = router;
