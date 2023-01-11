const express = require('express');
const router = express.Router();
const cardSets = require('../controllers/cardSets')
const wrapAsync = require('../utilities/wrapAsync');
const { isLoggedIn, isAuthor, validateCardSet } = require('../middleware');

router.route('/')
    .get(wrapAsync(cardSets.index))
    .post(isLoggedIn, validateCardSet, wrapAsync(cardSets.createCardSet));

router.get('/new', isLoggedIn, cardSets.renderNewForm);

router.route('/:id')
    .get(wrapAsync(cardSets.showCardSet))
    .put(isLoggedIn, isAuthor, validateCardSet, wrapAsync(cardSets.updateCardSet))
    .delete(isLoggedIn, isAuthor, wrapAsync(cardSets.deleteCardSet));

router.get('/:id/edit', isLoggedIn, isAuthor, wrapAsync(cardSets.renderEditForm));

module.exports = router;