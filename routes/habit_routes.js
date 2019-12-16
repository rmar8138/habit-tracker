const express = require("express");
const habitController = require("../controllers/habit_controller");
const dayController = require("../controllers/day_controller");
const router = express.Router();

router.get("/", habitController.index);

router.post("/", habitController.create);

router.post("/:id/completed", dayController.completed);

router.get("/:id", habitController.show);

router.put("/:id", habitController.update);

router.delete("/:id", habitController.destroy);

router.delete("/:habitId/:dayId", dayController.destroy);

module.exports = router;
