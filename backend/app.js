const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const scheduleRoutes = require('./routes/schedule');
app.use('/api/schedule', scheduleRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});