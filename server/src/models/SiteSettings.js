const mongoose = require('mongoose');

const siteSettingsSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    required: true,
    default: 'My School',
  },
  logo: {
    url: String,
    alt: String,
  },
  favicon: {
    url: String,
  },
  theme: {
    primaryColor: {
      type: String,
      default: '#2563eb', // Default Blue
    },
    secondaryColor: {
      type: String,
      default: '#1e293b', // Slate 800
    },
    darkMode: {
      type: Boolean,
      default: false,
    },
  },
  contactInfo: {
    address: String,
    phone: String,
    email: String,
    googleMapUrl: String,
  },
  socialLinks: {
    facebook: String,
    twitter: String,
    instagram: String,
    linkedin: String,
    youtube: String,
  },
  modules: {
    showBlog: { type: Boolean, default: true },
    showNews: { type: Boolean, default: true },
    showEvents: { type: Boolean, default: true },
    admissionsOpen: { type: Boolean, default: true },
  },
  meta: {
    title: { type: String, default: 'School Management System' },
    description: { type: String, default: 'Welcome to our school portal.' },
  },
}, {
  timestamps: true,
});

// Singleton pattern: Ensure only one settings document exists
// (Logic usually handled in controller, but schema is ready)

const SiteSettings = mongoose.model('SiteSettings', siteSettingsSchema);
module.exports = SiteSettings;
