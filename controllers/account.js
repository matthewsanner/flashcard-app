const CardSet = require('../models/cardSet');

module.exports.showAccount = async (req, res) => {
    const cardSets = await CardSet.find({ author: req.user._id })
        .populate('cards');
    cardSets.forEach(cardSet => {
        cardSet.cardCount = cardSet.cards.length;
    });
    res.render('account/show', { cardSets });
}