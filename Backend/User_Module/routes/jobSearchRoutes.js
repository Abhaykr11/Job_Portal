const express = require("express");
const router = express.Router();
const jobSearchController = require("../controllers/jobSearchController");

router.get("/", jobSearchController.getJobs);
router.get("/filter", jobSearchController.filterJobs);
router.get("/:id([0-9a-fA-F]{24})", jobSearchController.getJobById);
router.post("/favorite", jobSearchController.saveFavoriteJob);
router.post("/alert", jobSearchController.setJobAlert);

module.exports = router;
