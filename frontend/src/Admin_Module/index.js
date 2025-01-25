import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './Dashboard.js';
import CreateUser from './UserManagement/CreateUser.js';
import ManageUser from './UserManagement/ManageUser.js';
import CreateJob from './JobManagement/CreateJob.js';
import ManageJob from './JobManagement/ManageJob.js';
import Setting from  './SystemSettings/Settings.js'

function AdminModule() {
  return (
    <Routes>
      <Route index element={<AdminDashboard />} />
      <Route path="create-user" element={<CreateUser />} />
      <Route path="manage-user" element={<ManageUser />} />
      <Route path="create-job" element={< CreateJob />} />
      <Route path="manage-job" element={<ManageJob/>} />
      <Route path="system-setting" element={<Setting/>} />
      
    </Routes>
  );
}

export default AdminModule;