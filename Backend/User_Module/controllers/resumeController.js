const express = require("express");
const Resume = require("../models/resumeModel");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

exports.uploadResume = upload.single("cv");

exports.uploadResume = async (req, res) => {
  try {
    const resume = new Resume({
      userId: req.body.userId,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      objective: req.body.objective,
      education: req.body.education,
      workExperience: req.body.workExperience,
      skills: req.body.skills,
      achievements: req.body.achievements,
      cv: req.file.buffer,
      cvContentType: req.file.mimetype,
    });
    await resume.save();
    res
      .status(201)
      .json({ success: true, message: "Resume uploaded successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getResume = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) {
      res.status(404).json({ success: false, message: "Resume not found" });
    } else {
      res.status(200).json({ success: true, data: resume });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateResume = async (req, res) => {
  try {
    const resume = await Resume.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!resume) {
      res.status(404).json({ success: false, message: "Resume not found" });
    } else {
      res.status(200).json({ success: true, data: resume });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteResume = async (req, res) => {
  try {
    await Resume.findByIdAndRemove(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Resume deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
