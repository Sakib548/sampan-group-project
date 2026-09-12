"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaClock,
  FaTimes,
  FaExpand,
  FaPhoneAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const heroBackground = "/images/our-divisions/sampan-sweet-box/DSC00468.JPG";

// Photo Gallery Items (no sweet names, pure visual showcase from folder)
const galleryItems = [
  { id: "g-1", src: "/images/our-divisions/sampan-sweet-box/DSC00468.JPG" },
  { id: "g-2", src: "/images/our-divisions/sampan-sweet-box/DSC00471.JPG" },
  { id: "g-3", src: "/images/our-divisions/sampan-sweet-box/DSC00473.JPG" },
  { id: "g-4", src: "/images/our-divisions/sampan-sweet-box/DSC00482.JPG" },
  { id: "g-5", src: "/images/our-divisions/sampan-sweet-box/Image-2.jpg" },
  { id: "g-6", src: "/images/our-divisions/sampan-sweet-box/Image-1.jpg" },
  { id: "g-7", src: "/images/our-divisions/sampan-sweet-box/Image-3.jpg" },
  { id: "g-8", src: "/images/our-divisions/sampan-sweet-box/Gemini_Generated_Image_8pnlof8pnlof8pnl.jpg" },
  { id: "g-9", src: "/images/our-divisions/sampan-sweet-box/Gemini_Generated_Image_dim99ydim99ydim9.jpg" },
  { id: "g-10", src: "/images/our-divisions/sampan-sweet-box/Gemini_Generated_Image_eehc2deehc2deehc.jpg" },
  { id: "g-11", src: "/images/our-divisions/sampan-sweet-box/Gemini_Generated_Image_gwg9u0gwg9u0gwg9.jpg" },
  { id: "g-12", src: "/images/our-divisions/sampan-sweet-box/Gemini_Generated_Image_w7cnnpw7cnnpw7cn.jpg" },
  { id: "g-13", src: "/images/our-divisions/sampan-sweet-box/Gemini_Generated_Image_uf2kxiuf2kxiuf2k.jpg" },
  { id: "g-14", src: "/images/our-divisions/sampan-sweet-box/Gemini_Generated_Image_utm3xgutm3xgutm3.jpg" },
  { id: "g-15", src: "/images/our-divisions/sampan-sweet-box/Gemini_Generated_Image_zdk3m4zdk3m4zdk3.jpg" },
  { id: "g-16", src: "/images/our-divisions/sampan-sweet-box/Gemini_Generated_Image_3kfk583kfk583kfk.jpg" },
];

// Nearby Spots (Same structure as Sampan Highway Inn)
interface NearbySpot {
  id: string;
  name: string;
  type: string;
  distance: string;
  driveTime: string;
  image: string;
  description: string;
  link: string;
  external?: boolean;
}

