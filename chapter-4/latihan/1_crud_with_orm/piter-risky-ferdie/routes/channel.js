const express = require("express");
const channels = require("../controllers/channel.js")

const router = express.Router();

router.get('/channels', channels.index);
router.get('/channels/:id', channels.showDetail);
router.post('/channels', channels.store);
router.put('/channels/:id', channels.update);
router.delete('/channels/:id', channels.destroy);

module.exports = router;