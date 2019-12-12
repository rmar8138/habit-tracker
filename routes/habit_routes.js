const express = require("express");
const habitController = require("../controllers/habit_controller");
const router = express.Router();

router.get("/", habitController.index);

router.post("/", habitController.create);

router.get("/:id", habitController.show);

router.put("/:id", habitController.update);

router.delete("/:id", habitController.destroy);

module.exports = router;
