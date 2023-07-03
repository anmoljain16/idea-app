const Idea = require('../models/idea');

// Get all ideas (for admin)
exports.getAllIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find().populate('user', 'name');

    res.json({ ideas });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch ideas' });
  }
};
