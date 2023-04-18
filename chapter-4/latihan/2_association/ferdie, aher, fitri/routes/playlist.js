const express = require('express');
const playlist = require('../controller/playlist');
const router = express.Router();


router.get('/playlist', playlist.index);
router.get('/playlist/:playlist_id', playlist.show);
router.post('/playlist', playlist.store);
router.put('/playlist/:playlist_id', playlist.update);
router.delete('/playlist/:playlist_id', playlist.destroy);
router.post('/playlist/video', playlist.addPlaylistVideo);

module.exports = router;
