const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cookieParser = require('cookie-parser');
const authRoutes = require('./src/routes/authRoutes');
const studentRoutes = require('./src/routes/studentRoutes');
const siteSettingsRoutes = require('./src/routes/siteSettingsRoutes');

// Routes
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/settings', siteSettingsRoutes);

app.get('/', (req, res) => {
  res.send('School Management System API is running...');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({
    success: false,
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

module.exports = app;
