const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  admissionNumber: {
    type: String,
    required: true,
    unique: true,
  },
  rollNumber: {
    type: String,
  },
  class: {
    type: String, // Can be ObjectId if there is a Class model
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
  },
  parents: [{
    relation: {
      type: String, // Father, Mother, Guardian
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: String,
    phone: {
      type: String,
      required: true,
    },
    occupation: String,
  }],
  // Academic & Administrative
  enrollmentDate: {
    type: Date,
    default: Date.now,
  },
  feeStatus: {
    type: String, // Paid, Pending, Overdue
    default: 'Pending',
  },
}, {
  timestamps: true,
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
