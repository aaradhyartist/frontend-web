import React from 'react';
import { Code2, Server, Share2, ArrowUpRight, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const modules = [
    {
      title: "Business Automation",
      description: "Repetitive manual work draining your team? We automate workflows, data entry, reports and tool-to-tool tasks so your hours go back into real work.",
      icon: <Cpu size={24} />,
      tag: "Automation"
    },
    {
      title: "MERN Stack Development",
      description: "Need a fast, modern web app? We build full-stack products with React, Node, Express & MongoDB — dashboards, portals and SaaS platforms.",
      icon: <Code2 size={24} />,
      tag: "Web Apps"
    },
    {
      title: ".NET Development",
      description: "Need a robust, secure backend? We build reliable, enterprise-grade systems and APIs with .NET and C# that scale as you grow.",
      icon: <Server size={24} />,
      tag: "Backend"
    },
    {
      title: "API & Integrations",
      description: "Tools that don't talk to each other? We connect your systems with clean APIs and integrations so data flows automatically.",
      icon: <Share2 size={24} />,
      tag: "Integrations"
    }
  ];


  return (
    <section className="w-full bg-slate-900 py-24 px-0 sm:px-6 md:px-12 lg:px-24  border-b border-white/10">
      <div className="w-full px-6 lg:px-16">

        {/* Header - Compact but Powerful */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#DC2626]"></div>
              <span className="text-[#DC2626] text-[10px] font-black uppercase tracking-[0.3em]">Our Services</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">
              What We Build for Your <span className="text-[#DC2626]"> Business.</span>
            </h2>
          </div>
          <Link to="/service" className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-[#DC2626] transition-colors flex items-center gap-2">
            View All Services <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Services Grid - 4 Columns on XL screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((item, index) => (
            <div
              key={index}
              className="group p-8 bg-white/5 rounded-[2rem] border border-white/10 hover:border-[#DC2626]/50 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[280px]"
            >
              <div>
                {/* Header: Icon and Tag */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-[#DC2626] shadow-sm group-hover:bg-[#DC2626] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest bg-slate-900 px-3 py-1 rounded-full border border-white/10">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Minimal Footer */}
              <div className="mt-6 flex items-center gap-2 text-[#DC2626] hover:cursor-pointer group-hover:opacity-100 transition-opacity">
                <span className="text-[15px] hover:text-gray-400 font-black uppercase tracking-tighter">Details</span>
                <ArrowUpRight size={14} />
              </div>
            </div>
          ))}

          {/* Compact CTA Card */}
          <div className="p-8 bg-slate-900 rounded-[2rem] flex flex-col justify-center relative overflow-hidden group cursor-pointer min-h-[280px] ">
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-4">
                Want a software solution that fits your business?
              </h3>
              <Link to="/contact" className="text-[10px] font-black uppercase tracking-widest bg-[#DC2626] text-white px-5 py-3 rounded-xl hover:scale-105 transition-transform">
                Contact Us
              </Link>
            </div>
            {/* Visual background element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#DC2626]/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;