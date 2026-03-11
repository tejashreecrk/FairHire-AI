import React from "react";

function CandidateCard({ candidate }) {

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

    </div>
  );

}

export default CandidateCard;