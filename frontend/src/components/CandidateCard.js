import React from "react";

function CandidateCard({ candidate }) {

  return (
<<<<<<< HEAD

    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "10px",
      borderRadius: "10px"
    }}>

      <h3>{candidate.name}</h3>

      <p><b>Skills:</b> {candidate.skills}</p>

      <p><b>Experience:</b> {candidate.experience} years</p>

      <p><b>Match Score:</b> {candidate.score}%</p>

    </div>

=======
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
>>>>>>> 40f0d492afbb301c5b8559c572ae847d9b0d8a83
  );
}

export default CandidateCard;