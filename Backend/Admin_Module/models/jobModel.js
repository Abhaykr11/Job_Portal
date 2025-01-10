const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  tags: [String],
  postedBy: String,
  approved: Boolean,
});

const Job = mongoose.model("Job", jobSchema, "jobs");

module.exports = Job;
