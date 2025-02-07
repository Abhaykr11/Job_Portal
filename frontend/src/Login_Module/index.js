import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import AdminDashboard from "../Admin_Module/Dashboard";
import JobSeekerDashboard from "../JobSeeker_Module/Dashboard";
import RecruiterDashboard from "../Recruiter_Module/Dashboard";

function LoginModule() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/job-seeker/dashboard" element={<JobSeekerDashboard />} />
      <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
    </Routes>
  );
}

export default LoginModule;
