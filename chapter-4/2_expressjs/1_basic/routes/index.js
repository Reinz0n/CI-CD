const express = require('express');
const router = express.Router();
const user = require('./user');

router.get('/', (req, res) => {
    const name = req.query.name;
    res.status(200).json({
        message: `welcome to express js ${name}!`
    });
});

router.use('/users', user);

module.exports = router;
