const mongoose = require('mongoose');


const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1, 
    maxLength: 280, 
  },
  createdAt: {
    type: Date,
    default: Date.now, 
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [
    {
      reactionBody: {
        type: String,
        required: true,
        maxLength: 280, 
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now, 
      },
    },
  ],
});


thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});


module.exports = mongoose.model('Thought', thoughtSchema);

