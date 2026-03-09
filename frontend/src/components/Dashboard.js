import React, { useEffect, useState } from "react";
import { getCandidates } from "../services/api";
import CandidateCard from "./CandidateCard";

function Dashboard() {

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
  );
}

export default Dashboard;