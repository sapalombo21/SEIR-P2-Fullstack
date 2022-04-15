const User = require("../models/user");
const Review = require("../models/review");
const Game = require("../models/game");

module.exports = { show };

async function show(req, res) {
  const reviews = await Review.find({ user: req.params.id }).populate('game').populate('user').exec();
  res.render("user/show", { title: `${reviews[0].user.name}`, reviews, theUser: reviews[0].user });
}
