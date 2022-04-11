const router = require('express').Router();
const isLoggedIn = require('../config/auth');
const gameCtrl = require('../controller/game');

router.get('/search', isLoggedIn, gameCtrl.search);
router.get('/:id', isLoggedIn, gameCtrl.show)
router.get('/', isLoggedIn, gameCtrl.index);

module.exports = router;