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
              Our Core <span className="text-slate-300">Specializations.</span>
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
                Building custom SaaS platforms and enterprise web tools using
                React, Node.js, and modern frameworks. Focused on speed and user
                experience.
              </p>
              <ul className="space-y-2 text-xs font-bold text-slate-400 uppercase tracking-wide">
                <li>• Custom SaaS Portals</li>
                <li>• API Development</li>
                <li>• Frontend Optimization</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="p-10 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#31b8c6] mb-8 group-hover:bg-[#31b8c6] group-hover:text-white transition-all">
                <Server size={28} />
              </div>
              <h3 className="text-xl font-black mb-4">
                Cloud & DevOps Solutions
              </h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">
                Transitioning your business to the cloud with AWS/Azure. We
                automate your deployments and ensure your systems never go down.
              </p>
              <ul className="space-y-2 text-xs font-bold text-slate-400 uppercase tracking-wide">
                <li>• AWS/Azure Migration</li>
                <li>• Docker & Kubernetes</li>
                <li>• CI/CD Pipelines</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="p-10 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#31b8c6] mb-8 group-hover:bg-[#31b8c6] group-hover:text-white transition-all">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-black mb-4">Legacy Modernization</h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">
                Updating old, slow software into modern, fast, and secure
                systems. We help businesses stay competitive by refreshing their
                tech stack.
              </p>
              <ul className="space-y-2 text-xs font-bold text-slate-400 uppercase tracking-wide">
                <li>• Code Audits</li>
                <li>• Database Refactoring</li>
                <li>• Security Hardening</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. THE "WHY US" SECTION: FULL WIDTH FILL --- */}
      <section className="w-full py-14 lg:py-24 px-0 sm:px-6 md:px-12 lg:px-24 bg-slate-900 text-white">
        <div className="px-6 lg:px-16 mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight uppercase">
              Engineered for Reliability.<br />
              <span className="text-[#31b8c6]">Built for Growth.</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              We operate with a lean delivery model. Unlike large agencies, you
              work directly with a senior engineer who is responsible for your
              project's architecture and success.
            </p>
            <div className="space-y-6">
              {[
                "Direct Senior Engineer Involvement",
                "Scalable Architecture from Day 1",
                "Transparent Communication & Reporting",
                "Full Ownership of Source Code",
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
            <h3 className="text-2xl font-bold mb-4 italic">
              "They don't just write code; they solve business problems."
            </h3>
            <p className="text-slate-500 text-sm uppercase font-black tracking-widest">
              Client Feedback • Startup Founder
            </p>
          </div>
        </div>
      </section>
      <WorkShowcase />
      <section className="w-full lg:pt-2 pb-14 px-6 lg:px-16 text-center">
        <div className=" mx-auto">
          <h2 className="text-4xl font-black text-slate-900 mb-6">
            Ready to start your project?
          </h2>
          <p className="text-slate-500 font-medium mb-10">
            Contact us today for a free technical audit and consultation. We
            usually respond within 12 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <div className="flex items-center justify-center gap-3">
              <Mail className="text-[#31b8c6]" />
              <span className="font-bold">hello@yourcompany.com</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="text-[#31b8c6]" />
              <span className="font-bold">+1 (555) 000-0000</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
