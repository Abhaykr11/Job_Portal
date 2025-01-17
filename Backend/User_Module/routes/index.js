const express = require("express");
const router = express.Router();
const resumeRoutes = require("./resumeRoutes");
const profileRoutes = require("./profileRoutes");
const jobSearchRoutes = require("./jobSearchRoutes");
const applicationStatusRoutes = require("./applicationStatusRoutes");

router.use("/resumes", resumeRoutes);
router.use("/profiles", profileRoutes);
router.use("/job-search", jobSearchRoutes);
router.use("/application-status", applicationStatusRoutes);

module.exports = router;
