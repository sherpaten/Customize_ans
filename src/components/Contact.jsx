import React, { useState } from 'react';
import { Mail, Instagram, Clock, Send, Phone, MapPin, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Hand-Painted Garments',
    details: ''
  });

  const servicesList = [
    "Hand-Painted Garments",
    "Patchwork & Appliqué",
    "Customized Embroidery",
    "Customized Accessories",
    "Bespoke Design & Personalization",
    "Creative Garment Transformation"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Studio WhatsApp Number (Nepal Country Code +977)
    const phoneNumber = "9779746492408";

    // Tailored WhatsApp message template for customize_ans Studio
    const message = `✨ *New Custom Garment Inquiry — customize_ans Studio* ✨%0A%0A` +
      `*Client Name:* ${encodeURIComponent(formData.name)}%0A` +
      `*Email Address:* ${encodeURIComponent(formData.email)}%0A` +
      `*Requested Service:* ${encodeURIComponent(formData.service)}%0A%0A` +
      `*Customization Details & Vision:*%0A${encodeURIComponent(formData.details)}%0A%0A` +
      `Looking forward to collaborating on this piece! 🎨🖌️`;

    // Open WhatsApp directly in new tab
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="w-full space-y-0">
      
      {/* SECTION 1: Page Header */}
      <section className="w-full bg-[#0B0C10] py-20 px-6 sm:px-12 lg:px-20 border-b border-[#C5C6C7]/10">
        <div className="w-full text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#66FCF1] font-bold">Start Your Creation</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white">Contact customize_ans Studio</h1>
          <p className="text-[#C5C6C7] text-sm sm:text-base">Have a custom garment idea or question? Send us a direct inquiry via WhatsApp.</p>
        </div>
      </section>

      {/* SECTION 2: Form & Details */}
      <section className="w-full bg-[#1F2833] py-20 px-6 sm:px-12 lg:px-20">
        <div className="w-full grid md:grid-cols-2 gap-12 items-start">
          
          {/* Custom Inquiry Form */}
          <div className="bg-[#0B0C10] border border-[#C5C6C7]/15 p-8 rounded-3xl shadow-xl space-y-6">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-[#66FCF1]" /> Send Inquiry via WhatsApp
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* 1. Name Input */}
              <div>
                <label className="block text-xs font-semibold text-[#C5C6C7] mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full bg-[#1F2833] border border-[#C5C6C7]/20 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#66FCF1] transition-colors" 
                  placeholder="Enter your name" 
                />
              </div>

              {/* 2. Email Input */}
              <div>
                <label className="block text-xs font-semibold text-[#C5C6C7] mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full bg-[#1F2833] border border-[#C5C6C7]/20 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#66FCF1] transition-colors" 
                  placeholder="name@example.com" 
                />
              </div>

              {/* 3. Service Selection Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-[#C5C6C7] mb-2">Select Service Required</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-[#1F2833] border border-[#C5C6C7]/20 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#66FCF1] transition-colors cursor-pointer"
                >
                  {servicesList.map((srv, idx) => (
                    <option key={idx} value={srv} className="bg-[#0B0C10] text-white">
                      {srv}
                    </option>
                  ))}
                </select>
              </div>

              {/* 4. Details / Customization Ideas */}
              <div>
                <label className="block text-xs font-semibold text-[#C5C6C7] mb-2">Customization Details & Ideas</label>
                <textarea 
                  name="details"
                  rows="4" 
                  value={formData.details}
                  onChange={handleChange}
                  required 
                  className="w-full bg-[#1F2833] border border-[#C5C6C7]/20 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#66FCF1] transition-colors" 
                  placeholder="Describe your garment and design vision (e.g., denim jacket with hand-painted character on back)..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 rounded-xl bg-[#66FCF1] text-[#0B0C10] font-black text-sm shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
              >
                Send Inquiry on WhatsApp <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Contact Details & Image Card */}
          <div className="flex flex-col justify-between space-y-8">
            <div className="aspect-video w-full rounded-3xl overflow-hidden bg-[#0B0C10] border border-[#C5C6C7]/15 shadow-xl relative">
              <img 
                src="/contact.jpeg" 
                alt="Customize Ans Studio Contact" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm text-[#C5C6C7] bg-[#0B0C10] p-6 rounded-3xl border border-[#C5C6C7]/15 shadow-xl">
              <p className="flex items-center gap-3"><Instagram className="w-5 h-5 text-[#66FCF1]" /> @customize_ans</p>
              <p className="flex items-center gap-3"><Mail className="w-5 h-5 text-[#66FCF1]" /> customize.ans@gmail.com</p>
              <p className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#66FCF1]" /> +977 9746492408</p>
              <p className="flex items-center gap-3"><MapPin className="w-5 h-5 text-[#66FCF1]" /> Boudha, Kathmandu</p>
              <p className="flex items-center gap-3"><Clock className="w-5 h-5 text-[#66FCF1]" /> Garment Submissions: Mon - Sat</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}