"use client";

import { useState } from "react";
import Image from "next/image";
import {
<<<<<<< HEAD
<<<<<<< HEAD
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExpand
} from "react-icons/fa";

const galleryItems = [
  {
    id: 1,
    title: "Deluxe Motel Rest Suite",
    category: "Suites & Rooms",
    src: "/images/our-divisions/sampan-white-house/bed.jpg",
    caption: "Quiet, comfortable deluxe motel rooms with plush bedding and climate control.",
  },
  {
    id: 2,
    title: "Conference & Meeting Lounge",
    category: "Meetings & Events",
    src: "/images/our-divisions/sampan-white-house/meeting.jpg",
    caption: "Fully equipped executive meeting and conference facility for business gatherings.",
  },
  {
    id: 3,
    title: "Highway Veranda Dining & Restaurant",
    category: "Dining",
    src: "/images/our-divisions/sampan-white-house/dining.jpg",
    caption: "Warm ambiance and multi-cuisine culinary delights prepared 24/7.",
=======
  FaCamera,
  FaPlay,
  FaExpand,
=======
>>>>>>> de9040fe791a6f8f110bc0bc01949724904445ef
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExpand
} from "react-icons/fa";

const galleryItems = [
  {
    id: 1,
    title: "Deluxe Motel Rest Suite",
    category: "Suites & Rooms",
    src: "/images/our-divisions/sampan-white-house/bed.jpg",
    caption: "Quiet, comfortable deluxe motel rooms with plush bedding and climate control.",
  },
  {
    id: 2,
    title: "Conference & Meeting Lounge",
    category: "Meetings & Events",
    src: "/images/our-divisions/sampan-white-house/meeting.jpg",
    caption: "Fully equipped executive meeting and conference facility for business gatherings.",
  },
  {
    id: 3,
<<<<<<< HEAD
    title: "Deluxe  Motel Bedding",
    category: "Motel Suites",
    image: "/images/concerns/highway-motel.png",
    type: "photo",
    aspect: "square",
  },
  // {
  //   id: 4,
  //   title: "Garden Restaurant & Outdoor Dining",
  //   category: "Dining & Veranda",
  //   image: "/images/facilities/highway_inn/all_day_comfort.png",
  //   type: "photo",
  //   aspect: "landscape",
  // },
  {
    id: 5,
    title: "Official Corporate Offsite Setup",
    category: "White Hall Banquet",
    image: "/images/facilities/highway_inn/Official-Outing.png",
    type: "photo",
    aspect: "square",
  },
  {
    id: 6,
    title: "DC Fast EV Charging & Gated Compound",
    category: "Compound & Aerial",
    image: "/images/facilities/express_highway_inn/6.EV-Car-Charging.png",
    type: "photo",
    aspect: "landscape",
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
=======
    title: "Highway Veranda Dining & Restaurant",
    category: "Dining",
    src: "/images/our-divisions/sampan-white-house/dining.jpg",
    caption: "Warm ambiance and multi-cuisine culinary delights prepared 24/7.",
>>>>>>> de9040fe791a6f8f110bc0bc01949724904445ef
  },
];

export default function PhotoVideoGallery() {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredItems.length) % filteredItems.length);
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
=======
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
>>>>>>> de9040fe791a6f8f110bc0bc01949724904445ef
    }
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <section id="gallery" className="bg-[#faf9f6] py-24 sm:py-32 text-[#1a1a1a]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#ca8a04]" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ca8a04]">
                Photo Gallery
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
              Visual glimpses <br />
              <span className="text-[#ca8a04]">of White House &amp; Motel.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-neutral-600 leading-relaxed">
            Take a visual tour through our comfortable motel suites, meeting facilities, and welcoming dining areas.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative overflow-hidden rounded-2xl bg-neutral-200 shadow-sm border border-neutral-200/80 cursor-pointer aspect-[4/3] hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <Image
                src={item.src}
=======
    <section id="gallery" className="bg-white py-24 sm:py-32 text-neutral-950 border-b border-neutral-200 relative overflow-hidden">
=======
    <section id="gallery" className="bg-[#faf9f6] py-24 sm:py-32 text-[#1a1a1a]">
