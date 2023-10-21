const router = require('express').Router();
const {
  createThought,
  getSingleThought,
  updatethought,
  deletethought,
} = require('../controllers/thoughtController');

router.route('/').get(getSingleThought.create).post(createThought.create);

router.route('/:thoughtId').get(getSingleThought.create).put(updatethought.create).delete(deletethought.create);

module.exports = router;




