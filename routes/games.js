const router = require('express').Router();
const isLoggedIn = require('../config/auth');
const gameCtrl = require('../controller/game');

router.get('/search', isLoggedIn, gameCtrl.search);

module.exports = router;