const mongoose = require("mongoose");
const DaySchema = require("./day_schema");
const Schema = mongoose.Schema;

const HabitSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  days: [DaySchema]
});

module.exports = HabitSchema;
