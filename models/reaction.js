const connection = require('../config/connection.js');
const { Schema, Types } = require('mongoose'); 
const reactionSchema = new Schema({
    reactionId: {
        type: Types.ObjectId, 
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
        minlength: 2,
        default: 'no text entered',
    },
    username: {
        type: String,
        required: true,
        default: 'default user',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = reactionSchema; 
