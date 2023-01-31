const CardSet = require('../models/cardSet');
const Card = require('../models/card');

module.exports.createCard = async (req, res) => {
    const cardSet = await CardSet.findById(req.params.id);
    const card = new Card(req.body.card);
    // card.author = req.user._id;
    cardSet.cards.push(card);
    await card.save();
    await cardSet.save();
    req.flash('success', 'Created new card!');
    res.redirect(`/cardSets/${cardSet._id}`)
}

module.exports.deleteCard = async (req, res) => {
    const { id, cardId } = req.params;
    // Pull operator removes from an existing array all instances of a value or values matching a specified condition
    await CardSet.findByIdAndUpdate(id, { $pull: { cards: cardId } })
    await Card.findByIdAndDelete(cardId);
    req.flash('success', 'Successfully deleted card!')
    res.redirect(`/cardSets/${id}`);
}

// new section for edit card
module.exports.editCard = async (req, res) => {
    const { id, cardId } = req.params;
    const cardSet = await CardSet.findById(id);
    const card = await Card.findByIdAndUpdate(cardId, { ...req.body.card });
    await card.save()
    req.flash('success', 'Successfully updated card!');
    res.redirect(`/cardSets/${cardSet._id}`);
}