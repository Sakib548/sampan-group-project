"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaPlay,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaLeaf
} from "react-icons/fa";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  src: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Lakeview Luxury Resort Cottages",
    category: "Accommodations",
    src: "/images/our-divisions/sampan-eco-agro/frontview2.jpg",
    caption: "Deluxe lakeside wooden cottages and suites overlooking tranquil waters and landscaped greens.",
  },
  {
    id: 2,
    title: "Resort Reception & Welcome Pavilion",
    category: "Resort Grounds",
    src: "/images/our-divisions/sampan-eco-agro/frontview.jpg",
    caption: "Grand countryside reception and main pavilion welcoming guests to our peaceful retreat enclave.",
  },
  {
    id: 3,
    title: "Cottage Enclave & Scenic Grounds",
    category: "Accommodations",
    src: "/images/our-divisions/sampan-eco-agro/frontview3.jpg",
    caption: "Private eco-cottages surrounded by manicured turf, coconut palms, and peaceful natural horizons.",
  },
  {
    id: 4,
    title: "Shaded Tree Canopies & Resort Walkways",
    category: "Botanical Trails",
    src: "/images/our-divisions/sampan-eco-agro/garden.jpg",
    caption: "Quiet nature trails bordered by mature fruit trees, flowering shrubs, and fresh country air.",
  },
  {
    id: 5,
    title: "Exotic Blossoms & Landscaped Flower Gardens",
    category: "Flower Gardens",
    src: "/images/our-divisions/sampan-eco-agro/flower-garden.jpeg",
    caption: "Vibrant garden blooms and aromatic flora curated across the lakeside relaxation walkways.",
  },
  {
    id: 6,
    title: "Tranquil Freshwater Lake Vista",
    category: "Lake Recreation",
    src: "/images/our-divisions/sampan-eco-agro/lake3.jpg",
    caption: "Wide open freshwater lake horizon ideal for scenic reflection, gentle breezes, and sunset views.",
  },
  {
    id: 7,
    title: "Lakeside Pier & Angling Pavilion",
    category: "Lake & Fishing",
    src: "/images/our-divisions/sampan-eco-agro/lake4.jpg",
    caption: "Dedicated wooden fishing decks and pier points where guests enjoy peaceful recreational angling.",
  },
  {
    id: 8,
    title: "Natural Freshwater Lake & Waterside",
    category: "Lake Recreation",
    src: "/images/our-divisions/sampan-eco-agro/lake.jpg",
    caption: "Serene multi-acre lake with cool breezes and recreational wooden boating for resort guests.",
  },
  {
    id: 9,
    title: "Panoramic Aerial Vista of Resort Enclave",
    category: "Resort Aerial",
    src: "/images/our-divisions/sampan-eco-agro/eco-agro.png",
    caption: "Panoramic bird's-eye view of the resort lake, eco-cottages, botanical grounds, and green horizon.",
  },
];

export default function PhotoVideoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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
    <section id="gallery" className="bg-[#faf9f6] py-24 sm:py-32 text-[#1a1a1a] border-b border-[#173326]/15">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#2f6b45]" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#2f6b45] flex items-center gap-2">
                <FaLeaf className="text-xs" />
                <span>Photo &amp; Video Showcase</span>
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
              A visual journey <br />
              <span className="text-[#2f6b45]">into lakeside eco-resort luxury.</span>
            </h2>
          </div>

          {/* Video Flyover Trigger Button */}
          <div>
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="inline-flex items-center gap-3 rounded-2xl bg-[#173326] hover:bg-[#245235] text-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
            >
              <div className="w-7 h-7 rounded-full bg-[#b9e583] text-[#0c1c14] flex items-center justify-center">
                <FaPlay className="text-[10px] ml-0.5" />
              </div>
              <span>Watch Official Video Tour</span>
            </button>
          </div>
        </div>

        {/* Masonry / Grid Gallery */}
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

              {/* Category Pill Badge */}
              <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#b9e583]">
                {item.category}
              </div>

              {/* Expand Icon Badge */}
              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaExpand className="text-xs" />
              </div>

              {/* Hover Dark Overlay with Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#b9e583]">
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
      {
        lightboxIndex !== null && (
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
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#b9e583]">
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

      {/* Video Modal (YouTube Documentary) */}
      {
        isVideoModalOpen && (
          <div
            onClick={() => setIsVideoModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8 animate-in fade-in duration-200"
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-6 right-6 z-50 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close Video"
            >
              <FaTimes className="text-xl" />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-black"
            >
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/Yp78pXRGWg8?autoplay=1"
                title="Shampan Echo and Agro Resort | Sampan Group"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )
      }
    </section >
  );
}

