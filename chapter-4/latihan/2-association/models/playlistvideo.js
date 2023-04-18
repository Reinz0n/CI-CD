'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlaylistVideo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PlaylistVideo.init({
    playlist_id: DataTypes.STRING,
    video_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PlaylistVideo',
  });
  return PlaylistVideo;
};