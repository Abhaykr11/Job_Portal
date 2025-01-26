import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AdminModule from './Admin_Module/index.js';

// import JobSeekerModule from './JobSeeker_Module/index.js'
import RecruiterModule from './Recruiter_Module/index.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<RecruiterModule/>} />
      </Routes>
    </Router>
  );
}

export default App;