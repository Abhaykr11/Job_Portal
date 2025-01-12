const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
  candidateId: { type: mongoose.Schema.Types.ObjectId, ref: "Candidate" },
  resume: { type: String },
  coverLetter: { type: String },
  status: {
    type: String,
    enum: ["applied", "shortlisted", "interviewed", "rejected"],
  },
});

const Application =
  mongoose.models.Application ||
  mongoose.model("Application", applicationSchema);

module.exports = Application;
