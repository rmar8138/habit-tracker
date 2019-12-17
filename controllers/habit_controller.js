const HabitModel = require("../database/models/habit_model");

const index = async (req, res) => {
  const { id: user } = req.user;
  try {
    const habits = await HabitModel.find({ user });
    res.json(habits);
  } catch (error) {
    res.status(400).json(error);
  }
};

const show = async (req, res) => {
  const { id } = req.params;
  try {
    const habit = await HabitModel.findById(id);
    res.json(habit);
  } catch (error) {
    res.status(400).json(error);
  }
};

const create = async (req, res) => {
  const { name } = req.body;
  try {
    const habit = await HabitModel.create({ name });
    res.json(habit);
  } catch (error) {
    res.status(400).json(error);
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const habit = await HabitModel.findByIdAndUpdate(
      id,
      { name },
      {
        new: true
      }
    );
    res.json(habit);
  } catch (error) {
    res.status(400).json(error);
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;
  try {
    const habit = await HabitModel.findByIdAndDelete(id);
    res.json(habit);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy
};
