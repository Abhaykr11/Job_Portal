import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminModule from './Admin_Module/index.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<AdminModule />} />
      </Routes>
    </Router>
  );
}

export default App;