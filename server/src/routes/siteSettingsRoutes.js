const express = require('express');
const router = express.Router();
const { getSettings, updateSettings } = require('../controllers/siteSettingsController');

// Placeholder for auth middleware
// const { protect, admin } = require('../middleware/authMiddleware');

router.get('/', getSettings);
router.put('/', updateSettings); // Add protect, admin middleware here later

module.exports = router;
