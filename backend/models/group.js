const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Group extends Model {}

Group.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Group'
});

module.exports = Group;

