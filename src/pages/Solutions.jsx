import React from "react";
import {
  Code2,
  Users,
  Building2,
  Package,
  CreditCard,
  CalendarCheck,
  ShoppingCart,
  Receipt,
  UserCog,
  LayoutDashboard,
  MessageSquare,
  Bot,
  Gift,
  Store,
  GraduationCap,
  BookOpen,
  Library,
  Stethoscope,
  Pill,
  FileText,
  UtensilsCrossed,
  ChefHat,
  Scissors,
  Dumbbell,
  BedDouble,
  ListChecks,
  Workflow,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const categories = [
  {
    name: "Retail & Commerce",
    items: [
      { icon: <CreditCard size={22} />, title: "Point of Sale (POS)", desc: "Fast billing and sales screens for shops and outlets." },
      { icon: <Package size={22} />, title: "Inventory Management", desc: "Real-time stock tracking, alerts and reports." },
      { icon: <ShoppingCart size={22} />, title: "E-Commerce Platforms", desc: "Online stores with cart, payments and admin." },
      { icon: <Gift size={22} />, title: "Gift Shop Management", desc: "Catalog, billing and stock for gift & retail shops." },
      { icon: <Store size={22} />, title: "Retail Store Management", desc: "Sales, stock and customers in one place." },
      { icon: <Receipt size={22} />, title: "Billing & Invoicing", desc: "Invoices, payments and recurring billing." },
    ],
  },
  {
    name: "Education",
    items: [
      { icon: <GraduationCap size={22} />, title: "School Management", desc: "Students, attendance, fees, exams and staff in one system." },
      { icon: <BookOpen size={22} />, title: "Coaching / Institute", desc: "Batches, admissions, fees and class schedules." },
      { icon: <Library size={22} />, title: "Learning Management (LMS)", desc: "Courses, lessons, quizzes and student progress." },
      { icon: <Users size={22} />, title: "Admission / Student Portal", desc: "Online admissions, records and parent access." },
    ],
  },
  {
    name: "Healthcare",
    items: [
      { icon: <Stethoscope size={22} />, title: "Clinic Management", desc: "Appointments, patient records and clinic admin." },
      { icon: <Pill size={22} />, title: "Pharmacy Management", desc: "Medicine stock, billing and expiry tracking." },
      { icon: <CalendarCheck size={22} />, title: "Appointment Booking", desc: "Online doctor booking and reminder system." },
      { icon: <FileText size={22} />, title: "Medical Billing", desc: "Patient billing, invoices and reports." },
    ],
  },
  {
    name: "Hospitality & Services",
    items: [
      { icon: <UtensilsCrossed size={22} />, title: "Restaurant Management", desc: "Menu, orders, tables and billing." },
      { icon: <ChefHat size={22} />, title: "Cloud Kitchen / Ordering", desc: "Online ordering and kitchen order flow." },
      { icon: <Scissors size={22} />, title: "Salon & Spa", desc: "Service booking, staff and appointments." },
      { icon: <Dumbbell size={22} />, title: "Gym & Fitness", desc: "Memberships, plans and class schedules." },
      { icon: <BedDouble size={22} />, title: "Hotel / Booking", desc: "Room booking, availability and guests." },
    ],
  },
  {
    name: "Business Operations",
    items: [
      { icon: <Users size={22} />, title: "Custom CRM", desc: "Leads, customers and deals built for your sales flow." },
      { icon: <Building2 size={22} />, title: "ERP Systems", desc: "Operations, inventory and finance in one system." },
      { icon: <UserCog size={22} />, title: "HR & Payroll", desc: "Employees, attendance, leaves and payroll." },
      { icon: <LayoutDashboard size={22} />, title: "Admin Dashboards", desc: "Monitor activity, users and KPIs at a glance." },
      { icon: <ListChecks size={22} />, title: "Project / Task Management", desc: "Tasks, teams and progress tracking." },
    ],
  },
  {
    name: "Custom & AI",
    items: [
      { icon: <Code2 size={22} />, title: "Custom Software", desc: "Software tailored to your exact workflow." },
      { icon: <Bot size={22} />, title: "AI & ChatGPT Integration", desc: "Smart assistants and AI features in your product." },
      { icon: <MessageSquare size={22} />, title: "Chat & Real-time Apps", desc: "Messaging, notifications and live features." },
      { icon: <Workflow size={22} />, title: "Workflow Automation", desc: "Automate repetitive tasks and connect your tools." },
    ],
  },
];

const Solutions = () => {
  return (
    <div className="w-full bg-slate-900 text-white">
      {/* Hero */}
      <section className="w-full pt-36 pb-16 px-6 lg:px-24">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-[#DC2626]"></div>
            <span className="text-[#DC2626] text-xs font-black uppercase tracking-[0.4em]">
              Solutions
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95]">
            Solutions We <span className="text-[#DC2626]">Build.</span>
          </h1>
          <p className="text-slate-300 text-lg font-medium leading-relaxed mt-6 max-w-2xl">
            Ready-to-tailor software across industries — built with our{" "}
            <span className="text-white font-semibold">MERN</span> and{" "}
            <span className="text-white font-semibold">.NET</span> stack and an{" "}
            <span className="text-white font-semibold">automation-first</span> approach.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="w-full pb-12 px-6 lg:px-24 space-y-16">
        {categories.map((cat, ci) => (
          <Reveal key={ci}>
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase whitespace-nowrap">
                  {cat.name}
                </h2>
                <div className="h-px w-full bg-white/10"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.items.map((s, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#DC2626]/50 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-900 flex items-center justify-center text-[#DC2626] group-hover:bg-[#DC2626] group-hover:text-white transition-all duration-300">
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-black mb-1">{s.title}</h3>
                      <p className="text-slate-400 text-sm font-medium leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* CTA */}
      <Reveal>
        <section className="w-full px-6 lg:px-24 py-20">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 p-10 lg:p-16 text-center">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#DC2626]/15 blur-[140px] rounded-full pointer-events-none"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-4">
                Don’t see your solution?
              </h2>
              <p className="text-slate-300 font-medium mb-8">
                If you can describe the problem, we can build the software for it. Tell us what you need.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#DC2626] text-white rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-[#b91c1c] transition-all group"
              >
                Start a Project
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
};

export default Solutions;
