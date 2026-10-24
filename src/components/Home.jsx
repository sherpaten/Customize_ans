import React from 'react';
import { Palette, ArrowRight, Sparkles, Scissors, Shirt, CheckCircle2, HeartHandshake, ShieldCheck, Star, Image as ImageIcon } from 'lucide-react';
import '../styles/home.css';

// Direct Image Imports
// Note: Relative imports from src/Assets are valid. 
// Public folder imports (like /Home pic.jpeg) must be used directly in the src attribute.
import HandprintImg from '../Assets/Gallary/Handprint.jpeg';
import Gallary1Img from '../Assets/Gallary/Gallary1.jpeg';
import Gallary2Img from '../Assets/Gallary/Gallary2.jpeg';
import Gallary3Img from '../Assets/Gallary/Gallary3.jpeg';

import Design1Img from '../Assets/Design/Design1.jpeg';
import Design2Img from '../Assets/Design/Design2.jpeg';

export default function Home({ setActiveTab, addToCart }) {
  const featuredServices = [
    {
      id: "srv-1",
      number: "01",
      title: "Hand-Painted Garments",
      description: "Transform plain garments into wearable artworks through original illustrations, paintings, characters, florals, and artistic concepts.",
      badge: "Popular",
      image: HandprintImg
    },
    {
      id: "srv-2",
      number: "02",
      title: "Patchwork & Appliqué",
      description: "Add dimension, texture, and character to your garments using creative fabric combinations, artistic patches, and appliqué techniques.",
      badge: "Trending",
      image: Design1Img
    },
    {
      id: "srv-3",
      number: "03",
      title: "Customized Embroidery",
      description: "Personalize your garments with embroidery, lettering, motifs, and detailed decorative elements that reflect your style and story.",
      badge: "Bespoke",
      image: Design2Img
    }
  ];

  const galleryPreview = [
    { id: 1, src: HandprintImg, title: "One of a Kind Hand Painted", category: "Hand-Painted" },
    { id: 2, src: Gallary1Img, title: "Artistic Patchwork Expression", category: "Patchwork" },
    { id: 3, src: Gallary2Img, title: "Custom Embroidery Artwork", category: "Embroidery" },
    { id: 4, src: Gallary3Img, title: "Bespoke Wearable Art", category: "Bespoke" }
  ];

  return (
    <div className="w-full space-y-0">
      
     {/* SECTION 1: Full-Bleed Hero Banner */}
      <section className="relative min-h-[650px] sm:min-h-[720px] w-full flex items-center bg-[#0B0C10] overflow-hidden px-6 sm:px-12 lg:px-20 py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Home pic.jpeg" 
            alt="Customize Ans Wearable Art" 
            className="w-full h-full object-cover object-right sm:object-center opacity-85 hover:scale-105 transition-transform duration-700"
          />
          {/* Lighter gradient overlay focused on left text readability while keeping right artwork vibrant */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0C10] via-[#0B0C10]/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10]/80 via-transparent to-transparent z-10" />
        </div>

        <div className="relative z-20 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#66FCF1]/10 border border-[#66FCF1]/30 text-[#66FCF1] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-4 h-4" /> Wearable Art Studio
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
            Where Art Meets Fashion, <br />
            <span className="text-[#66FCF1]">Without Limits.</span>
          </h1>

          <p className="text-[#C5C6C7] text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
            We transform everyday garments provided by our customers into unique, personal expressions through hand painting, patchwork, embroidery, and custom techniques.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => setActiveTab('services')}
              className="px-8 py-4 rounded-xl bg-[#66FCF1] text-[#0B0C10] font-black shadow-xl shadow-[#66FCF1]/20 hover:scale-105 transition-all flex items-center gap-2"
            >
              Explore Services <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => setActiveTab('about')}
              className="px-8 py-4 rounded-xl bg-[#1F2833]/90 hover:bg-[#45A29E]/30 text-white font-semibold border border-[#C5C6C7]/20 backdrop-blur-md transition-all"
            >
              Read Our Story
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 z-20 hidden lg:block max-w-xs bg-[#0B0C10]/90 backdrop-blur-xl border border-[#C5C6C7]/20 p-4 rounded-2xl shadow-2xl">
          <span className="text-[10px] uppercase tracking-widest text-[#66FCF1] font-bold block mb-1">
            Featured Transformation
          </span>
          <p className="text-xs font-bold text-white">
            One of a Kind Hand Painted
          </p>
        </div>
      </section>

      {/* SECTION 2: 3-Step Process */}
      <section className="w-full bg-[#1F2833] py-24 px-6 sm:px-12 lg:px-20 space-y-12 border-t border-[#C5C6C7]/10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono text-[#66FCF1] uppercase tracking-widest font-bold">How It Works</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">3 Steps To Your Custom Piece</h2>
          <p className="text-[#C5C6C7] text-sm sm:text-base">Simple, collaborative, and tailored directly around your vision.</p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: Shirt, step: "01", title: "Provide Your Garment", text: "Bring or ship your denim, jacket, tote, or clothing item directly to our studio." },
            { icon: Palette, step: "02", title: "Collaborate On Vision", text: "Share your concepts, favorite characters, hand painting ideas, or embroidery themes." },
            { icon: Scissors, step: "03", title: "Receive Wearable Art", text: "We meticulously craft your piece into an exclusive wearable expression carrying your story." }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#0B0C10] border border-[#C5C6C7]/15 p-8 rounded-2xl space-y-4 hover:border-[#66FCF1]/50 transition-all group shadow-lg">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#1F2833] flex items-center justify-center text-[#66FCF1] group-hover:bg-[#66FCF1] group-hover:text-[#0B0C10] transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-3xl font-black text-[#45A29E] font-mono">{item.step}</span>
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-[#C5C6C7] text-xs leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: Why Choose Us */}
      <section className="w-full bg-[#0B0C10] py-24 px-6 sm:px-12 lg:px-20 border-t border-[#C5C6C7]/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#66FCF1] font-bold">Why Choose customize_ans</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              Individuality Over Imitation, <br />
              <span className="text-[#45A29E]">Creativity Over Convention.</span>
            </h2>
            <p className="text-[#C5C6C7] text-sm sm:text-base leading-relaxed">
              At customize_ans, we believe fashion is a canvas for your imagination. Every piece is approached as an opportunity to experiment and create something distinctive that reflects the person behind it.
            </p>

            <div className="space-y-3">
              {[
                "Original hand-painted illustrations & character art",
                "Custom embroidery, motifs & detailed decorative lettering",
                "Creative fabric patchwork & appliqué combinations",
                "Garment upcycling & artistic transformation"
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-200 text-xs sm:text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#66FCF1] shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => setActiveTab('about')}
                className="px-6 py-3 rounded-xl bg-[#45A29E] text-[#0B0C10] font-bold text-xs shadow-md hover:bg-[#66FCF1] transition-all flex items-center gap-2 group"
              >
                More About Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-[#1F2833] border border-[#C5C6C7]/15 p-6 rounded-2xl space-y-2">
              <HeartHandshake className="w-8 h-8 text-[#66FCF1] mb-2" />
              <h4 className="text-white font-bold text-sm">Collaborative Vision</h4>
              <p className="text-[#C5C6C7] text-xs">Direct input & design consultation on every garment.</p>
            </div>

            <div className="bg-[#1F2833] border border-[#C5C6C7]/15 p-6 rounded-2xl space-y-2">
              <ShieldCheck className="w-8 h-8 text-[#66FCF1] mb-2" />
              <h4 className="text-white font-bold text-sm">Artistic Craftsmanship</h4>
              <p className="text-[#C5C6C7] text-xs">Premium textile pigments & detailed handwork.</p>
            </div>

            <div className="bg-[#1F2833] border border-[#C5C6C7]/15 p-6 rounded-2xl space-y-2 sm:col-span-2">
              <Star className="w-8 h-8 text-[#66FCF1] mb-2" />
              <h4 className="text-white font-bold text-sm">One-of-a-Kind Expression</h4>
              <p className="text-[#C5C6C7] text-xs">Giving your garments a new identity and a story worth carrying.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Services Showcase */}
      <section className="w-full bg-[#1F2833] py-24 px-6 sm:px-12 lg:px-20 space-y-12 border-t border-[#C5C6C7]/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#66FCF1] font-bold">Customization Offerings</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Our Featured Services</h2>
            <p className="text-[#C5C6C7] text-sm mt-1">Turn your ideas into wearable art with our specialized techniques</p>
          </div>
          <button 
            onClick={() => setActiveTab('services')}
            className="px-6 py-3 rounded-xl bg-[#66FCF1]/10 hover:bg-[#66FCF1] text-[#66FCF1] hover:text-[#0B0C10] border border-[#66FCF1]/30 font-bold text-xs flex items-center gap-2 transition-all shrink-0"
          >
            More Services <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <div key={service.id} className="bg-[#0B0C10] border border-[#C5C6C7]/15 rounded-2xl p-6 flex flex-col justify-between hover:border-[#66FCF1]/40 transition-all shadow-lg">
              <div className="space-y-4">
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-[#1F2833] relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-[#0B0C10]/90 text-[#66FCF1] text-xs px-2.5 py-1 rounded-full font-bold border border-[#C5C6C7]/20">
                    {service.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="text-[#C5C6C7] text-xs leading-relaxed line-clamp-3">{service.description}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#C5C6C7]/15 flex items-center justify-between">
                <span className="text-xs text-[#66FCF1] font-semibold">{service.badge}</span>
                <button 
                  onClick={() => addToCart(service)}
                  className="px-4 py-2 rounded-xl bg-[#66FCF1] text-[#0B0C10] text-xs font-bold transition-all hover:scale-105"
                >
                  Inquire Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: Portfolio Showcase */}
      <section className="w-full bg-[#0B0C10] py-24 px-6 sm:px-12 lg:px-20 border-t border-[#C5C6C7]/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#66FCF1]/10 border border-[#66FCF1]/30 text-[#66FCF1] text-xs font-bold uppercase tracking-wider">
              <ImageIcon className="w-4 h-4" /> Portfolio Showcase
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Explore Transformed Masterpieces</h2>
            <p className="text-[#C5C6C7] text-sm sm:text-base leading-relaxed max-w-lg">
              Step inside our studio portfolio to discover custom hand-painted jackets, intricate embroidery, and artistic garment transformations crafted for our clients.
            </p>
            <button
              onClick={() => setActiveTab('gallery')}
              className="mt-2 px-8 py-3.5 rounded-xl bg-[#66FCF1] text-[#0B0C10] font-bold text-xs shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
            >
              Explore Full Gallery <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {galleryPreview.map((img) => (
              <div 
                key={img.id} 
                onClick={() => setActiveTab('gallery')}
                className="relative aspect-square rounded-2xl overflow-hidden border border-[#C5C6C7]/20 bg-[#1F2833] cursor-pointer group/img transition-all duration-500 hover:scale-105 shadow-md"
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-opacity duration-700 group-hover/img:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent opacity-80 group-hover/img:opacity-40 transition-opacity duration-500" />
                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <span className="text-[10px] text-[#66FCF1] font-bold uppercase">{img.category}</span>
                  <p className="text-xs font-bold text-white truncate">{img.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Call-To-Action Banner */}
      <section className="w-full bg-gradient-to-r from-[#66FCF1] via-[#45A29E] to-[#1F2833] py-20 px-6 sm:px-12 text-center text-[#0B0C10] space-y-6">
        <h2 className="text-3xl sm:text-5xl font-black text-[#0B0C10]">Have a Garment Waiting for a New Story?</h2>
        <p className="text-[#0B0C10]/90 text-sm sm:text-base font-semibold max-w-2xl mx-auto">
          Send us your ideas, references, or concepts today and let's turn your clothing into a custom masterpiece.
        </p>
        <button
          onClick={() => setActiveTab('contact')}
          className="px-9 py-4 rounded-xl bg-[#0B0C10] text-[#66FCF1] font-black text-sm shadow-2xl hover:scale-105 transition-transform"
        >
          Start Your Custom Order Inquiry
        </button>
      </section>

    </div>
  );
}