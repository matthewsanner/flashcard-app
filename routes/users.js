const express = require('express');
const router = express.Router();
const passport = require('passport');
const wrapAsync = require('../utilities/wrapAsync')
const users = require('../controllers/users');
const { returnToSession, returnToLocal } = require('../middleware');
// uses returnToSession and returnToLocal in order to return user to page they clicked login or logout from after login/logout

router.route('/register')
    .get(users.renderRegister)
    .post(wrapAsync(users.register));

router.route('/login')
    .get(returnToSession, users.renderLogin)
    .post(returnToLocal, passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login);

router.get('/logout', returnToSession, returnToLocal, users.logout);

module.exports = router;