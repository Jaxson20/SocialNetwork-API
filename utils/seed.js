const mongoose = require('mongoose');
const db = require('../config/connection'); 


const User = require('../models/user');
const Thought = require('../models/thought');
const Reaction = require('../models/reaction');


const userData = [
  {
    username: 'user1',
    email: 'user1@example.com',
  },
  {
    username: 'user2',
    email: 'user2@example.com',
  },
  
];

const thoughtData = [
  {
    thoughtText: 'This is a sample thought from user1',
    username: 'user1',
  },
  {
    thoughtText: 'Another thought from user1',
    username: 'user1',
  },
  
];

const reactionData = [
  {
    reactionBody: 'Great thought!',
    username: 'user2',
  },
  {
    reactionBody: 'I agree with this thought!',
    username: 'user2',
  },
 
];

mongoose.connect('mongodb://localhost:27017/MyDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});






const seedDatabase = async () => {
  try {
    await User.deleteMany({}).timeout(timeout);
    await Thought.deleteMany({});
    await Reaction.deleteMany({});

    const createdUsers = await User.insertMany(userData);
    const createdThoughts = await Thought.insertMany(thoughtData);
    const createdReactions = await Reaction.insertMany(reactionData);

    console.log('Data seeding successful');
  } catch (err) {
    console.error('Data seeding failed:', err);
  } finally {
    
    mongoose.connection.close();
  }
};


seedDatabase();
