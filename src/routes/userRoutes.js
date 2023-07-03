const express = require('express');
const { createUser, promoteToAdmin } = require('../controllers/userController');

const router = express.Router();


router.patch('/promote-to-admin/:userId', promoteToAdmin);
router.post('/', createUser);

module.exports = router;
