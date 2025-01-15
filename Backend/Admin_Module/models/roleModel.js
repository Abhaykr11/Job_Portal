// const mongoose = require("mongoose");
// const roleSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     enum: ["Admin", "Recruiter", "Job Seeker"],
//   },
//   permissions: [
//     {
//       type: String,
//       enum: [
//         "createJobPosting",
//         "editJobPosting",
//         "deleteJobPosting",
//         "approveJobPosting",
//         "manageUsers",
//         "manageRoles",
//         "viewJobPostings",
//         "applyToJobPostings",
//       ],
//     },
//   ],
//   users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
// });

const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ["Admin", "Recruiter", "Job Seeker"],
  },
  permissions: [
    {
      type: String,
      enum: [
        "createJobPosting",
        "editJobPosting",
        "deleteJobPosting",
        "approveJobPosting",
        "manageUsers",
        "manageRoles",
        "viewJobPostings",
        "applyToJobPostings",
      ],
    },
  ],
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Role = mongoose.model("Role", roleSchema);

module.exports = Role;
