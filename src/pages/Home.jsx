import React, { useState } from "react";
import {
  Play,
  Shield,
  Zap,
  ArrowRight,
  Github,
  Monitor,
  Code,
} from "lucide-react";
import HeroSection from "../components/Home/HeroSection";
import Navbar from "../components/Home/Navbar";
import TrustSection from "../components/Home/TrustSection";
import ProblemSolution from "../components/Home/ProblemSolution";
import Services from "../components/Home/Services";
import Differentiation from "../components/Home/Differentiation";
import TechStack from "../components/Home/TechStack";
// import WhatsAppFloatingButton from "../components/Home/WhatsAppFloatingButton";
import ProcessSection from "../components/Home/ProcessSection";
import ProcessSection2 from "../components/Home/ProcessSection2";
import FinalCTA from "../components/Home/FinalCTA";
import Footer from "../components/Home/Footer";

import FloatingActionButtons from "../components/Home/FloatingActionButtons.JSX";

const Home = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <main className="pt-28 md:pt-32 lg:pt-0">
          <HeroSection />
          <TrustSection />
          <ProblemSolution />

          <Services />
          <Differentiation />
          <TechStack />
          <ProcessSection/>
          <FinalCTA/>
         <FloatingActionButtons/>
        </main>
        <Footer/>
      </div>
    </>
  );
};

export default Home