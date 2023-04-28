const express = require('express');
const router = express.Router();
const user = require('../controllers/user');

router.post('/register', user.register);
router.post('/login', user.login);
router.get('/whoami', user.whoami);

module.exports = router;