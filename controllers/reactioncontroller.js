const Thought = require('../models/thought');

module.exports = {
  getReactions: {
    create: async (req, res) => {
      try {
        const thoughtId = req.params.thoughtId;
        const thought = await Thought.findById(thoughtId, 'reactions');

        if (!thought) {
          return res.status(404).json({ message: 'Thought not found' });
        }

        res.json(thought.reactions);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    },
  },

  createReaction: {
    create: async (req, res) => {
      try {
        const thoughtId = req.params.thoughtId;
        const { reactionBody, username } = req.body;

        const thought = await Thought.findById(thoughtId);

        if (!thought) {
          return res.status(404).json({ message: 'Thought not found' });
        }

       
        thought.reactions.push({ reactionBody, username });
        await thought.save();

        res.json({ message: 'Reaction added successfully' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    },
  },

  deleteReaction: {
    create: async (req, res) => {
      try {
        const thoughtId = req.params.thoughtId;
        const reactionId = req.params.reactionId;

        const thought = await Thought.findById(thoughtId);

        if (!thought) {
          return res.status(404).json({ message: 'Thought not found' });
        }

        
        const reactionIndex = thought.reactions.findIndex(
          (reaction) => reaction._id.toString() === reactionId
        );

        if (reactionIndex === -1) {
          return res.status(404).json({ message: 'Reaction not found' });
        }

        thought.reactions.splice(reactionIndex, 1);
        await thought.save();

        res.json({ message: 'Reaction deleted successfully' });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
      }
    },
  },
};
