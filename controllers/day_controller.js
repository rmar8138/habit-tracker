const moment = require("moment");
const HabitModel = require("../database/models/habit_model");

const completed = async (req, res) => {
  console.log("this ran");
  const { id: habitId } = req.params;
  const todayFormatted = moment(Date.now()).format("MMM Do YY");

  const habit = await HabitModel.findById(habitId);

  // only completed new day if todays date doesn't exist
  const todayExists = habit.days.filter(day => {
    return todayFormatted === day.day;
  }).length;

  console.log(todayExists);

  if (todayExists) {
    res.status(400).json("Today has already been tracked!");
  } else {
    habit.days.push({ day: todayFormatted, completed: true });
    await habit.save();

    res.json(habit);
  }
};

module.exports = {
  completed
};
