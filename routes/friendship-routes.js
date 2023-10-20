const router = require('express').Router();
const {
  getfriendships,
  getfriendship,
  createfriendship,
  updatefriendship,
  deletefriendship,
} = require('../controllers/friendshipController.js');


router
  .route('/')
  .get(getfriendships.create) 
  .post(createfriendship.create); 

router
  .route('/:friendshipId')
  .get(getfriendship.create) 
  .put(updatefriendship.create) 
  .delete(deletefriendship.create); 

module.exports = router;
