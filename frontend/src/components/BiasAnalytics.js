<<<<<<< HEAD
import React from "react";
import { Bar } from "react-chartjs-2";
=======
import React, { useEffect, useState } from "react";
import { getBiasMetrics } from "../services/api";

import { Bar } from "react-chartjs-2";

>>>>>>> 40f0d492afbb301c5b8559c572ae847d9b0d8a83
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
<<<<<<< HEAD
  Legend
=======
>>>>>>> 40f0d492afbb301c5b8559c572ae847d9b0d8a83
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
<<<<<<< HEAD
  Tooltip,
  Legend
=======
  Tooltip
>>>>>>> 40f0d492afbb301c5b8559c572ae847d9b0d8a83
);

function BiasAnalytics() {

<<<<<<< HEAD
  const data = {

    labels: ["Male", "Female", "Other"],

    datasets: [
      {
        label: "Selected Candidates",
        data: [40, 35, 10]
      }
    ]
=======
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
>>>>>>> 40f0d492afbb301c5b8559c572ae847d9b0d8a83

  };

  return (
<<<<<<< HEAD

    <div>

      <h2>Bias Analytics Dashboard</h2>
=======
    <div>

      <h3>Bias Analytics</h3>
>>>>>>> 40f0d492afbb301c5b8559c572ae847d9b0d8a83

      <Bar data={data} />

    </div>
<<<<<<< HEAD

=======
>>>>>>> 40f0d492afbb301c5b8559c572ae847d9b0d8a83
  );
}

export default BiasAnalytics;