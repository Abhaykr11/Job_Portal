// const express = require("express");
// const router = express.Router();
// const candidateInteractionController = require("../controllers/candidateInteractionController");

// router.post(
//   "/applications/:id/invite",
//   candidateInteractionController.sendInterviewInvitation
// );
// router.post(
//   "/applications/:id/feedback",
//   candidateInteractionController.provideFeedback
// );

// module.exports = router;
const express = require("express");
const router = express.Router();
const candidateInteractionController = require(__dirname +
  "/../controllers/candidateInteractionController.js");

router.post(
  "/:applicationId/send-interview-invitation",
  candidateInteractionController.sendInterviewInvitation
);

router.post(
  "/:applicationId/provide-feedback",
  candidateInteractionController.provideFeedback
);

router.get(
  "/:applicationId/interactions",
  candidateInteractionController.getCandidateInteractions
);

module.exports = router;
