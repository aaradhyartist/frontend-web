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
import HeroSection from "../components/Home/HeroSection";;
import TrustSection from "../components/Home/TrustSection";
import ProblemSolution from "../components/Home/ProblemSolution";
import Services from "../components/Home/Services";
import Differentiation from "../components/Home/Differentiation";
import TechStack from "../components/Home/TechStack";
import ProcessSection from "../components/Home/ProcessSection";

import FinalCTA from "../components/Home/FinalCTA";
import FloatingActionButtons from "../components/Home/FloatingActionButtons";


const Home = () => {
  return (
    <>
    
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
        
    </>
  );
};

export default Home