const express = require('express');
const router = express.Router();
const { Schedule } = require('../models/Schedule');
const sequelize = require('../config/database');

// Получить всё расписание с возможностью фильтрации
router.get('/', async (req, res) => {
  const { group, subject, teacher, type } = req.query;

  const where = {};
  if (group) where.group = group;
  if (subject) where.subject = subject;
  if (teacher) where.teacher = teacher;
  if (type) where.type = type;

  try {
    const schedules = await Schedule.findAll({ where });
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch schedule' });
  }
});

module.exports = router;