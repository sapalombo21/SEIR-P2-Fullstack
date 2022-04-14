const User = require("../models/user");
const Review = require("../models/review");
const Game = require("../models/game");

module.exports = { show };

async function show(req, res) {
  const reviews = await Review.find({ user: req.params.id });
  res.render("user/show", { title: "User Reviews", reviews });
}
