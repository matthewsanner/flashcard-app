const CardSet = require('../models/cardSet');
// const { cloudinary } = require('../cloudinary');

module.exports.index = async (req, res) => {
    const cardSets = await CardSet.find({});
    res.render('cardSets/index', { cardSets });
}

module.exports.renderNewForm = (req, res) => {
    res.render('cardSets/new');
}

module.exports.createCardSet = async (req, res, next) => {
    const cardSet = new CardSet(req.body.cardSet);
    // cardSet.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
    cardSet.author = req.user._id;
    await cardSet.save();
    req.flash('success', 'Successfully made a new card set!')
    res.redirect(`/cardSets/${cardSet._id}`);
}

module.exports.showCardSet = async (req, res) => {
    const cardSet = await CardSet.findById(req.params.id).populate({
        path: 'cards'
        // populate: { path: 'author' }
    })
        .populate('author');
    if (!cardSet) {
        req.flash('error', 'Can not find that card set!');
        return res.redirect('/cardSets');
    }
    res.render('cardSets/show', { cardSet });
}

module.exports.renderEditForm = async (req, res) => {
    const { id } = req.params;
    const cardSet = await CardSet.findById(id);
    if (!cardSet) {
        req.flash('error', 'Can not find that card set!');
        return res.redirect('/cardSets');
    }
    res.render('cardSets/edit', { cardSet });
}

module.exports.updateCardSet = async (req, res) => {
    const { id } = req.params;
    const cardSet = await CardSet.findByIdAndUpdate(id, { ...req.body.cardSet });
    // const imgs = req.files.map(f => ({ url: f.path, filename: f.filename }));
    // campground.images.push(...imgs);
    await cardSet.save();
    // if (req.body.deleteImages) {
    //     for (let filename of req.body.deleteImages) {
    //         await cloudinary.uploader.destroy(filename);
    //     }
    //     await campground.updateOne({ $pull: { images: { filename: { $in: req.body.deleteImages } } } })
    // }
    req.flash('success', 'Successfully updated card set!');
    res.redirect(`/cardSets/${cardSet._id}`);
}

module.exports.deleteCardSet = async (req, res) => {
    const { id } = req.params;
    await CardSet.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted card set!')
    res.redirect('/cardSets');
}