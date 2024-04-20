"use client";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const patientsData = [
  { day: 1, patients: 100 },
  { day: 2, patients: 150 },
  { day: 3, patients: 200 },
  { day: 4, patients: 120 },
  { day: 5, patients: 180 },
  { day: 6, patients: 250 },
];

function LineChart() {
  const data = {
    labels: patientsData.map((data) => data.day),
    datasets: [
      {
        label: "Revenue",
        data: patientsData.map((data) => data.patients),
        borderColor: "#9195F6",
        borderWidth: 3,
        pointBorderColor: "#9195F6",
        pointBorderWidth: 3,
        tension: 0.5,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "#9195F6");
          gradient.addColorStop(1, "white");
          return gradient;
        },
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    responsive: true,
    scales: {
      y: {
        ticks: {
          font: {
            size: 17,
            weight: "bold",
          },
        },
        title: {
          display: true,
          text: "Patients",
          padding: {
            bottom: 10,
          },
          font: {
            size: 30,
            style: "italic",
            family: "Arial",
          },
        },
        min: 50,
      },
      x: {
        ticks: {
          font: {
            size: 17,
            weight: "bold",
          },
        },
        title: {
          display: true,
          text: "Day",
          padding: {
            top: 10,
          },
          font: {
            size: 30,
            style: "italic",
            family: "Arial",
          },
        },
      },
    },
  };

  return (
    <div>
      <h1 className="font-bold text-3xl text-center mt-10">
        Patients Details
      </h1>
      <div
      className="mx-auto"
        style={{
          width: "900px",
          height: "400px",
          padding: "20px",
          cursor: "pointer",
        }}
      >
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
}

export default LineChart;