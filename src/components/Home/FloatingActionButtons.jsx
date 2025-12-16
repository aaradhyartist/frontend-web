import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

const FloatingActionButtons = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.pageYOffset > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-4 items-center">
      
      {/* BACK TO TOP BUTTON (Appears above WhatsApp) */}
      <button
        onClick={scrollToTop}
        className={`hover:cursor-pointer
          w-12 h-12 bg-slate-900 text-[#31b8c6] rounded-xl  border border-[#31b8c6]  
          shadow-xl flex items-center justify-center transition-all duration-500
          ${showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
          hover:bg-[#31b8c6] hover:text-white
        `}
      >
        <ArrowUp size={24} />
      </button>

      {/* WHATSAPP BUTTON (Always at the bottom) */}
      <a
        href="https://wa.me/916232389832?text=Hi!%20I%20need%20help"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 group relative"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        
        {/* Tooltip for WhatsApp */}
        <span className="absolute right-16 bg-white text-slate-900 text-xs font-bold px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-900">
          Chat with us
        </span>
      </a>
      
    </div>
  );
};

export default FloatingActionButtons;