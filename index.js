const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const express = requrie('express');
const port = 8000;
const app = express();
app.set('view engine','ejs');

app.set(express.static(__dirname + 'assets'));
app.set('uploads'(express.static(__dirname + "uploads")));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect('mongodb://localhost/recipe-sharing', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));
const authRoutes = require('./routes/authRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const commentRoutes = require('./routes/commentRoutes');
app.use('/auth', authRoutes);        // For authentication routes
app.use('/recipes', recipeRoutes);   // For recipe routes
app.use('/comments', commentRoutes); // For comment routes

// Home Route
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port,(err)=>{
    if(err){
        console.log(error);
        return false;
    }
    db()
    console.log("server started on /nhttp:\\localhost: " + port );
})

