import React from 'react';
import { Sparkles, Palette, Heart, CheckCircle2 } from 'lucide-react';

// Relative imports from src/Assets are perfectly fine in Vite
import ArtImg from '../Assets/Design/Art.jpeg';
import CustomizeImg from '../Assets/Customize/Customize.jpeg';

export default function AboutUs() {
  return (
    <div className="w-full space-y-0">
      
      {/* SECTION 1: Page Header Banner (#0B0C10 Base) */}
      <section className="w-full bg-[#0B0C10] py-20 px-6 sm:px-12 lg:px-20 border-b border-[#C5C6C7]/10">
        <div className="w-full text-center space-y-4">
          <span className="text-xs font-mono text-[#66FCF1] tracking-widest uppercase font-bold">ART STUDIO PROFILE</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white">About Us — customize_ans</h1>
          <p className="text-[#66FCF1] font-semibold text-lg sm:text-xl">Where Art Meets Fashion, Without Limits.</p>
        </div>
      </section>

      {/* SECTION 2: Introduction & Main Profile Pic (#1F2833 Slate) */}
      <section className="w-full bg-[#1F2833] py-20 px-6 sm:px-12 lg:px-20">
        <div className="w-full grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#66FCF1] font-bold">Our Philosophy</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-snug">
              Fashion is More Than What You Wear.
            </h2>
            <p className="text-lg text-white font-medium border-l-4 border-[#66FCF1] pl-6 py-3 bg-[#0B0C10]/60 rounded-r-xl leading-relaxed">
              At customize_ans, we believe fashion is a canvas for your imagination, a reflection of your individuality, and a way to express the stories that words sometimes cannot.
            </p>
            <p className="text-[#C5C6C7] text-sm sm:text-base leading-relaxed">
              Born from a passion for art and the freedom to create, customize_ans brings together art and fashion to transform everyday garments into unique, personal expressions. We work with garments provided by our customers, reimagining them through hand painting, patchwork, embroidery, and creative techniques to bring their ideas to life.
            </p>
          </div>

          {/* Profile Pic 1 */}
          <div className="w-full aspect-square rounded-3xl overflow-hidden bg-[#0B0C10] border border-[#C5C6C7]/20 relative shadow-2xl group">
            <img 
              src="/Profile.jpeg" 
              alt="Studio Profile" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent opacity-50" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] text-[#66FCF1] font-mono font-bold uppercase tracking-wider block">Lead Artist & Creator</span>
              <p className="text-sm font-bold text-white">customize_ans Studio</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: Studio Process & Additional Studio Photos (#0B0C10 Deep Black) */}
      <section className="w-full bg-[#0B0C10] py-20 px-6 sm:px-12 lg:px-20 border-t border-[#C5C6C7]/10">
        <div className="w-full space-y-16">
          
          {/* Paragraph Block 2 + Image 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Studio Photo 2 */}
            <div className="order-2 lg:order-1 w-full aspect-[4/3] rounded-3xl overflow-hidden bg-[#1F2833] border border-[#C5C6C7]/20 relative shadow-2xl group">
              <img 
                src={ArtImg} 
                alt="Artistic Concept Design" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent opacity-40" />
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#66FCF1] font-bold">Collaborative Vision</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-snug">
                Every Creation Begins With Your Vision
              </h2>
              <p className="text-[#C5C6C7] text-sm sm:text-base leading-relaxed">
                Whether it is a meaningful illustration, a favourite character, an artistic concept, or an idea that exists only in your imagination, we believe there should be no limits to how you express yourself through what you wear.
              </p>
              <p className="text-[#C5C6C7] text-sm sm:text-base leading-relaxed">
                We value individuality over imitation and creativity over convention. That is why every piece is approached as an opportunity to experiment, explore, and create something distinctive — something that reflects the person behind it.
              </p>
            </div>

          </div>

          {/* Paragraph Block 3 + Image 3 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#66FCF1] font-bold">Transformative Craft</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-snug">
                Giving Garments a Deeper Meaning
              </h2>
              <p className="text-[#C5C6C7] text-sm sm:text-base leading-relaxed">
                For us, customization is not simply about changing a garment. It is about giving it a new identity, a deeper meaning, and a story worth carrying into the world.
              </p>
              <p className="text-[#C5C6C7] text-sm sm:text-base leading-relaxed">
                Your vision. Your story. Your expression. At customize_ans, we invite you to go beyond the ordinary, embrace your imagination, and experience the limitless possibilities of creating and expressing through art and fashion together.
              </p>
            </div>

            {/* Studio Photo 3 */}
            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-[#1F2833] border border-[#C5C6C7]/20 relative shadow-2xl group">
              <img 
                src={CustomizeImg} 
                alt="Custom Garment Detailing" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent opacity-40" />
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: Studio Core Value Highlights (#1F2833 Slate) */}
      <section className="w-full bg-[#1F2833] py-20 px-6 sm:px-12 lg:px-20 border-t border-[#C5C6C7]/10">
        <div className="w-full grid sm:grid-cols-3 gap-8 text-center">
          <div className="p-8 rounded-2xl bg-[#0B0C10] border border-[#C5C6C7]/15 space-y-3">
            <Palette className="w-8 h-8 text-[#66FCF1] mx-auto" />
            <h4 className="text-white font-bold text-base">Art Meets Fashion</h4>
            <p className="text-[#C5C6C7] text-xs">Transforming garments into canvases for your imagination.</p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0B0C10] border border-[#C5C6C7]/15 space-y-3">
            <Sparkles className="w-8 h-8 text-[#66FCF1] mx-auto" />
            <h4 className="text-white font-bold text-base">100% Personal Vision</h4>
            <p className="text-[#C5C6C7] text-xs">Approached as an opportunity to experiment and explore.</p>
          </div>

          <div className="p-8 rounded-2xl bg-[#0B0C10] border border-[#C5C6C7]/15 space-y-3">
            <Heart className="w-8 h-8 text-[#66FCF1] mx-auto" />
            <h4 className="text-white font-bold text-base">Crafted with Passion</h4>
            <p className="text-[#C5C6C7] text-xs">Hand painting, embroidery, and custom techniques.</p>
          </div>
        </div>
      </section>

    </div>
  );
}