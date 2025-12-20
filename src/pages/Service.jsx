import React from "react";
import {
  CheckCircle2,
  Server,
  Globe,
  Shield,
  Code,
  BarChart,
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";
import ServiceHero from "../components/service/ServiceHero";
import WorkShowcase from "../components/service/WorkShowcase";

const Service = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-900">
      <ServiceHero />
      <section className="w-full  px-2 py-14 lg:px-24 lg:py-24">
        <div className="mx-auto px-6 lg:px-16">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">
              What We  <span className="text-[#31b8c6]">Actually Build.</span>
            </h2>


            <div className="h-1 w-20 bg-[#31b8c6]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-10 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#31b8c6] mb-8 group-hover:bg-[#31b8c6] group-hover:text-white transition-all">
                <Code size={28} />
              </div>
              <h3 className="text-xl font-black mb-4">
                Web Application Development
              </h3>

              <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">
                We build custom web applications tailored to real business needs — from
                internal dashboards to customer-facing platforms. Clean code, clear logic,
                and long-term maintainability.
              </p>

              <ul className="space-y-2 text-xs font-bold text-slate-400 uppercase tracking-wide">
                <li>• Business Dashboards</li>
                <li>• Custom Admin Panels</li>
                <li>• API-Driven Frontends</li>
              </ul>

            </div>

            {/* Service 2 */}
            <div className="p-10 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#31b8c6] mb-8 group-hover:bg-[#31b8c6] group-hover:text-white transition-all">
                <Server size={28} />
              </div>
              <h3 className="text-xl font-black mb-4">
                Backend & Infrastructure
              </h3>

              <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">
                We design and develop reliable backend systems that handle data, users, and
                business logic efficiently. Built to scale when your product grows — not before.
              </p>

              <ul className="space-y-2 text-xs font-bold text-slate-400 uppercase tracking-wide">
                <li>• REST & Auth Systems</li>
                <li>• Database Design</li>
                <li>• Deployment Setup</li>
              </ul>

            </div>

            {/* Service 3 */}
            <div className="p-10 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#31b8c6] mb-8 group-hover:bg-[#31b8c6] group-hover:text-white transition-all">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-black mb-4">
                Existing Project Improvement
              </h3>

              <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">
                Already have a project that feels slow, messy, or hard to maintain? We help
                clean up codebases, fix architecture issues, and make your system stable again.
              </p>

              <ul className="space-y-2 text-xs font-bold text-slate-400 uppercase tracking-wide">
                <li>• Code Cleanup</li>
                <li>• Performance Fixes</li>
                <li>• Security Improvements</li>
              </ul>

            </div>
          </div>
        </div>
      </section>


      <section className="w-full py-14 lg:py-24 px-0 sm:px-6 md:px-12 lg:px-24 bg-slate-900 text-white">
        <div className="px-6 lg:px-16 mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight uppercase">
              Built with Care.<br />
              <span className="text-[#31b8c6]">Designed to Scale.</span>
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
                  <CheckCircle2 className="text-[#31b8c6]" size={20} />
                  <span className="font-bold">{text}</span>
                </div>
              ))}
            </div>

          </div>
          <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] text-center">
            <BarChart className="text-[#31b8c6] mx-auto mb-6" size={48} />
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
          <span className="text-[#31b8c6] text-xs font-black uppercase tracking-[0.4em] block mb-4">
            Let’s Talk
          </span>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase">
            Ready to Build Something <br />
            <span className="text-[#31b8c6]">Meaningful?</span>
          </h2>

          {/* Paragraph */}
          <p className="text-slate-500 font-medium mb-10 leading-relaxed">
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
              className="px-10 py-5 bg-[#31b8c6] text-white rounded-xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all"
            >
              Chat on WhatsApp
            </a>

            {/* Contact Form */}
            <a
              href="/contact"
              className="px-10 py-5 border-2 border-slate-900 text-slate-900 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all"
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
