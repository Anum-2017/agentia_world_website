"use client";

import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { LuBrain } from "react-icons/lu";
import TextEffect from "./texteffect"; 
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full sm:pt-36 pb-28 pt-36 sm:min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 md:px-8 text-center overflow-hidden">
      
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0"
        init={loadSlim}
        options={{
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: 100 },
            color: { value: "#00eaff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 1, direction: "none", random: true },
            links: { enable: true, distance: 120, color: "#00eaff", opacity: 0.3 },
          },
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        {/* Powered by text */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mt-4 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          POWERED BY PANAVERSITY
        </motion.p>

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold items-center md:flex justify-center gap-2 sm:gap-3"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome To{" "} 
          <span className="bg-gradient-to-r from-cyan-400 to-pink-600 bg-clip-text text-transparent inline-block pb-5">
            Agentia World
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mt-4 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <LuBrain className="text-cyan-400" /> The Future of Modern AI Agents
        </motion.p>

        {/* AI Assistant Box */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center w-full">
          <div className="relative flex items-center bg-slate-800 p-4 sm:p-6 rounded-2xl w-[90%] sm:w-[680px] max-w-full border-2 border-cyan-500">

            <div className="absolute left-4 sm:left-[5px] flex items-center justify-center p-4 text-cyan-400 text-[60px] sm:text-[80px] w-16 sm:w-20 h-16 sm:h-20">
           <Image
            src="/robotImage.webp"
            alt="Futuristic Robot"
            width={60}
            height={60}
            className="drop-shadow-xl max-w-[300px] sm:max-w-[400px] md:max-w-[450px]"
          />
            </div>

            {/* Inner Container for Text */}
            <div className="flex items-center bg-gray-700 px-3 py-3 rounded-xl w-full ml-16">
              {/* Static Text */}
              <TextEffect />
            </div>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <motion.a
          href="#explore"
          className="relative mt-6 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold text-base sm:text-lg transition-all duration-300 
          bg-cyan-400 hover:shadow-[0_0_20px_rgba(255,0,255,0.6)]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.1, rotate: 1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            animate={{ y: [0, -2, 0, 2, 0], rotate: [0, 2, -2, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            Explore AI Agents
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}


