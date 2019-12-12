const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DaySchema = new Schema({
  day: {
    type: Date,
    required: true,
    default: Date.now
  },
  completed: {
    type: Boolean,
    required: true
  }
});

module.exports = DaySchema;
