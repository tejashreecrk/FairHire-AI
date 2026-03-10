import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage(){

  const navigate = useNavigate();

  return(

    <div>

      <h1>FairHire AI</h1>

      <button onClick={()=>navigate("/dashboard")}>
        Enter Recruiter Dashboard
      </button>

    </div>

  );

}

export default LoginPage;