const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // подключение к бд

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.ENUM('student', 'teacher')
}, {
  sequelize,
  modelName: 'User'
});

module.exports = User;