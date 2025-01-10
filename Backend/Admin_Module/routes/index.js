// const express = require("express");
// const router = express.Router();
// const userRoutes = require("./userRoutes");
// const jobRoutes = require("./jobRoutes");

// router.use("/users", userRoutes);
// router.use("/jobs", jobRoutes);

// module.exports = router;

// Admin_Module/routes/index.js
const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes");
const jobRoutes = require("./jobRoutes");
const settingRoutes = require("./settingRoutes");

router.use("/users", userRoutes);
router.use("/jobs", jobRoutes);
router.use("/settings", settingRoutes);

module.exports = router;
