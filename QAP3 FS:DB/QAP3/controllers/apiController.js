const dataModel = require("../models/dataModel");

async function getData(req, res) {
  try {
    const data = await dataModel.getAllData();
    res.json(data);
  } catch (error) {
    console.error("error retrieving data:", error);
    res.status(500).json({ error: "internal server error" });
  }
}

async function createData(req, res) {
  try {
    const newData = req.body;

    const createdData = await dataModel.createData(newData);

    res.json(createdData);
  } catch (error) {
    console.error("error creating data:", error);
    res.status(500).json({ error: "internal server error" });
  }
}

async function updateData(req, res) {
  try {
    const id = req.params.id;

    const updatedData = req.body;

    await dataModel.updateData(id, updatedData);

    res.json({ message: "data updated successfully" });
  } catch (error) {
    console.error("error updating data:", error);
    res.status(500).json({ error: "internal server error" });
  }
}

async function partialUpdateData(req, res) {
  try {
    const id = req.params.id;

    const partialUpdateData = req.body;

    await dataModel.partialUpdateData(id, partialUpdateData);

    res.json({ message: "data partially updated successfully" });
  } catch (error) {
    console.error("error partially updating data:", error);
    res.status(500).json({ error: "internal server error" });
  }
}

async function deleteData(req, res) {
  try {
    const id = req.params.id;

    await dataModel.deleteData(id);

    res.json({ message: "data deleted successfully" });
  } catch (error) {
    console.error("error deleting data:", error);
    res.status(500).json({ error: "internal server error" });
  }
}

module.exports = {
  getData,
  createData,
  updateData,
  partialUpdateData,
  deleteData,
};
