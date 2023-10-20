const User = require('../models/user');

module.exports = {
  getfriendships: {
    create: async (req, res) => {
      try {
        const friendships = await User.find({}, 'friends');
        res.json(friendships);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    },
  },

  getfriendship: {
    create: async (req, res) => {
      try {
        const friendship = await User.findById(req.params.userId, 'friends');
        if (!friendship) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(friendship.friends);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    },
  },

  createfriendship: {
    create: async (req, res) => {
      try {
        const { userId, friendId } = req.params;

        const user = await User.findById(userId);
        const friend = await User.findById(friendId);

        if (!user || !friend) {
          return res.status(404).json({ message: 'User or friend not found' });
        }

       
        if (user.friends.includes(friendId)) {
          return res.status(400).json({ message: 'Already friends' });
        }

       
        user.friends.push(friendId);
        await user.save();

        res.json({ message: 'Friend added successfully' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    },
  },

  updatefriendship: {
    create: async (req, res) => {
      try {
        const { userId, friendId } = req.params;

        const user = await User.findById(userId);

        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }

     
        if (!user.friends.includes(friendId)) {
          return res.status(400).json({ message: 'Not friends' });
        }

        

        res.json({ message: 'Friendship updated successfully' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    },
  },

  deletefriendship: {
    create: async (req, res) => {
      try {
        const { userId, friendId } = req.params;

        const user = await User.findById(userId);

        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }

        
        if (!user.friends.includes(friendId)) {
          return res.status(400).json({ message: 'Not friends' });
        }

       
        user.friends = user.friends.filter((friend) => friend.toString() !== friendId);
        await user.save();

        res.json({ message: 'Friend removed successfully' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    },
  },
};


