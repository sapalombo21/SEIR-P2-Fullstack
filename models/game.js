const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = mongoose.Schema(
  {
    name: String,
    gameId: Number,
    summary: String,
    coverUrl: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Game", gameSchema);
