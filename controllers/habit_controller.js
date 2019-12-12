const HabitModel = require("../database/models/habit_model");

const index = async (req, res) => {
  const habits = await HabitModel.find();
  res.json(habits);
};

const create = async (req, res) => {
  const { name } = req.body;
  const habit = await HabitModel.create({ name });
  res.json(habit);
};

module.exports = {
  index,
  create
};
