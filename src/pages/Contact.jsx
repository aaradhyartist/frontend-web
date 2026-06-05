import React, { useState } from 'react';
import { Loader2, Mail, Phone, MapPin, Clock, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import toast from 'react-hot-toast';
import api from '../api';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP = import.meta.env.VITE_APP_ADMIN_WHATSAPP_NUMBER;
const PHONE = import.meta.env.VITE_APP_MOBILE_NUMBER;
const EMAIL = import.meta.env.VITE_APP_WORK_EMAIL;

const SERVICES = [
  "Business Automation",
  "MERN Web App",
  ".NET System",
  "API & Integration",
  "Other",
];

const initialForm = { name: "", email: "", subject: "", mobile: "", message: "" };

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [contactForm, setContactForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone: digits only, max 10
    if (name === "mobile") {
      const digits = value.replace(/\D/g, "").slice(0, 10);
      setContactForm((prev) => ({ ...prev, mobile: digits }));
      return;
    }

    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const { name, email, message, mobile } = contactForm;
    if (!name.trim()) return "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email address.";
    if (mobile && mobile.length !== 10) return "Phone number must be 10 digits.";
    if (!message.trim()) return "Please tell us a little about your project.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      toast.error(error);
      return;
    }
    try {
      setIsLoading(true);
      const response = await api.post("/contact", contactForm);
      if (response) {
        toast.success("Inquiry submitted — we'll get back to you shortly!");
        setContactForm(initialForm);
      }
    } catch (error) {
      toast.error(error?.message || "Failed to submit inquiry");
    } finally {
      setIsLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      label: "WhatsApp Chat",
      value: `+91 ${WHATSAPP}`,
      sub: "Quick questions & project discussions",
      href: `https://wa.me/91${WHATSAPP}?text=Hello,%20I%E2%80%99m%20interested%20in%20your%20services.`,
      external: true,
    },
    {
      icon: <Mail size={22} />,
      label: "Email Us",
      value: EMAIL,
      sub: "Share detailed requirements",
      href: `mailto:${EMAIL}`,
    },
    {
      icon: <Phone size={22} />,
      label: "Call Us",
      value: `+91 ${PHONE}`,
      sub: "Mon–Sat, business hours",
      href: `tel:+91${PHONE}`,
    },
    {
      icon: <MapPin size={22} />,
      label: "Location",
      value: "Palda, Indore (MP)",
      sub: "Madhya Pradesh 452001, India",
      href: null,
    },
  ];

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-slate-200 focus:border-[#DC2626] focus:ring-4 focus:ring-[#DC2626]/10 transition-all outline-none placeholder:text-slate-500 font-normal";

  return (
    <div className="w-full bg-slate-900 pt-32 pb-24 px-0 sm:px-6 md:px-12 lg:px-24">
      <div className="w-full px-6 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#DC2626]/5 rounded-full mb-6">
            <Sparkles size={14} className="text-[#DC2626]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#DC2626]">
              Contact &amp; Project Details
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6">
            LET’S DISCUSS YOUR <br />
            <span className="text-[#DC2626]">IDEA.</span>
          </h2>
          <p className="text-slate-400 font-bold text-lg max-w-xl mx-auto">
            Tell us the problem you’re facing — we’ll review it personally and reply with clear next steps.
          </p>
        </div>

        {/* Two-column: info + form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT: Direct contact (matched card) */}
          <div className="lg:col-span-4">
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 lg:p-8 h-full flex flex-col">
              <div className="mb-6">
                <h3 className="text-xl font-black text-white tracking-tight mb-2">Reach Us Directly</h3>
                <p className="text-slate-400 font-medium text-sm leading-relaxed">
                  Prefer to talk first? You’ll be talking straight to the developer, not a sales desk.
                </p>
              </div>

              <div className="flex-1 space-y-2">
                {contactMethods.map((m, i) => {
                  const Card = m.href ? "a" : "div";
                  return (
                    <Card
                      key={i}
                      {...(m.href ? { href: m.href, ...(m.external ? { target: "_blank", rel: "noopener noreferrer" } : {}) } : {})}
                      className={`flex items-start gap-4 p-3 rounded-xl transition-all ${m.href ? "hover:bg-white/5" : ""}`}
                    >
                      <div className="p-3 rounded-xl bg-slate-900 flex items-center justify-center text-[#DC2626] shrink-0">
                        {m.icon}
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">
                          {m.label}
                        </h4>
                        <p className="text-white font-bold text-sm leading-snug">{m.value}</p>
                        <p className="text-slate-400 text-xs font-medium mt-0.5">{m.sub}</p>
                      </div>
                    </Card>
                  );
                })}
              </div>

              <div className="flex items-center gap-3 p-4 mt-6 bg-[#DC2626]/5 rounded-2xl border border-[#DC2626]/10">
                <Clock size={18} className="text-[#DC2626] shrink-0" />
                <p className="text-xs font-bold text-slate-300">
                  Typical reply: <span className="text-white">4–12 hrs</span> on business days.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="lg:col-span-8">
            <div className="bg-white/5 border border-white/10 p-8 lg:p-12 rounded-[2rem] shadow-2xl shadow-black/30">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6" onSubmit={handleSubmit} noValidate>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-1">Your Full Name</label>
                  <input onChange={handleChange} value={contactForm.name} name="name" type="text" placeholder="Your name" className={inputClass} />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-1">Email</label>
                  <input onChange={handleChange} value={contactForm.email} name="email" type="email" placeholder="you@example.com" className={inputClass} />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-1">Service Needed</label>
                  <div className="relative">
                    <select
                      onChange={handleChange}
                      value={contactForm.subject}
                      name="subject"
                      className={`${inputClass} appearance-none pr-12 ${contactForm.subject ? "text-slate-200" : "text-slate-500"}`}
                    >
                      <option value="" className="bg-slate-900 text-slate-400">Select a service</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s} className="bg-slate-900 text-white">{s}</option>
                      ))}
                    </select>
                    <ChevronDown size={18} className="text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-1">Phone / WhatsApp</label>
                  <input onChange={handleChange} value={contactForm.mobile} name="mobile" type="tel" inputMode="numeric" placeholder="10-digit number" className={inputClass} />
                </div>

                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-1">Message</label>
                  <textarea rows="4" value={contactForm.message} onChange={handleChange} name="message" placeholder="Briefly describe your project, requirement, or question" className={`${inputClass} resize-none`}></textarea>
                </div>

                <div className="md:col-span-2 pt-2 flex flex-col sm:flex-row sm:items-center gap-5">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`px-10 py-4 bg-[#DC2626] text-white rounded-xl font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-3 transition-all group w-full sm:w-auto
                      ${isLoading ? "opacity-80 cursor-not-allowed" : "hover:bg-[#b91c1c] hover:cursor-pointer"}`}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-slate-400 text-[11px] font-medium">
                    We’ll never share your details. No spam — just a reply.
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;
