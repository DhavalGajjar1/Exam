const User = require('./models/User');
const jwt = require('jsonwebtoken');


exports.register = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = new User({ username, password });
        await user.save();
        res.status(201).send('User registered');
    } catch (error) {
        res.status(400).send('Error registering user');
    }
};


exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user || !await user.comparePassword(password)) {
            return res.status(400).send('Invalid credentials');
        }

        const token = jwt.sign({ userId: user._id, role: user.role }, 'your-secret-key', { expiresIn: '1h' });
        res.cookie('jwt', token, { httpOnly: true, secure: false }); // Set secure to true for production
        res.status(200).send('Login successful');
    } catch (error) {
        res.status(500).send('Internal server error');
    }
};


exports.logout = (req, res) => {
    res.clearCookie('jwt');
    res.status(200).send('Logged out');
};
