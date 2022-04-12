const Review = require("../models/review");
const Game = require("../models/game");
const igdb = require("igdb-api-node").default;
const client = igdb(
  "r5ryryuhi97xihutz2ygdrp8hbe1rg",
  "6guxdcfrj1yvh8h3xm6w3iidg9zy0r"
);

module.exports = { create };

async function create(req, res) {
  const response = await igdb()
    .fields(["id", "name", "summary", "cover"])
    .fields("id,name,summary,cover")
    .where(`id=${req.params.id}`)
    .request("/games");
  const data = response.data[0];
  Game.findOrCreate(
    { gameId: req.params.id },
    { name: data.name, summary: data.summary, cover: data.cover },
    { saveIfFound: false },
    function (err, game) {
      const review = new Review({
        user: req.user,
        game: game._id,
        userName: req.user.name,
        review: req.body.review,
        rating: req.body.rating,
      });
      review.save();
      res.redirect(`games/${req.params.id}`);
    }
  );
}
