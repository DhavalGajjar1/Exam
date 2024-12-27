const authController = require('./controllers/authController');
const router = require("express");

app.post('/register', authController.register);
app.post('/login', authController.login);
app.get('/logout', authController.logout);
const Router = router()
module.exports= Router