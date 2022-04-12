const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    game: { type: Schema.Types.ObjectId, ref: "Game" },
    userName: String,
    review: String,
    rating: {type: Number, min: 1, max: 5, default: 5}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
