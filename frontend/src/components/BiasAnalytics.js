import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BiasAnalytics() {

  const data = {

    labels: ["Male", "Female", "Other"],

    datasets: [
      {
        label: "Selected Candidates",
        data: [40, 35, 10]
      }
    ]

  };

  return (

    <div>

      <h2>Bias Analytics Dashboard</h2>

      <Bar data={data} />

    </div>

  );
}

export default BiasAnalytics;