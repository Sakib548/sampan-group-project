"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaGolfBall,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRoute,
  FaExpand,
  FaTimes,
  FaCheck,
  FaBullseye,
  FaClock,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

// --- Hero & Gallery Images (Distinct from Golf Academy) ---
const heroBackground = "/images/our-divisions/sampan-golf-academy/range-hero.jpeg";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "sdr-1",
    title: "Tee Line & Target Fairway",
    category: "Driving Range",
    image: "/images/our-divisions/sampan-golf-academy/SM147258.jpg",
    description: "Spacious driving bays overlooking calibrated distance target markers.",
  },
  {
    id: "sdr-2",
    title: "Club Sets & Practice Gear",
    category: "Equipment",
    image: "/images/our-divisions/sampan-golf-academy/golf-club-sunshine-bags.jpg",
    description: "Quality clubs and range balls ready for casual sessions and focused drills.",
  },
  {
    id: "sdr-3",
    title: "Target Greens & Fairway Depth",
    category: "Practice Greens",
    image: "/images/our-divisions/sampan-golf-academy/SM139600.jpg",
    description: "Short game target greens designed to dial in wedge accuracy and iron distance control.",
  },
  {
    id: "sdr-4",
    title: "Bays & Approach View",
    category: "Practice Bays",
    image: "/images/our-divisions/sampan-golf-academy/SM147259.jpg",
    description: "Comfortable practice stands suitable for highway travelers taking a recreational pause.",
  },
  {
    id: "sdr-5",
    title: "Grounds & Landscape",
    category: "Fairway Views",
    image: "/images/our-divisions/sampan-golf-academy/golf-cart-golf-club-car-zbeautiful-golf-course.jpg",
    description: "Open green fairway environment situated directly beside the highway transit complex.",
  },
  {
    id: "sdr-6",
    title: "Clubhouse & Leisure Vista",
    category: "Atmosphere",
    image: "/images/our-divisions/sampan-golf-academy/scenic-villa-overlooking-golf-course-(2).jpg",
    description: "Peaceful countryside surroundings combining sports recreation with highway hospitality.",
  },
];

// Nearby Spots — Exactly matching Sampan Highway Inn's location hub
interface NearbySpot {
  id: string;
  name: string;
  type: string;
  distance: string;
  image: string;
  description: string;
  link: string;
}

const nearbySpots: NearbySpot[] = [
  {
    id: "highway-inn",
    name: "Sampan Highway Inn",
    type: "Hospitality & Dining",
    distance: "Adjacent (50 m)",
    image: "/images/our-divisions/sampan-highway-inn/heromain2.jpg",
    description: "Flagship highway transit hub featuring VVIP suites, 24/7 restaurant, and traveler amenities.",
    link: "/our-divisions/hospitality-highway-travel/sampan-highway-inn",
  },
  {
    id: "sweet-box",
    name: "Sampan Sweet Box",
    type: "Artisanal Sweets",
    distance: "Adjacent (50 m)",
    image: "/images/our-divisions/sampan-sweet-box/Gemini_Generated_Image_3kfk583kfk583kfk.jpg",
    description: "Traditional handcrafted mishti, premium Bengali sweets, and celebration gift boxes.",
    link: "/our-divisions/retail-super-shops/sampan-sweet-box",
  },
  {
    id: "filling-station",
    name: "Sampan Filling Station",
    type: "Automotive & Fuel",
    distance: "100 m",
    image: "/images/our-divisions/sampan-filling-station/hero.jpeg",
    description: "24/7 high-volume highway refuel station with octane, diesel, and vehicle care bays.",
    link: "/our-divisions/automotive-fuel-mobility/sampan-filling-station",
  },
  {
    id: "sampan-mart",
    name: "Sampan Mart",
    type: "Super Shop & Essentials",
    distance: "In Complex",
    image: "/images/facilities/express_highway_inn/4.Sampan-Mart.png",
    description: "24/7 highway retail shop stocked with travel snacks, beverages, and daily necessities.",
    link: "/our-divisions/retail-super-shops/sampan-mart",
  },
  {
    id: "lpg-station",
    name: "Sampan LPG Station",
    type: "Clean Fuel",
    distance: "150 m",
    image: "/images/our-divisions/lpg-filling-station/hero.jpeg",
    description: "State-of-the-art autogas refueling dispenser for eco-conscious highway motorists.",
    link: "/our-divisions/automotive-fuel-mobility/sampan-lpg-filling-station",
  },
  {
    id: "white-house",
    name: "Sampan White House & Motel",
    type: "Transit Accommodation",
    distance: "1.2 km",
    image: "/images/projects/Sampan-White-House-&-Motel.png",
    description: "Sister hospitality motel offering comfortable hourly transit stays and private parking.",
    link: "/our-divisions/hospitality-highway-travel/sampan-white-house",
  },
];

