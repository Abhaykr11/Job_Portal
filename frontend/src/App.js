import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./Login_Module/Login.js";
import AdminModule from "./Admin_Module/index.js";
import RecruiterModule from "./Recruiter_Module/index.js"; 
import JobSeekerModule from "./JobSeeker_Module/index.js";
import Register from "./Login_Module/Register.js";

import LoginModule from "./Login_Module/index.js";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<LoginModule />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin-dashboard/*" element={<AdminModule />} />
      <Route path="/recruiter-dashboard/*" element={< RecruiterModule />} />
      <Route path="/jobseeker-dashboard/*" element={<JobSeekerModule />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
