"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { HiChartBar, HiCog, HiCurrencyDollar } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";
import Image from "next/image";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const menuItems = [
    { name: "Technology", icon: <HiCog size={20} className="text-cyan-400" />, link: "#technology" },
    { name: "Analysis", icon: <HiChartBar size={20} className="text-cyan-400" />, link: "#analysis" },
    { name: "Pricing", icon: <HiCurrencyDollar size={20} className="text-cyan-400" />, link: "#pricing" },
    { name: "Contact", icon: <HiEnvelope size={20} className="text-cyan-400" />, link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo with Animated Robot Icon */}
        <motion.div 
          className="text-2xl font-bold text-white flex items-center gap-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div  transition={{ duration: 0.3 }}>
           <Image
            src="/robotImage.webp"
            alt="Futuristic Robot"
            width={40}
            height={40}
            className="drop-shadow-xl max-w-[300px] sm:max-w-[400px] md:max-w-[450px]"
          />
          </motion.div>
          <div className="text-xl font-bold">
                <span className="text-cyan-400">Agentia</span>
                <span className="text-white"> World</span>
              </div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <motion.a 
              key={index} 
              href={item.link} 
              className="text-white hover:text-cyan-400 transition-all flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
            >
              {item.icon}
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a 
          href="#discover"
          className="hidden md:flex items-center gap-2 px-6 py-2 bg-cyan-400 text-white rounded-lg shadow-md hover:shadow-xl transition-all"
          whileHover={{ scale: 1.1 }}
        >
          Discover More
        </motion.a>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            key="mobile-menu" 
            className="md:hidden bg-black/90 text-white absolute top-16 left-0 w-full flex flex-col items-center gap-4 py-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
          >
            {menuItems.map((item, index) => (
              <a 
                key={index} 
                href={item.link} 
                className="text-lg flex items-center gap-2 hover:text-cyan-400 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
             <a 
              href="#discover"
              className="flex items-center gap-2 px-6 py-2 bg-cyan-400  text-white rounded-lg shadow-md"
              onClick={() => setIsOpen(false)}
            >
              Discover More
            </a> 
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

