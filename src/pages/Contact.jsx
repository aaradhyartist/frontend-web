import React from 'react';
import { Mail, MessageSquare, ShieldCheck, Clock, ArrowRight, CheckCircle2, Globe, Sparkles, ChevronDown } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="w-full mt-10 bg-white pt-24 py-24 px-0 sm:px-6 md:px-12 lg-px-24 pb-20">
      <div className="w-full px-6 lg:px-32">

        {/* --- 1. TOP INFO BAR (The "Canva" Row) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="flex items-start gap-5 p-8 bg-slate-50 rounded-[2rem] border border-slate-300   t hover:border-[#31b8c6]/20 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#31b8c6]">
              <Mail size={22} />
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-1">Direct Email</h4>
              <p className="text-slate-500 font-bold">solutions@agency.com</p>
            </div>
          </div>

          <div className="flex items-start gap-5 p-8 bg-slate-50 rounded-[2rem] border border-slate-300  hover:border-[#31b8c6]/20 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#31b8c6]">
              <Clock size={22} />
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-1">Response Time</h4>
              <p className="text-slate-500 font-bold">Average: 4.5 Hours</p>
            </div>
          </div>

          <div className="flex items-start gap-5 p-8 bg-slate-50 rounded-[2rem] border  border-slate-300  hover:border-[#31b8c6]/20 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#31b8c6]">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-1">Privacy First</h4>
              <p className="text-slate-500 font-bold">Strict NDA Protection</p>
            </div>
          </div>
        </div>

        {/* --- 2. MAIN SECTION: THE FORM HUB --- */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#31b8c6]/5 rounded-full mb-6">
              <Sparkles size={14} className="text-[#31b8c6]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#31b8c6]">Project Intake Portal</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
              LET'S START THE <br />
              <span className="text-slate-300 italic">ARCHITECTURE.</span>
            </h2>
            <p className="text-slate-500 font-bold text-lg max-w-xl mx-auto">
              Tell us about your technical requirements and our lead engineers will prepare a custom roadmap for you.
            </p>
          </div>


          <div className="bg-white border border-slate-300 p-8 lg:p-16 rounded-[2rem] shadow-2xl shadow-slate-200/50">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">

              {/* Personal Info Group */}
              <div className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Your Full Name</label>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 text-slate-700 focus:border-[#31b8c6] focus:ring-4 focus:ring-[#31b8c6]/5 transition-all outline-none placeholder:text-slate-300 font-normal"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Work Email</label>
                  <input
                    type="email"
                    placeholder="email@company.com"
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 text-slate-700 focus:border-[#31b8c6] focus:ring-4 focus:ring-[#31b8c6]/5 transition-all outline-none placeholder:text-slate-300 font-normal"
                  />
                </div>
              </div>

              {/* Project Selection Group */}
              <div className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Primary Service</label>
                  <div className="relative">
                    <select className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 text-slate-700 focus:border-[#31b8c6] focus:ring-4 focus:ring-[#31b8c6]/5 transition-all outline-none appearance-none cursor-pointer font-normal pr-12">
                      <option>SaaS Product Development</option>
                      <option>Enterprise Cloud Integration</option>
                      <option>Mobile App Ecosystem</option>
                      <option>Legacy Modernization</option>
                    </select>
                    <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Expected Timeline</label>
                  <div className="relative">
                    <select className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 text-slate-700 focus:border-[#31b8c6] focus:ring-4 focus:ring-[#31b8c6]/5 transition-all outline-none appearance-none cursor-pointer font-normal pr-12">
                      <option>Less than 3 months</option>
                      <option>3 to 6 months</option>
                      <option>6+ months</option>
                      <option>Ongoing Support</option>
                    </select>
                    <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Message Block (Full Width) */}
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Project Specifics</label>
                <textarea
                  rows="4"
                  placeholder="Tell us about the current technical stack and your scaling goals..."
                  className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-700 focus:border-[#31b8c6] focus:ring-4 focus:ring-[#31b8c6]/5 transition-all outline-none placeholder:text-slate-300 font-normal resize-none"
                ></textarea>
              </div>

              {/* Action Area */}
              <div className="md:col-span-2 ptW-6 flex flex-col items-center gap-6">
                <button className="px-10 py-4 bg-[#31b8c6] text-white rounded-xl font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:bg-slate-900 hover:shadow-2xl hover:cursor-pointer hover:shadow-[#31b8c6]/20 transition-all group w-full md:w-auto">
                  Submit Request <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2 text-slate-400">
                  <Globe size={12} />
                  <p className="text-[10px] font-bold uppercase tracking-widest">Global Ops • 24/7 Response</p>
                </div>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactSection;