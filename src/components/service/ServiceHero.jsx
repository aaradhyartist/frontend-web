import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const ProfessionalServiceHero = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-slate-50 flex items-center overflow-hidden lg:px-16 lg:pt-20 sm:pt-20">

      {/* --- THE TEXT CONTENT (Z-INDEX 20 TO STAY ABOVE IMAGE) --- */}
      <div className="relative z-20 w-full  mx-auto px-8  lg:px-24 lg:px-24 grid lg:grid-cols-2">
        <div className="">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-[2px] w-10 bg-[#31b8c6]"></div>
            <span className="text-[#31b8c6] text-xs font-black uppercase tracking-[0.4em]">Expert IT Partner</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">
            Scalable Software  <span className="text-slate-300">Engineering.</span>
          </h2>


          <p className="text-slate-600 text-xl font-medium leading-relaxed mb-10 max-w-lg">
            We provide high-density engineering solutions for businesses that
            require absolute reliability and high-speed delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-12">
            <button className="px-10 py-5 bg-slate-900 text-white rounded-xl font-bold hover:bg-[#31b8c6] transition-all flex items-center gap-3">
              Book a Strategy Call <ArrowRight size={18} />
            </button>
            <div className="flex items-center gap-3 px-2">
              <CheckCircle2 className="text-[#31b8c6]" size={20} />
              <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Founder Led</span>
            </div>
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

          {/* THE GRADIENT MASK: 
              - Left side is solid bg-slate-50 to hide the image edge
              - Right side is transparent to show the image
          */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent"></div>

          {/* Subtle Right-side fade (Optional: if you want it to fade out on the far right too) */}
          <div className="absolute inset-0 bg-gradient-to-l from-slate-50/20 to-transparent"></div>
        </div>
      </div>

    </section>
  );
};

export default ProfessionalServiceHero;