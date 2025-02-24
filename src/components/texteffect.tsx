 import { useState, useEffect } from "react";

const sentences = [
  "Unleash the power of intelligent technology ✨",
  "Smart automation for a smarter world 🤖",
  "AI-driven solutions for limitless possibilities ⚡",
  "Empowering the future with AI innovation 🚀",
];

const TextEffect = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 1000); // Changes sentence every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-base md:text-lg text-left text-white transition-opacity duration-500">
      {sentences[index]}
    </div>
  );
};

export default TextEffect;

