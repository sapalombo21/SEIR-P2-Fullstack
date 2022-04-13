const router = require('express').Router();
const isLoggedIn = require('../config/auth');
const reviewCtrl = require('../controller/review');

router.post('/games/:id/review', isLoggedIn, reviewCtrl.create);
router.put('/:id/edit', isLoggedIn, reviewCtrl.edit);

module.exports = router;