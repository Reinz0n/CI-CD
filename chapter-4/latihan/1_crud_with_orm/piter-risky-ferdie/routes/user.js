const express = require("express");
const users = require("../controllers/user.js")

const router = express.Router();

router.get('/users', users.index);
router.get('/users/:id', users.showDetail);
router.post('/users', users.store);
router.put('/users/:id', users.update);
router.delete('/users/:id', users.destroy);

module.exports = router;