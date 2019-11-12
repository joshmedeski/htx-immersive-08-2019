var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(_, res) {
  res.json(["Josh", "Summer", "Angelo", "Steven"]);
});

module.exports = router;
