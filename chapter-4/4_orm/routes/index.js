const express = require('express');
const router = express.Router();
const channel = require('../controller/channel');

router.get('/', (req, res) => res.status(200).json({message: "welcome to blog api"}));

router.get('/channels', channel.index); // get all channel
router.get('/channels/:channel_id', channel.show); // get detail channel
router.post('/channels', channel.store); // create new channel
router.put('/channels/:channel_id', channel.update); // update channel
router.delete('/channels/:channel_id', channel.destroy); // delete channel

module.exports = router;