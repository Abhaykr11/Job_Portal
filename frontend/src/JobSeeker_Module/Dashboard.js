import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

function JobSeekerDashboard() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Job Seeker Dashboard</h1>
      </header>
      <main className="flex-1 p-4">
        <div className="grid grid-rows-4 gap-4">
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-bold mb-2">Profile Management</h2>

            <Link to="create-profile">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Create/Edit Profile
            </button>
            </Link>

            <Link to="view-profile">
            <div className="h-10"></div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Profile
            </button>
            </Link>
            
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-bold mb-2">Job Search</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Search Jobs
            </button>
            <div className="h-10"></div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Saved Jobs
            </button>
            <div className="h-10"></div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Job Alerts
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-bold mb-2">Resume Management</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Upload Resume
            </button>
            <div className="h-10"></div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit Resume
            </button>
            <div className="h-10"></div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Generate CV
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-bold mb-2">Application Tracking</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Application Status
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default JobSeekerDashboard;