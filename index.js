const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const allCehf = require("./data/all-chefs-data.json");
const chefsData = require("./data/chefs-recipe-data.json");

app.get("/", (req, res) => {
  res.send(allCehf);
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = chefsData.filter((n) => n.chef_id === id);
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`Chefs House API is running on port: ${port}`);
});
