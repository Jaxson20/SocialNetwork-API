const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

router.route('/')
  .get(getSingleUser.create)
  .post(createUser.create);

router.route('/:userId')
  .get(getSingleUser.create)
  .put(updateUser.create)
  .delete(deleteUser.create);

module.exports = router;



