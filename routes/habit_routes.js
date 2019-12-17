const express = require("express");
const passport = require("passport");
const habitController = require("../controllers/habit_controller");
const dayController = require("../controllers/day_controller");
const { celebrate, Joi, Segments } = require("celebrate");
const router = express.Router();

router.get(
  "/",
  passport.authenticate("jwt", {
    session: false
  }),
  habitController.index
);

router.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required()
    }
  }),
  passport.authenticate("jwt", {
    session: false
  }),
  habitController.create
);

router.post("/:id/completed", dayController.completed);

router.get(
  "/:id",
  passport.authenticate("jwt", {
    session: false
  }),
  habitController.show
);

router.put("/:id", habitController.update);

router.delete("/:id", habitController.destroy);

router.delete("/:habitId/:dayId", dayController.destroy);

module.exports = router;
