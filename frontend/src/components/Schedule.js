import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Schedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [filters, setFilters] = useState({ group: '', subject: '', teacher: '', type: '' });

  useEffect(() => {
    fetchSchedules();
  }, [filters]);

  const fetchSchedules = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/schedule', { params: filters });
      setSchedules(response.data);
    } catch (error) {
      console.error('Failed to fetch schedules', error);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>Расписание занятий</h2>
      <div>
        <input name="group" placeholder="Группа" onChange={handleFilterChange} />
        <input name="subject" placeholder="Предмет" onChange={handleFilterChange} />
        <input name="teacher" placeholder="Преподаватель" onChange={handleFilterChange} />
        <select name="type" onChange={handleFilterChange}>
          <option value="">Тип</option>
          <option value="lecture">Лекция</option>
          <option value="seminar">Семинар</option>
          <option value="practice">Практика</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Группа</th>
            <th>Предмет</th>
            <th>Преподаватель</th>
            <th>Аудитория</th>
            <th>Тип</th>
            <th>Дата</th>
            <th>Время</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule) => (
            <tr key={schedule.id}>
              <td>{schedule.group}</td>
              <td>{schedule.subject}</td>
              <td>{schedule.teacher}</td>
              <td>{schedule.room}</td>
              <td>{schedule.type}</td>
              <td>{schedule.date}</td>
              <td>{schedule.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;