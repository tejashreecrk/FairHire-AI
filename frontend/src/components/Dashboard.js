import React, { useEffect, useState } from "react";
import axios from "axios";
import CandidateCard from "./CandidateCard";

function Dashboard() {

  const [candidates, setCandidates] = useState([]);

  // THIS RUNS WHEN PAGE LOADS
  useEffect(() => {
    fetchCandidates();
  }, []);

  // ADD YOUR FUNCTION HERE
  const fetchCandidates = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/candidates");

      console.log("Candidates data:", res.data);

      setCandidates(res.data);

    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  };

  return (
    <div>

      <h2>Candidate Ranking</h2>

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