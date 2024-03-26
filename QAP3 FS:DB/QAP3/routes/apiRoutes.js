const express = require("express");
const apiController = require("../controllers/apiController");
const viewController = require("../controllers/viewController");

const router = express.Router();

router.get("/data", apiController.getData);
router.post("/data", apiController.createData);
router.put("/data/:id", apiController.updateData);
router.patch("/data/:id", apiController.partialUpdateData);
router.delete("/data/:id", apiController.deleteData);

router.get("/", viewController.renderView);

module.exports = router;
