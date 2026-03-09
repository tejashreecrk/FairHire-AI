import React from "react";

function CandidateCard({ candidate }) {

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
      }}
    >

      <h3>{candidate.name}</h3>

      <p>Skills: {candidate.skills}</p>

      <p>Experience: {candidate.experience} years</p>

      <p>Score: {candidate.score}</p>

    </div>
  );
}

export default CandidateCard;