import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './Dashboard.js';
import CreateUser from './UserManagement/CreateUser.js';
import ManageUser from './UserManagement/ManageUser.js';

function AdminModule() {
  return (
    <Routes>
      <Route index element={<AdminDashboard />} />
      <Route path="create-user" element={<CreateUser />} />
      <Route path="manage-user" element={<ManageUser />} />
      
    </Routes>
  );
}

export default AdminModule;