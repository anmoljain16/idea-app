const User = require('../models/user');

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
};

exports.promoteToAdmin = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user by ID
    const user = await User.findById(userId);

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update the user's role to admin
    user.role = 'admin';

    // Save the updated user to the database
    await user.save();

    res.json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user role' });
  }
};
