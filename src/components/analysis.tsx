"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";


Chart.register(...registerables);

const Analysis = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "User Engagement",
        data: [20, 35, 50, 65, 75, 95, 120],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        pointBackgroundColor: "#fff",
        pointBorderColor: "#4BC0C0",
        pointHoverRadius: 8,
        pointHoverBackgroundColor: "#4BC0C0",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    },
    interaction: {
      mode: "nearest" as const,
      intersect: false,
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <section id="analysis" 
    className="relative py-20 w-full min-h-screen flex flex-col items-center justify-center text-white px-4 md:px-10 text-center overflow-hidden">

      <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 pb-5 bg-gradient-to-r from-cyan-400 to-pink-600 text-transparent bg-clip-text">
               Empowering AI-Driven Insights
            </h1>
            <p className="text-white text-lg md:text-xl"> Transform your data into actionable insights with advanced AI analytics and visualization.</p>
          </div>

      {/* Chart Section */}
      <motion.div
        data-aos="fade-up"
        className="w-full md:w-3/4 lg:w-3/4 xl:w-4/5 mt-12 p-6 bg-white/10 rounded-xl shadow-xl backdrop-blur-lg border border-white/20"
      >
        <div className="h-80 md:h-96">
          <Line data={data} options={options} />
        </div>
      </motion.div>
    </section>
  );
};

export default Analysis;


