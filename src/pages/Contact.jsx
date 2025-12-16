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

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send to API)
    alert("Thank you for your message!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
   <div className="relative">
      <Navbar />
      <main className="pt-28 md:pt-32 lg:pt-0">
        <HeroSection />
        <TrustSection/>
          <ProblemSolution/>
         
        <Services/>
        <Differentiation/>
        <TechStack/>
      
      </main>
    </div>
     
    </>
  );
};

export default ContactUs;
