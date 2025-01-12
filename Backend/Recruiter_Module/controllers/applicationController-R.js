const Application = require("../models/applicationModel");

exports.getApplications = async (req, res) => {
  try {
    const applications = await Application.find()
      .populate("jobId")
      .populate("candidateId");
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id)
      .populate("jobId")
      .populate("candidateId");
    if (!application) {
      res.status(404).json({ message: "Application not found" });
    } else {
      res.json(application);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createApplication = async (req, res) => {
  console.log("Create application function called");
  console.log(req.body);
  const { jobId, candidateId, resume, coverLetter } = req.body;
  const application = new Application({
    jobId,
    candidateId,
    resume,
    coverLetter,
  });
  await application.save();
  res.status(201).json(application);
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
    res.json(application);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteApplication = async (req, res) => {
  try {
    await Application.findByIdAndDelete(req.params.id);
    res.json({ message: "Application deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
