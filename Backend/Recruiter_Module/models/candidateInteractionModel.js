// const mongoose = require("mongoose");

// const candidateInteractionSchema = new mongoose.Schema({
//   applicationId: { type: mongoose.Schema.Types.ObjectId, ref: "Application" },
//   interviewInvitation: {
//     interviewDate: { type: Date },
//     interviewTime: { type: String },
//     interviewLocation: { type: String },
//   },
//   feedback: { type: String },
// });

// const CandidateInteraction =
//   mongoose.models.CandidateInteraction ||
//   mongoose.model("CandidateInteraction", candidateInteractionSchema);

// module.exports = CandidateInteraction;
const mongoose = require("mongoose");

const candidateInteractionSchema = new mongoose.Schema({
  applicationId: { type: mongoose.Schema.Types.ObjectId, ref: "Application" },
  interactionType: {
    type: String,
    enum: ["interview_invitation", "feedback"],
  },
  message: { type: String },
  sender: { type: String },
  receiver: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const CandidateInteraction =
  mongoose.models.CandidateInteraction ||
  mongoose.model("CandidateInteraction", candidateInteractionSchema);

module.exports = CandidateInteraction;
