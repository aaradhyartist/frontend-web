import React from "react";
import {
  Target,
  Users,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Zap,
  Globe,
  Layers,
} from "lucide-react";

const FullAboutPage = () => {
  return (
    <div className="w-full bg-white pt-28">
      {/* --- SECTION 1: THE BOLD ENTRANCE --- */}
      <section className="relative w-full min-h-[70vh] flex items-center overflow-hidden bg-slate-900 px-0 sm:px-6 md:px-12 lg:px-24  py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          {/* Background Decorative "01" */}
          <div className="absolute -bottom-10 -right-10 text-[30rem] font-black text-white/5 leading-none pointer-events-none select-none">
            01
          </div>

          <div className="relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[2px] w-12 bg-[#31b8c6]"></div>
                <span className="text-[#31b8c6] text-xs font-black uppercase tracking-[0.4em]">
                  Establishment
                </span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
                BEYOND <br />
                <span className="text-[#31b8c6]">CODEBASES.</span>
              </h1>
            </div>
            <div className="bg-white/5 border border-white/10 p-10 lg:p-14 rounded-[3rem] backdrop-blur-xl">
              <p className="text-white text-xl md:text-2xl font-light leading-relaxed mb-8">
                We are a founder-led engineering firm built on the principle that{" "}
                <strong>senior oversight</strong> shouldn't be a luxury—it should
                be the standard.
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="text-[#31b8c6] text-4xl font-black tracking-tighter">
                    100%
                  </p>
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-1">
                    Founder Led
                  </p>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div>
                  <p className="text-[#31b8c6] text-4xl font-black tracking-tighter">
                    Senior
                  </p>
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-1">
                    Only Talent
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE BUSINESS-FIRST MISSION (FULL WIDTH) --- */}
      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-24  py-14 bg-[#31b8c6]/5 grid lg:grid-cols-12 gap-16 items-center">

        <div className="lg:col-span-7 space-y-8 px-4 lg:px-16">
        
           <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">
           Business-First  <span className="text-slate-300">Engineering Mindset..</span>
          </h2>

          <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-2xl">
            We eliminate the fragmentation of traditional agencies. Our lean
            delivery model ensures that a senior lead engineer is directly
            involved in your architecture, development, and delivery. We build
            for reliability, scalability, and long-term partnership.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="text-[#31b8c6]">
                <ShieldCheck size={28} />
              </div>
              <span className="font-black text-slate-900 uppercase text-xs tracking-widest">
                Accountability
              </span>
            </div>
            <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="text-[#31b8c6]">
                <BarChart3 size={28} />
              </div>
              <span className="font-black text-slate-900 uppercase text-xs tracking-widest">
                Scalability
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 h-[500px] bg-slate-200 rounded-[4rem] relative overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-[#31b8c6]/20 mix-blend-multiply transition-opacity group-hover:opacity-0"></div>
          {/* IMAGE PLACEHOLDER: Professional Engineering Workspace */}
          <div className="flex items-center justify-center h-full text-slate-400 font-black italic text-2xl uppercase tracking-tighter">
            Architecture View
          </div>
        </div>
      </section>

      {/* --- SECTION 3: THE SCALE & GROWTH (WIDE GRID) --- */}
      <section className="w-full sm:px-6 md:px-12 lg:px-24  py-14 bg-white">
        <div className="flex flex-col lg:flex-row gap-4 mb-20 mx-auto px-6">
          <div className="flex-1 p-12 bg-slate-900 rounded-[3rem] text-white flex flex-col justify-between min-h-[400px]">
            <Layers size={40} className="text-[#31b8c6]" />
            <div>
              <h3 className="text-3xl font-black mb-4">Elastic Resources</h3>
              <p className="text-slate-400 font-medium">
                Our structure allows us to scale technical resources as your
                project scope expands, ensuring zero friction during high-growth
                phases.
              </p>
            </div>
          </div>
          <div className="flex-1 p-12 bg-[#31b8c6] rounded-[3rem] text-white flex flex-col justify-between min-h-[400px]">
            <Globe size={40} className="text-slate-900" />
            <div>
              <h3 className="text-3xl font-black mb-4">Global Standards</h3>
              <p className="text-white/80 font-medium text-slate-900">
                We adhere to the highest international coding standards,
                ensuring your software is ready for global compliance and
                security audits.
              </p>
            </div>
          </div>
        </div>

        {/* <section className="px-6">
          <div className="w-full bg-slate-50 p-12 lg:p-20 rounded-[3rem] border border-slate-300 text-center ">
            <h3 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter">
              A PARTNERSHIP, NOT A TRANSACTION.
            </h3>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <h4 className="text-[#31b8c6] font-black uppercase text-xs tracking-[0.3em]">
                  Communication
                </h4>
                <p className="text-slate-500 font-bold text-sm">
                  Direct Slack/Teams access to lead engineers for instant clarity.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-[#31b8c6] font-black uppercase text-xs tracking-[0.3em]">
                  Ownership
                </h4>
                <p className="text-slate-500 font-bold text-sm">
                  You retain 100% IP rights from day one. No vendor lock-in, ever.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-[#31b8c6] font-black uppercase text-xs tracking-[0.3em]">
                  Transparency
                </h4>
                <p className="text-slate-500 font-bold text-sm">
                  Weekly technical audits and clear roadmaps for complete
                  visibility.
                </p>
              </div>
            </div>
          </div>
        </section> */}
        <div className="w-full bg-[#31b8c6]/5 p-12 lg:p-24 rounded-[2rem] border border-[#31b8c6]/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#31b8c6]/10 blur-[100px] rounded-full -mr-20 -mt-20"></div>

          <div className="relative z-10 text-center">
            <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-16 tracking-tighter uppercase leading-[0.9]">
              A PARTNERSHIP, <br />
              <span className="text-[#31b8c6] italic">NOT A TRANSACTION.</span>
            </h3>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 -translate-y-1/2 z-0"></div>

              {[
                {
                  label: "Communication",
                  text: "Direct Slack/Teams access to lead engineers for instant clarity.",
                  number: "01",
                },
                {
                  label: "Ownership",
                  text: "You retain 100% IP rights from day one. No vendor lock-in, ever.",
                  number: "02",
                },
                {
                  label: "Transparency",
                  text: "Weekly technical audits and clear roadmaps for complete visibility.",
                  number: "03",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative z-10 bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-transparent hover:border-[#31b8c6] hover:-translate-y-2 transition-all duration-500 group/card"
                >

                  <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-900 text-white rounded-full mb-8 font-black text-xs group-hover/card:bg-[#31b8c6] transition-colors">
                    {item.number}
                  </div>

                  <h4 className="text-[#31b8c6] font-black uppercase text-xs tracking-[0.4em] mb-4">
                    {item.label}
                  </h4>

                  <p className="text-slate-600 font-bold text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: CTA FOOTER --- */}
      <section className="w-full px-6 lg:px-16 pt-14 pb-24 text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
            READY TO AUDIT YOUR NEXT <br />{" "}
            <span className="text-slate-300 italic">TECHNICAL VENTURE?</span>
          </h2>
          <button className="px-12 py-6 bg-slate-900 text-white rounded-2xl font-black uppercase text-xs tracking-[0.4em] hover:bg-[#31b8c6] transition-all flex items-center gap-4 mx-auto group">
            Start Consultation{" "}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-2 transition-transform"
            />
          </button>
        </div>
      </section>
    </div>
  );
};

export default FullAboutPage;
