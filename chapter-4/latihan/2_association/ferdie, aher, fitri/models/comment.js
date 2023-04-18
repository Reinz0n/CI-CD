'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.Video , {foreignKey:"video_id", as: "comment"});

      Comment.belongsTo(models.User , {foreignKey:"user_id", as: "komentar"});
    }
  }
  Comment.init({
    user_id: DataTypes.INTEGER,
    video_id: DataTypes.INTEGER,
    data_comment: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};