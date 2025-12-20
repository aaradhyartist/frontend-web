import React, { useState } from 'react';
import { Loader2, Mail, MessageSquare, ShieldCheck, Clock, ArrowRight, CheckCircle2, Globe, Sparkles, ChevronDown, Contact2Icon, ContactIcon } from 'lucide-react';

import toast from 'react-hot-toast';
import api from '../api';
import { FaWhatsapp } from 'react-icons/fa';

const ContactSection = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",

  })


  const handleChange = (e) => {
    const { name, value } = e.target;

    // ===== Mobile Validation =====
    if (name === "mobile") {
      const numericValue = value.replace(/\D/g, "");

      // Max 10 digits
      if (numericValue.length > 13) return;

      setContactForm((prev) => ({
        ...prev,
        mobile: numericValue,
      }));

      if (numericValue.length !== 13) {
        return
      }
      return;
    }



    // ===== Default handler =====
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      setIsLoading(true)


      const response = await api.post("/contact", contactForm);
      if (response) {
        toast.success("Inquiry submited")
      }
    } catch (error) {
      console.log("====Error", error);

      toast.error(error?.message || "Faild to Submit Inquiry")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full mt-10 bg-white pt-24 py-24 px-0 sm:px-6 md:px-12 lg-px-24 pb-20">
      <div className="w-full px-6 lg:px-32">
        {/* --- 1. TOP INFO BAR (The "Canva" Row) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">

          {/* WhatsApp */}
          <div className="flex items-start gap-5 p-8 bg-slate-50 rounded-[2rem] border border-slate-300 hover:border-[#31b8c6]/30 transition-all">
            <div className="p-5 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#31b8c6]">
              <FaWhatsapp className="w-7 h-7 " />
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-1">
                WhatsApp Chat
              </h4>
              <p className="text-slate-500 font-bold leading-relaxed">
                Quick questions, project discussions,
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex items-start gap-5 p-8 bg-slate-50 rounded-[2rem] border border-slate-300 hover:border-[#31b8c6]/30 transition-all">
            <div className="p-5  rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#31b8c6]">
              <ContactIcon size={22} />
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-1">
                Contact Form
              </h4>
              <p className="text-slate-500 font-bold leading-relaxed">
                Share detailed requirements — we review every request personally.
              </p>
            </div>
          </div>

          {/* Response Time */}
          <div className="flex items-start gap-5 p-8 bg-slate-50 rounded-[2rem] border border-slate-300 hover:border-[#31b8c6]/30 transition-all">
            <div className="p-5 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#31b8c6]">
              <Clock size={22} />
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-1">
                Response Time
              </h4>
              <p className="text-slate-500 font-bold leading-relaxed">
                Usually within <span className="text-slate-900">4–12 hours</span> on business days.
              </p>
            </div>
          </div>

        </div>


        {/* --- 2. MAIN SECTION: THE FORM HUB --- */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#31b8c6]/5 rounded-full mb-6">
              <Sparkles size={14} className="text-[#31b8c6]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#31b8c6]">
                Contact & Project Details
              </span>

            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
              LET’S DISCUSS YOUR <br />
              <span className="text-[#31b8c6] ">IDEA.</span>
            </h2>
            <p className="text-slate-500 font-bold text-lg max-w-xl mx-auto">
              Share your requirements and we’ll review them personally before getting back to you with clear next steps.
            </p>

          </div>


          <div className="bg-white border border-slate-300 p-8 lg:p-16 rounded-[2rem] shadow-2xl shadow-slate-200/50">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6" onSubmit={handleSubmit}>

              {/* Personal Info Group */}
              <div className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Your Full Name</label>
                  <input
                    onChange={handleChange}
                    value={contactForm?.name}
                    name='name'
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 text-slate-700 focus:border-[#31b8c6] focus:ring-4 focus:ring-[#31b8c6]/5 transition-all outline-none placeholder:text-slate-300 font-normal"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Email</label>
                  <input
                    onChange={handleChange}
                    value={contactForm.email}
                    name='email'
                    type="text"
                    placeholder="you@example.com"
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 text-slate-700 focus:border-[#31b8c6] focus:ring-4 focus:ring-[#31b8c6]/5 transition-all outline-none placeholder:text-slate-300 font-normal"
                  />
                </div>



              </div>

              {/* Project Selection Group */}
              <div className="space-y-5">

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Subject</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    value={contactForm?.subject || ""}
                    name='subject'
                    placeholder="What do you want to discuss?"
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 text-slate-700 focus:border-[#31b8c6] focus:ring-4 focus:ring-[#31b8c6]/5 transition-all outline-none placeholder:text-slate-300 font-normal"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Phone / WhatsApp Number</label>
                  <input
                    onChange={handleChange}
                    value={contactForm?.mobile || ""}
                    type="text"
                    name='mobile'
                    placeholder="Your contact number"
                    className="w-full bg-white border border-slate-200 rounded-xl px-5 py-3.5 text-slate-700 focus:border-[#31b8c6] focus:ring-4 focus:ring-[#31b8c6]/5 transition-all outline-none placeholder:text-slate-300 font-normal"
                  />
                </div>

              </div>

              {/* Message Block (Full Width) */}
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Message</label>
                <textarea
                  rows="4"
                  value={contactForm?.message || ''}
                  onChange={handleChange}
                  name='message'
                  placeholder="Briefly describe your project, requirement, or question"
                  className="w-full bg-white border border-slate-200 rounded-xl px-5 py-4 text-slate-700 focus:border-[#31b8c6] focus:ring-4 focus:ring-[#31b8c6]/5 transition-all outline-none placeholder:text-slate-300 font-normal resize-none"
                ></textarea>
              </div>

              {/* Action Area */}
              <div className="md:col-span-2 pt-6 flex flex-col items-center gap-6">
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className={`px-10 py-4 bg-[#31b8c6] text-white rounded-xl font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-3 transition-all group w-full md:w-auto 
      ${isLoading ? "opacity-80 cursor-not-allowed" : "hover:bg-slate-900 hover:shadow-2xl hover:cursor-pointer hover:shadow-[#31b8c6]/20"}`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Request
                      <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 text-slate-400">
                  <Globe size={12} />
                  <p className="text-[10px] font-bold uppercase tracking-widest">Response within 4–12 hours • Business Days
</p>
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