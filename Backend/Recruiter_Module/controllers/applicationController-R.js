const Application = require("../models/applicationModel");

exports.getApplications = async (req, res) => {
  try {
    console.log("Reached getApplications endpoint");
    const applications = await Application.find();
    console.log("Applications found:", applications);
    if (!applications) {
      res.status(404).json({ message: "No applications found" });
    } else {
      res.json(applications);
    }
  } catch (err) {
    console.error("Error getting applications:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.getApplicationById = async (req, res) => {
  try {
    console.log("Reached getApplicationById endpoint");
    console.log("Req params ID:", req.params.id);
    const application = await Application.findById(req.params.id);
    console.log("Application found:", application);
    if (!application) {
      res.status(404).json({ message: "Application not found" });
    } else {
      res.json(application);
    }
  } catch (err) {
    console.error("Error getting application:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.createApplication = async (req, res) => {
  try {
    const application = new Application({
      jobId: req.body.jobId,
      candidateId: req.body.candidateId,
      resume: req.body.resume,
      coverLetter: req.body.coverLetter,
      status: "applied",
    });
    await application.save();
    console.log("Application saved:", application);
    res.status(201).json(application);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Validation failed" });
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

exports.sendInterviewInvitation = async (req, res) => {
  try {
    const applicationId = req.params.id;
    const application = await Application.findById(applicationId);

    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }

    const interviewDetails = req.body;
    const candidateEmail = application.candidateEmail;

    // Send interview invitation email using a mail service like Nodemailer
    const mailOptions = {
      from: "navnithbhat007@gmail.com",
      to: candidateEmail,
      subject: "Interview Invitation",
      text: `Dear ${application.candidateName},\n\nYou are invited for an interview on ${interviewDetails.interviewDate} at ${interviewDetails.interviewTime}.\n\nBest regards,\n${interviewDetails.interviewerName}`,
    };

    res.json({ message: "Interview invitation sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending interview invitation" });
  }
};
