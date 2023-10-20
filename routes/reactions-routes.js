const router = require('express').Router();
const {
  getreaction,
  createreaction,
  updatereaction,
  deletereaction,
} = require('../controllers/reactioncontroller.js');


router.route('/').get(getreaction).post(createreaction);

router.route('/:reactionId').get(getreaction).put(updatereaction).delete(deletereaction);

module.exports = router;
