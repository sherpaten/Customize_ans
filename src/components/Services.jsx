import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

// Direct Image Imports
import HandprintImg from '../Assets/Gallary/Handprint.jpeg';
import Design1Img from '../Assets/Design/Design1.jpeg';
import Design2Img from '../Assets/Design/Design2.jpeg';
import CustomizeImg from '../Assets/Customize/Customize.jpeg';
import ArtImg from '../Assets/Design/Art.jpeg';
import Customize1Img from '../Assets/Customize/Customize1.jpeg';

export default function Services({ addToCart }) {
  const servicesList = [
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
    },
    {
      id: "srv-4",
      number: "04",
      title: "Customized Accessories",
      description: "Give accessories such as sneakers, tote bags, and other suitable items an artistic identity through personalized designs and creative detailing.",
      badge: "Accessories",
      image: CustomizeImg
    },
    {
      id: "srv-5",
      number: "05",
      title: "Bespoke Design & Personalization",
      description: "Collaborate with us to develop a design from your own ideas, references, inspirations, or concepts. Each project is tailored to your creative vision.",
      badge: "Custom Vision",
      image: ArtImg
    },
    {
      id: "srv-6",
      number: "06",
      title: "Creative Garment Transformation",
      description: "Reimagine existing garments by adding artistic details, refreshing their appearance, or giving them a new creative identity through customization.",
      badge: "Upcycle & Transform",
      image: Customize1Img
    }
  ];

  return (
    <div className="w-full space-y-0">
      
      {/* SECTION 1: Page Header Banner */}
      <section className="w-full bg-[#0B0C10] py-20 px-6 sm:px-12 lg:px-20 border-b border-[#C5C6C7]/10">
        <div className="w-full text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#66FCF1] font-bold">What We Offer</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white">Our Customization Services</h1>
          <p className="text-[#C5C6C7] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            At customize_ans, we transform your ideas into wearable art through creativity, craftsmanship, and personal expression.
          </p>
        </div>
      </section>

      {/* SECTION 2: All Services Grid */}
      <section className="w-full bg-[#1F2833] py-20 px-6 sm:px-12 lg:px-20">
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div key={service.id} className="bg-[#0B0C10] border border-[#C5C6C7]/15 rounded-2xl p-6 flex flex-col justify-between space-y-6 hover:border-[#66FCF1]/50 transition-all shadow-xl group">
              <div className="space-y-4">
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-[#1F2833] relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-[#0B0C10]/90 text-[#66FCF1] text-xs px-3 py-1 rounded-full font-bold border border-[#C5C6C7]/20">
                    {service.badge}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-[#66FCF1] font-mono">{service.number}.</span>
                  <h3 className="text-xl font-bold text-white leading-tight">{service.title}</h3>
                </div>

                <p className="text-[#C5C6C7] text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#C5C6C7]/15 flex items-center justify-between">
                <span className="text-[11px] text-[#45A29E] font-semibold">Bespoke Garment Work</span>
                <button
                  onClick={() => addToCart(service)}
                  className="px-5 py-2.5 rounded-xl bg-[#66FCF1] text-[#0B0C10] font-bold text-xs shadow-md hover:scale-105 transition-transform"
                >
                  Inquire & Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: Service Assurance Banner */}
      <section className="w-full bg-[#0B0C10] py-20 px-6 sm:px-12 lg:px-20 border-t border-[#C5C6C7]/10">
        <div className="w-full grid sm:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <CheckCircle2 className="w-8 h-8 text-[#66FCF1] mx-auto" />
            <h4 className="text-white font-bold text-sm">Customer Garments</h4>
            <p className="text-[#C5C6C7] text-xs">We customize your own provided clothing pieces.</p>
          </div>
          <div className="space-y-2">
            <Sparkles className="w-8 h-8 text-[#66FCF1] mx-auto" />
            <h4 className="text-white font-bold text-sm">Original Artwork</h4>
            <p className="text-[#C5C6C7] text-xs">Hand-painted, embroidered, and patched by hand.</p>
          </div>
          <div className="space-y-2">
            <ArrowRight className="w-8 h-8 text-[#66FCF1] mx-auto" />
            <h4 className="text-white font-bold text-sm">Direct Consultation</h4>
            <p className="text-[#C5C6C7] text-xs">Review design proofs before painting begins.</p>
          </div>
        </div>
      </section>

    </div>
  );
}