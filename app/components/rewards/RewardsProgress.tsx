"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";

Chart.register(ArcElement, Tooltip);

export default function RewardsProgress() {
  const data = {
    labels: ["Used", "Remaining"],
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ["#3b82f6", "#d1d5db"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h3 className="mb-4 font-semibold">Reward Points</h3>
      <div className="w-40 mx-auto">
        <Doughnut data={data} />
      </div>
    </div>
  );
}