const { Comment, Video, User, Subscription } = require("../models");
module.exports = {
  store: async (req, res, next) => {
    try {
      const { video_id, comment, user_id } = req.body;

      if (!video_id || !user_id || !comment) {
        return res.status(400).json({
          status: false,
          message: "video_id, user_id and comment is required!",
          data: null,
        });
      }

      const video = await Video.findOne({ where: { id: video_id } });
      const user = await User.findOne({ where: { id: user_id } });

      if (!video) {
        return res.status(404).json({
          status: false,
          message: `can't find video with id ${video_id}`,
          data: null,
        });
      }

      if (!user) {
        return res.status(404).json({
          status: false,
          message: `can't find user with id ${user_id}`,
          data: null,
        });
      }

      const addComment = await Comment.create({
        video_id: video_id,
        comment: comment,
        user_id: user_id,
      });

      return res.status(201).json({
        status: true,
        message: "success",
        data: addComment,
      });
    } catch (error) {
      next(error);
    }
  },

  index: async (req, res, next) => {
    try {
      const comment = await Comment.findAll({
        // attributes: [],
      });

      return res.status(200).json({
        status: true,
        message: "success",
        data: comment,
      });
    } catch (error) {
      next(error);
    }
  },
};
