// const mongoose = require("mongoose");

// const applicationSchema = new mongoose.Schema({
//   jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
//   candidateId: { type: mongoose.Schema.Types.ObjectId, ref: "Candidate" },
//   resume: { type: String },
//   coverLetter: { type: String },
//   status: {
//     type: String,
//     enum: ["applied", "shortlisted", "interviewed", "rejected"],
//   },
// });

// const Application =
//   mongoose.models.Application ||
//   mongoose.model("Application", applicationSchema);

// module.exports = Application;

// applicationModel.js
const mongoose = require("mongoose");
const Job = require("./jobModel-R.js");
const Candidate = require("./candidateModel.js");

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