>>>>>>> de9040fe791a6f8f110bc0bc01949724904445ef
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#ca8a04]" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ca8a04]">
                Photo Gallery
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111111] leading-tight">
              Visual glimpses <br />
              <span className="text-[#ca8a04]">of White House &amp; Motel.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-neutral-600 leading-relaxed">
            Take a visual tour through our comfortable motel suites, meeting facilities, and welcoming dining areas.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative overflow-hidden rounded-2xl bg-neutral-200 shadow-sm border border-neutral-200/80 cursor-pointer aspect-[4/3] hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <Image
<<<<<<< HEAD
                src={item.image}
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
=======
                src={item.src}
>>>>>>> de9040fe791a6f8f110bc0bc01949724904445ef
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
<<<<<<< HEAD
<<<<<<< HEAD

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#e8b84b]">
                {item.category}
              </div>

              {/* Expand Icon Badge */}
              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaExpand className="text-xs" />
              </div>

              {/* Hover Dark Overlay with Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#e8b84b]">
                  Click to Expand
                </span>
                <h3 className="text-base font-bold text-white mt-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 mt-1 line-clamp-2">
                  {item.caption}
                </p>
=======
              <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#e8b84b] transition-all duration-500 group-hover:w-full z-10" />
=======
>>>>>>> de9040fe791a6f8f110bc0bc01949724904445ef

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#e8b84b]">
                {item.category}
              </div>

              {/* Expand Icon Badge */}
              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaExpand className="text-xs" />
              </div>

              {/* Hover Dark Overlay with Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#e8b84b]">
                  Click to Expand
                </span>
<<<<<<< HEAD

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#e8b84b] font-bold">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">
                    {item.title}
                  </h3>
                </div>
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
=======
                <h3 className="text-base font-bold text-white mt-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-300 mt-1 line-clamp-2">
                  {item.caption}
                </p>
>>>>>>> de9040fe791a6f8f110bc0bc01949724904445ef
              </div>
            </div>
          ))}
        </div>

<<<<<<< HEAD
<<<<<<< HEAD
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
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#e8b84b]">
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
=======
        {/* Fullscreen Lightbox Modal */}
        {selectedImageIndex !== null && (
          <div
            onClick={() => setSelectedImageIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-in fade-in"
          >
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 text-white p-3 rounded-none bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <FaTimes className="text-lg" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white p-3 rounded-none bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <FaChevronLeft className="text-lg" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white p-3 rounded-none bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <FaChevronRight className="text-lg" />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[85vh] aspect-[16/10] rounded-none overflow-hidden border border-white/20 shadow-2xl bg-black"
            >
              <Image
                src={filteredItems[selectedImageIndex].image}
                alt={filteredItems[selectedImageIndex].title}
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-none border border-white/10 text-white">
                <p className="text-sm font-bold">{filteredItems[selectedImageIndex].title}</p>
                <p className="text-xs text-[#e8b84b] font-mono">{filteredItems[selectedImageIndex].category}</p>
              </div>
            </div>
          </div>
        )}

        {/* Video Film Preview Modal */}
        {isVideoModalOpen && (
          <div
            onClick={() => setIsVideoModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-in fade-in"
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-6 right-6 text-white p-3 rounded-none bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <FaTimes className="text-lg" />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full aspect-video rounded-none overflow-hidden border border-white/20 shadow-2xl bg-neutral-950 flex items-center justify-center p-8 text-center"
            >
              <div>
                <div className="w-16 h-16 rounded-none bg-[#e8b84b] text-neutral-950 flex items-center justify-center text-2xl mx-auto mb-4">
                  <FaPlay />
                </div>
                <h3 className="text-2xl font-bold text-white">Sampan White House Drone Film</h3>
                <p className="text-sm text-neutral-400 mt-2 max-w-md mx-auto">
                  Cinematic 4K aerial overview of the highway frontage, White Hall banquet hall, "" suites, and garden dining.
                </p>
                <p className="font-mono text-xs text-[#e8b84b] mt-4 uppercase tracking-wider">
                  Full 4K Video Streaming Ready
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
=======
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
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#e8b84b]">
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
>>>>>>> de9040fe791a6f8f110bc0bc01949724904445ef
    </section>
  );
}
