const express = require("express");
const db = require("../helpers/database");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("account");
});

router.get("/drinks/new", async (req, res) => {
  try {
    let data = {};
    data.categories = await db.getCategories();
    res.render("new-drink", data);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
