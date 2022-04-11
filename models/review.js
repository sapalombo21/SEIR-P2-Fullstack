const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    game: { type: Schema.Types.ObjectId, ref: "Game" },
    review: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
