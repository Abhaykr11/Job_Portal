const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  requirements: String,
  tags: [{ type: String }],
});

const Job = mongoose.models.Job || mongoose.model("Job", jobSchema, "jobs_R");

module.exports = Job;
