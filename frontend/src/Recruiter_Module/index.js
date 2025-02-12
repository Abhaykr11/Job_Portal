import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RecruiterDashboard from './Dashboard';


import CreateJob from './JobModule/CreateJob';
import ManageJob from './JobModule/ManageJob';
function RecruiterModule() {
  return (
    <Routes>
        <Route index element={<RecruiterDashboard/>} />
        <Route path="create-job" element={<CreateJob />} />
        <Route path="manage-job" element={<ManageJob />}/>
    </Routes>
  )
}

export default RecruiterModule;