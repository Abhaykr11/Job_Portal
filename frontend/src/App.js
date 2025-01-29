import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginModule from './Login_Module/index.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<LoginModule />} />

      </Routes>
    </Router>
  );
}

export default App;