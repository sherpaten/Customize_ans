import React, { useState } from 'react';
import { ShoppingBag, X, Trash2, Palette } from 'lucide-react';

import WaterRippleCanvas from './components/WaterRippleCanvas';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (service) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === service.id);
      if (existing) {
        return prev.map((item) =>
          item.id === service.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...service, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cart.reduce((a, b) => a + b.qty, 0);

  return (
    <div className="min-h-screen bg-[#0B0C10] text-slate-100 font-sans relative overflow-x-hidden flex flex-col justify-between w-full">
      <WaterRippleCanvas />

      {/* 100% Full Width Navbar */}
      <NavBar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        cartCount={cartCount} 
        setIsCartOpen={setIsCartOpen} 
      />

      {/* Main View Container - 100% Full Width Edge-to-Edge */}
      <main className="w-full flex-1 relative z-20">
        {activeTab === 'home' && <Home setActiveTab={setActiveTab} addToCart={addToCart} />}
        {activeTab === 'services' && <Services addToCart={addToCart} />}
        {activeTab === 'gallery' && <Gallery />}
        {activeTab === 'about' && <AboutUs />}
        {activeTab === 'contact' && <Contact />}
      </main>

      <Footer setActiveTab={setActiveTab} />

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-[#0B0C10]/80 backdrop-blur-sm">
          <div className="w-full max-w-md bg-[#1F2833] h-full border-l border-[#C5C6C7]/20 p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-[#C5C6C7]/20">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Palette className="w-5 h-5 text-[#66FCF1]" /> Selected Customizations
                </h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 space-y-4 max-h-[60vh] overflow-y-auto">
                {cart.length === 0 ? (
                  <p className="text-[#C5C6C7] text-xs text-center py-8">Your service inquiry list is empty. Select a customization service from our catalog!</p>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center bg-[#0B0C10] p-4 rounded-xl border border-[#C5C6C7]/20">
                      <div>
                        <p className="font-bold text-white text-sm">{item.title}</p>
                        <p className="text-xs text-[#66FCF1]">{item.badge}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-rose-400 hover:text-rose-300 p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-[#C5C6C7]/20 space-y-4">
              <button 
                onClick={() => {
                  alert('Thank you! We will contact you regarding your garment submission and custom design.');
                  setCart([]);
                  setIsCartOpen(false);
                }}
                disabled={cart.length === 0}
                className="w-full py-3.5 rounded-xl bg-[#66FCF1] text-[#0B0C10] font-bold shadow-lg disabled:opacity-50 hover:scale-[1.02] transition-transform"
              >
                Submit Service Inquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}