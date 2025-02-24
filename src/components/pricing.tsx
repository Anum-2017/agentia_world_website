"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    name: "Basic",
    price: "$499",
    duration: "/month",
    features: [
      "Access to 2 AI Agents",
      "Core Neural Processing",
      "24/7 Customer Support",
      "Weekly Performance Analytics",
      "Basic API Integration",
    ],
    buttonColor: "bg-cyan-600",
  },
  {
    name: "Pro",
    price: "$999",
    duration: "/month",
    features: [
      "Deploy up to 10 AI Agents",
      "Advanced Neural Computing",
      "Priority Customer Support",
      "Real-time Data Insights",
      "Custom API Access",
      "Enhanced Security Protocols",
    ],
    buttonColor: "bg-cyan-600",
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    duration: "",
    features: [
      "Unlimited AI Agent Deployment",
      "Comprehensive Neural Suite",
      "Dedicated AI Consultant",
      "Advanced Analytics Dashboard",
      "Tailored AI Development",
      "Full API Capabilities",
      "Enterprise-Grade Security",
      "Custom AI Model Training",
    ],
    buttonColor: "bg-cyan-600",
  },
];

export default function PricingSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="pricing" className="w-full py-20 px-6 text-white text-center">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 pb-5 bg-gradient-to-r from-cyan-400 to-pink-600 text-transparent bg-clip-text">
          Choose Your Plan
        </h1>
        <p className="text-lg md:text-xl">
          Unlock the power of AI with our flexible pricing options.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 200}>
      
            <div className={`p-1 rounded-xl bg-gradient-to-r from-cyan-400 to-pink-600`}>
              
              <div className="relative p-8 rounded-xl bg-gray-800 shadow-xl transition-all duration-300">
                <h3 className="text-4xl font-bold mb-4">{plan.name}</h3>
                <p className="text-2xl font-medium">
                  {plan.price}{" "}
                  <span className="text-lg font-normal text-gray-400">
                    {plan.duration}
                  </span>
                </p>
                <ul className="mt-6 space-y-3 text-gray-300 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-400" /> {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-6 w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 ${plan.buttonColor}`}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
