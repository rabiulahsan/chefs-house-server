const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const allCehf = require("./data/all-chefs-data.json");
const chefsData = require("./data/chefs-recipe-data.json");

// app.get("/", (req, res) => {
//   res.send("server is running");
// });

app.get("/", (req, res) => {
  res.send(allCehf);
});

app.get("/chefs", (req, res) => {
  res.send(chefsData);
});

app.listen(port, () => {
  console.log(`Chefs House API is running on port: ${port}`);
});
