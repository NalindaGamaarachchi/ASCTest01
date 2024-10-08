const express = require("express");
const router = express.Router();
const fileController = require("../controllers/fileController");

// Define routes for CRUD operations
router.get("/", fileController.getAllFiles);
router.post("/", fileController.createFile);
router.put("/:id", fileController.updateFile);
router.delete("/:id", fileController.deleteFile);

module.exports = router;
