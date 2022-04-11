const Game = require('../models/game');
const igdb = require('igdb-api-node').default;
const client = igdb('r5ryryuhi97xihutz2ygdrp8hbe1rg','6guxdcfrj1yvh8h3xm6w3iidg9zy0r');

module.exports = {
    search: searchForGame
    // index,
    // create
}

async function searchForGame(req, res) {
    const response = await igdb()
        .fields(['id','name','summary','cover.url'])
        .fields('id,name,summary,cover')
        .limit(50)
        .search('halo')
        .where('version_parent=null')
        .request('/games');
    res.render('game/search', {games: response.data})
} 