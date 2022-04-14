const router = require('express').Router();
const isLoggedIn = require('../config/auth');
const userCtrl = require('../controller/user');

router.get('/:id', isLoggedIn, userCtrl.show);

module.exports = router;