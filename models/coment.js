const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    recipe: { type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
