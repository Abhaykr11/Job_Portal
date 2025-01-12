const express = require("express");
const router = express.Router();
const jobRoutesR = require(__dirname + "/jobRoutes-R.js");
const applicationRoutesR = require(__dirname + "/applicationRoutes-R.js");

router.use("/jobs", jobRoutesR);
router.use("/applications", applicationRoutesR);

module.exports = router;
