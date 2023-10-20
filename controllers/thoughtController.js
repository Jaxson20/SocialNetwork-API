const Thought = require('../models/thought');
const User = require('../models/user');

module.exports = {
  getthought: {
    create: async (req, res) => {
      try {
        const thoughts = await Thought.find();
        res.json(thoughts);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    },
  },

  getSingleThought: {
    create: async (req, res) => {
      try {
        const thought = await Thought.findOne({ _id: req.params.thoughtId });
        if (!thought) {
          return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(thought);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    },
  },

  createThought: {
    create: async (req, res) => {
      try {
        const { thoughtText, username, userId } = req.body;

        const user = await User.findById(userId);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }

        const thought = await Thought.create({ thoughtText, username });
        user.thoughts.push(thought._id);
        await user.save();

        res.json(thought);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    },
  },

  updatethought: {
    create: async (req, res) => {
      try {
        const thoughtId = req.params.thoughtId;
        const updateData = req.body;

        const thought = await Thought.findByIdAndUpdate(thoughtId, updateData, {
          new: true,
          runValidators: true,
        });

        if (!thought) {
          return res.status(404).json({ message: 'Thought not found' });
        }

        res.json(thought);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    },
  },

  deletethought: {
    create: async (req, res) => {
      try {
        const thoughtId = req.params.thoughtId;

        const thought = await Thought.findById(thoughtId);
        if (!thought) {
          return res.status(404).json({ message: 'Thought not found' });
        }

        
        const users = await User.updateMany({ thoughts: thoughtId }, { $pull: { thoughts: thoughtId } });

        
        await thought.remove();

        res.json({ message: 'Thought and associated users updated and deleted successfully' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    },
  },
};
