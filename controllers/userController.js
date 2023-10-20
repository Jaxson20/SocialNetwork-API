const User = require('../models/user');

module.exports = {
  getuser: {
    create: async (req, res) => {
      try {
        const users = await User.find();
        res.json(users);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    },
  },

  getSingleUser: {
    create: async (req, res) => {
      try {
        const user = await User.findOne({ _id: req.params.userId }).populate('thoughts friends');
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    },
  },

  createUser: {
    create: async (req, res) => {
      try {
        const { username, email } = req.body;
        const user = await User.create({ username, email });
        res.json(user);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    },
  },

  updateUser: {
    create: async (req, res) => {
      try {
        const userId = req.params.userId;
        const updateData = req.body;

        const user = await User.findByIdAndUpdate(userId, updateData, {
          new: true,
          runValidators: true,
        });

        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    },
  },

  deleteUser: {
    create: async (req, res) => {
      try {
        const userId = req.params.userId;

        const user = await User.findById(userId);

        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }

        
        const thoughtIds = user.thoughts;
        await Thought.deleteMany({ _id: { $in: thoughtIds } });

        
        const friendIds = user.friends;
        await User.updateMany({ _id: { $in: friendIds } }, { $pull: { friends: userId } });

       
        await user.remove();

        res.json({ message: 'User and associated data deleted successfully' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    },
  },
};
