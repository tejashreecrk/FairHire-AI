import React, { useEffect, useState } from "react";
import { getBiasMetrics } from "../services/api";

import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
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

    const res = await getBiasMetrics();

    setMetrics(res.data);

  };

  const data = {

    labels: ["Gender", "College", "Experience"],

    datasets: [
      {
        label: "Bias Score",
        data: metrics,
      },
    ],

  };

  return (
    <div>

      <h3>Bias Analytics</h3>

      <Bar data={data} />

    </div>
  );
}

export default BiasAnalytics;