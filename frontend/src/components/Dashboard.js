import React, { useEffect, useState } from "react";
import axios from "axios";
import CandidateCard from "./CandidateCard";

function Dashboard() {

  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      const res = await axios.get("http://localhost:8000/candidates");
      setCandidates(res.data);
    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  };

  return (
    <div>

      <h2>Candidate Dashboard</h2>

      {candidates.length === 0 ? (
        <p>No candidates yet. Upload resumes.</p>
      ) : (
        candidates.map((candidate, index) => (
          <CandidateCard
            key={index}
            candidate={candidate}
          />
        ))
      )}

    </div>
  );
}

export default Dashboard;