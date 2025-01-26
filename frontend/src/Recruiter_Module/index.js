import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RecruiterDashboard from './Dashboard';

import CreateJob from './JobModule/CreateJob';
function RecruiterModule() {
  return (
    <Routes>
        <Route index element={<RecruiterDashboard/>} />
        <Route path="create-job" element={<CreateJob />} />
    </Routes>
  )
}

export default RecruiterModule;