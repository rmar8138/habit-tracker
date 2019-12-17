const express = require("express");
const habitRoutes = require("./habit_routes");
const authRoutes = require("./auth_routes");
const router = express.Router();

router.use("/habits", habitRoutes);
router.use("/auth", authRoutes);

module.exports = router;
