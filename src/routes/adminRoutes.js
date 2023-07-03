const express = require('express');
const { protect } = require('../utils/authMiddleware');
const { getAllIdeas } = require('../controllers/adminController');

const router = express.Router();

router.get('/ideas', protect ,getAllIdeas);

module.exports = router;
