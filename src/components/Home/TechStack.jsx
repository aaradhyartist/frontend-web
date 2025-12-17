import React from 'react';
import { Layout, Server, Database, Cloud, Shield, Smartphone } from 'lucide-react';

const TechStackRefined = () => {
  const categories = [
    { name: "Frontend", tools: "React, Next.js", icon: <Layout size={24} /> },
    { name: "Backend", tools: "Node.js, NestJS", icon: <Server size={24} /> },
    { name: "Database", tools: "PostgreSQL, Mongo", icon: <Database size={24} /> },
    { name: "Cloud", tools: "AWS, Azure", icon: <Cloud size={24} /> },
    { name: "DevOps", tools: "Docker, CI/CD", icon: <Shield size={24} /> },
    { name: "Mobile", tools: "React Native", icon: <Smartphone size={24} /> }
  ];
      
  return (
    <section className="w-full bg-white py-24 px-0 sm:px-6 md:px-12 lg:px-24  border-b border-slate-100">
      <div className="w-full px-6 lg:px-16">
 
        {/* --- IMPROVED HEADING --- */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-[#31b8c6]"></div>
              <span className="text-[#31b8c6] text-xs font-black uppercase tracking-[0.4em]">Our Stack</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tighter">
              ELITE TOOLS FOR <br />
              <span className="text-slate-300 ">MODERN SYSTEMS.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-bold text-base max-w-sm mb-2">
            We use industry-standard technologies to ensure your product is scalable and future-proof.
          </p>
        </div>

        {/* --- REFINED 6-COLUMN GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 p-6 bg-slate-50 rounded-[2rem] border border-slate-300 hover:border-[#31b8c6]/30 hover:bg-white hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 group cursor-default"
            >
              {/* LEFT: Icon Container - Fixed size so it doesn't shrink */}
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-white flex items-center justify-center text-slate-400 group-hover:bg-[#31b8c6] group-hover:text-white transition-all duration-500 shadow-sm">
                {React.cloneElement(item.icon, { size: 32, strokeWidth: 2.5 })}
              </div>

              {/* RIGHT: Content - Aligned to the left */}
              <div className="flex flex-col justify-center text-left">
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-1 group-hover:text-[#31b8c6] transition-colors">
                  {item.name}
                </h3>

                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mr-2">
                    Stack:
                  </span>
                  <p className="text-sm font-black text-[#31b8c6] leading-tight uppercase">
                    {item.tools}
                  </p>
                </div>
              </div>

              {/* OPTIONAL: Arrow that appears on hover to fill horizontal space */}
              <div className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 hidden md:block">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#31b8c6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Support Line */}
        <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-30 grayscale contrast-125">
          <span className="font-black text-xl tracking-tighter">TYPESCRIPT</span>
          <span className="font-black text-xl tracking-tighter">KUBERNETES</span>
          <span className="font-black text-xl tracking-tighter">NESTJS</span>
          <span className="font-black text-xl tracking-tighter">TERRAFORM</span>
        </div>

      </div>
    </section>
  );
};

export default TechStackRefined;