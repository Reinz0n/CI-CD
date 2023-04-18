'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // relasi one-to-many -> channel
      Video.belongsTo(models.Channel, {foreignKey: 'channel_id', as: 'channel'});

      // relasi many-to-many -> user
      // Video.belongsToMany(models.User, {foreignKey: 'video_id', as: 'comments', through: models.Comment});

      // many to many -> playlist
      models.Video.belongsToMany(models.Playlist, {
        through: models.PlaylistVideo,
        foreignKey: "video_id"
      })

      Video.hasMany(models.Comment, {foreignKey: "video_id" ,as:"comment"})
    }
  }
  Video.init({
    channel_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Video',
  });
  return Video;
};