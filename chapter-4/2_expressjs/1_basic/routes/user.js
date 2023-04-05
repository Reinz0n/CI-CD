const express = require('express');
const router = express.Router();

const {user} = require('../controllers');

router.use((req, res, next) => {
    console.log('ini adalah route level middleware');
    next();
}); // route level middleware

router.get('/', user.getAll);
router.get('/:id', user.getDetail);

module.exports = router;
