const Game = require("../models/game");
const Review = require("../models/review");
const igdb = require("igdb-api-node").default;
const client = igdb(
  "r5ryryuhi97xihutz2ygdrp8hbe1rg",
  "6guxdcfrj1yvh8h3xm6w3iidg9zy0r"
);

module.exports = {
  search: searchForGame,
  show,
  index,
  // blankSearch
};
async function index(req, res) {
  const games = await Game.find({});
  res.render("game/index", { games });
}

// async function blankSearch(req, res) {
//   res.render("game/search", {games: []});
// }

async function searchForGame(req, res) {
  const response = await igdb()
    .fields(["id", "name", "summary", "cover.url"])
    .fields("id,name,summary,cover")
    .limit(50)
    .search(`${req.query.q}`)
    .where("version_parent=null")
    .request("/games");
  if (req.query.q === undefined) {
    res.render("game/search", { games: [] });
  } else {
    res.render("game/search", { games: response.data });
  }
}

async function show(req, res) {
  // query the game database for details.
  const response = await igdb()
    .fields(["id", "name", "summary", "cover"])
    .fields("id,name,summary,cover")
    .where(`id=${req.params.id}`)
    .request("/games");
  const game = response.data[0]; // used when game document doesnt exist
  // need to query the seperate covers documents to actually get the url for the picture
  const image = await igdb()
    .fields(["game", "url"])
    .fields("game,url")
    .where(`game=${req.params.id}`)
    .request("/covers");
  const thumb = image.data[0].url;
  const exists = await Game.exists({ gameId: req.params.id });
  const apiId = req.params.id;
  if (exists) {
    // checks if a review has been created essentially since game documents are created when a review is created
    Game.findOne({ gameId: req.params.id }).exec((err, game) => {
      Review.find({ game: game._id }).exec((err, reviews) => {
        res.render("game/show", { game, thumb, reviews, apiId });
      });
    });
  } else {
    // uses the api to show the details instead of the game
    res.render("game/show", { game, thumb, reviews: [], apiId });
  }
  //   Game.findOne({ gameId: req.params.id }).exec((err, game)=>{
  //     Review.find({ game: game._id}).exec((err, reviews)=>{
  //         res.render("game/show", { game, thumb: image.data[0].url, reviews });
  //     });
  //   });
  //   console.log(reviews);
}
