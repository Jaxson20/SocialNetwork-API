const router = require('express').Router();
const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');


router.route('/').get(getUser).post(createUser);
router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;

