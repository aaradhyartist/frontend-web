import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProfessionalServiceHero = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-white/5 flex items-center overflow-hidden lg:px-16 lg:pt-20 sm:pt-20">

      {/* --- THE TEXT CONTENT (Z-INDEX 20 TO STAY ABOVE IMAGE) --- */}
      <div className="relative z-20 w-full  mx-auto px-8  lg:px-24 lg:px-24 grid lg:grid-cols-2">
        <div className="">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-[2px] w-10 bg-[#DC2626]"></div>
            <span className="text-[#DC2626] text-xs font-black uppercase tracking-[0.4em]">  Our Services</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">
            What We <span className="text-[#DC2626]">Build & Automate.</span>
          </h2>


          <p className="text-slate-300 text-xl font-medium leading-relaxed mb-10 max-w-lg mt-5">
            From business automation to full-stack <span className="text-white font-bold">MERN</span> apps
            and secure <span className="text-white font-bold">.NET</span> systems — we design, build,
            and maintain software that fits how your business actually works.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to="/contact"
              className="px-8 py-4 bg-[#DC2626] text-white rounded-xl font-semibold hover:bg-[#b91c1c] transition-all flex items-center justify-center gap-2"
            >
              Start a Project <ArrowRight size={18} />
            </Link>

            <a
              href={`https://wa.me/91${import.meta.env.VITE_APP_ADMIN_WHATSAPP_NUMBER}?text=Hello,%20I%E2%80%99m%20interested%20in%20your%20services%20and%20would%20like%20to%20discuss%20the%20next%20steps.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 text-white rounded-xl font-semibold hover:border-[#DC2626] hover:text-[#DC2626] transition-all flex items-center justify-center gap-2"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-[#DC2626]" size={20} />
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              You Work Directly With the Developer
            </span>
          </div>

        </div>
      </div>

      {/* --- THE IMAGE WITH GRADIENT MASK (RIGHT SIDE) --- */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-10">
        <div className="relative w-full h-full">
          {/* The Image */}
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80"
            alt="Corporate Engineering"
            className="w-full h-full object-cover grayscale-[30%]"
          />


          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>

          {/* Subtle Right-side fade (Optional: if you want it to fade out on the far right too) */}
          <div className="absolute inset-0 bg-gradient-to-l from-slate-900/20 to-transparent"></div>
        </div>
      </div>

    </section>
  );
};

export default ProfessionalServiceHero;