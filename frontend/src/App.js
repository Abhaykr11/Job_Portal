import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AdminModule from './Admin_Module/index.js';

import JobSeekerModule from './JobSeeker_Module/index.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<JobSeekerModule />} />
      </Routes>
    </Router>
  );
}

export default App;