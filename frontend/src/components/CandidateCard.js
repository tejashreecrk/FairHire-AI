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