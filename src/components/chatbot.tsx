"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Send, X, Rocket } from "lucide-react";
import { LuBrain } from "react-icons/lu";
import { RiRobot3Fill } from "react-icons/ri";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "🤖 Welcome to Agentic World! I'm your AI buddy. Ask me anything about technology, AI, or the amazing Anum Kamal! 🚀", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Ref for auto-scrolling
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Scroll to the latest message when messages update
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const generateBotReply = (message: string) => {
    const lowerMsg = message.toLowerCase();

    // Special greeting response
    if (lowerMsg.includes("hello") || lowerMsg.includes("hi")) return "👋 Hey, awesome human! What's on your mind today? 💡";

    // Questions about website sections
    if (lowerMsg.includes("hero")) return "🎬 The Hero Section is where the magic begins! It showcases Agentic AI’s vision and mission in a bold, eye-catching way.";
    if (lowerMsg.includes("explore")) return "🔎 Want to dive deep? The Explore section lets you uncover AI's potential and see it in action!";
    if (lowerMsg.includes("technology")) return "🤖 The Technology page breaks down the powerful AI frameworks that make Agentic AI work!";
    if (lowerMsg.includes("pricing")) return "💲 Curious about costs? The Pricing page lists all available plans for individuals and businesses.";
    if (lowerMsg.includes("contact")) return "📩 Need help or have questions? The Contact page is your go-to for support and inquiries!";

    // About Anum Kamal
    if (lowerMsg.includes("who made this") || lowerMsg.includes("creator")) return "🌟 This site is crafted by **Anum Kamal**, a frontend developer and AI enthusiast who loves building futuristic tech!";
    if (lowerMsg.includes("anum kamal")) return "💻 Anum Kamal is a frontend developer passionate about AI, innovation, and building smart applications that shape the future.";

    // AI and Agentic AI-specific answers
    if (lowerMsg.includes("what is agentic ai")) return "🚀 **Agentic AI** is an advanced system that combines AI-powered automation, smart insights, and intelligent decision-making.";
    if (lowerMsg.includes("how does agentic ai work")) return "🛠️ **Agentic AI** uses deep learning, automation, and neural networks to analyze data and provide intelligent solutions.";
    if (lowerMsg.includes("what can agentic ai do")) return "🤩 **Agentic AI** can automate tasks, analyze data, provide AI-driven recommendations, and even chat with you like this!";

    // General AI questions
    if (lowerMsg.includes("what is ai")) return "🤖 AI (**Artificial Intelligence**) is the science of making machines think, learn, and act like humans!";
    if (lowerMsg.includes("how does ai work")) return "⚙️ AI learns by processing data, recognizing patterns, and making decisions using algorithms and neural networks.";
    if (lowerMsg.includes("future of ai")) return "🔮 The future of AI is **mind-blowing**—think self-learning robots, AI-powered medicine, and even space exploration! 🚀";

    return "🤖 I'm always learning! Ask me more about AI, Agentic AI, or Anum Kamal!";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const botReply = { text: generateBotReply(input), sender: "bot" };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Rotating Chatbot Button */}
      <motion.button
        className="bg-gradient-to-r from-cyan-400 to-pink-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <RiRobot3Fill  size={24} />}
      </motion.button>

      {/* Chatbox */}
      {isOpen && (
        <motion.div
          className="w-80 bg-black/90 text-white shadow-xl rounded-xl p-4 absolute bottom-16 right-0 border border-cyan-400 backdrop-blur-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Messages Container with Auto-Scroll */}
          <div className="h-64 overflow-y-auto space-y-2 p-2">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                className={`p-2 rounded-lg w-fit max-w-[75%] flex items-center gap-2 ${
                  msg.sender === "bot"
                    ? "bg-cyan-500 text-white self-start"
                    : "bg-gray-800 self-end"
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {msg.sender === "bot" && <LuBrain size={20} />}
                {msg.sender === "user" && <Rocket size={18} className="text-pink-400" />}
                {msg.text}
              </motion.div>
            ))}
            <div ref={chatEndRef}></div> {/* Auto-scroll trigger */}
          </div>

          {/* Input Field */}
          <div className="flex items-center gap-2 mt-2">
            <input
              type="text"
              className="w-full p-2 bg-gray-900 rounded-lg text-white outline-none"
              placeholder="Ask me about AI, Agentic AI, or Anum Kamal..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button className="bg-gradient-to-r from-cyan-400 to-pink-500 p-2 rounded-lg hover:bg-cyan-600" onClick={handleSend}>
              <Send size={20} className="text-white" />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
