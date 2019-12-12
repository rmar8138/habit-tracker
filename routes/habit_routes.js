const express = require("express");
const habitController = require("../controllers/habit_controller");
const router = express.Router();

router.get("/", habitController.index);

router.post("/", habitController.create);

module.exports = router;
