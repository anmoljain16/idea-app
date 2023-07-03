const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Middleware to verify JWT token
exports.protect = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  // console.log(token)
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: decoded.userId };
    console.log(decoded)
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Middleware to restrict access to admin users
exports.admin = (req, res, next) => {
  // console.log(req)
  const userID = req.user.userId;
  console.log(userID)
  const fUser =  User.findById(userID);

  if (!fUser) {
    return res.status(404).json({ error: 'User not found' });
  }



  console.log(fUser);
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied',
    
  });
  }
  next();
};
