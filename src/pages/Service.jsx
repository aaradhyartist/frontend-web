import React from "react";
import {
  CheckCircle2,
  Server,
  Globe,
  Code,
  BarChart,
  ArrowRight,
  Cpu,
} from "lucide-react";
import ServiceHero from "../components/service/ServiceHero";
import WorkShowcase from "../components/service/WorkShowcase";

const Service = () => {
  return (
    <div className="w-full bg-slate-900 font-sans text-white">
      <ServiceHero />
      <section className="w-full  px-2 py-14 lg:px-24 lg:py-24">
        <div className="mx-auto px-6 lg:px-16">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">
              What We  <span className="text-[#DC2626]">Actually Build.</span>
            </h2>


            <div className="h-1 w-20 bg-[#DC2626]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Cpu size={28} />,
                problem: "Repetitive manual work eating your team’s time?",
                title: "Business Automation",
                desc: "We automate workflows, data entry, reports and tool-to-tool tasks so your team stops doing what software should be doing.",
                points: ["Workflow Automation", "Report & Data Pipelines", "App-to-App Integrations"],
              },
              {
                icon: <Code size={28} />,
                problem: "Need a fast, modern web app?",
                title: "MERN Stack Development",
                desc: "Full-stack products built with React, Node, Express and MongoDB — dashboards, portals and SaaS platforms that scale.",
                points: ["Business Dashboards", "Custom Admin Panels", "SaaS & Web Apps"],
              },
              {
                icon: <Server size={28} />,
                problem: "Need a robust, secure backend?",
                title: ".NET Development",
                desc: "Reliable, enterprise-grade systems and APIs with .NET and C# — built for performance, security and long-term stability.",
                points: ["ASP.NET APIs", "Auth & Role Systems", "Database Design"],
              },
              {
                icon: <Globe size={28} />,
                problem: "Tools that don’t talk to each other?",
                title: "API & Integrations",
                desc: "We connect your systems with clean APIs and integrations so data flows automatically across your whole stack.",
                points: ["REST APIs", "Third-Party Integrations", "Webhooks & Sync"],
              },
            ].map((s, i) => (
              <div
                key={i}
                className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-[#DC2626]/50 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-[#DC2626] mb-8 group-hover:bg-[#DC2626] group-hover:text-white transition-all">
                  {s.icon}
                </div>

                <span className="text-[#DC2626] text-xs font-bold uppercase tracking-widest">
                  {s.problem}
                </span>
                <h3 className="text-2xl font-black mb-4 mt-2">{s.title}</h3>

                <p className="text-slate-400 font-medium text-sm leading-relaxed mb-6">
                  {s.desc}
                </p>

                <ul className="space-y-2 text-xs font-bold text-slate-400 uppercase tracking-wide">
                  {s.points.map((p) => (
                    <li key={p}>• {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="w-full py-14 lg:py-24 px-0 sm:px-6 md:px-12 lg:px-24 bg-slate-900 text-white">
        <div className="px-6 lg:px-16 mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight uppercase">
              Built with Care.<br />
              <span className="text-[#DC2626]">Designed to Scale.</span>
            </h2>


            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              We work as a small, focused engineering team. You communicate directly with
              the people building your product — no layers, no confusion. Every decision
              is made with long-term stability and business clarity in mind.
            </p>

            <div className="space-y-6">
              {[
                "Direct communication with the development team",
                "Clean and maintainable codebase",
                "Scalable structure that grows with your product",
                "Complete ownership of your source code",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 className="text-[#DC2626]" size={20} />
                  <span className="font-bold">{text}</span>
                </div>
              ))}
            </div>

          </div>
          <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] text-center">
            <BarChart className="text-[#DC2626] mx-auto mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-4">
              Simple Process. Clear Outcomes.
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We focus on understanding your problem first, then building only what’s
              necessary. No overengineering. No unnecessary features.
            </p>
          </div>

        </div>
      </section>
      <WorkShowcase />
      <section className="w-full lg:pt-2 pb-14 px-6 lg:px-16 text-center">
        <div className="mx-auto max-w-3xl">

          {/* Small Sub Heading */}
          <span className="text-[#DC2626] text-xs font-black uppercase tracking-[0.4em] block mb-4">
            Let’s Talk
          </span>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">
            Ready to Build Something <br />
            <span className="text-[#DC2626]">Meaningful?</span>
          </h2>

          {/* Paragraph */}
          <p className="text-slate-400 font-medium mb-10 leading-relaxed">
            Whether you have a clear idea or just a rough concept, we’re here to help.
            Reach out via WhatsApp or our contact form, and we’ll guide you on the best
            technical approach.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">

            {/* WhatsApp */}
            <a
              href={`https://wa.me/91${import.meta.env.VITE_APP_ADMIN_WHATSAPP_NUMBER}?text=Hello,%20I%E2%80%99m%20interested%20in%20your%20services%20and%20would%20like%20to%20discuss%20the%20next%20steps.`}

              target="_blank"
              className="px-10 py-5 bg-[#DC2626] text-white rounded-xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all"
            >
              Chat on WhatsApp
            </a>

            {/* Contact Form */}
            <a
              href="/contact"
              className="px-10 py-5 border-2 border-white/20 text-white rounded-xl font-black uppercase tracking-widest text-xs hover:border-[#DC2626] hover:text-[#DC2626] transition-all"
            >
              Use Contact Form
            </a>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Service;
