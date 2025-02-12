
import React from 'react';
import '../style.css';
import { Link } from 'react-router-dom';

function RecruiterDashboard() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Recruiter Dashboard</h1>
      </header>
      <main className="flex-1 p-4">
        <div className="grid grid-rows-3 gap-4">
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-bold mb-2">Job Postings</h2>

            <Link to="create-job">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Create Job Posting
            </button>
            </Link>

            <div className="h-10"></div>
            <Link to="manage-job">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Manage Job Postings
            </button>
            </Link>
            
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-bold mb-2">Application Management</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Applications
            </button>
            <div className="h-10"></div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Filter Applications
            </button>
            <div className="h-10"></div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Shortlist Candidates
            </button>
            <div className="h-10"></div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Reject Candidates
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-bold mb-2">Candidate Interaction</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Send Interview Invitations
            </button>
            <div className="h-10"></div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Provide Feedback
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RecruiterDashboard;