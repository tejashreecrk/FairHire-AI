import React from "react";
import CandidateCard from "./CandidateCard";

function Dashboard() {

  const candidates = [

    {
      name: "Aditi Sharma",
      skills: "Python, Machine Learning",
      experience: 3,
      score: 87
    },

    {
      name: "Rahul Verma",
      skills: "Java, Spring Boot",
      experience: 4,
      score: 82
    },

    {
      name: "Sneha Iyer",
      skills: "React, Node.js",
      experience: 2,
      score: 78
    }

  ];

  return (

    <div>

      <h2>Candidate Dashboard</h2>

      {candidates.map((candidate, index) => (

        <CandidateCard
          key={index}
          candidate={candidate}
        />

      ))}

    </div>

  );
}

export default Dashboard;