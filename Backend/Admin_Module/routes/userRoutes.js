// const express = require("express");
// const router = express.Router();
// const userController = require("../controllers/userController");
// router.post("/", userController.createUser);
// router.get("/", userController.getUsers);
// router.get("/:id", userController.getUser);
// router.put("/:id", userController.updateUser);
// router.delete("/:id", userController.deleteUser);
// module.exports = router;

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/", userController.createUser);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.post("/login", userController.login); // Added login route

module.exports = router;
