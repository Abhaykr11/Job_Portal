const CandidateInteraction = require("../models/candidateInteractionModel");

exports.sendInterviewInvitation = async (req, res) => {
  try {
    const applicationId = req.params.id;
    const interviewInvitation = {
      interviewDate: req.body.interviewDate,
      interviewTime: req.body.interviewTime,
      interviewLocation: req.body.interviewLocation,
    };
    const candidateInteraction = new CandidateInteraction({
      applicationId,
      interviewInvitation,
    });
    await candidateInteraction.save();
    res.json({ message: "Interview invitation sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error sending interview invitation" });
  }
};

exports.provideFeedback = async (req, res) => {
  try {
    const applicationId = req.params.id;
    const feedback = req.body.feedback;
    const candidateInteraction = await CandidateInteraction.findOneAndUpdate(
      { applicationId },
      { feedback },
      { new: true }
    );
    if (!candidateInteraction) {
      return res
        .status(404)
        .json({ message: "Candidate interaction not found" });
    }
    res.json({ message: "Feedback provided successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error providing feedback" });
  }
};
