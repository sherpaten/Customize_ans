import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#002B45] text-white sticky top-0 z-50 border-b border-[#007F9B]/30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="RipTides Cocktails & Grill Logo" className="h-12 w-auto object-contain" />
          <span className="font-serif font-black text-xl tracking-tight text-[#00A6C7]">RIPTIDES</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-xs font-black uppercase tracking-widest">
          <Link to="/" className="hover:text-[#00A6C7] transition-colors">Home</Link>
          <Link to="/about" className="hover:text-[#00A6C7] transition-colors">About</Link>
          <Link to="/menu" className="hover:text-[#00A6C7] transition-colors">Menu</Link>
          <Link to="/events" className="hover:text-[#00A6C7] transition-colors">Events</Link>
          <Link to="/contact" className="hover:text-[#00A6C7] transition-colors">Contact</Link>
          <Link to="/merchandise" className="hover:text-[#00A6C7] transition-colors">Merchandise</Link>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle navigation menu"
          className="md:hidden text-white hover:text-[#00A6C7] focus:outline-none"
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
        <div className="md:hidden bg-[#002B45] border-b border-slate-700 px-4 pt-2 pb-6 space-y-3 font-black text-xs uppercase tracking-widest">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#00A6C7]">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#00A6C7]">About</Link>
          <Link to="/menu" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#00A6C7]">Menu</Link>
          <Link to="/events" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#00A6C7]">Events</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#00A6C7]">Contact</Link>
          <Link to="/merchandise" onClick={() => setIsOpen(false)} className="block py-2 hover:text-[#00A6C7]">Merchandise</Link>
        </div>
      )}
    </nav>
  );
}
