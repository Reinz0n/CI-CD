const express = require('express');
const channel = require('./channel');
const video = require('./video');
const user = require('./user');
const playlist = require('./playlist');

const router = express.Router();

router.use(channel);
router.use(video);
router.use(user);
router.use(playlist);

router.get('/', (req, res) => res.status(200).json({message: "welcome to blog api"}));

module.exports = router;