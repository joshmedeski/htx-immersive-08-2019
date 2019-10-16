const express = require("express");
const router = express.Router();
const db = require("../helpers/database");

router.post("/", async (req, res) => {
  let newDrink = await db.createDrink(
    req.body.name,
    req.body.ingredients,
    req.body.cat,
    req.session.user_id
  );
  res.redirect(`/drinks/${newDrink.id}`);
});

router.get("/", async (req, res) => {
  try {
    let data = {};
    data.drinks = await db.getDrinks();
    res.render("drinks", data);
  } catch (e) {
    res.send(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let data = {};
    data.drink = await db.getDrink(req.params.id);
    res.render("drink", data);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
