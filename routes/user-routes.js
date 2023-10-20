const router = require('express').Router(); // Note the capital "R" in Router
const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

// Define user routes
router.route('/').get(getUser).post(createUser);
router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
