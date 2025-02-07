const express = require("express");
const router = express.Router();
const applicationController = require(__dirname +
  "/../controllers/applicationController-R.js");
router.get("/", applicationController.getApplications);
router.get("/:id", applicationController.getApplicationById);
router.post("/", applicationController.createApplication);

router.patch("/:id", applicationController.updateApplicationStatus);
router.delete("/:id", applicationController.deleteApplication);
router.post(
  "/:id/send-interview-invitation",
  applicationController.sendInterviewInvitation
);
module.exports = router;
