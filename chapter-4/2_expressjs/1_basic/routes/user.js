const express = require('express');
const router = express.Router();

const {user} = require('../controllers');

router.get('/', user.getAll);
router.get('/:id', user.getDetail);

module.exports = router;
