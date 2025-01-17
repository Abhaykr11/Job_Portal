const mongoose = require("mongoose");

const jobSearchSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  alert: {
    type: Boolean,
    default: false,
  },
});

const JobSearch = mongoose.model("JobSearch", jobSearchSchema);

module.exports = JobSearch;
