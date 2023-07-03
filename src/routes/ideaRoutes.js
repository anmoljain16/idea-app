const express = require('express');
const { createIdea, getAllIdeas } = require('../controllers/ideaController');
const { protect } = require('../utils/authMiddleware');

const router = express.Router();

router.post('/', protect, createIdea);
router.get('/', protect, getAllIdeas);
module.exports = router;
