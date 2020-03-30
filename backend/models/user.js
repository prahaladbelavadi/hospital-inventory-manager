const mongoose = require('mongoose');

var userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true },
    password: { type: String },
    role: { type: String, required: true }
  },
  { timestamps: true }
);

var User = mongoose.model('User', userSchema);

module.exports = User;
