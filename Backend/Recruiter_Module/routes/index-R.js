const express = require("express");
const router = express.Router();
const jobRoutesR = require(__dirname + "/jobRoutes-R.js");

router.use("/jobs", jobRoutesR);

module.exports = router;
