const Job = require(__dirname + "/../models/jobModel-R.js");

exports.createJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

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
    const job = await Job.findById(req.params.id);
    if (!job) {
      res.status(404).json({ message: "Job not found" });
    } else {
      res.json(job);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!job) {
      res.status(404).json({ message: "Job not found" });
    } else {
      res.json(job);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    await Job.findByIdAndRemove(req.params.id);
    res.json({ message: "Job deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
