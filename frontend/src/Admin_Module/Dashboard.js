import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CreateUser from './UserManagement/CreateUser';
import '../style.css';

function AdminDashboard() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </header>
      <main className="flex-1 p-4">
        <div className="grid grid-rows-3 gap-4">
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-bold mb-2">User Management</h2>
            <Link to="create-user">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Create User
              </button>
            </Link>
            
            <Link to="manage-user">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
              Manage Users
            </button>
            </Link>
            
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
              Manage Roles
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-bold mb-2">Job Management</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Create Job Posting
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
              Manage Job Postings
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
              Manage Job Categories
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-bold mb-2">System Settings</h2>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              System Settings
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;