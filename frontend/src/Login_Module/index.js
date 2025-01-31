import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './Login';
import Register from './Register';

function LoginModule() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default LoginModule;