const nearbySpots: NearbySpot[] = [
  {
    id: "highway-inn",
    name: "Sampan Highway Inn",
    type: "Hospitality & Leisure",
    distance: "Adjacent (50 m)",
    driveTime: "1 min walk",
    image: "/images/our-divisions/sampan-highway-inn/hero.jpeg",
    description: "Flagship highway hotel, multi-cuisine restaurant, and 24/7 passenger transit rest stop.",
    link: "/our-divisions/hospitality-highway-travel/sampan-highway-inn",
  },
  {
    id: "filling-station",
    name: "Sampan Filling Station",
    type: "Automotive & Fuel",
    distance: "100 m",
    driveTime: "1 min walk",
    image: "/images/our-divisions/sampan-filling-station/hero.jpeg",
    description: "24/7 high-volume highway refuel, octane & diesel station with dedicated heavy vehicle bays.",
    link: "/our-divisions/automotive-fuel-mobility/sampan-filling-station",
  },
  {
    id: "lpg-station",
    name: "Sampan LPG Station",
    type: "Clean Mobility & Fuel",
    distance: "150 m",
    driveTime: "2 min walk",
    image: "/images/our-divisions/lpg-filling-station/hero.jpeg",
    description: "State-of-the-art LPG autogas conversion and rapid dispenser refueling station.",
    link: "/our-divisions/automotive-fuel-mobility/sampan-lpg-filling-station",
  },
  {
    id: "sampan-mart",
    name: "Sampan Mart",
    type: "Retail Super Shop",
    distance: "50 m",
    driveTime: "In Complex",
    image: "/images/facilities/express_highway_inn/4.Sampan-Mart.png",
    description: "24/7 highway retail super shop stocked with travel essentials, groceries, and fresh snacks.",
    link: "/our-divisions/retail-super-shops/sampan-mart",
  },
  {
    id: "mini-sampan",
    name: "Mini Sampan Super Shop",
    type: "Express Convenience",
    distance: "50 m",
    driveTime: "In Complex",
    image: "/images/logos/mini-sampan.png",
    description: "Quick-stop express retail kiosk for instant refreshments and travel accessories.",
    link: "/our-divisions/retail-super-shops/mini-sampan-super-shop",
  },
  {
    id: "white-house",
    name: "Sampan White House & Motel",
    type: "Transit Accommodation",
    distance: "1.2 km",
    driveTime: "2 min drive",
    image: "/images/projects/Sampan-White-House-&-Motel.png",
    description: "A sister hospitality property providing flexible hourly stays, quiet rooms, and private parking.",
    link: "/our-divisions/hospitality-highway-travel/sampan-white-house",
  },
  {
    id: "short-drive-range",
    name: "Sampan Short Drive Range (Coming Soon)",
    type: "Golf & Recreation",
    distance: "Adjacent",
    driveTime: "Coming Soon",
    image: "/images/featuredConcerns/sampan-agro-golf-resort.png",
    description: "Upcoming precision short-game golf practice range and driving bays for golf enthusiasts and highway visitors.",
    link: "/our-divisions/golf-zone/sampan-short-drive-range",
  },
];

