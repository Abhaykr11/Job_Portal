const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  objective: { type: String },
  education: [{ type: String }],
  workExperience: [{ type: String }],
  skills: [{ type: String }],
  achievements: [{ type: String }],
  cv: { type: Buffer, contentType: String },
});

const Resume = mongoose.model("Resume", resumeSchema);

module.exports = Resume;
