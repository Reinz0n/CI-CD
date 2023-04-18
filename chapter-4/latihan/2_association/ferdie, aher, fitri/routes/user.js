const express = require('express');
const user = require('../controller/user');
const router = express.Router();


router.get('/users', user.index);
router.get('/users/:user_id', user.show);
router.post('/users', user.store);
router.put('/users/:user_id', user.update);
router.delete('/users/:user_id', user.destroy);

module.exports = router;