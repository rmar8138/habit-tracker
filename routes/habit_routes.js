const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("hey");
});

module.exports = router;
