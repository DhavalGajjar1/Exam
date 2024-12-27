const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: [String],
    instructions: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
