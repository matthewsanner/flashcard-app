const express = require('express');
// need mergeParams: true because route for reviews in app.js includes the id as a default in the http address and it is not being passed to this file unless you specify to do so
const router = express.Router({ mergeParams: true });
const { validateCard, isLoggedIn, isAuthor } = require('../middleware')

const cards = require('../controllers/cards');

const wrapAsync = require('../utilities/wrapAsync');
const ExpressError = require('../utilities/ExpressError');

router.post('/', isLoggedIn, isAuthor, validateCard, wrapAsync(cards.createCard))

router.delete('/:cardId', isLoggedIn, isAuthor, wrapAsync(cards.deleteCard))

router.put('/:cardId', isLoggedIn, isAuthor, validateCard, wrapAsync(cards.editCard))

module.exports = router;