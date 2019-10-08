const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello People");
});

app.listen(PORT, () => {
  console.log(`Express application is running on port ${PORT}`);
});
