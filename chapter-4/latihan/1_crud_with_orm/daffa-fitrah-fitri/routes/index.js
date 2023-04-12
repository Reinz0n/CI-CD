const express = require("express");
const router = express.Router();
const channel = require("../controller/channel");
const video = require("../controller/video");

router.get("/", (req, res) =>
  res.status(200).json({
    message: "Welcome",
  })
);

// channels
router.get("/channels", channel.index);
router.post("/channels", channel.store);
router.get("/channels/:channel_id", channel.show);
router.put("/channels/:channel_id", channel.update);
router.delete("/channels/:channel_id", channel.destroy);

// video
router.get("/videos", video.index);
router.post("/videos", video.store);
router.get("/videos/:video_id", video.show);
router.put("/videos/:video_id", video.update);
router.delete("/videos/:video_id", video.destroy);

module.exports = router;
