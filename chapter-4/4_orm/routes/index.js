const express = require('express');
const router = express.Router();
const channel = require('../controller/channel');
const video = require('../controller/video');

router.get('/', (req, res) => res.status(200).json({message: "welcome to blog api"}));

router.get('/channels', channel.index); // get all channel
router.get('/channels/:channel_id', channel.show); // get detail channel
router.post('/channels', channel.store); // create new channel
router.put('/channels/:channel_id', channel.update); // update channel
router.delete('/channels/:channel_id', channel.destroy); // delete channel

router.get('/videos', video.index); // get all video
router.get('/videos/:video_id', video.show); // get detail video
router.post('/videos', video.store); // create new video
router.put('/videos/:video_id', video.update); // update video
router.delete('/videos/:video_id', video.destroy); // delete video

module.exports = router;