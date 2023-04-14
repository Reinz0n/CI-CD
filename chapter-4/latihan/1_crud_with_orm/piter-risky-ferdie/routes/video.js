const express = require("express");
const videos = require("../controllers/video.js")

const router = express.Router();

router.get('/videos', videos.index);
router.get('/videos/:id', videos.showDetail);
router.post('/videos', videos.store);
router.put('/videos/:id', videos.update);
router.delete('/videos/:id', videos.destroy);

module.exports = router;