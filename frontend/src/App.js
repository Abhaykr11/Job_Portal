import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AdminModule from './Admin_Module/index.js';
import JobSeekerDashboard from './JobSeeker_Module/Dashboard.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<JobSeekerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;