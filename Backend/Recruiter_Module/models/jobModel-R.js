// const mongoose = require("mongoose");

// const jobSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   category: String,
//   tags: [String],
//   applicationDeadline: Date,
//   visibility: String, // e.g., 'public', 'private'
//   postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
// });

// const Job = mongoose.model("Job", jobSchema);

// module.exports = Job;

const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  // Define your schema here
});

const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);

module.exports = Job;
