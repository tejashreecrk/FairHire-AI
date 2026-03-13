import React from "react";

function Sidebar() {
  return (
    <div style={{
      width:"200px",
      background:"#f1f5f9",
      padding:"20px",
      minHeight:"100vh"
    }}>
      <p>Dashboard</p>
      <p>Candidates</p>
      <p>Bias Analytics</p>
      <p>Fairness Metrics</p>
      <p>Reports</p>
    </div>
  );
}

export default Sidebar;