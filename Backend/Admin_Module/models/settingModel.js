const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
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
