"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Analysis = () => {
  return (
    <div
      id="analysis"
      className="relative min-h-screen flex flex-col items-center justify-start text-center bg-black overflow-hidden px-6 py-32 md:py-40"
    >
      {/* Title Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 pb-5 bg-gradient-to-r from-cyan-400 to-pink-600 text-transparent bg-clip-text">
          Empowering AI-Driven Insights
        </h1>
        <p className="text-white text-lg md:text-xl"> Transform your data into actionable insights with advanced AI analytics and visualization.</p>
      </div>

      {/* Line Chart */}
      <div className="mt-10 w-full max-w-6xl h-[500px] text-white bg-gray-900/30 border border-purple-500/20 rounded-xl shadow-lg p-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#3A3D5C" />
            <XAxis dataKey="month" stroke="#6C63FF" tick={{ fill: "#6C63FF" }} tickSize={10} />
            <YAxis stroke="#6C63FF" tick={{ fill: "#6C63FF" }} domain={[0, 6000]} />
            <Tooltip contentStyle={{ backgroundColor: "#2A2C45", borderColor: "#6C63FF" }} />
            <Line type="monotone" dataKey="groq" stroke="#FF4C00" strokeWidth={4} dot={{ r: 8, fill: "#FF4C00" }} />
          </LineChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
};

// **Default export fix**
export default Analysis;

const chartData = [
  { month: "Jan", groq: 800 },
  { month: "Feb", groq: 1300 },
  { month: "Mar", groq: 2000 },
  { month: "Apr", groq: 2700 },
  { month: "May", groq: 3500 },
  { month: "Jun", groq: 4500 },
];