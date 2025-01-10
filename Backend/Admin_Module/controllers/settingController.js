// Admin_Module/controllers/settingController.js
const Setting = require("../models/settingmodel");

exports.getSettings = async (req, res) => {
  try {
    const settings = await Setting.findOne();
    if (!settings) {
      return res.status(404).json({ message: "Settings not found" });
    }
    res.status(200).json(settings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createSettings = async (req, res) => {
  try {
    const settings = new Setting(req.body);
    await settings.save();
    res.status(201).json(settings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSettings = async (req, res) => {
  try {
    const settings = await Setting.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
    });
    res.status(200).json(settings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
