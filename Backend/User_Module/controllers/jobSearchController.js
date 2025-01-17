// const Job = require("../../Recruiter_Module/models/jobModel-R.js");
const Job = require("../../Recruiter_Module/models/jobModel-R.js"); // Uncommented this line
const JobSearch = require("../models/jobSearchModel.js");

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find(); // Removed .populate("categories")
    res.status(200).json({ success: true, data: jobs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId); // Removed .populate("categories")
    if (!job) {
      res.status(404).json({ success: false, message: "Job not found" });
    } else {
      res.status(200).json({ success: true, data: job });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.filterJobs = async (req, res) => {
  try {
    const { category, title, tags } = req.query;
    const query = {};
    if (category) query.category = category; // Updated this line
    if (title) query.title = { $regex: title, $options: "i" };
    if (tags) query.tags = { $in: tags.split(",") };
    const jobs = await Job.find(query);
    res.status(200).json({ success: true, data: jobs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
exports.saveFavoriteJob = async (req, res) => {
  try {
    const userId = req.body.userId;
    const jobId = req.body.jobId;
    const existingJobSearch = await JobSearch.findOne({ userId, jobId });
    if (existingJobSearch) {
      existingJobSearch.favorite = true;
      await existingJobSearch.save();
    } else {
      const newJobSearch = new JobSearch({ userId, jobId, favorite: true });
      await newJobSearch.save();
    }
    res.status(200).json({ success: true, message: "Job saved as favorite" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.setJobAlert = async (req, res) => {
  try {
    const userId = req.body.userId;
    const jobId = req.body.jobId;
    const existingJobSearch = await JobSearch.findOne({ userId, jobId });
    if (existingJobSearch) {
      existingJobSearch.alert = true;
      await existingJobSearch.save();
    } else {
      const newJobSearch = new JobSearch({ userId, jobId, alert: true });
      await newJobSearch.save();
    }
    res.status(200).json({ success: true, message: "Job alert set" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
