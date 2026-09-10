"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExpand
} from "react-icons/fa";

const galleryItems = [
  {
    id: 1,
    title: "Grand Banquet Hall & Stage Illumination",
    category: "Banquet Hall",
    src: "/images/facilities/highway_inn/party_reservation.png",
    caption: "Acoustically engineered grand hall configured with custom stage backdrop and crystal chandeliers.",
  },
  {
    id: 2,
    title: "Executive Culinary Buffet Spread",
    category: "Gourmet Catering",
    src: "/images/facilities/highway_inn/buffet_setup.png",
    caption: "Shahi Kacchi Biryani, Polao, Chicken Roast, Rezala, and extensive multi-course culinary lines.",
  },
  {
    id: 3,
    title: "VIP Executive Saloon & Family Dining",
    category: "VIP Dining",
    src: "/images/our-divisions/sampan-highway-inn/vvip-lounge.jpeg",
    caption: "Exclusive air-conditioned private dining rooms for intimate family gatherings and dignitaries.",
  },
  {
    id: 4,
    title: "Highway Inn Complex Night Elevation",
    category: "Exterior & Grounds",
    src: "/images/our-divisions/sampan-highway-inn-party-center/hero.jpg",
    caption: "Illuminated architectural facade with dedicated dual slipways directly on the highway corridor.",
  },
  {
    id: 5,
    title: "Bride & Groom Dressing Suites",
    category: "Prep Suites",
    src: "/images/facilities/highway_inn/all_day_comfort.png",
    caption: "Private climate-controlled dressing suites with full-length mirrors and en-suite facilities.",
  },
  {
    id: 6,
    title: "Central Dining & Refreshment Lounge",
    category: "Fine Dining",
    src: "/images/facilities/highway_inn/dining_area.png",
    caption: "Spacious multi-cuisine dining hall open 24/7 with authentic Bengali, Continental, and BBQ dishes.",
  },
];

export default function PartyCenterPhotoVideoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : galleryItems.length - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex < galleryItems.length - 1 ? lightboxIndex + 1 : 0);
    }
  };

  return (
    <section id="gallery" className="bg-[#faf9f6] py-24 sm:py-32 text-[#1a1a1a]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-amber-600" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-800">
                Photo Gallery
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
              A visual journey <br />
              <span className="text-amber-700">into grand celebrations.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-neutral-600 leading-relaxed">
            Explore our grand banquet stage decorations, royal culinary spreads, private VIP dining saloons, and grounds.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative overflow-hidden rounded-2xl bg-neutral-200 shadow-sm border border-neutral-200/80 cursor-pointer aspect-[4/3] hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-amber-400">
                {item.category}
              </div>

              {/* Expand Icon Badge */}
              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaExpand className="text-xs" />
              </div>

              {/* Hover Dark Overlay with Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                  Click to Expand
                </span>
                <h3 className="text-base font-bold text-white mt-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-50 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <FaTimes className="text-lg" />
          </button>

          {/* Left Nav */}
          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-50 text-white p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors hidden sm:flex items-center justify-center cursor-pointer"
            aria-label="Previous image"
          >
            <FaChevronLeft className="text-xl" />
          </button>

          {/* Right Nav */}
          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-50 text-white p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors hidden sm:flex items-center justify-center cursor-pointer"
            aria-label="Next image"
          >
            <FaChevronRight className="text-xl" />
          </button>

          {/* Lightbox Stage */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[85vh] aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col justify-end bg-black"
          >
            <Image
              src={galleryItems[lightboxIndex].src}
              alt={galleryItems[lightboxIndex].title}
              fill
              className="object-contain"
              sizes="100vw"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 text-white">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                {galleryItems[lightboxIndex].category}
              </span>
              <h3 className="text-lg font-bold mt-1">
                {galleryItems[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                {galleryItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
