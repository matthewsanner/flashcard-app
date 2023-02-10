const CardSet = require('../models/cardSet');

module.exports.index = async (req, res) => {
    const cardSets = await CardSet.find({});
    res.render('cardSets/index', { cardSets });
}

module.exports.renderNewForm = (req, res) => {
    res.render('cardSets/new');
}

module.exports.createCardSet = async (req, res, next) => {
    const cardSet = new CardSet(req.body.cardSet);
    cardSet.author = req.user._id;
    await cardSet.save();
    req.flash('success', 'Successfully made a new card set!')
    res.redirect(`/cardSets/${cardSet._id}`);
}

module.exports.showCardSet = async (req, res) => {
    const cardSet = await CardSet.findById(req.params.id)
        .populate('cards')
        .populate('author');
    cardSet.cardCount = cardSet.cards.length;
    if (!cardSet) {
        req.flash('error', 'Can not find that card set!');
        return res.redirect('/cardSets');
    }
    res.render('cardSets/show', { cardSet });
}

module.exports.renderEditForm = async (req, res) => {
    const cardSet = await CardSet.findById(req.params.id).populate({
        path: 'cards'
    });
    if (!cardSet) {
        req.flash('error', 'Can not find that card set!');
        return res.redirect('/cardSets');
    }
    res.render('cardSets/edit', { cardSet });
}

module.exports.updateCardSet = async (req, res) => {
    const { id } = req.params;
    const cardSet = await CardSet.findByIdAndUpdate(id, { ...req.body.cardSet });
    await cardSet.save();
    req.flash('success', 'Successfully updated card set!');
    res.redirect(`/cardSets/${id}/edit`);
}

module.exports.deleteCardSet = async (req, res) => {
    const { id } = req.params;
    await CardSet.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted card set!')
    res.redirect('/cardSets');
}