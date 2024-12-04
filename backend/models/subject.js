const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Subject extends Model {}

Subject.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Уникальное имя предмета
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Subject',
  timestamps: false,
  freezeTableName: true,
});

module.exports = Subject;