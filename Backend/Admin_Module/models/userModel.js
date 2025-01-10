const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String, // Admin, Recruiter, or Job Seeker
});

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
