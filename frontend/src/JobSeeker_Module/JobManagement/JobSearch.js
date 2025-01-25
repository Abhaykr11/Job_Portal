import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchJob() {
  const [jobs, setJobs] = useState([]);
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [userId, setUserId] = useState(''); // Assuming you have a way to get the user ID
  const [savedJobs, setSavedJobs] = useState([]); // Array to store saved job IDs

  useEffect(() => {
    axios.get('/user/job-search')
      .then(response => {
        setJobs(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });

      axios.get(`/api/user/get-saved-jobs/${userId}`)
      .then(response => {
        setSavedJobs(response.data.data);
      })
      .catch(error => {
        console.error(error);
        console.log(error.config);
      });
  }, [userId]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/user/job-search/filter?category=${category}&title=${title}&tags=${tags}`);
      setJobs(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveJob = async (job) => {
    try {
      const response = await axios.post('/user/save-favorite-job', {
        userId: userId,
        jobId: job._id,
      });
      console.log(response.data);
      setSavedJobs([...savedJobs, job._id]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Search Job</h1>
      </header>
      <main className="flex-1 p-4">
        <form onSubmit={handleSearch} className="w-full max-w-lg mt-4">
          <h2 className="text-xl font-bold mb-4">Search Criteria</h2>
          <div className="flex flex-wrap -mx-3 mb-6">
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
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
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
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
        <h2 className="text-xl font-bold mb-4 mt-4">Search Results</h2>
        <ul>
          {jobs.map((job) => (
            <li key={job._id} className="mb-4">
              <h3 className="text-lg font-bold">{job.title}</h3>
              <p>{job.description}</p>
              <p>Category: {job.category}</p>
              <p>Tags: {job.tags.join(", ")}</p>
              {savedJobs.includes(job._id) ? (
                <button
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
                  disabled
                >
                  Saved
                </button>
              ) : (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleSaveJob(job)}
                >
                  Save Job
                </button>
              )}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default SearchJob;