const authMiddleware = require('./middleware/authMiddleware');

app.use('/protected', authMiddleware.verifyToken);

app.get('/protected/recipes', authMiddleware.verifyToken, (req, res) => {
    
});
