import React, { useState } from 'react';
import { Palette, ShoppingBag, Menu, X } from 'lucide-react';

export default function NavBar({ activeTab, setActiveTab, cartCount, setIsCartOpen }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0B0C10]/90 backdrop-blur-md border-b border-[#C5C6C7]/10">
      <div className="w-full px-6 sm:px-12 lg:px-16 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <div 
          onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#66FCF1] flex items-center justify-center text-[#0B0C10] shadow-lg group-hover:scale-105 transition-transform overflow-hidden">
            <img src="/Logo.jpeg" alt="Logo" />
          </div>
          <div>
            <span className="text-xl font-black tracking-wider text-white font-mono">
              customize_ans
            </span>
            <p className="text-[10px] text-[#66FCF1] font-bold tracking-widest uppercase">
              ART STUDIO
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#1F2833]/80 p-1.5 rounded-full border border-[#C5C6C7]/15">
          {navItems.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-[#66FCF1] text-[#0B0C10] font-bold shadow-md'
                  : 'text-[#C5C6C7] hover:text-white hover:bg-[#45A29E]/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 rounded-xl bg-[#1F2833] hover:bg-[#45A29E]/30 border border-[#C5C6C7]/20 text-white transition-all"
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5 text-[#66FCF1]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#66FCF1] text-[#0B0C10] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-[#1F2833] border border-[#C5C6C7]/20 text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1F2833] border-b border-[#C5C6C7]/20 px-6 py-4 space-y-2">
          {navItems.map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-[#66FCF1] text-[#0B0C10] font-bold'
                  : 'text-[#C5C6C7] hover:bg-[#0B0C10]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}