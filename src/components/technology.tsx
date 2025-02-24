"use client"

import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { motion } from "framer-motion"
import { FaPython} from "react-icons/fa"
import { LuBrain} from "react-icons/lu"
import { RiRobot3Fill } from "react-icons/ri"
import { SiFastapi } from "react-icons/si";

interface Technology {
  name: string
  description: string
  icon: React.ElementType
  color: string
}

const technologies: Technology[] = [
  {
    name: "Artificial Intelligence",
    description: "Advanced AI models transforming industries",
    icon: RiRobot3Fill,
    color: "#00eaff",
  },
  {
    name: "Machine Learning",
    description: "Data-driven insights for smarter decision-making",
    icon: LuBrain,
    color: "#ff5733",
  },
  {
    name: "FastAPI",
    description: "High-performance backend with asynchronous capabilities.",
    icon: SiFastapi ,
    color: "#00eaff",
  },
  {
    name: "Python",
    description: "Powerful scripting and AI-driven solutions.",
    icon: FaPython,
    color: "#3776AB",
  },
]

const Technologies = () => {
  const [rotations, setRotations] = useState<number[]>(new Array(technologies.length).fill(0))

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const handleRotate = (index: number) => {
    setRotations((prev) => {
      const newRotations = [...prev]
      newRotations[index] += 360
      return newRotations
    })
  }

  return (
    <section
      id="technology"
      className="relative w-full pt-0 pb-12 flex flex-col items-center justify-start text-white px-4 md:px-8 text-center overflow-hidden"
    >
      {/* Particles Container */}
      <div className="particles-container absolute inset-0 z-10"></div>
  
      <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-600 text-transparent bg-clip-text pb-5">
               Technologies We Use
            </h1>
            <p className="text-white text-lg md:text-xl">Powering Agentia World with cutting-edge technologies for AI-driven excellence.</p>
          </div>

      {/* Technologies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 z-20 w-full max-w-5xl">
        {technologies.map((tech, index) => {
          const IconComponent = tech.icon
          return (
            <motion.div
              key={tech.name}
              data-aos="zoom-in"
              className="p-6 flex flex-col items-center justify-center bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 transition-all duration-500 hover:border-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-pink-600 relative z-20"
            >
              <div className="absolute inset-0 bg-black rounded-3xl p-6 z-0"></div>
              <motion.div
                className="relative w-16 h-16 flex items-center justify-center cursor-pointer transition duration-500 z-10"
                animate={{ rotate: rotations[index] }}
                transition={{ duration: 0.5 }}
                onClick={() => handleRotate(index)}
              >
                <IconComponent className="w-12 h-12 sm:w-14 sm:h-14 transition duration-500" style={{ color: tech.color }} />
              </motion.div>
              <p className="relative mt-3 text-lg sm:text-base font-extrabold text-white transition duration-500 z-10">{tech.name}</p>
              <p className="relative mt-2 text-sm sm:text-base text-white transition duration-500 z-10">{tech.description}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Technologies
