const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ quiet: true });

const app = require('./app');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/sms_db';

if (!process.env.JWT_SECRET) {
  console.error(
    'FATAL: JWT_SECRET is not set. Copy .env.example to .env and configure it before starting the server.'
  );
  process.exit(1);
}

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log(`MongoDB Connected: ${MONGO_URI}`);
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(`Error connecting to MongoDB: ${err.message}`);
    process.exit(1);
  });
