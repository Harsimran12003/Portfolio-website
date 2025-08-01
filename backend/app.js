const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const userRoutes = require('./routes/userRouter');
const projectRoutes = require('./routes/projectRouter');
const skillRoutes = require('./routes/skillRouter');
const eduExpRoutes = require('./routes/educationRouter');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


app.use('/api/user', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/education', eduExpRoutes);


app.listen(3000, () => console.log('Server running on port 3000'));
