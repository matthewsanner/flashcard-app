const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
});

UserSchema.plugin(passportLocalMongoose);
console.log(UserSchema)

module.exports = mongoose.model('User', UserSchema);