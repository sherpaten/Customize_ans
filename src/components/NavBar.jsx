import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0b0f17] text-white sticky top-0 z-50 border-b border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        
        {/* Logo Header using /Logo.jpeg from public folder */}
        <Link to="/" className="flex items-center gap-3" aria-label="customize_ans Art Studio Home">
          <img 
            src="/Logo.jpeg" 
            alt="customize_ans Logo" 
            className="h-12 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="font-serif font-black text-xl tracking-tight text-white leading-none">customize_ans</span>
            <span className="text-[9px] uppercase tracking-widest text-[#40E0D0] font-bold mt-1">ART STUDIO</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-slate-300">
          <Link to="/" className="hover:text-[#40E0D0] transition-colors">Home</Link>
          <Link to="/about" className="hover:text-[#40E0D0] transition-colors">About Us</Link>
          <Link to="/services" className="hover:text-[#40E0D0] transition-colors">Services</Link>
          <Link to="/gallery" className="hover:text-[#40E0D0] transition-colors">Gallery</Link>
          <Link to="/contact" className="hover:text-[#40E0D0] transition-colors">Contact</Link>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle Navigation Menu"
          aria-expanded={isOpen}
          className="md:hidden text-white hover:text-[#40E0D0] focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0b0f17] border-b border-slate-800 px-4 pt-2 pb-6 space-y-3 font-bold text-xs uppercase tracking-widest text-slate-300">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#40E0D0]">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#40E0D0]">About Us</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#40E0D0]">Services</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#40E0D0]">Gallery</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#40E0D0]">Contact</Link>
        </div>
      )}
    </nav>
  );
}
