import React, { useState } from "react";

function CandidateCard({ candidate }) {

  const [status, setStatus] = useState("Pending");

  const handleAccept = () => {
    setStatus("Accepted");
  };

  const handleReject = () => {
    setStatus("Rejected");
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        margin: "10px",
        borderRadius: "10px"
      }}
    >

      <h3>{candidate.name}</h3>

      <p><b>Skills:</b> {candidate.skills}</p>

      <p><b>Experience:</b> {candidate.experience} years</p>

      <p><b>Match Score:</b> {candidate.score}%</p>


      {/* Inclusive Profile Indicators */}

{(candidate.portfolio || candidate.freelance || candidate.career_gap) && (

  <div style={{marginTop:"8px"}}>

    <p><b>Inclusive Profile:</b></p>

    {candidate.portfolio && (
      <span style={{
        background:"#e0f7fa",
        padding:"4px 8px",
        marginRight:"5px",
        borderRadius:"5px"
      }}>
        Portfolio
      </span>
    )}

    {candidate.freelance && (
      <span style={{
        background:"#fff3e0",
        padding:"4px 8px",
        marginRight:"5px",
        borderRadius:"5px"
      }}>
        Freelance Experience
      </span>
    )}

    {candidate.career_gap && (
      <span style={{
        background:"#f3e5f5",
        padding:"4px 8px",
        marginRight:"5px",
        borderRadius:"5px"
      }}>
        Career Break
      </span>
    )}

  </div>

)}



      {/* NEW STATUS DISPLAY */}
      <p><b>Status:</b> {status}</p>

      {/* NEW BUTTONS */}
      <button onClick={handleAccept} style={{marginRight:"10px"}}>
        Accept
      </button>

      <button onClick={handleReject}>
        Reject
      </button>

    </div>
  );
}

export default CandidateCard;