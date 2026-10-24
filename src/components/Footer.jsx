import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0b0f17] text-white border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img 
              src="/Logo.jpeg" 
              alt="customize_ans Logo" 
              className="h-10 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-serif font-black text-lg text-white">customize_ans</span>
              <span className="text-[8px] uppercase tracking-widest text-[#40E0D0] font-bold">ART STUDIO</span>
            </div>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Wearable Art Studio � Transforming everyday garments into unique personal expressions.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-4">Navigation</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li><Link to="/" className="hover:text-[#40E0D0]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#40E0D0]">About Us</Link></li>
            <li><Link to="/services" className="hover:text-[#40E0D0]">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-[#40E0D0]">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-[#40E0D0]">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-4">Studio Location</h4>
          <p className="text-xs text-slate-400">Custom Wearable Art Studio</p>
          <p className="text-xs text-slate-400">Boudha, Kathmandu</p>
          <p className="text-xs text-slate-400">Phone: +977 9746492408</p>
          <p className="text-xs text-slate-400">Email: customize.ans@gmail.com</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-8 border-t border-slate-800/80 text-center text-xs text-slate-500">
        � {new Date().getFullYear()} customize_ans. All rights reserved.
      </div>
    </footer>
  );
}
