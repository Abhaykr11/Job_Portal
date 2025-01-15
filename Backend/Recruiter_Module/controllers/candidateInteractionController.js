// exports.sendInterviewInvitation = async (req, res) => {
//   try {
//     const applicationId = req.params.applicationId;
//     const interactionDetails = req.body;

//     const interaction = new CandidateInteraction({
//       applicationId,
//       interactionType: "interview_invitation",
//       message: interactionDetails.message,
//       sender: interactionDetails.sender,
//       receiver: interactionDetails.receiver,
//     });

//     await interaction.save();
//     res.status(201).json(interaction);
//   } catch (err) {
//     console.error(err);
//     res.status(400).json({ message: "Validation failed" });
//   }
// };

// exports.provideFeedback = async (req, res) => {
//   try {
//     const applicationId = req.params.applicationId;
//     const interactionDetails = req.body;

//     const interaction = new CandidateInteraction({
//       applicationId,
//       interactionType: "feedback",
//       message: interactionDetails.message,
//       sender: interactionDetails.sender,
//       receiver: interactionDetails.receiver,
//     });

//     await interaction.save();
//     res.status(201).json(interaction);
//   } catch (err) {
//     console.error(err);
//     res.status(400).json({ message: "Validation failed" });
//   }
// };

// exports.getCandidateInteractions = async (req, res) => {
//   try {
//     const applicationId = req.params.applicationId;
//     const interactions = await CandidateInteraction.find({ applicationId });
//     res.json(interactions);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: err.message });
//   }
// };
const CandidateInteraction = require("../models/candidateInteractionModel");
exports.sendInterviewInvitation = async (req, res) => {
  try {
    const applicationId = req.params.applicationId;
    const interactionDetails = req.body;

    if (
      !interactionDetails.message ||
      !interactionDetails.sender ||
      !interactionDetails.receiver
    ) {
      return res
        .status(400)
        .json({ message: "Message, sender, and receiver are required" });
    }

    const interaction = new CandidateInteraction({
      applicationId,
      interactionType: "interview_invitation",
      message: interactionDetails.message,
      sender: interactionDetails.sender,
      receiver: interactionDetails.receiver,
    });

    await interaction.save();
    res.status(201).json(interaction);
  } catch (err) {
    console.error(err);
    if (err.name === "ValidationError") {
      res
        .status(400)
        .json({ message: "Validation failed", errors: err.errors });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

exports.provideFeedback = async (req, res) => {
  try {
    const applicationId = req.params.applicationId;
    const interactionDetails = req.body;

    if (
      !interactionDetails.message ||
      !interactionDetails.sender ||
      !interactionDetails.receiver
    ) {
      return res
        .status(400)
        .json({ message: "Message, sender, and receiver are required" });
    }

    const interaction = new CandidateInteraction({
      applicationId,
      interactionType: "feedback",
      message: interactionDetails.message,
      sender: interactionDetails.sender,
      receiver: interactionDetails.receiver,
    });

    await interaction.save();
    res.status(201).json(interaction);
  } catch (err) {
    console.error(err);
    if (err.name === "ValidationError") {
      res
        .status(400)
        .json({ message: "Validation failed", errors: err.errors });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

exports.getCandidateInteractions = async (req, res) => {
  try {
    const applicationId = req.params.applicationId;
    const interactions = await CandidateInteraction.find({ applicationId });
    res.json(interactions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
