const Application = require("../../Recruiter_Module/models/applicationModel");

exports.getApplicationStatus = async (req, res) => {
  try {
    const applications = await Application.find({
      candidateId: req.params.candidateId,
    });
    if (applications.length === 0) {
      res.status(404).json({ message: "No application status found" });
    } else {
      res.json(applications);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

exports.updateApplicationStatus = async (req, res) => {
  try {
    const applicationId = req.params.id;
    const { status } = req.body;
    const application = await Application.findByIdAndUpdate(
      applicationId,
      { status },
      { new: true }
    );
    if (!application) {
      res.status(404).json({ message: "Application not found" });
    } else {
      res.json(application);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
