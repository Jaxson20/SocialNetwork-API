const router = require('express').Router();
const {
  getReactions,
  createReaction,
  deleteReaction,
} = require('../controllers/reactioncontroller.js');

router
  .route('/:thoughtId/reactions')
  .get(getReactions.create)
  .post(createReaction.create);

router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction.create); 

module.exports = router;





