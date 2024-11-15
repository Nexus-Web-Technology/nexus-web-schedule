const { Sequelize } = require('sequelize');

// Подключение к базе данных
const sequelize = new Sequelize('nexus_schedule', 'nexus_user', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // Отключить вывод SQL-запросов в консоль
});

// Проверка подключения
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;