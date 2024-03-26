const dataModel = require("../models/dataModel");

async function renderView(req, res) {
  try {
    const data = await dataModel.getAllData();
    res.render("index", { data });
  } catch (error) {
    console.error("error retrieving data:", error);
    res.status(500).send("internal server error");
  }
}

module.exports = { renderView };
