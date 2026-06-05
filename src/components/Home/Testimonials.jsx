import React from "react";
import { Star, Quote } from "lucide-react";

// NOTE: Placeholder testimonials — replace `name`, `role`, and `quote`
// with real client feedback before launch.
const testimonials = [
  {
    quote:
      "They automated our daily reporting and order entry — what used to take our team hours now runs on its own. Clear communication the whole way.",
    name: "Operations Lead",
    role: "Retail Business",
    initials: "RB",
  },
  {
    quote:
      "Our admin dashboard was slow and messy. They rebuilt it with a clean MERN stack and it's fast, stable, and finally easy to manage.",
    name: "Founder",
    role: "SaaS Startup",
    initials: "SS",
  },
  {
    quote:
      "Needed a secure .NET backend with proper roles and APIs. Delivered on time, well documented, and we own all the code.",
    name: "Project Manager",
    role: "Services Company",
    initials: "SC",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-slate-900 py-24 px-0 sm:px-6 md:px-12 lg:px-24 border-b border-white/10">
      <div className="w-full px-6 lg:px-16">
        {/* Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-[#DC2626]"></div>
            <span className="text-[#DC2626] text-xs font-black uppercase tracking-[0.4em]">
              What Clients Say
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
            Trusted to <span className="text-[#DC2626]">Deliver.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:border-[#DC2626]/50 transition-all duration-300 flex flex-col"
            >
              <Quote className="text-[#DC2626]/30 mb-6" size={36} />

              <p className="text-slate-300 font-medium leading-relaxed mb-8 flex-1">
                “{t.quote}”
              </p>

              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={16} className="text-[#DC2626] fill-[#DC2626]" />
                ))}
              </div>

              <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                <div className="w-11 h-11 rounded-full bg-[#DC2626]/10 border border-[#DC2626]/20 flex items-center justify-center text-[#DC2626] font-black text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-tight">{t.name}</p>
                  <p className="text-slate-400 text-xs font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
