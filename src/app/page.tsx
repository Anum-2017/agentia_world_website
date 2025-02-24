"use client";

import dynamic from "next/dynamic";
import Chatbot from "@/components/chatbot";
import Technologies from "@/components/technology";
import Analysis from "@/components/analysis";
import Features from "@/components/features";
import Pricing from "@/components/pricing"; 
import Contact  from  "@/components/contact" 

const HeroSection = dynamic(() => import("@/components/hero"), { ssr: false }); 

const Page = () => {
  return (
    <div>
      <HeroSection />
      <Chatbot/>
      <Technologies/>
      <Analysis/> 
      <Features/>
     <Pricing/> 
      <Contact/> 
    </div>
  );
};

export default Page;