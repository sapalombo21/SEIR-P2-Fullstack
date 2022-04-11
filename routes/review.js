const router = require('express').Router();
const isLoggedIn = require('../config/auth');
const reviewCtrl = require('../controller/review');

router.post('/games/:id/review', isLoggedIn, reviewCtrl.create);

module.exports = router;