import React, { useEffect, useState } from "react";
import { getBiasReport } from "../services/api";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip
);

function BiasAnalytics() {

  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    const res = await getBiasReport();
    setMetrics(res.data);
  };

  const data = {
  labels: ["Male Selection Rate", "Female Selection Rate"],
  datasets: [
    {
      label: "Bias Score",
      data: metrics?.bias_metrics
        ? [
            metrics.bias_metrics.male_selection_rate,
            metrics.bias_metrics.female_selection_rate
          ]
        : [0, 0],
      backgroundColor: ["#36A2EB", "#FF6384"]
    }
  ]
};

  return (
    <div>
      <h3>Bias Analytics</h3>
      <Bar data={data} />
    </div>
  );
}

export default BiasAnalytics;