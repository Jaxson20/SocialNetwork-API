const router = require('express').Router();
const {
  getthought,
  createthought,
  updatethought,
  deletethought,
} = require('../controllers/thoughtController.js');


router.route('/').get(getthought).post(createthought);

router.route('/:thoughtId').get(getthought).put(updatethought).delete(deletethought);

module.exports = router;
