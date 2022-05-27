const express = require("express");

const { UserController } = require("../controllers");

const router = express.Router();

router.get("/", UserController.browse);
router.get("/:id", UserController.read);
router.put("/:id", UserController.edit);
router.post("/", UserController.add);
router.delete("/:id", UserController.delete);

module.exports = router;
