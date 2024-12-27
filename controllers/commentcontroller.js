const Comment = require('./models/Comment');
const Recipe = require('./models/Recipe');


exports.addComment = async (req, res) => {
    const { text } = req.body;
    const recipeId = req.params.id;

    try {
        const comment = new Comment({
            text,
            createdBy: req.user.userId,
            recipe: recipeId
        });
        await comment.save();

        const recipe = await Recipe.findById(recipeId);
        recipe.comments.push(comment._id);
        await recipe.save();

        res.status(201)
        }
    }    