const express = require('express');
const router = express.Router();
const account = require('../controllers/account');
const wrapAsync = require('../utilities/wrapAsync');
const { isLoggedIn } = require('../middleware');

router.get('/', isLoggedIn, account.showAccount);

module.exports = router;