export default function SampanShortDriveRangeClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-[#f8faf6] text-[#183b2b] selection:bg-emerald-700 selection:text-white">

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#07150d] text-white pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-white/10">
        {/* Real Background Image with Dark Nature Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBackground}
            alt="Sampan Short Drive Range Fairway"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-75"
          />
          {/* Dual-layer dark gradient for optimal contrast and readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/65 to-black/30" />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-[#07150d] via-transparent to-black/50" /> */}
        </div>

        {/* Ambient Warm Glow */}
        <div className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-none blur-[120px] z-0" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-2 pb-8 lg:pb-12">
          <div className="max-w-4xl space-y-5 sm:space-y-6">

            {/* Coming Soon Square Badge */}
            {/* <div className="inline-flex items-center gap-2.5 border border-amber-400/40 bg-amber-950/50 backdrop-blur-md px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-amber-300 rounded-none">
              <FaClock className="text-xs text-amber-400" />
              <span>Coming Soon • Beside Sampan Highway Inn</span>
            </div> */}

            {/* Headline */}
            <h1 className="text-[clamp(2.4rem,4.8vw,4.2rem)] font-bold tracking-tight text-white leading-[0.98]">
              Sampan <br />
              <span className="text-emerald-400 block mt-1">
                Short Drive Range
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl font-light tracking-wide border-l-2 border-emerald-400/80 pl-4">
              A dedicated golf practice driving range designed for precision short game, iron play, and relaxing recreation. Conveniently located right beside Sampan Highway Inn on the Dhaka–Khulna Expressway.
            </p>

            {/* Square Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#overview"
                className="group inline-flex items-center justify-center gap-2 rounded-none bg-emerald-600 hover:bg-emerald-500 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-lg shadow-emerald-950/40 cursor-pointer"
              >
                <span>Explore Range</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#gallery"
                className="inline-flex items-center justify-center rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                View Gallery
              </Link>
            </div>

            {/* Quick Metrics (Square Cards) */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Practice</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Short Game &amp; Iron Play</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-emerald-400 uppercase tracking-wider">Highway Stop</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Beside Highway Inn</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">All Skill Levels</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Casual &amp; Golfers</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Location</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">KM 74, Dhaka–Khulna Hwy</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. OVERVIEW & ABOUT ================= */}
      <section id="overview" className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#f8faf6] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-emerald-600" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-700">
              Range Overview
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Dial in your swing. <br />
                <span className="text-emerald-700">Right along the highway.</span>
              </h2>

              <p className="mt-6 text-sm sm:text-base text-neutral-600 leading-relaxed">
                Sampan Short Drive Range provides an accessible, enjoyable golf practice environment situated directly beside the Sampan Highway Inn transit hub. Designed for enthusiasts seeking to practice their short game as well as long-distance travelers looking for an active, refreshing pause.
              </p>

              <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                Featuring open-air driving bays and target practice areas, it offers an effortless way to pick up a club, practice rhythm and ball striking, and enjoy outdoor sports recreation during your journey.
              </p>

              <div className="mt-8">
                <Link
                  href="#location"
                  className="inline-flex items-center gap-2 rounded-none bg-[#183b2b] hover:bg-emerald-800 text-white px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] transition-colors shadow-sm cursor-pointer"
                >
                  <span>Location &amp; Access</span>
                  <FiArrowRight className="text-xs" />
                </Link>
              </div>
            </div>

            {/* 3 Square Feature Highlights */}
            <div className="grid gap-4 sm:grid-cols-1">
              <div className="border border-neutral-200 bg-white p-6 rounded-none shadow-sm hover:border-emerald-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 rounded-none">
                    <FaBullseye className="text-base" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-950">
                      Target Greens &amp; Wedge Practice
                    </h3>
                    <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                      Calibrated target zones designed to help refine distance control, iron consistency, and short-game precision.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-neutral-200 bg-white p-6 rounded-none shadow-sm hover:border-emerald-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 rounded-none">
                    <FaGolfBall className="text-base" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-950">
                      Comfortable Practice Bays
                    </h3>
                    <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                      Well-maintained open-air driving stalls equipped with quality turf mats and practice equipment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-neutral-200 bg-white p-6 rounded-none shadow-sm hover:border-emerald-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 rounded-none">
                    <FaRoute className="text-base" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-950">
                      Convenient Highway Transit Stop
                    </h3>
                    <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                      Located adjacent to Sampan Highway Inn, allowing travelers to combine dining, rest, and recreational golf.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 3. PHOTO GALLERY SHOWCASE ================= */}
      <section id="gallery" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-10 bg-emerald-600" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-700">
                  Visual Showcase
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Range grounds. <br />
                <span className="text-emerald-700">Fairway perspectives.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-500 leading-relaxed">
              Curated views of practice bays, fairway targets, and the open-air golfing landscape.
            </p>
          </div>

          {/* Square Image Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <article
                key={item.id}
                onClick={() => setSelectedImage(item.image)}
                className={`group relative flex flex-col h-full rounded-none overflow-hidden bg-white border border-neutral-200 hover:border-emerald-600 transition-all duration-300 hover:shadow-md cursor-pointer ${index === 0
                  ? "sm:col-span-2 lg:col-span-2 aspect-[16/10] min-h-[340px]"
                  : index === 1
                    ? "sm:col-span-2 lg:col-span-1 min-h-[340px]"
                    : "aspect-[16/10] min-h-[280px]"
                  }`}
              >
                {/* Top Green Accent Line on Hover */}
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-emerald-600 transition-all duration-500 group-hover:w-full z-20" />

                <div className="relative w-full flex-1 min-h-[200px] overflow-hidden bg-neutral-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-6 z-10">
                    <div className="flex items-end justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-400 block mb-1">
                          {item.category}
                        </span>
                        <h4 className="text-white text-sm sm:text-base font-bold leading-snug truncate">
                          {item.title}
                        </h4>
                        <p className="text-xs text-neutral-300 mt-1 line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                      <span className="shrink-0 inline-flex items-center gap-1.5 rounded-none bg-white text-neutral-950 font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 font-bold shadow-md group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <FaExpand className="text-[10px]" />
                        <span>View</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Lower label bar */}
                <div className="p-4 bg-white border-t border-neutral-100 flex items-center justify-between shrink-0 mt-auto">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-emerald-700 font-bold block">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-neutral-900 truncate">
                      {item.title}
                    </h4>
                  </div>
                  <FaExpand className="text-xs text-neutral-400 group-hover:text-emerald-600 transition-colors" />
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 4. LOCATION & HIGHWAY ACCESS ================= */}
      <section id="location" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15">
        <div className="mx-auto max-w-[1440px]">

          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 border border-emerald-600/40 bg-emerald-600/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-800 mb-4 rounded-none">
              <FaMapMarkerAlt className="text-xs text-emerald-700" />
              <span>Location Details</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              Range Location &amp; Access
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Situated directly beside Sampan Highway Inn on the Dhaka–Khulna Expressway corridor (KM 74), offering seamless vehicular entry and departure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Physical Address */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 rounded-none">
                <FaMapMarkerAlt className="text-lg" />
              </div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                Physical Address
              </span>
              <h3 className="text-xl font-bold text-neutral-950">
                Beside Sampan Highway Inn
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-mono">
                KM 74, Dhaka–Khulna Highway <br />
                Bangladesh
              </p>
              <p className="pt-2 text-[11px] text-neutral-400 font-mono border-t border-neutral-100">
                Direct highway access • Beside Highway Inn Complex
              </p>
            </div>

            {/* Card 2: Contact & Inquiries */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 rounded-none">
                <FaPhoneAlt className="text-base" />
              </div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                Direct Contact
              </span>
              <h3 className="text-xl font-bold text-neutral-950">
                Inquiries &amp; Information
              </h3>
              <div className="space-y-3 pt-1 text-sm text-neutral-700">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-neutral-400">Phone:</span>
                  <a href="tel:+8801929918408" className="font-mono font-bold text-emerald-700 hover:underline">
                    +880 1929-918408
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-neutral-400">Concern:</span>
                  <span className="font-mono text-xs font-semibold text-neutral-900">
                    Sampan Group Golf Zone
                  </span>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href="tel:+8801929918408"
                  className="inline-flex items-center gap-2 rounded-none bg-emerald-700 hover:bg-emerald-600 text-white px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <FaPhoneAlt className="text-[10px]" />
                  <span>Call For Inquiry</span>
                </a>
              </div>
            </div>

            {/* Card 3: Route & Corridor */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 rounded-none">
                <FaRoute className="text-lg" />
              </div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                Expressway Route
              </span>
              <h3 className="text-xl font-bold text-neutral-950">
                Padma Bridge Corridor
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Smooth highway connectivity from Dhaka across the Padma Bridge through Bhanga Interchange directly along the national highway.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs text-emerald-700 font-mono font-bold">
                <FaCheck className="text-[10px]" />
                <span>Zero Detours • Direct Ramp Access</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 5. NEARBY AT THIS LOCATION (SAME AS SAMPAN HIGHWAY INN) ================= */}
      <section className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#f8faf6] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-emerald-600" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-700">
              Nearby At This Location
            </span>
          </div>

          <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
            Integrated Highway Hub.
          </h2>

          <p className="mb-12 max-w-2xl text-xs sm:text-sm text-neutral-500">
            Sampan Short Drive Range is part of the integrated Sampan Highway Inn destination complex, featuring dining, accommodation, shopping, and refueling.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {nearbySpots.map((spot) => (
              <div
                key={spot.id}
                className="group flex flex-col justify-between border border-neutral-200 bg-white p-6 rounded-none shadow-sm hover:border-emerald-600 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="relative w-full aspect-[16/9] mb-4 overflow-hidden rounded-none bg-neutral-100 border border-neutral-100">
                    <Image
                      src={spot.image}
                      alt={spot.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                    {spot.type}
                    {/* • {spot.distance} */}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-950 group-hover:text-emerald-700 transition-colors">
                    {spot.name}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                    {spot.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <Link
                    href={spot.link}
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold text-emerald-800 hover:text-emerald-600 uppercase tracking-wider transition-colors"
                  >
                    <span>Visit Concern</span>
                    <FiArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal (Square Style) */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-in fade-in"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white p-3 rounded-none bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <FaTimes className="text-lg" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[85vh] aspect-[16/10] rounded-none overflow-hidden border border-white/20 shadow-2xl bg-black"
          >
            <Image
              src={selectedImage}
              alt="Sampan Short Drive Range Preview"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* ================= 6. FOOTER ================= */}
      <footer className="bg-white border-t border-neutral-200 px-6 py-12 sm:px-10 lg:px-16 text-neutral-600">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-neutral-950 mb-3">
                Sampan Short Drive Range
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-md">
                Upcoming short game and golf driving practice bays located beside Sampan Highway Inn on the Dhaka–Khulna Highway. Ideal for active transit breaks and sports enthusiasts.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">
                Quick Navigation
              </h4>
              <ul className="space-y-2.5 text-xs font-mono">
                <li>
                  <Link href="#overview" className="hover:text-emerald-700 transition-colors">
                    Range Overview
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="hover:text-emerald-700 transition-colors">
                    Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#location" className="hover:text-emerald-700 transition-colors">
                    Location &amp; Access
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">
                Contact
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-500 font-mono">
                <li>Beside Sampan Highway Inn</li>
                <li>KM 74, Dhaka–Khulna Highway</li>
                <li>+880 1929-918408</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-mono">
            <p>
              © {new Date().getFullYear()} Sampan Short Drive Range. A Sampan Group Venture.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-emerald-700 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-emerald-700 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
