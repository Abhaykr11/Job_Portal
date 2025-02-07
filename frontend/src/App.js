import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import LoginModule from "./Login_Module/index.js";

function App() {
  return (
    <Router>
      <LoginModule />
    </Router>
  );
}

export default App;
