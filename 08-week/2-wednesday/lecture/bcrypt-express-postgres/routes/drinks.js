const express = require("express");
const router = express.Router();
const db = require("../helpers/database");

router.post("/", async (req, res) => {
  let ingredients = req.body.ingredients.split(",").map(i => i.trim());
  // insert into database
  let newDrink = await db.createDrink(
    req.body.name,
    JSON.stringify(ingredients),
    req.body.cat
  );
  res.redirect(`/drinks/${newDrink.id}`);
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
