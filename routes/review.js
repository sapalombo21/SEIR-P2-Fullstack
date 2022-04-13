const router = require('express').Router();
const isLoggedIn = require('../config/auth');
const reviewCtrl = require('../controller/review');

router.post('/games/:id/review', isLoggedIn, reviewCtrl.create);
router.get('/review/:id/edit', isLoggedIn, reviewCtrl.show);
router.put('/review/:id', isLoggedIn, reviewCtrl.edit);

module.exports = router;