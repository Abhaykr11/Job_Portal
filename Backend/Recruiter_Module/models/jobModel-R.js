// const mongoose = require("mongoose");

// const jobSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     requirements: {
//       type: String,
//       required: true,
//       validate: (value) => value.trim() !== "",
//     },
//     tags: [{ type: String }],
//   },
//   {
//     collection: "jobs",
//     versionKey: false,
//   }
// );

// const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);

// module.exports = Job;

const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    requirements: {
      type: String,
      required: true,
      validate: {
        validator: (value) => value.trim() !== "",
        message: "Requirements field cannot be empty",
      },
    },
    tags: [{ type: String }],
    categories: [{ type: String }],
    applicationDeadline: {
      type: Date,
      required: true,
      validate: {
        validator: (value) => !isNaN(new Date(value).getTime()),
        message: "Invalid date format",
      },
    },
    visibility: {
      type: String,
      enum: ["public", "private"],
      required: true,
    },
  },
  {
    collection: "jobs",
    versionKey: false,
  }
);

const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);

module.exports = Job;
