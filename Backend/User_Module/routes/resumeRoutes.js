const express = require("express");
const router = express.Router();
const resumeController = require("../controllers/resumeController");

router.post("/upload", resumeController.uploadResume);
router.get("/:id", resumeController.getResume);
router.put("/:id", resumeController.updateResume);
router.delete("/:id", resumeController.deleteResume);

module.exports = router;
