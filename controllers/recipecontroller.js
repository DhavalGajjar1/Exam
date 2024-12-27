const Recipe = require('./models/Recipe');
const User = require('./models/User');

// Get all recipes
exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find().populate('createdBy');
        res.render('recipeList', { recipes });
    } catch (error) {
        res.status(500).send('Error fetching recipes');
    }
};

// Get user's recipes
exports.getUserRecipes = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).populate('recipes');
        res.render('myRecipes', { recipes: user.recipes });
    } catch (error) {
        res.status(500).send('Error fetching user recipes');
    }
};

// Create a new recipe
exports.createRecipe = async (req, res) => {
    const { title, description, ingredients, instructions } = req.body;

    try {
        const recipe = new Recipe({
            title,
            description,
            ingredients,
            instructions,
            createdBy: req.user.userId
        });
        await recipe.save();

        // Add recipe to user's recipe list
        const user = await User.findById(req.user.userId);
        user.recipes.push(recipe._id);
        await user.save();

        res.status(201).send('Recipe created');
    } catch (error) {
        res.status(500).send('Error creating recipe');
    }
};
