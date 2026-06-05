import React, { useState } from 'react';
import { ExternalLink, Layout } from 'lucide-react';
import NewsletterModal from './NewsletterModal';

const WorkShowcase = () => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All")
  const categories = [
    "All",
    "Healthcare",
    "Real Estate",
    "E-Commerce",
    "Fitness",
    "Food",
    "Beauty",
  ];

  const templates = [
    {
      title: "Clinic Management System",
      category: "Healthcare",
      desc: "Appointment booking, patient records, and an admin dashboard for clinics.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
      tech: "React • Node • MongoDB",
      link: "/templates/clinic.html",
    },
    {
      title: "Real Estate Listing Platform",
      category: "Real Estate",
      desc: "Property listings, agent profiles, and an inquiry management panel.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
      tech: "MERN • Admin Panel",
      link: "/templates/real-estate.html",
    },
    {
      title: "Online Retail Store",
      category: "E-Commerce",
      desc: "Product catalog, cart flow, and admin product management.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
      tech: "React • Cart • Admin",
      link: "/templates/retail-store.html",
    },
    {
      title: "Gym & Fitness Website",
      category: "Fitness",
      desc: "Class schedules, membership plans, and lead-capture forms.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
      tech: "React • Bookings",
      link: "/templates/gym.html",
    },
    {
      title: "Restaurant Website",
      category: "Food",
      desc: "Digital menu, online ordering flow, and reservation handling.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
      tech: "React • Menu • Orders",
      link: "/templates/restaurant.html",
    },
    {
      title: "Salon & Spa Website",
      category: "Beauty",
      desc: "Service listings, appointment booking, and a clean brand showcase.",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
      tech: "React • Appointments",
      link: "/templates/salon-spa.html",
    },
  ];
  const filterdTamplates = selectedCategory === "All" ? templates : templates.filter((template) => (template?.category === selectedCategory))

  return (
    <section className="w-full bg-slate-900 py-10 lg:py-14 px-0 sm:px-6 md:px-12 lg:px-24 ">
      <div className="mx-auto px-6 lg:px-16">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-[2px] w-10 bg-[#DC2626]"></div>
              <span className="text-[#DC2626] text-xs font-black uppercase tracking-[0.4em]">
                Demo Projects
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase">
              Web Templates & <br /> <span className="text-[#DC2626]">Sample Projects.</span>
            </h2>
            <p className="text-slate-400 font-medium mt-5">
              Live demos we’ve built across industries — click any card to open it in a new tab.
            </p>
          </div>

        </div>
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              onClick={() => { setSelectedCategory(cat) }}
              key={cat}
              className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-white/10 text-slate-300 ${selectedCategory === cat ? "bg-[#DC2626] text-white " : ""} hover:cursor-pointer hover:border-[#DC2626] hover:text-[#DC2626] transition-all`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* The Grid - clickable demo cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filterdTamplates.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/5 rounded-[1.5rem] overflow-hidden border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-[#DC2626]/50 block"
            >

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <span className="inline-flex items-center gap-2 bg-[#DC2626] text-white px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest">
                    View Demo <ExternalLink size={16} />
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#DC2626]">
                    {project.tech}
                  </span>
                </div>

                <h4 className="text-xl font-black text-white mb-3 group-hover:text-[#DC2626] transition-colors">
                  {project.title}
                </h4>

                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                  {project.desc}
                </p>
              </div>

              {/* Bottom Accent Bar */}
              <div className="h-1.5 w-0 bg-[#DC2626] group-hover:w-full transition-all duration-500"></div>
            </a>
          ))}
        </div>

        {/* Secondary "Filled" Layout Feature */}
        <div className="mt-12 p-10 bg-white/5 border border-white/10 rounded-[2rem] flex flex-col lg:flex-row items-center justify-between gap-8">

          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#DC2626]/10 flex items-center justify-center text-[#DC2626] border border-[#DC2626]/20">
              <Layout size={32} />
            </div>

            <div className="text-white">
              <h4 className="text-lg font-bold tracking-tight">
                Need something like these — built for your business?
              </h4>
              <p className="text-slate-400 text-sm font-medium max-w-sm">
                These are starting points. We tailor every build to your exact workflow, branding, and data.
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="hover:cursor-pointer px-8 py-4 bg-[#DC2626] text-white rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-[#b91c1c] transition-all whitespace-nowrap"
          >
            Get Updates
          </button>

        </div>
      </div>

      <NewsletterModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default WorkShowcase;
