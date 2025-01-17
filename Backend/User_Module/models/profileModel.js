const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  personalDetails: {
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    dob: {
      type: Date,
    },
  },
  educationalDetails: [
    {
      degree: {
        type: String,
      },
      institution: {
        type: String,
      },
      yearOfPassing: {
        type: Number,
      },
    },
  ],
  professionalDetails: [
    {
      company: {
        type: String,
      },
      designation: {
        type: String,
      },
      yearOfExperience: {
        type: Number,
      },
    },
  ],
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
