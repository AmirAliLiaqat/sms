const express = require('express');
const {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent
} = require('../controllers/studentController');
const { protect, restrictTo } = require('../middleware/authMiddleware');

const router = express.Router();

// Protect all routes
router.use(protect);

router
  .route('/')
  .get(restrictTo('Admin', 'Management', 'Staff'), getStudents)
  .post(restrictTo('Admin', 'Management'), createStudent);

router
  .route('/:id')
  .get(getStudent)
  .put(restrictTo('Admin', 'Management'), updateStudent)
  .delete(restrictTo('Admin', 'Management'), deleteStudent);

module.exports = router;
