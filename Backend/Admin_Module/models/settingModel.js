// Admin_Module/models/settingModel.js
const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema({
  notificationPreferences: {
    emailNotifications: Boolean,
    smsNotifications: Boolean,
  },
  systemSettings: {
    theme: String,
    language: String,
  },
});

const Setting = mongoose.model("Setting", settingSchema);

module.exports = Setting;
