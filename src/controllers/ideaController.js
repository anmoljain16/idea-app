const Idea = require('../models/idea');

// Create a new idea
exports.createIdea = async (req, res) => {
  try {
    const { title, description } = req.body;
    console.log(title)
    const userId = req.user.userId;
    console.log(userId) 
    const idea = await Idea.create({ title, description, user: userId });
    res.status(201).json({ idea });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create idea' });
  }
};

exports.getAllIdeas = async (req, res) => {
  try {
    const userId = req.user.userId;
    const ideas = await Idea.find({ user: userId });

    res.json({ ideas });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch ideas' });
  }
};