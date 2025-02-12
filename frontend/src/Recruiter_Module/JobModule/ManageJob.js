import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ManageJob() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [postedBy, setPostedBy] = useState('');
  const [approved, setApproved] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('/admin/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchJobs();
  }, []);

  const handleUpdateClick = (job) => {
    setIsUpdateMode(true);
    setSelectedJob(job);
    setTitle(job.title);
    setDescription(job.description);
    setCategory(job.category);
    setTags(job.tags.join(','));
    setPostedBy(job.postedBy);
    setApproved(job.approved);
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/admin/jobs/${selectedJob._id}`, {
        title,
        description,
        category,
        tags: tags.split(','),
        postedBy,
        approved,
      });
      console.log(response.data);
      setJobs(jobs.map(job => job._id === selectedJob._id ? response.data : job));
      setIsUpdateMode(false);
      setSelectedJob(null);
      setTitle('');
      setDescription('');
      setCategory('');
      setTags('');
      setPostedBy('');
      setApproved(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteClick = async (job) => {
    try {
      const response = await axios.delete(`/admin/jobs/${job._id}`);
      console.log(response.data);
      setJobs(jobs.filter(j => j._id !== job._id));
    } catch (error) {
      console.error(error);
      alert('Error deleting job: ' + error.message);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Manage Jobs</h1>
      </header>
      <main className="flex-1 p-4">
        <h2 className="text-xl font-bold mb-4">Existing Jobs:</h2>
        {jobs.length > 0 ? (
          <div className="border border-gray-200 rounded p-4">
            <ul>
              {jobs.map((job) => (
                <li key={job._id} className="flex justify-between mb-2">
                  {job.title} ({job.category}) - {job.postedBy}
                  <div className="flex justify-end">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={() => handleUpdateClick(job)}
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleDeleteClick(job)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>No jobs found.</p>
        )}
        {isUpdateMode && (
          <form onSubmit={handleSubmitUpdate} className="w-full max-w-lg mt-4">
            <h2 className="text-xl font-bold mb-4">Update Job:</h2>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Title
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Category
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Description
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Tags
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
                <p className="text-gray-600 text-xs">Enter tags separated by commas.</p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Posted By
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  value={postedBy}
                  onChange={(e) => setPostedBy(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Approved
                </label>
                <select
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={approved}
                  onChange={(e) => setApproved(e.target.value === 'true')}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Update Job
              </button>
            </div>
          </form>
        )}
      </main>
    </div>
  );
}

export default ManageJob;