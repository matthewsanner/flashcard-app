const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  front: {
    type: String,
    maxlength: 65,
  },
  back: {
    type: String,
    maxlength: 65,
  },
});

module.exports = mongoose.model("Card", CardSchema);
