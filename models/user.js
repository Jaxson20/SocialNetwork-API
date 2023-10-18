const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    default: 'default user',
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'], //IDK if the regrex is supposed to look like that
  },
  thoughts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Thought',
    },
  ],
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

module.exports = mongoose.model('User', userSchema); 
