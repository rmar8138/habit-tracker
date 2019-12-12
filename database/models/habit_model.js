const mongoose = require("mongoose");
const HabitSchema = require("../schemas/habit_schema");

const HabitModel = mongoose.model("habit", HabitSchema);

module.exports = HabitModel;
