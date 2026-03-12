import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import CandidatePortal from "./pages/CandidatePortal";
import ComplianceReport from "./pages/ComplianceReport";


function App() {

  return (
    <Router>

      <Routes>

        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<RecruiterDashboard />} />
        <Route path="/candidate" element={<CandidatePortal />} />
        <Route path="/report" element={<ComplianceReport />} />

      </Routes>

    </Router>
  );
}

export default App;