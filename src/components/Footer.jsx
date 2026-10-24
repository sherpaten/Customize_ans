import React from 'react';
import { Palette, Mail, Instagram, ArrowUp } from 'lucide-react';
import LogoImg from '/Logo.jpeg';

export default function Footer({ setActiveTab }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0B0C10] border-t border-[#C5C6C7]/10 py-12 px-6 sm:px-12 lg:px-16 relative z-30">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand Info */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#66FCF1] flex items-center justify-center text-[#0B0C10] overflow-hidden">
            <img src={LogoImg} alt="customize_ans Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="text-lg font-black tracking-wider text-white font-mono">
              customize_ans
            </span>
            <p className="text-[9px] text-[#66FCF1] font-bold tracking-widest uppercase">
              ART STUDIO
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-[#C5C6C7] font-semibold">
          <button onClick={() => { setActiveTab('home'); scrollToTop(); }} className="hover:text-[#66FCF1] transition-colors">Home</button>
          <button onClick={() => { setActiveTab('about'); scrollToTop(); }} className="hover:text-[#66FCF1] transition-colors">About Us</button>
          <button onClick={() => { setActiveTab('services'); scrollToTop(); }} className="hover:text-[#66FCF1] transition-colors">Services</button>
          <button onClick={() => { setActiveTab('gallery'); scrollToTop(); }} className="hover:text-[#66FCF1] transition-colors">Gallery</button>
          <button onClick={() => { setActiveTab('contact'); scrollToTop(); }} className="hover:text-[#66FCF1] transition-colors">Contact</button>
        </div>

        {/* Social & Back to Top */}
        <div className="flex items-center gap-4">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-[#1F2833] border border-[#C5C6C7]/15 text-[#C5C6C7] hover:text-[#66FCF1] transition-all">
            <Instagram className="w-4 h-4" />
          </a>
          <button 
            onClick={scrollToTop} 
            className="p-2.5 rounded-xl bg-[#66FCF1] text-[#0B0C10] font-bold shadow-lg hover:scale-105 transition-transform"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="mt-8 pt-6 border-t border-[#C5C6C7]/10 text-center text-[11px] text-[#C5C6C7]">
        © {new Date().getFullYear()} customize_ans Studio. All rights reserved. Where Art Meets Fashion, Without Limits.
      </div>
    </footer>
  );
}