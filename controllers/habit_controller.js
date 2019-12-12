const HabitModel = require("../database/models/habit_model");

const index = async (req, res) => {
  const habits = await HabitModel.find();
  res.json(habits);
};

const show = async (req, res) => {
  const { id } = req.params;
  const habit = await HabitModel.findById(id);
  res.json(habit);
};

const create = async (req, res) => {
  const { name } = req.body;
  const habit = await HabitModel.create({ name });
  res.json(habit);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const habit = await HabitModel.findByIdAndUpdate(
    id,
    { name },
    {
      new: true
    }
  );
  res.json(habit);
};

const destroy = async (req, res) => {
  const { id } = req.params;
  const habit = await HabitModel.findByIdAndDelete(id);
  res.json(habit);
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy
};
