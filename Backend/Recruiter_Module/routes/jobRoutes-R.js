// const express = require("express");
// const router = express.Router();
// const JobController = require(__dirname + "/../controllers/jobController-R.js");

// router.post("/", JobController.createJob);
// router.get("/", JobController.getJobs);
// router.get("/:id", JobController.getJobById);
// router.put("/:id", JobController.updateJob);
// router.delete("/:id", JobController.deleteJob);

// module.exports = router;

const express = require("express");
const router = express.Router();
const JobController = require(__dirname + "/../controllers/jobController-R.js");
router.post("/", JobController.createJob);
router.get("/", JobController.getJobs);
router.get("/:id", JobController.getJobById);
router.patch("/:id", JobController.updateJob);
router.delete("/:id", JobController.deleteJob);
module.exports = router;
