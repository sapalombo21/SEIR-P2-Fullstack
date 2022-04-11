const mongoose = require("mongoose");
const findOrCreate = require('mongoose-find-or-create');
const Schema = mongoose.Schema;

const gameSchema = mongoose.Schema(
  {
    name: String,
    gameId: String,
    summary: String,
    coverUrl: String,
  },
  { timestamps: true }
);

gameSchema.plugin(findOrCreate);

module.exports = mongoose.model("Game", gameSchema);
