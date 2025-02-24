"use client"

import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { motion } from "framer-motion"
import { FaCloud } from "react-icons/fa6"
import { MdOutlineSecurity } from "react-icons/md"
import { IoIosRocket } from "react-icons/io"

// Feature Interface
interface Feature {
  name: string
  description: string
  icon: React.ElementType
  color: string
}

// Features Data
const features: Feature[] = [
  {
    name: "Cloud AI",
    description: "AI-powered solutions with seamless cloud integration",
    icon: FaCloud,
    color: "#00eaff",
  },
  {
    name: "Security & Privacy",
    description: "Advanced security protocols to protect your data",
    icon: MdOutlineSecurity,
    color: "#ff5733",
  },
  {
    name: "Performance Boost",
    description: "Optimized AI for faster and smarter processing",
    icon: IoIosRocket,
    color: "#00eaff",
  },
]

const Features = () => {
  const [rotations, setRotations] = useState<number[]>(new Array(features.length).fill(0))

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
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-white px-4 md:px-8 text-center overflow-hidden"
    >
      {/* Particles Container */}
      <div className="particles-container absolute inset-0 z-10"></div>

      {/* Title Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-600 text-transparent bg-clip-text pb-5">
          AI-Powered Future
        </h1>
        <p className="text-white text-lg md:text-xl">Transforming industries with next-gen intelligence.</p>
      </div>

      {/* Centered Features Container */}
      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 z-20 w-full max-w-5xl">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={feature.name}
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
                  <IconComponent className="w-12 h-12 sm:w-14 sm:h-14 transition duration-500" style={{ color: feature.color }} />
                </motion.div>
                <p className="relative mt-3 text-lg sm:text-base font-extrabold text-white transition duration-500 z-10">
                  {feature.name}
                </p>
                <p className="relative mt-2 text-sm sm:text-base text-white transition duration-500 z-10">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
