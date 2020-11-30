const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  address: { type: String, required: true },
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;