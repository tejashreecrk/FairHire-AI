import React, { useEffect, useState } from "react";
import axios from "axios";
import CandidateCard from "./CandidateCard";

function Dashboard() {

  const [candidates, setCandidates] = useState([]);

  // THIS RUNS WHEN PAGE LOADS
  useEffect(() => {
    fetchCandidates();
  }, []);

  // FETCH CANDIDATES FROM BACKEND
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

    <div className="section">

      <h2>Candidate Ranking</h2>

      {/* Dashboard statistics cards */}
      <div className="cards">

        <div className="card">
          <h3>Total Candidates</h3>
          <p>{candidates.length}</p>
        </div>

        <div className="card">
          <h3>Selected</h3>
          <p>{candidates.filter(c => c.selected).length}</p>
        </div>

        <div className="card">
          <h3>Rejected</h3>
          <p>{candidates.filter(c => !c.selected).length}</p>
        </div>

      </div>

      {/* Candidate list */}
      <div style={{marginTop:"20px"}}>

        {candidates.length === 0 ? (

          <p>Resumes Uploaded.</p>

        ) : (

          candidates.map((candidate, index) => (

            <CandidateCard
              key={index}
              candidate={candidate}
              rank={index+1}
            />

          ))

        )}

      </div>

    </div>

  );

}

export default Dashboard;