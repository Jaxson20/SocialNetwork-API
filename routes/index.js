const express = require('express');
const router = express.Router();

const usersRoutes = require('./userRoutes');
const thoughtsRoutes = require('./thoughtRoutes');
const friendshipRoutes = require('./friendshipRoutes');
const reactionRoutes = require('./reactionRoutes');

router.use('/users', usersRoutes);
router.use('/thoughts', thoughtsRoutes);
router.use('/friendship', friendshipRoutes);
router.use('/reactions', reactionRoutes);

module.exports = router;
