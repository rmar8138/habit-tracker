const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;

const DaySchema = new Schema({
  day: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  }
});

module.exports = DaySchema;
