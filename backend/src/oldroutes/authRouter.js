const express = require("express");
const { AuthController } = require("../controllers");

const router = express.Router();

router.post("/signup", AuthController.signup);
router.post("/login", AuthController.login);
// router.post("/logout", AuthController.logout);

module.exports = router;
