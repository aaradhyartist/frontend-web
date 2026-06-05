import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, ArrowRight } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for background blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Service', href: '/service' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={` fixed w-full z-50 transition-all duration-300 ${scrolled ? 'top-2' : 'top-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navbar Container */}
        <div className={`
          relative flex items-center justify-between h-20 px-6 transition-all duration-500 
          ${scrolled
            ? 'bg-slate-900/80 backdrop-blur-xl shadow-lg border border-white/10 rounded-2xl'
            : 'bg-slate-900/40 backdrop-blur-md border border border-white/10 rounded-[2rem]'}
        `}>

          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to={"/"} className='lex-shrink-0 flex items-center gap-2'>
             <div className="w-10 h-10 bg-[#DC2626] rounded-xl flex items-center justify-center font-black text-slate-100">
               AA
              </div>
            <span className="text-2xl font-black text-white tracking-tighter uppercase">
              Aaradhy<span className="text-[#DC2626]">Artist</span>
            </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-10 ">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `text-sm font-bold uppercase tracking-widest transition-colors
      ${isActive ? 'text-[#DC2626]' : 'text-slate-300 hover:text-[#DC2626]'}`
                }
              >
                {link.name}
              </NavLink>
            ))}

          </div>

          {/* Desktop Call to Action */}
          <div className="hidden md:flex items-center gap-4">
            {/* <button className="text-sm font-bold text-white px-4">Login</button> */}
            <Link to="/contact" className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-[#DC2626] transition-all duration-300">
              Contact <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="p-2 rounded-lg text-slate-300 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626]"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`
          md:hidden absolute left-4 right-4 mt-2 transition-all duration-300 transform origin-top
          ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
        `}>
          <div className="bg-slate-900 rounded-2xl shadow-2xl border border-white/10 p-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 text-lg font-bold rounded-xl transition-all
      ${isActive
                    ? 'text-[#DC2626] bg-white/5'
                    : 'text-slate-200 hover:bg-[#DC2626]/10 hover:text-[#DC2626]'}`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="h-[1px] bg-white/10 my-2"></div>
            {/* <button className="w-full py-4 text-[#DC2626] font-bold">Login</button> */}
            <Link to={"/contact"} className="w-full px-5 py-4 bg-[#DC2626] text-white rounded-xl font-bold shadow-lg shadow-[#DC2626]/20">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;