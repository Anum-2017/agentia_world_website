"use client"; 

import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

// Define form data structure
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  // ✅ Define onSubmit function
  const onSubmit: SubmitHandler<FormData> = (data) => {
    toast.success("Message sent successfully!");
    console.log("Form Data:", data);
    reset(); // Reset form after submission
  };

  return (
    <section id="contact" className="relative w-full min-h-screen flex flex-col items-center justify-center text-white px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-16">


      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-600 text-transparent bg-clip-text pb-5">
          Get in Touch
        </h1>
        <p className="text-white text-lg md:text-xl">We’re here to help! Send us a message, and we’ll get in touch with you shortly.</p>
      </div>

      {/* Contact Section */}
      <motion.div className="relative z-10 flex items-center justify-center w-full max-w-4xl">
        {/* Contact Form */}
        <motion.div
          data-aos="fade-up"
          className="w-full md:w-3/4 bg-white/10 p-6 sm:p-8 rounded-xl shadow-lg backdrop-blur-md border border-white/20"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            {[
              { name: "name", type: "text", placeholder: "Your Name", error: errors.name?.message },
              { name: "email", type: "email", placeholder: "Your Email", error: errors.email?.message },
              { name: "subject", type: "text", placeholder: "Subject", error: errors.subject?.message }
            ].map(({ name, type, placeholder, error }) => (
              <div key={name}>
                <input
                  type={type}
                  placeholder={placeholder}
                  {...register(name as keyof FormData, { required: `${placeholder} is required` })}
                  className="w-full p-3 bg-black/40 text-white border border-white/20 rounded-md focus:ring-2 focus:ring-pink-400 transition"
                />
                {error && <p className="text-red-400 text-sm">{error}</p>}
              </div>
            ))}

            {/* Message Field */}
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                {...register("message", { required: "Message is required" })}
                className="w-full p-3 bg-black/40 text-white border border-white/20 rounded-md focus:ring-2 focus:ring-blue-400 transition"
              ></textarea>
              {errors.message && <p className="text-red-400 text-sm">{errors.message.message}</p>}
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 0.9 }}
              disabled={isSubmitting}
              className="w-full bg-cyan-500 p-3 rounded-xl text-white font-semibold tracking-wide hover:shadow-xl transition disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
