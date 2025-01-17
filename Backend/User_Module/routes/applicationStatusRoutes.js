const express = require("express");
const router = express.Router();
const applicationStatusController = require(__dirname +
  "/../controllers/applicationStatusController.js");

router.get("/:candidateId", applicationStatusController.getApplicationStatus);

router.put("/:id", applicationStatusController.updateApplicationStatus);

module.exports = router;
