import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>

      <h1>FairHire AI</h1>

      <p>Bias-Free Recruitment Platform</p>

      <button
        onClick={() => navigate("/recruiter")}
      >
        Recruiter Login
      </button>

      <br /><br />

      <button
        onClick={() => navigate("/candidate")}
      >
        Candidate Portal
      </button>

    </div>
  );
}

export default LoginPage;