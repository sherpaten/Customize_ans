import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#002B45] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="RipTides Cocktails & Grill Logo" className="h-10 w-auto object-contain" />
            <h3 className="text-xl font-serif font-black text-[#00A6C7]">RIPTIDES COCKTAILS & GRILL</h3>
          </div>
          <p className="text-slate-300 text-sm font-medium">
            168 East Montauk Highway<br />
            Lindenhurst, NY 11757
          </p>
          <p className="text-slate-300 text-sm font-medium mt-2">
            Phone: <a href="tel:+16315053200" className="text-[#00A6C7] hover:underline">(631) 505-3200</a>
          </p>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase text-slate-400 tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm font-medium">
            <li><Link to="/" className="hover:text-[#00A6C7]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#00A6C7]">About</Link></li>
            <li><Link to="/menu" className="hover:text-[#00A6C7]">Menu</Link></li>
            <li><Link to="/events" className="hover:text-[#00A6C7]">Events</Link></li>
            <li><Link to="/contact" className="hover:text-[#00A6C7]">Contact</Link></li>
            <li><Link to="/merchandise" className="hover:text-[#00A6C7]">Merchandise</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-black uppercase text-slate-400 tracking-wider mb-4">Hours</h4>
          <p className="text-slate-300 text-sm font-medium">Mon - Sun: 11:30 AM - Late</p>
        </div>
      </div>
      <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-400 font-medium">
        © {new Date().getFullYear()} RipTides Cocktails & Grill. All rights reserved.
      </div>
    </footer>
  );
}
