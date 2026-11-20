const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  title: {
    type: String, // e.g., "Term 1 School Fee"
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: 'USD',
  },
  status: {
    type: String,
    enum: ['Pending', 'Success', 'Failed', 'Refunded'],
    default: 'Pending',
  },
  paymentMethod: {
    type: String, // 'Stripe', 'PayPal', 'Cash', 'Bank Transfer'
  },
  transactionId: {
    type: String,
    unique: true, // External Gateway ID
  },
  paymentDate: {
    type: Date,
  },
  dueDate: {
    type: Date,
  },
  metadata: {
    type: Map,
    of: String,
  },
}, {
  timestamps: true,
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
