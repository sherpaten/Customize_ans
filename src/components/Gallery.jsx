import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

// Gallary Folder Imports
import GallaryImg from '../Assets/Gallary/Gallary.jpeg';
import Gallary1Img from '../Assets/Gallary/Gallary1.jpeg';
import Gallary2Img from '../Assets/Gallary/Gallary2.jpeg';
import Gallary3Img from '../Assets/Gallary/Gallary3.jpeg';
import Gallary4Img from '../Assets/Gallary/Gallary4.jpeg';
import Gallary5Img from '../Assets/Gallary/Gallary5.jpeg';
import Gallary6Img from '../Assets/Gallary/Gallary6.jpeg';
import Gallary7Img from '../Assets/Gallary/Gallary7.jpeg';
import Gallary8Img from '../Assets/Gallary/Gallary8.jpeg';
import HandprintImg from '../Assets/Gallary/Handprint.jpeg';

// Design Folder Imports
import ArtImg from '../Assets/Design/Art.jpeg';
import DesignImg from '../Assets/Design/Design.jpeg';
import Design1Img from '../Assets/Design/Design1.jpeg';
import Design2Img from '../Assets/Design/Design2.jpeg';
import Design3Img from '../Assets/Design/Design3.jpeg';

// Customize Folder Imports
import CustomizeImg from '../Assets/Customize/Customize.jpeg';
import Customize1Img from '../Assets/Customize/Customize1.jpeg';
import Customize2Img from '../Assets/Customize/Customize2.jpeg';
import Customize3Img from '../Assets/Customize/Customize3.jpeg';
import Customize4Img from '../Assets/Customize/Customize4.jpeg';
import Customize5Img from '../Assets/Customize/Customize5.jpeg';

export default function Gallery() {
  const [selectedGalleryImg, setSelectedGalleryImg] = useState(null);
  const [activeTab, setActiveTab] = useState('All');

  const filterTabs = ['All', 'Design', 'Customize'];

  const galleryItems = [
    // --- GALLARY FOLDER ---
    { id: 1, src: HandprintImg, title: "One of a Kind Hand Painted", folder: "Gallary" },
    { id: 2, src: GallaryImg, title: "Custom Handcrafted Garment", folder: "Gallary" },
    { id: 3, src: Gallary1Img, title: "Artistic Patchwork Expression", folder: "Gallary" },
    { id: 4, src: Gallary2Img, title: "Custom Embroidery Artwork", folder: "Gallary" },
    { id: 5, src: Gallary3Img, title: "Bespoke Wearable Art", folder: "Gallary" },
    { id: 6, src: Gallary4Img, title: "Personalized Garment Transformation", folder: "Gallary" },
    { id: 7, src: Gallary5Img, title: "Custom Accessory & Tote", folder: "Gallary" },
    { id: 8, src: Gallary6Img, title: "Handprinted Special Piece", folder: "Gallary" },
    { id: 9, src: Gallary7Img, title: "Custom Illustrative Wear", folder: "Gallary" },
    { id: 10, src: Gallary8Img, title: "Signature Art Concept", folder: "Gallary" },

    // --- DESIGN FOLDER ---
    { id: 11, src: ArtImg, title: "Studio Art Piece", folder: "Design" },
    { id: 12, src: DesignImg, title: "Hand-Painted Design 1", folder: "Design" },
    { id: 13, src: Design1Img, title: "Hand-Painted Design 2", folder: "Design" },
    { id: 14, src: Design2Img, title: "Hand-Painted Design 3", folder: "Design" },
    { id: 15, src: Design3Img, title: "Hand-Painted Design 4", folder: "Design" },

    // --- CUSTOMIZE FOLDER ---
    { id: 16, src: CustomizeImg, title: "Customized Piece 1", folder: "Customize" },
    { id: 17, src: Customize1Img, title: "Customized Piece 2", folder: "Customize" },
    { id: 18, src: Customize2Img, title: "Customized Piece 3", folder: "Customize" },
    { id: 19, src: Customize3Img, title: "Customized Piece 4", folder: "Customize" },
    { id: 20, src: Customize4Img, title: "Customized Piece 5", folder: "Customize" },
    { id: 21, src: Customize5Img, title: "Customized Piece 6", folder: "Customize" }
  ];

  // Filtering Logic based on active navigation tab
  const filteredGallery = activeTab === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.folder === activeTab);

  return (
    <div className="w-full space-y-0">
      
      {/* SECTION 1: Header & Category Controls */}
      <section className="w-full bg-[#0B0C10] py-20 px-6 sm:px-12 lg:px-20 border-b border-[#C5C6C7]/10">
        <div className="w-full text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#66FCF1] font-bold">PORTFOLIO SHOWCASE</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white">Art Studio Gallery</h1>
          <p className="text-[#C5C6C7] text-sm sm:text-base">Explore transformed garments, custom handprints, and bespoke client creations</p>

          {/* Navigation Filter Pills: All | Design | Customize */}
          <div className="flex justify-center gap-3 pt-4">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab
                    ? 'bg-[#66FCF1] text-[#0B0C10] shadow-md'
                    : 'bg-[#1F2833] border border-[#C5C6C7]/20 text-[#C5C6C7] hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Image Portfolio Showcase Grid */}
      <section className="w-full bg-[#1F2833] py-20 px-6 sm:px-12 lg:px-20">
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedGalleryImg(item)}
              className="gallery-card group relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#0B0C10] border border-[#C5C6C7]/15 cursor-pointer shadow-xl"
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10]/95 via-[#0B0C10]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-5 flex flex-col justify-end">
                <span className="text-[10px] text-[#66FCF1] font-bold tracking-wider uppercase">{item.folder}</span>
                <p className="text-sm font-bold text-white mt-1 flex items-center justify-between">
                  <span>{item.title}</span>
                  <ZoomIn className="w-4 h-4 text-[#66FCF1]" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedGalleryImg && (
        <div className="fixed inset-0 z-50 bg-[#0B0C10]/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-4xl w-full bg-[#1F2833] rounded-3xl overflow-hidden border border-[#C5C6C7]/20 relative shadow-2xl">
            <button 
              onClick={() => setSelectedGalleryImg(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#0B0C10]/80 rounded-full text-white hover:bg-[#45A29E] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-square sm:aspect-video w-full bg-[#0B0C10]">
              <img 
                src={selectedGalleryImg.src} 
                alt={selectedGalleryImg.title} 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6">
              <span className="text-xs text-[#66FCF1] font-bold uppercase tracking-wider">{selectedGalleryImg.folder}</span>
              <h3 className="text-2xl font-bold text-white mt-1">{selectedGalleryImg.title}</h3>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}