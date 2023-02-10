const mongoose = require('mongoose');
const Card = require('./card');
const Schema = mongoose.Schema;

const CardSetSchema = new Schema({
    title: String,
    description: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    cards: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Card'
        }
    ]
});


// Mongoose hook, triggers after any time a CardSet is deleted and deletes all cards in the CardSet also
CardSetSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await Card.deleteMany({
            _id: {
                $in: doc.cards
            }
        })
    }
})

module.exports = mongoose.model('CardSet', CardSetSchema);