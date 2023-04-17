'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // one to many -> channel
      models.Playlist.belongsTo(models.Channel, {
        foreignKey: 'id'
      });

      // many to many -> video
      models.Playlist.belongsToMany(models.Video, {
        through: models.PlaylistVideo,
        foreignKey: "playlist_id"
      })
    }
  }
  Playlist.init({
    channel_id: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Playlist',
  });
  return Playlist;
};