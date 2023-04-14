const express = require("express");
const channels = require("./channel.js")
const videos = require("./video.js")

const router = express.Router();

router.use(videos);
router.use(channels);

router.get('/', (req,res) => {
    res.status(200).json({
        message: "welcome to express"
    })
})

module.exports = router;