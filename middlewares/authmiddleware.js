const jwt = require('jsonwebtoken');
const User = require('./models/User');


exports.verifyToken = (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) {
        return res.status(403).send('No token provided');
    }

    jwt.verify(token, 'your-secret-key', (err, decoded) => {
        if (err) {
            return res.status(403).send('Invalid or expired token');
        }
        req.user = decoded;
        next();
    });
};

exports.isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).send('Forbidden');
    }
    next();
};
