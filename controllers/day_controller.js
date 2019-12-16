const moment = require("moment");
const HabitModel = require("../database/models/habit_model");

const completed = async (req, res) => {
  const { id: habitId } = req.params;
  const todayFormatted = moment(Date.now()).format("MMM Do YY");

  const habit = await HabitModel.findById(habitId);

  // only completed new day if todays date doesn't exist
  const todayExists = habit.days.filter(day => {
    return todayFormatted === day.day;
  }).length;

  if (todayExists) {
    res.status(400).json("Today has already been tracked!");
  } else {
    habit.days.push({ day: todayFormatted, completed: true });
    await habit.save();

    res.json(habit);
  }
};

const destroy = async (req, res) => {
  const { habitId, dayId } = req.params;

  const habit = await HabitModel.findByIdAndUpdate(
    habitId,
    {
      $pull: {
        days: {
          _id: dayId
        }
      }
    },
    { new: true }
  );

  res.json(habit);
};

module.exports = {
  completed,
  destroy
};

// DO ERROR HANDLING!
