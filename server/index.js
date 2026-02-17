
const express = require("express");
const user = require("./user.json");

const app = express();

app.get("/user", (req, res) => {
  res.json(user);
});

module.exports = app;

if (require.main === module) {
  app.listen(3001, () => console.log("Server running"));
}