export default function SampanSweetBoxClient() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#fcfbf7] text-[#1c140c] selection:bg-[#d97706] selection:text-white">

      {/* ================= 1. HERO SECTION (LESS WORDY & COMPACT) ================= */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#140d06] text-white pt-20 pb-10 sm:pt-24 sm:pb-12 border-b border-amber-900/30">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBackground}
            alt="Sampan Sweet Box"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/72 to-black/45" />

        </div>

        <div className="pointer-events-none absolute top-1/4 left-10 w-80 h-80 bg-amber-500/15 rounded-full blur-[120px] z-0" />
        <div className="pointer-events-none absolute bottom-10 right-10 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] z-0" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-2 pb-6">
          <div className="max-w-3xl space-y-4">

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 border border-amber-500/50 bg-amber-950/70 backdrop-blur-md px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Dhaka-Khulna Highway • Sampan Complex</span>
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-bold tracking-tight text-white leading-[1.02]">
              Sampan <br />
              <span className="text-amber-400 block mt-0.5">
                Sweet Box
              </span>
            </h1>

            {/* Sub-Tagline */}
            <div className="border-l-2 border-amber-500/90 pl-4">
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal max-w-2xl">
                Traditional Bangladeshi sweets, fresh handcrafted mishti, and celebration gift boxes located beside Sampan Highway Inn.
              </p>
            </div>

            {/* Quick Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 font-mono text-xs">
              <button
                onClick={() => scrollTo("gallery")}
                className="group inline-flex items-center justify-center gap-2.5 rounded-none bg-amber-600 hover:bg-amber-500 px-6 py-3 font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-amber-950/40 transition-all duration-300 cursor-pointer"
              >
                <span>View Photos</span>
                <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo("nearby")}
                className="inline-flex items-center justify-center gap-2 rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-6 py-3 font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                <FaMapMarkerAlt className="text-amber-400" />
                <span>Nearby Places</span>
              </button>

              <a
                href="tel:+8801700000000"
                className="inline-flex items-center justify-center gap-2 rounded-none border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 px-5 py-3 font-bold uppercase tracking-[0.18em] text-amber-300 transition-all duration-300"
              >
                <FaPhoneAlt className="text-xs" />
                <span>Contact Outlet</span>
              </a>
            </div>

            {/* Key Quality Highlights */}
            <div className="pt-4 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="border-l-2 border-amber-500 pl-3">
                <p className="text-lg sm:text-xl font-bold text-white">Fresh Daily</p>
                <p className="text-[10px] text-white/60 uppercase font-mono tracking-wider mt-0.5">Handcrafted Mishti</p>
              </div>

              <div className="border-l-2 border-amber-500 pl-3">
                <p className="text-lg sm:text-xl font-bold text-white">Pure Quality</p>
                <p className="text-[10px] text-white/60 uppercase font-mono tracking-wider mt-0.5">Milk Chhana &amp; Ghee</p>
              </div>

              <div className="border-l-2 border-amber-500 pl-3">
                <p className="text-lg sm:text-xl font-bold text-white">Gift Boxes</p>
                <p className="text-[10px] text-white/60 uppercase font-mono tracking-wider mt-0.5">Celebration Hampers</p>
              </div>

              <div className="border-l-2 border-amber-500 pl-3">
                <p className="text-lg sm:text-xl font-bold text-white">Highway Hub</p>
                <p className="text-[10px] text-white/60 uppercase font-mono tracking-wider mt-0.5">Beside Highway Inn</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= 2. PHOTO GALLERY SECTION (NO NAMES, NO FILTER BUTTONS) ================= */}
      <section id="gallery" className="py-20 sm:py-28 bg-[#fbfaf5] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-10 bg-amber-600" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-amber-700">
                  Visual Tour
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Photo <span className="text-amber-700">Gallery.</span>
              </h2>
            </div>
            <p className="text-neutral-600 text-xs sm:text-sm max-w-md leading-relaxed font-normal">
              A visual glimpse of our highway outlet, fresh displays, and celebration gift boxes. Click any image to view in fullscreen.
            </p>
          </div>

          {/* Clean Gallery Grid (No Filter Buttons, No Sweet Names) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxImage(item.src)}
                className={`group relative overflow-hidden bg-neutral-900 border border-neutral-200 hover:border-amber-600 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${index === 0 ? "aspect-[4/3] sm:col-span-2 sm:row-span-2 min-h-[300px]" : "aspect-[4/3]"
                  }`}
              >
                <Image
                  src={item.src}
                  alt="Sampan Sweet Box"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <span className="font-mono text-[11px] font-bold tracking-wider text-amber-300 uppercase">
                    Sampan Sweet Box
                  </span>
                  <div className="h-8 w-8 rounded-full bg-amber-500/30 text-amber-300 border border-amber-400/50 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all">
                    <FaExpand className="text-[10px]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= 3. NEARBY SECTION (SAME AS SAMPAN HIGHWAY INN) ================= */}
      <section id="nearby" className="bg-[#0b100d] py-24 sm:py-32 text-white border-t border-white/10 relative overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-amber-500" />
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-400 font-mono">
                  Regional Surroundings
                </p>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Nearby attractions &amp; <br />
                <span className="text-amber-400">Sampan destinations.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
              Located right within the Sampan Highway Complex, explore our sister hotel, 24/7 fuel stations, super shops, and leisure developments just footsteps away.
            </p>
          </div>

          {/* Nearby Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbySpots.map((spot) => (
              <article
                key={spot.id}
                className="group flex flex-col rounded-3xl overflow-hidden bg-white/[0.04] border border-white/10 hover:border-amber-500/40 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-1.5 shadow-lg"
              >
                {/* Image Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <Image
                    src={spot.image}
                    alt={spot.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Distance Chip */}
                  <div className="absolute top-3.5 right-3.5 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-bold text-amber-400 flex items-center gap-1.5 font-mono">
                    <FaMapMarkerAlt className="text-[10px]" />
                    <span>{spot.distance}</span>
                  </div>

                  {/* Drive Time Chip */}
                  <div className="absolute bottom-3.5 left-3.5 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-neutral-900 flex items-center gap-1 font-mono">
                    <FaClock className="text-[9px] text-amber-700" />
                    <span>{spot.driveTime}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1 font-mono">
                    {spot.type}
                  </span>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {spot.name}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed flex-1 font-normal">
                    {spot.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    {spot.external ? (
                      <a
                        href={spot.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors font-mono"
                      >
                        <span>Explore Directions</span>
                        <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    ) : (
                      <Link
                        href={spot.link}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors font-mono"
                      >
                        <span>Discover Property</span>
                        <span>→</span>
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* ================= 4. FULLSCREEN LIGHTBOX MODAL ================= */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 text-2xl z-50 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <FaTimes />
          </button>
          <div
            className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage}
              alt="Sampan Sweet Box"
              width={1600}
              height={1000}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl"
            />
          </div>
        </div>
      )}

    </main>
  );
}
