import React, { useEffect, useState } from "react";
import axios from "axios";

function FairnessMetrics() {

  const [bias, setBias] = useState({});

const fetchBias = async () => {

  try {
    const res = await axios.get("http://localhost:8000/bias_report");
    setBias(res.data);
  } catch (error) {

    if (error.response) {
      alert(error.response.data.detail);
    } else {
      alert("Server error while checking bias");
    }

  }

};

  useEffect(() => {
   
    fetchBias();
  }, []);

  if (!bias || !bias.bias_metrics) {
  return <p>Resumes Upload Successfully</p>;
}

  return (
    <div>
      <h2>Fairness Metrics</h2>

      <p>Male Selection Rate: {bias.bias_metrics.male_selection_rate}</p>
      <p>Female Selection Rate: {bias.bias_metrics.female_selection_rate}</p>
      <p>Disparate Impact: {bias.bias_metrics.disparate_impact}</p>

      <h3>{bias.fairness.fairness_status}</h3>
    </div>
  );
}

export default FairnessMetrics;