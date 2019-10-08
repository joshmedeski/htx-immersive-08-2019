const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(express.static("assets"));
app.use(bodyParser.json());
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { title: "Pug", message: "Welcome to Pug!" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});

app.listen(port, () => console.log(`App running on port ${port}`));
