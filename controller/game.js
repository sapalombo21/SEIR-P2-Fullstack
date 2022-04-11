const Game = require("../models/game");
const igdb = require("igdb-api-node").default;
const client = igdb(
  "r5ryryuhi97xihutz2ygdrp8hbe1rg",
  "6guxdcfrj1yvh8h3xm6w3iidg9zy0r"
);

module.exports = {
  search: searchForGame,
  show,
  index,
  // create
};
async function index(req, res) {
  await Game.find({}).then(function (err, games) {
    res.render("game/index", { games });
  });
}

async function searchForGame(req, res) {
  const response = await igdb()
    .fields(["id", "name", "summary", "cover.url"])
    .fields("id,name,summary,cover")
    .limit(50)
    .search("halo")
    .where("version_parent=null")
    .request("/games");
  res.render("game/search", { games: response.data });
}

async function show(req, res) {
  const response = await igdb()
    .fields(["id", "name", "summary", "cover"])
    .fields("id,name,summary,cover")
    .where(`id=${req.params.id}`)
    .request("/games");
  const game = response.data[0];
  const image = await igdb()
    .fields(["game", "url"])
    .fields("game,url")
    .where(`game=${req.params.id}`)
    .request("/covers");
  console.log(image.data[0].url);
  res.render("game/show", { game, thumb: image.data[0].url});
}
