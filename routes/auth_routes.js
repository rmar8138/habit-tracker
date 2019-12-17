const express = require("express");
const passport = require("passport");
const { celebrate, Joi, Segments } = require("celebrate");
const AuthController = require("../controllers/auth_controller");
const router = express.Router();

router.post(
  "/register",
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
      password: Joi.string().required()
    }
  }),
  AuthController.register
);

router.post(
  "/login",
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
      password: Joi.string().required()
    }
  }),
  passport.authenticate("local", {
    failureRedirect: "/login",
    session: false
  }),
  AuthController.login
);

module.exports = router;
