const express = require('express');
const video = require('../controller/video');
const router = express.Router();

router.get('/videos', video.index);
router.get('/videos/:video_id', video.show);
router.post('/videos', video.store);
router.put('/videos/:video_id', video.update);
router.delete('/videos/:video_id', video.destroy);
router.post('/videos/comment', video.comment);

module.exports = router;