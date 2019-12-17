const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./routes");
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

// Router

app.use(router);

module.exports = app;