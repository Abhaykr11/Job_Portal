const express = require("express");
const router = express.Router();
const jobRoutesR = require(__dirname + "/jobRoutes-R.js");
const applicationRoutesR = require(__dirname + "/applicationRoutes-R.js");
const candidateInteractionRoutes = require(__dirname +
  "/candidateInteractionRoutes.js");
router.use("/jobs", jobRoutesR);
router.use("/applications", applicationRoutesR);
router.use("/applications", candidateInteractionRoutes);
module.exports = router;
