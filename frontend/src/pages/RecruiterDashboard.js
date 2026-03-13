
import React from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import ResumeUpload from "../components/ResumeUpload";
import CandidateList from "../components/CandidateList";
import BiasAnalytics from "../components/BiasAnalytics";
import FairnessMetrics from "../components/FairnessMetrics";
import ExplainabilityPanel from "../components/ExplainabilityPanel";

function RecruiterDashboard() {

  return (

    <div className="dashboard-container">

      {/* Top Navigation */}
      <Navbar />

      <div className="dashboard-layout">

        {/* Left Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="dashboard-content">

          <h1>FairHire AI Recruiter Dashboard</h1>

          <ResumeUpload />

          <CandidateList />

          <BiasAnalytics />

          <FairnessMetrics />

          <ExplainabilityPanel />

        </div>

      </div>

    </div>

  );

}

export default RecruiterDashboard;
