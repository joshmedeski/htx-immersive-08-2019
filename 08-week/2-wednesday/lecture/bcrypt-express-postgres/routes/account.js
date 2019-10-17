const express = require("express");
const db = require("../helpers/database");
const router = express.Router();

function checkIsLoggedIn(req, res, next) {
  if (req.session.user_id) {
    next();
  } else {
    res.redirect("/login");
  }
}

router.use(doAnotherThing);
router.use(checkIsLoggedIn);

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

router.get("/drinks/edit/:id", async (req, res) => {
  let data = {};
  data.drink = await db.getDrink(req.params.id);
  data.drink.ingredients = data.drink.ingredients.join();
  data.categories = await db.getCategories();
  res.render("edit-drink", data);
});

router.post("/drinks/:id", async (req, res) => {
  try {
    await db.updateDrink(
      req.body.name,
      req.body.ingredients,
      req.body.cat,
      req.params.id
    );
    res.redirect(`/drinks/${req.params.id}`);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
