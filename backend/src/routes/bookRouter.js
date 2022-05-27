const express = require("express");

const { BookController } = require("../controllers");

const router = express.Router();

router.get("/", BookController.browse);
router.get("/:id", BookController.read);
router.put("/:id", BookController.edit);
router.post("/", BookController.add);
router.delete("/:id", BookController.delete);

module.exports = router;
