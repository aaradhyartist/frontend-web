import React from 'react';
import { ShieldCheck, Lock, CheckCircle } from 'lucide-react';

const TrustSection = () => {
  const logos = ["AUTOMATION", "MERN APPS", ".NET SYSTEMS", "DASHBOARDS", "REST APIS", "SAAS PLATFORMS", "ADMIN PANELS", "INTEGRATIONS"];
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="w-full bg-slate-900 py-24 px-0 sm:px-6 md:px-12 lg:px-24 border-b border-white/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* LEFT: Heading Content (Spans 7 columns) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-[#DC2626]"></div>
              <span className="text-[#DC2626] text-xs font-black uppercase tracking-[0.4em]">Why Teams Choose Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1] tracking-tighter uppercase">
              BUILT FOR<span className="text-slate-600"> Growing</span> <br />
               <span className="text-[#DC2626]">Businesses.</span>
            </h2>
          </div>

          {/* RIGHT: Badges (Spans 5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {[
              { icon: <ShieldCheck size={24} />, text: "Clean Code Practices" },
              { icon: <Lock size={24} />, text: "Secure Development Standards" },
              { icon: <CheckCircle size={24} />, text: "Scalable Architecture" }
            ].map((badge, i) => (
              <div 
                key={i} 
                className="flex items-center gap-4 p-5 md:p-6 bg-white/5 rounded-2xl border border-white/10 transition-all hover:border-[#DC2626]/30 group"
              >
                <span className="text-[#DC2626] group-hover:scale-110 transition-transform">{badge.icon}</span>
                <span className="font-bold text-slate-200 uppercase tracking-tight text-sm md:text-base">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee - Full Width Below */}
        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] pt-10 border-t border-white/10">
          <div className="flex whitespace-nowrap animate-marquee-slow opacity-20 hover:opacity-40 transition-opacity">
            {repeatedLogos.map((logo, index) => (
              <div key={index} className="flex items-center px-12">
                <span className="text-4xl md:text-6xl font-black text-slate-300 uppercase tracking-tighter italic">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          display: flex;
          width: fit-content;
          animation: marquee-slow 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustSection;