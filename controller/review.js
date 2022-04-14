const Review = require("../models/review");
const Game = require("../models/game");
const igdb = require("igdb-api-node").default;
const client = igdb(
  `${process.env.TWITCH_CLIENT_ID}`,
  `${process.env.TWITCH_APP_ACCESS_TOKEN}`
);

module.exports = { create, edit, show, delete: deleteOne };

async function create(req, res) {
  const response = await igdb()
    .fields(["id", "name", "summary", "cover"])
    .fields("id,name,summary,cover")
    .where(`id=${req.params.id}`)
    .request("/games");
  const data = response.data[0];
  Game.findOrCreate(
    { gameId: req.params.id }, // find parameter
    { name: data.name, summary: data.summary, cover: data.cover }, // if creating, set params
    { saveIfFound: false }, // make sure its findOrCreate not findAndCreate.
    function (err, game) {
      const review = new Review({
        user: req.user,
        game: game._id,
        userName: req.user.name,
        review: req.body.review,
        rating: req.body.rating,
      });
      review.save();
      res.redirect(`/games/${req.params.id}`);
    }
  );
}

async function show(req, res) {
  await Review.findOne({_id: req.params.id}, (err, review) => {
    res.render('reviews/edit', {title:"Edit Review", review});
  })
}
async function edit(req, res) {
  await Review.findOneAndUpdate({_id: req.params.id}, {review: req.body.review, rating: req.body.rating}, (err, review) => {
      review.save();
      console.log(review.game);
      Game.findById(review.game, (err, game) => {
        res.redirect(`/games/${game.gameId}`);
      }) 
  });
}

async function deleteOne(req, res) {
  await Review.findOneAndDelete({_id: req.params.id}, (err, review) => {
    Game.findById(review.game, (err, game) => {
      res.redirect(`/games/${game.gameId}`);
    })
  });
}