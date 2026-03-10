import React from "react";

import ResumeUpload from "../components/ResumeUpload";
import CandidateList from "../components/CandidateList";
import BiasAnalytics from "../components/BiasAnalytics";
import FairnessMetrics from "../components/FairnessMetrics";
import ExplainabilityPanel from "../components/ExplainabilityPanel";

function RecruiterDashboard(){

  return(

    <div>

      <h1>FairHire AI Recruiter Dashboard</h1>

      <ResumeUpload/>

      <CandidateList/>

      <BiasAnalytics/>

      <FairnessMetrics/>

      <ExplainabilityPanel/>

    </div>

  );

}

export default RecruiterDashboard;