const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  front: {
    type: String,
    maxlength: 150,
  },
  back: {
    type: String,
    maxlength: 150,
  },
});

module.exports = mongoose.model("Card", CardSchema);
