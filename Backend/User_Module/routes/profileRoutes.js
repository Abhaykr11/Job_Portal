const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

router.post("/", profileController.createUser);
router.get("/:id", profileController.getUser);
router.put("/:id", profileController.updateUser);

module.exports = router;
