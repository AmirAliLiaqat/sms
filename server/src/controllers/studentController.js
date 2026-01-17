const Student = require('../models/Student');
const User = require('../models/User');

// @desc    Get all students
// @route   GET /api/students
// @access  Private/Admin
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find().populate('user', 'name email avatar');
    res.status(200).json({
      success: true,
      count: students.length,
      data: students
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// @desc    Get single student
// @route   GET /api/students/:id
// @access  Private/Admin
exports.getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate('user', 'name email avatar');
    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found'
      });
    }
    res.status(200).json({
      success: true,
      data: student
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};

// @desc    Create student
// @route   POST /api/students
// @access  Private/Admin
exports.createStudent = async (req, res) => {
  try {
    // 1. Create User account first if not exists (Simplified: create user here)
    // In a real app, you might take firstName, lastName, email etc and create a User
    const { name, email, password, admissionNumber, rollNumber, grade, section, dateOfBirth, gender, parentName, parentPhone } = req.body;

    const user = await User.create({
      name,
      email,
      password: password || 'DefaultPass123', // Default password for students
      role: 'Student'
    });

    // 2. Create Student linked to User
    const student = await Student.create({
      user: user._id,
      admissionNumber,
      rollNumber,
      class: grade,
      section,
      dateOfBirth,
      gender,
      parentDetails: {
        fatherName: parentName,
        phone: parentPhone
      }
    });

    res.status(201).json({
      success: true,
      data: student
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// @desc    Update student
// @route   PUT /api/students/:id
// @access  Private/Admin
exports.updateStudent = async (req, res) => {
  try {
    let student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found'
      });
    }

    student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      success: true,
      data: student
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });
  }
};

// @desc    Delete student
// @route   DELETE /api/students/:id
// @access  Private/Admin
exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found'
      });
    }

    // Optional: Delete the User account too
    await User.findByIdAndDelete(student.user);
    await student.deleteOne();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
};
