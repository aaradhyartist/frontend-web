import React from "react";
import { ArrowUpRight, Zap, Shield, Globe, Cpu, Play, Database, GitBranch } from "lucide-react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const FullScaleHero = () => {
  return (
    <>
      <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-slate-900">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80"
            alt="Developer workspace with code on screen"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Dark gradient overlay: solid on the left for text contrast, fading right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40"></div>
        </div>

        <div className="mt-20 relative z-10 w-full px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* LEFT: Massive Text Content */}
            <div className="lg:col-span-8 lg:p-18">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DC2626]/10 border border-[#DC2626]/20 text-[#DC2626] text-xs font-bold tracking-[0.2em] uppercase mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DC2626] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DC2626]"></span>
                </span>
                Automation · MERN · .NET
              </div>

              <h1 className="font-display text-[12vw] lg:text-[7.5vw] font-bold text-white leading-[0.9] tracking-tighter mb-8">
                BUILD. AUTOMATE. <br />
                <span className="text-[#DC2626]">SCALE.</span>
              </h1>

              <div className="max-w-xl">
                <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-10">
                  A software studio crafting <span className="text-white font-semibold">MERN-stack</span> web apps,
                  reliable <span className="text-white font-semibold">.NET</span> systems, and
                  <span className="text-white font-semibold"> automation</span> that saves your team hours every week.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="h-14 px-8 bg-[#DC2626] hover:bg-[#b91c1c] text-white text-base font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#DC2626]/20 group">
                    Start a Project
                    <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                  <Link to="/service" className="h-14 px-8 border border-white/20 text-white text-base font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:border-[#DC2626] hover:text-[#DC2626]">
                    See Our Work
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT: Modern Floating Grid Content */}
            <div className="lg:col-span-4 relative mt-16 lg:mt-0">
              <div className="grid grid-cols-1 gap-6">
                {/* Feature Card 1 */}
                <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl shadow-black/30 hover:border-[#DC2626]/40 hover:scale-[1.02] transition-all duration-500">
                  <div className="w-14 h-14 bg-[#DC2626] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-[#DC2626]/30">
                    <Database size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    MERN Stack Development
                  </h3>
                  <p className="text-slate-400 font-medium">
                    React, Node, Express & MongoDB — fast, scalable web apps built end-to-end.
                  </p>
                </div>

                {/* Feature Card 2 - Visual Link */}
                <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] shadow-2xl group cursor-pointer overflow-hidden relative">
                  <div className="relative z-10">
                    <Cpu className="text-[#DC2626] mb-6" size={40} />
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Automation & .NET
                    </h3>
                    <div className="flex items-center gap-2 text-[#DC2626] font-bold text-sm uppercase tracking-widest">
                  <Link to={"/service"} className="flex"> View Services <ArrowUpRight size={16} /></Link>
                    </div>
                  </div>
                  {/* Decorative circle in card */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#DC2626]/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Massive Footer Label (fills bottom empty space) */}
          <div className="mt-24 pt-8 border-t border-white/10 flex flex-wrap justify-between items-end gap-8">
            <div className="flex gap-16">
              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-2">
                  Stack
                </p>
                <p className="text-xl font-bold text-white">MERN · .NET</p>
              </div>
              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-2">
                  Approach
                </p>
                <p className="text-xl font-bold text-white">Automation-first</p>
              </div>
            </div>
            <div className="text-slate-700 font-black text-6xl hidden xl:block select-none">
              EST. 2025
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <span className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">
            Scroll
          </span>
          <div className="w-[2px] h-12 bg-gradient-to-b from-[#DC2626] to-transparent rounded-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-900 animate-scroll-move"></div>
          </div>
        </div>

        {/* Add this to your Tailwind Config or inside a <style> tag */}
        <style jsx>{`
          @keyframes scroll-move {
            0% {
              transform: translateY(-100%);
            }
            100% {
              transform: translateY(200%);
            }
          }
          .animate-scroll-move {
            animation: scroll-move 2s infinite ease-in-out;
          }
        `}</style>
      </section>
    </>
  );
};

export default FullScaleHero;
