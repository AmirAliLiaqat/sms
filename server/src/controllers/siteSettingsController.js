const SiteSettings = require('../models/SiteSettings');

// @desc    Get site settings
// @route   GET /api/settings
// @access  Public (or semi-protected depending on needs, distinct from Admin edit)
const getSettings = async (req, res) => {
  try {
    let settings = await SiteSettings.findOne();
    if (!settings) {
      // Create default if not exists
      settings = await SiteSettings.create({});
    }
    res.status(200).json({ success: true, data: settings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update site settings
// @route   PUT /api/settings
// @access  Private/Admin
const updateSettings = async (req, res) => {
  try {
    // In a real app, check req.user.role === 'Admin' here or in middleware
    const updates = req.body;

    // Find and update the single settings document
    // upset: true creates it if it doesn't exist
    const settings = await SiteSettings.findOneAndUpdate({}, updates, {
      new: true,
      upsert: true,
      runValidators: true,
    });

    res.status(200).json({ success: true, data: settings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getSettings,
  updateSettings,
};
