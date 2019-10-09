const express = require("express");
const port = 3000;
const app = express();

app.set("view engine", "pug");

app.get("/", function(req, res) {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

app.listen(port, () => {
  console.log(`Port ${port} is running`);
});
