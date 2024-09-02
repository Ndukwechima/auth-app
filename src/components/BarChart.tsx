import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { ChartOptions, ChartData } from "chart.js";
import { RevenueData } from "../interfaces";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const barChartData: RevenueData = {
  label: "Revenue",
  revenue: [7000, 6000, 5000, 8000, 5000, 4000, 3000, 4000, 3000],
};

const BarChart: React.FC = () => {
  const data: ChartData<"bar"> = {
    labels: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov"],
    datasets: [
      {
        label: barChartData.label,
        data: barChartData.revenue,
        backgroundColor: "#f4f4f4",
        hoverBackgroundColor: "#2563eb",
        borderRadius: 10,
        barPercentage: 1.2,
        categoryPercentage: 0.5,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem) => `$${tooltipItem.raw}`,
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
        min: 0,
        max: 15000,
      },
    },
    animation: {
      duration: 5000,
      easing: "easeOutBounce",
    },
  };

  return (
    <section className=" w-[96%] md:w-[100%] bg-white pb-[6.6rem] flex justify-center items-center rounded-2xl shadow-sm ">
      <div className="w-4/5 max-h-[28vh]">
        <h2 className="text-xl text-start text-gray-600 py-4">
          Monthly Revenue
        </h2>
        <h1 className="text-2xl font-bold text-start text-gray-400">
          ${" "}
          <span className="text-2xl font-semibold text-start text-gray-800">
            15,000
          </span>
        </h1>
        <Bar data={data} options={options} />
      </div>
    </section>
  );
};

export default BarChart;
