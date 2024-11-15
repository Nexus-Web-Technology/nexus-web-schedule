const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Schedule extends Model {}

Schedule.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  group: DataTypes.STRING,
  subject: DataTypes.STRING,
  teacher: DataTypes.STRING,
  room: DataTypes.STRING,
  type: DataTypes.ENUM('lecture', 'seminar', 'practice'),
  date: DataTypes.DATEONLY,
  time: DataTypes.TIME
}, {
  sequelize,
  modelName: 'Schedule'
});

module.exports = Schedule;