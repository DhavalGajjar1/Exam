const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middleware/authMiddleware');

// Authenticated route to add a comment to a recipe
router.post('/:id/comments', authMiddleware.verifyToken, commentController.addComment);

module.exports = router;
