import React from 'react';
import { Layout, Server, Database, Cpu, Code2 } from 'lucide-react';

const TechStackRefined = () => {
 const categories = [
  { name: "Frontend", tools: "React, Redux, Tailwind", icon: <Layout size={24} /> },
  { name: "Backend — MERN", tools: "Node.js, Express", icon: <Server size={24} /> },
  { name: "Backend — .NET", tools: ".NET, C#, ASP.NET", icon: <Code2 size={24} /> },
  { name: "Databases", tools: "MongoDB, SQL Server", icon: <Database size={24} /> },
  { name: "Automation", tools: "REST APIs, Webhooks, n8n", icon: <Cpu size={24} /> },
];

      
  return (
    <section className="w-full bg-slate-900 py-24 px-0 sm:px-6 md:px-12 lg:px-24  border-b border-white/10">
      <div className="w-full px-6 lg:px-16">
 
        {/* --- IMPROVED HEADING --- */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-[#DC2626]"></div>
              <span className="text-[#DC2626] text-xs font-black uppercase tracking-[0.4em]">Our Tools</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter uppercase">
             The Tech We <br />
             <span className="text-[#DC2626]">Build With.</span>
            </h2>
          </div>
          <p className="text-slate-400 font-bold text-base max-w-sm mb-2">
           We build your software with the right tools to make it fast, reliable, and ready to grow.
          </p>
        </div>

        {/* --- REFINED 6-COLUMN GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 p-6 bg-white/5 rounded-[2rem] border border-white/10 hover:border-[#DC2626]/50 hover:bg-white/[0.07] transition-all duration-300 group cursor-default"
            >
              {/* LEFT: Icon Container - Fixed size so it doesn't shrink */}
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-slate-900 flex items-center justify-center text-slate-400 group-hover:bg-[#DC2626] group-hover:text-white transition-all duration-500 shadow-sm">
                {React.cloneElement(item.icon, { size: 32, strokeWidth: 2.5 })}
              </div>

              {/* RIGHT: Content - Aligned to the left */}
              <div className="flex flex-col justify-center text-left">
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-1 group-hover:text-[#DC2626] transition-colors">
                  {item.name}
                </h3>

                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mr-2">
                    Stack:
                  </span>
                  <p className="text-sm font-black text-[#DC2626] leading-tight uppercase">
                    {item.tools}
                  </p>
                </div>
              </div>

              {/* OPTIONAL: Arrow that appears on hover to fill horizontal space */}
              <div className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 hidden md:block">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Support Line */}
      <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-30 grayscale contrast-125">
  <span className="font-black text-xl tracking-tighter">React</span>
  <span className="font-black text-xl tracking-tighter">Node.js</span>
  <span className="font-black text-xl tracking-tighter">Express</span>
  <span className="font-black text-xl tracking-tighter">MongoDB</span>
  <span className="font-black text-xl tracking-tighter">.NET</span>
  <span className="font-black text-xl tracking-tighter">C#</span>
</div>


      </div>
    </section>
  );
};

export default TechStackRefined;