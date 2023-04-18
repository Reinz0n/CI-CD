const express = require('express');
const channel = require('../controller/channel');
const router = express.Router();


router.get('/channels', channel.index);
router.get('/channels/:channel_id', channel.show);
router.post('/channels', channel.store);
router.put('/channels/:channel_id', channel.update);
router.delete('/channels/:channel_id', channel.destroy);
router.post('/channels/subscribe', channel.subscribe);
router.delete('/channels/unsubscribe', channel.unsubscribe);

module.exports = router; 