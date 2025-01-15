const Job = require(__dirname + "/../models/jobModel-R.js");

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);
    if (!job) {
      res.status(404).json({ message: "Job not found" });
    } else {
      res.json(job);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createJob = async (req, res) => {
  try {
    const job = new Job({
      title: req.body.title,
      description: req.body.description,
      requirements: req.body.requirements,
      tags: req.body.tags,
      categories: req.body.categories,
      applicationDeadline: req.body.applicationDeadline,
      visibility: req.body.visibility,
    });
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    console.error(err); // Log the error
    if (err.name === "ValidationError") {
      res
        .status(400)
        .json({ message: "Validation failed", errors: err.errors });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

exports.updateJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findByIdAndUpdate(jobId, req.body, {
      new: true,
    });
    res.json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: "Job deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
