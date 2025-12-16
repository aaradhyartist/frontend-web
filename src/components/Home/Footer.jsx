import React from 'react';
import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#31b8c6] rounded-xl flex items-center justify-center font-black text-slate-900">
                SS
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase">
                Software<span className="text-[#31b8c6]">Solu</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 font-medium">
              We specialize in custom software development, scaling digital products, 
              and transforming business logic into high-performance code.
            </p>
            <div className="flex gap-4">
              {[<Facebook size={18} />, <Twitter size={18} />, <Linkedin size={18} />, <Github size={18} />].map((icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-[#31b8c6] hover:text-slate-900 transition-all duration-300">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Services</h4>
            <ul className="flex flex-col gap-4 text-sm font-bold">
              {['Web Development', 'Mobile Applications', 'Cloud Architecture', 'UI/UX Design', 'DevOps Solutions'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#31b8c6] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Company</h4>
            <ul className="flex flex-col gap-4 text-sm font-bold">
              {['About Us', 'Our Process', 'Case Studies', 'Careers', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#31b8c6] transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Get In Touch</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-[#31b8c6] shrink-0" />
                <span className="text-sm font-medium">123 Tech Avenue, Silicon Valley, CA 94043</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-[#31b8c6] shrink-0" />
                <span className="text-sm font-medium">hello@softwaresolu.it</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-[#31b8c6] shrink-0" />
                <span className="text-sm font-medium">+1 (555) 000-1234</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
            © {currentYear} Software Solu IT. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;