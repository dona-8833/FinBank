// BalanceChart.jsx
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Balance",
      data: [5000, 7500, 6200, 8200, 9100],
      backgroundColor: "#1a677b",
      borderRadius: 6,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: { beginAtZero: true },
  },
};

const BalanceChart = () => {
  return (
    <div className="w-full h-64 sm:h-80 md:h-96 bg-white dark:bg-gray-900 p-4 rounded-xl py-6">
      <h2 className="text-xl font-semibold mb-4">Balance Overview</h2>
      <div className="w-full h-full">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BalanceChart;
