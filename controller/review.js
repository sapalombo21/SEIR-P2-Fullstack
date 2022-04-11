const Review = require('../models/review');
const Game = require('../models/game');
const igdb = require("igdb-api-node").default;
const client = igdb(
    "r5ryryuhi97xihutz2ygdrp8hbe1rg",
    "6guxdcfrj1yvh8h3xm6w3iidg9zy0r"
  );

module.exports = {create};

function create(req, res){
    console.log('yo');
}