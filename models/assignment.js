'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assignment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Assignment.belongsTo(models.Student, {
        foreignKey: 'studentId'
      })
    }
  }
  Assignment.init({
    name: DataTypes.STRING,
    score: DataTypes.INTEGER,
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Students',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Assignment',
  });
  return Assignment;
};