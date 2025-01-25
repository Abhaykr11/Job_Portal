import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ApplicationStatus() {
  const [applications, setApplications] = useState([]);
  const [message, setMessage] = useState('');
  const [candidateId, setCandidateId] = useState('');

  useEffect(() => {
    const id = window.location.pathname.split('/').pop();
    setCandidateId(id);
    axios.get(`http://localhost:3000/application-status/${id}`)
      .then(response => {
        if (response && response.data) {
          setApplications(response.data);
        } else {
          setMessage('No data available');
        }
      })
      .catch(error => {
        setMessage(error.message);
      });
  }, []);

  const handleStatusUpdate = async (id, status) => {
    try {
      const response = await axios.patch(`http://localhost:3000/application-status/${id}`, { status });
      if (response && response.data) {
        setApplications(applications.map(application => application._id === id ? response.data : application));
      } else {
        setMessage('No data available');
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Application Status</h1>
      </header>
      <main className="flex-1 p-4">
        {applications.length === 0 ? (
          <p className="text-gray-700">{message}</p>
        ) : (
          <table className="w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Job ID</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map(application => (
                <tr key={application._id}>
                  <td className="px-4 py-2">{application.jobId}</td>
                  <td className="px-4 py-2">{application.status}</td>
                  <td className="px-4 py-2">
                    <select
                      className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      value={application.status}
                      onChange={e => handleStatusUpdate(application._id, e.target.value)}
                    >
                      <option value="applied">Applied</option>
                      <option value="shortlisted">Shortlisted</option>
                      <option value="rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
}

export default ApplicationStatus;