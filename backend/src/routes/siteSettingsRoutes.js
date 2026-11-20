const express = require('express');
const router = express.Router();
const { getSettings, updateSettings } = require('../controllers/siteSettingsController');
const { protect, restrictTo } = require('../middleware/authMiddleware');

router.get('/', getSettings);
router.put('/', protect, restrictTo('Admin', 'Management'), updateSettings);

module.exports = router;
