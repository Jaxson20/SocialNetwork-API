const router = require('express').Router();
const {
getfriendship,
createfriendship,
updatefriendship,
deletefriendship,
} = require('../controllers/friendshipController.js');

//api/friendship
router.route('/').get(getfriendships).post(createfriendship);


router
.route('/:friendshipId')
.get(getfriendship)
.put(updatefriendship)
.delete(deletefriendship);

module.exports = router;
