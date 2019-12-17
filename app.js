const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const router = require("./routes");
const passport = require("./config/passport");
const app = express();

// Database

mongoose.connect("mongodb://localhost/habit-tracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Set promise library

mongoose.Promise = global.Promise;
mongoose.connection.on("error", err => console.log(err));

// Bodyparser

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Sessions

app.use(
  expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Router

app.use(router);

module.exports = app;
