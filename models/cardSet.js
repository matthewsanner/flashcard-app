const mongoose = require('mongoose');
const Card = require('./card');
const Schema = mongoose.Schema;

// const ImageSchema = new Schema({
//     url: String,
//     filename: String
// })

// ImageSchema.virtual('thumbnail').get(function () {
//     return this.url.replace('/upload', '/upload/w_200')
// })

// by default mongoose does not include virtuals when you convert a document to JSON, thus you need to set this option and pass it into the schema
// const opts = { toJSON: { virtuals: true } };

const CardSetSchema = new Schema({
    title: String,
    // images: [ImageSchema],
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
}/*, opts*/);

// CampgroundSchema.virtual('properties.popUpMarkup').get(function () {
//     return `
//     <strong><a href="/campgrounds/${this._id}">${this.title}</a></strong>
//     <p>${this.description.substring(0, 30)}...</p>`
// })

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