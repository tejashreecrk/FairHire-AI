<<<<<<< HEAD
import React from "react";
=======
import React, { useEffect, useState } from "react";
import { getCandidates } from "../services/api";
>>>>>>> 40f0d492afbb301c5b8559c572ae847d9b0d8a83
import CandidateCard from "./CandidateCard";

function Dashboard() {

<<<<<<< HEAD
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

=======
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {

    fetchCandidates();

  }, []);

  const fetchCandidates = async () => {

    const res = await getCandidates();

    setCandidates(res.data);

  };

  return (
    <div>

      <h3>Top Candidates</h3>

      {candidates.map((c) => (
        <CandidateCard
          key={c.id}
          candidate={c}
        />
      ))}

    </div>
>>>>>>> 40f0d492afbb301c5b8559c572ae847d9b0d8a83
  );
}

export default Dashboard;