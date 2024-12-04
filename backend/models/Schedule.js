const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Group = require('./group');
const Subject = require('./subject');
const Teacher = require('./teacher');

class Schedule extends Model {}

Schedule.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  groupId: {
    type: DataTypes.INTEGER,
    references: {
      model: Group,
      key: 'id',
    },
    allowNull: false,
  },
  subjectId: {
    type: DataTypes.INTEGER,
    references: {
      model: Subject,
      key: 'id',
    },
    allowNull: false,
  },
  teacherId: {
    type: DataTypes.INTEGER,
    references: {
      model: Teacher,
      key: 'id',
    },
    allowNull: true,
  },
  room: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  type: {
    type: DataTypes.ENUM('lecture', 'seminar', 'practice'),
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Schedule',
  timestamps: false,
  freezeTableName: true,
});

// Определение связей (associations)
Schedule.belongsTo(Group, { foreignKey: 'groupId' });
Schedule.belongsTo(Subject, { foreignKey: 'subjectId' });
Schedule.belongsTo(Teacher, { foreignKey: 'teacherId' });

module.exports = Schedule;