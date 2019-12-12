const express = require("express");
const habitRoutes = require("./habit_routes");
const router = express.Router();

router.use("/habits", habitRoutes);

module.exports = router;
