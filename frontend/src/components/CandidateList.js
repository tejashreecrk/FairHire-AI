import React, {useEffect, useState} from "react";
import CandidateCard from "./CandidateCard";
import { getCandidates } from "../services/api";

function CandidateList(){

  const [candidates,setCandidates] = useState([]);

  useEffect(()=>{

    async function load(){
      const res = await getCandidates();
      setCandidates(res.data);
    }

    load();

  },[]);

  return(

    <div>

      <h2>Candidate Ranking</h2>

      {candidates.map((c,i)=>(

        <CandidateCard key={i} candidate={c} />

      ))}

    </div>

  );

}

export default CandidateList;