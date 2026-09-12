"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaBolt,
  FaCar,
  FaUtensils,
  FaBed,
  FaSpa,
  FaSwimmer,
  FaMapMarkerAlt,
  FaCheck,
  FaStar,
  FaShieldAlt,
  FaClock,
  FaExpand,
  FaTimes,
  FaChevronRight,
  FaPrayingHands,
  FaStore,
  FaCrown,
  FaDumbbell,
  FaCoffee,
  FaTv,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

// --- Hero & Masterplan Assets ---
const heroBackground = "/images/our-divisions/express-highway-inn/lounge2.jpeg";
const masterplanImage = "/images/our-divisions/express-highway-inn/masterplan3d.jpg";

// --- Architectural Gallery Items (Distinct Club & Lounge Assets) ---
const galleryItems = [
  {
    src: "/images/our-divisions/express-highway-inn/lounge2.jpeg",
    title: "Executive Members Lounge",
    tag: "Social Sanctuary",
  },
  {
    src: "/images/our-divisions/express-highway-inn/meeting-room.jpg",
    title: "EHCL Boardroom & Conference Suite",
    tag: "Business Lounge",
  },
  {
    src: "/images/our-divisions/express-highway-inn-lounge/gym.png",
    title: "High-Performance Health Club",
    tag: "Fitness & Turf",
  },
  {
    src: "/images/our-divisions/express-highway-inn-lounge/men-saloon.png",
    title: "Executive Barber & Grooming Salon",
    tag: "Wellness Parlor",
  },
  {
    src: "/images/our-divisions/express-highway-inn/Image-34.jpg.jpeg",
    title: "Championship Billiards & Snooker Hall",
    tag: "Recreation Suite",
  },
  {
    src: "/images/our-divisions/express-highway-inn-lounge/Screenshot 2026-09-12 135130.png",
    title: "Presidential Master Suite",
    tag: "Luxury Living",
  },
];

// --- Club Facilities Data (12 Dedicated Club & Lounge Amenities with Distinct Renders) ---
const facilities = [
  {
    id: "club-lounge",
    title: "Executive Members Lounge",
    category: "Lounge & Social",
    description:
      "Exclusive members-only social parlor featuring chess gaming tables, handcrafted amber armchairs, designer chandeliers, and complimentary beverage service.",
    image: "/images/our-divisions/express-highway-inn/lounge.jpg.jpeg",
    badge: "Members Sanctuary",
  },
  {
    id: "meeting-room",
    title: "EHCL Boardroom & Conference Suite",
    category: "Business Lounge",
    description:
      "State-of-the-art corporate boardroom equipped with 4K digital presentation displays, ergonomic executive seating, and dedicated high-speed fiber internet.",
    image: "/images/our-divisions/express-highway-inn/meeting-room.jpg",
    badge: "Executive Suite",
  },
  {
    id: "master-suite",
    title: "Presidential Master Suite",
    category: "Suites",
    description:
      "Ultra-luxurious master bedroom featuring a king designer leather bed, architectural fluted marble wall, acoustic soundproofing, and private lounge.",
    image: "/images/our-divisions/express-highway-inn-lounge/Screenshot 2026-09-12 135130.png",
    badge: "VVIP Living",
  },
  {
    id: "gym",
    title: "EHCL High-Performance Gym",
    category: "Sports & Fitness",
    description:
      "Official club fitness center featuring Olympic barbell racks, cardio spin bikes, resistance training stations, and dedicated functional workout turf.",
    image: "/images/our-divisions/express-highway-inn-lounge/gym.png",
    badge: "24/7 Member Gym",
  },
  {
    id: "barber-salon",
    title: "Executive Barber & Grooming Salon",
    category: "Wellness",
    description:
      "Five-star gentleman's grooming parlor with gold-accented chandeliers, illuminated vanity mirrors, marble floors, and therapeutic head massages.",
    image: "/images/our-divisions/express-highway-inn-lounge/men-saloon.png",
    badge: "Grooming & Style",
  },
  {
    id: "billiards",
    title: "Championship Billiards & Snooker Parlor",
    category: "Leisure",
    description:
      "Slate tournament billiards tables, professional cue lockers, geometric acoustic wall paneling, and private leather conversation lounges.",
    image: "/images/our-divisions/express-highway-inn/Image-34.jpg.jpeg",
    badge: "Recreational Suite",
  },
  {
    id: "dressing-room",
    title: "Private Walk-In Dressing Suite",
    category: "Suites",
    description:
      "Custom floor-to-ceiling illuminated wardrobes, brass trim detailing, integrated luggage trunks, and vanity seating for seamless wardrobe changes.",
    image: "/images/our-divisions/express-highway-inn-lounge/dressing-room.png",
    badge: "Luxury Wardrobe",
  },
  {
    id: "spa-bath",
    title: "Executive En-Suite Spa & Bath",
    category: "Wellness",
    description:
      "Spa-grade marble bathroom featuring a halo-lit circular vanity mirror, soaking tub, glass walk-in rainfall shower, and organic bath amenities.",
    image: "/images/our-divisions/express-highway-inn-lounge/Screenshot 2026-09-12 135357.png",
    badge: "Therapeutic Bath",
  },
  {
    id: "guest-suite",
    title: "Luxury Guest Bedroom Suite",
    category: "Suites",
    description:
      "Generously proportioned guest suite with twin accent armchairs, marble TV media unit, king bed, and floor-to-ceiling highway-facing curtains.",
    image: "/images/our-divisions/express-highway-inn/guest-suite.jpg",
    badge: "Guest Suite",
  },

  {
    id: "reception",
    title: "Concierge & Executive Reception",
    category: "Lounge & Social",
    description:
      "Welcoming hotel and club lobby with curved designer lounge sofa, 24/7 dedicated concierge desk, and priority member check-in lanes.",
    image: "/images/our-divisions/express-highway-inn/reception.jpg",
    badge: "24/7 Concierge",
  },
  {
    id: "pool",
    title: "Temperature-Controlled Swimming Pool",
    category: "Sports & Fitness",
    description:
      "Semi-indoor heated swimming pool featuring lap swim lanes, poolside cabana loungers, and private changing suites for members and families.",
    image: "/images/facilities/express_highway_inn/10.swimming-pool.png",
    badge: "Heated Pool",
  },
];

const nearbyLocations = [

  {
    name: "Sampan Mart",
    distance: "50 m",
    type: "Retail Super Shop",
    description:
      "24/7 highway retail super shop stocked with travel essentials, groceries, imported confections, and fresh snacks.",
    image: "/images/our-divisions/express-highway-inn/sampan-mart.jpg",
  },
  {
    name: "Mini Sampan Super Shop",
    distance: "50 m",
    type: "Express Convenience",
    description:
      "Quick-stop express retail kiosk for instant refreshments, snacks, travel necessities, and beverages.",
    image: "/images/our-divisions/mini-sampan-super-shop/mart.jpg",
  },
  {
    name: "Sampan Condominium",
    distance: "50 m",
    type: "Residential",
    description:
      "Luxury residential condominium complex offering premium permanent homes and investment apartments.",
    image: "/images/our-divisions/express-highway-inn/condominium.jpg",
  },
  {
    name: "EV Car Charging Station",
    distance: "50 m",
    type: "EV Charging Station",
    description:
      "Future-ready EV charging hub with fast-charging infrastructure for electric vehicles.",
    image: "/images/our-divisions/express-highway-inn/6.EV-Car-Charging.png",
  },
];

const mapUrl =
  "https://www.google.com/maps?q=Express+Highway+Inn+Bangladesh&output=embed";

const facilityCategories = [
  "All",
  "Lounge & Social",
  "Business Lounge",
  "Suites",
  "Sports & Fitness",
  "Wellness",
  "Dining",
];

export default function ExpressHighwayInnClubLoungePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredFacilities =
    activeCategory === "All"
      ? facilities
      : facilities.filter((f) => f.category === activeCategory);

  return (
    <main className="bg-[#F5F5F2] text-neutral-900 antialiased scroll-smooth selection:bg-[#58b9eb]/30 selection:text-neutral-900">

      {/* ================= 1. OVERVIEW (HERO WITH BACKGROUND IMAGE & DARK CONTRAST) ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 text-white pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-white/10">
        {/* Real Background Image with cinematic dark gradient overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBackground}
            alt="Express Highway Inn Club & Lounge"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Dual-layer dark gradient for text readability and navbar contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
        </div>

        {/* Ambient Cyan Glow */}
        <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-none bg-[#58b9eb]/15 blur-[140px] z-0" />
        <div className="pointer-events-none absolute right-10 bottom-10 h-80 w-80 rounded-none bg-[#58b9eb]/10 blur-[120px] z-0" />

        {/* Hero Content Container */}
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-2 pb-8 lg:pb-12">
          {/* Main Headline & Content */}
          <div className="max-w-4xl space-y-5 sm:space-y-6">

            {/* Eyebrow Square Badge */}
            {/* <div className="inline-flex items-center gap-3 border border-[#58b9eb]/50 bg-[#58b9eb]/15 backdrop-blur-md px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#58b9eb]">
              <span className="h-2 w-2 rounded-none bg-[#58b9eb]" />
              <span>Express Highway Inn Club &amp; Lounge • Exclusive Member Realm</span>
            </div> */}

            {/* Headline */}
            <h1 className="text-[clamp(2.4rem,4.8vw,4.2rem)] font-bold leading-[0.98] tracking-[-0.03em] text-white">
              Express Highway Inn <br />
              <span className="text-[#58b9eb] block mt-1">
                Club &amp; Lounge
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-md font-light tracking-wide border-l-2 border-[#58b9eb]/80 pl-4">
              Private member lounges, luxury master suites, executive boardroom, and exclusive membership share privileges.
            </p>

            {/* Square Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#facilities-gallery"
                className="group inline-flex items-center justify-center gap-2 rounded-none bg-[#58b9eb] hover:bg-[#3aa6df] px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-neutral-950 transition-all duration-300 shadow-lg shadow-[#58b9eb]/20"
              >
                <span>Explore Facilities</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* <Link
                href="#masterplan"
                className="inline-flex items-center justify-center rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm"
              >
                View Masterplan
              </Link> */}

              <Link
                href="#location"
                className="inline-flex items-center justify-center rounded-none border border-[#58b9eb]/40 bg-[#58b9eb]/10 hover:bg-[#58b9eb]/20 px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#58b9eb] transition-all duration-300 backdrop-blur-sm"
              >
                Location &amp; Access
              </Link>
            </div>

            {/* Quick Metrics (Square Cards) */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-3 gap-4 text-xs">
              {/* <div className="border-l-2 border-[#58b9eb] pl-4">
                <p className="text-xl sm:text-2xl font-bold text-white">35K sq. ft.</p>
                <p className="text-white/50 mt-0.5 font-mono text-[10px] uppercase tracking-wider">Dedicated Wing</p>
              </div> */}
              <div className="border-l-2 border-[#58b9eb] pl-4">
                <p className="text-xl sm:text-2xl font-bold text-[#58b9eb]">12+ Suites</p>
                <p className="text-white/50 mt-0.5 font-mono text-[10px] uppercase tracking-wider">Club Amenities</p>
              </div>
              <div className="border-l-2 border-[#58b9eb] pl-4">
                <p className="text-xl sm:text-2xl font-bold text-white">24/7 VIP</p>
                <p className="text-white/50 mt-0.5 font-mono text-[10px] uppercase tracking-wider">Concierge Desk</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. MASTERPLAN OVERVIEW ================= */}
      {/* <section
        id="masterplan"
        className="relative bg-[#F5F5F2] px-6 py-24 sm:px-10 lg:px-16 lg:py-32 border-b border-neutral-200"
      >
        <div className="mx-auto max-w-[1440px]">

          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[#58b9eb]" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
              Masterplan Overview
            </span>
          </div>

          <h2 className="mb-12 text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Vision for excellence.
            <br />
            <span className="text-neutral-400">A sanctuary for discerning members.</span>
          </h2>

         
          <div
            onClick={() => setSelectedImage(masterplanImage)}
            className="group relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] overflow-hidden rounded-none bg-white shadow-xl border border-neutral-200 cursor-pointer"
          >
            <Image
              src={masterplanImage}
              alt="Express Highway Inn Club & Lounge Masterplan"
              fill
              priority
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute top-0 left-0 h-[4px] w-0 bg-[#58b9eb] transition-all duration-700 group-hover:w-full z-10" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 bg-white/95 backdrop-blur-md px-4 py-2 rounded-none border border-neutral-200 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-neutral-900 shadow-sm flex items-center gap-2">
              <span className="h-2 w-2 bg-[#58b9eb]" />
              <span>Official Masterplan Blueprint</span>
            </div>
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 bg-black/75 hover:bg-black/90 backdrop-blur-md px-3.5 py-2 rounded-none text-white font-mono text-[10px] uppercase tracking-widest flex items-center gap-2 transition-colors shadow-sm">
              <FaExpand className="text-xs text-[#58b9eb]" />
              <span>Click to Expand</span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="group relative rounded-none border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#58b9eb] hover:-translate-y-1">
              <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#58b9eb] transition-all duration-500 group-hover:w-full" />
              <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#3298cb]">
                Dedicated Club Wing
              </h3>
              <p className="mt-1 text-3xl font-bold text-neutral-950">
                35,000 sq. ft.
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                Multi-level private architectural realm reserved exclusively for club members and staying guests
              </p>
            </div>

            <div className="group relative rounded-none border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#58b9eb] hover:-translate-y-1">
              <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#58b9eb] transition-all duration-500 group-hover:w-full" />
              <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#3298cb]">
                Member Privileges
              </h3>
              <p className="mt-1 text-3xl font-bold text-neutral-950">
                100% Reciprocal
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                Cross-privileges and lifetime access discounts across all Sampan Group resorts and hotel networks
              </p>
            </div>

            <div className="group relative rounded-none border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#58b9eb] hover:-translate-y-1">
              <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#58b9eb] transition-all duration-500 group-hover:w-full" />
              <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#3298cb]">
                VIP Parking &amp; Detailing
              </h3>
              <p className="mt-1 text-3xl font-bold text-neutral-950">
                Dedicated Bays
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                Priority 120kW EV charging lanes, driver waiting lounge, and automated touchless car wash
              </p>
            </div>

          </div>
        </div>
      </section> */}

      {/* ================= 3. FACILITIES GALLERY SHOWCASE (SQUARE & SLEEK) ================= */}
      <section
        id="facilities-gallery"
        className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32 border-b border-neutral-200 relative overflow-hidden"
      >
        <div className="mx-auto max-w-[1440px] relative z-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-10 bg-[#58b9eb]"></span>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
                  World-Class Facilities
                </span>
              </div>
              <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
                Curated club spaces. <br />
                <span className="text-[#3298cb]">Gallery showcase.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-neutral-500 leading-relaxed">
              Every space within the Express Highway Inn Club &amp; Lounge is tailored for executive privacy, leisure fellowship, and refined highway living.
            </p>
          </div>

          {/* Square Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 pb-4 mb-10 border-b border-neutral-200">
            {facilityCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-none font-mono text-xs font-bold uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer ${activeCategory === cat
                  ? "bg-neutral-950 text-white shadow-sm"
                  : "bg-neutral-100 text-neutral-700 hover:bg-[#58b9eb] hover:text-white border border-neutral-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Facilities Gallery Grid (Square Cards) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredFacilities.map((facility, i) => (
              <article
                key={facility.id}
                className="group relative flex flex-col rounded-none overflow-hidden bg-[#F5F5F2] border border-neutral-200 hover:border-[#58b9eb] transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1"
              >
                {/* Top Cyan Line Hover */}
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#58b9eb] transition-all duration-700 group-hover:w-full z-10" />

                {/* Gallery Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />

                  {/* Square Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-none border border-neutral-200 font-mono text-[9px] font-bold uppercase tracking-widest text-[#2680ad]">
                    {facility.badge}
                  </div>

                  {/* Expand icon (Square) */}
                  <button
                    onClick={() => setSelectedImage(facility.image)}
                    aria-label="Expand image"
                    className="absolute top-3.5 right-3.5 w-8 h-8 rounded-none bg-white text-neutral-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#58b9eb] hover:text-white cursor-pointer shadow-sm"
                  >
                    <FaExpand className="text-xs" />
                  </button>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-6 bg-white">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#3298cb]">
                      {facility.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-950 group-hover:text-[#3298cb] transition-colors leading-snug">
                    {facility.title}
                  </h3>

                  <p className="mt-2 text-xs text-neutral-600 leading-relaxed flex-1">
                    {facility.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 4. LOCATION + MAP ================= */}
      <section
        id="location"
        className="bg-[#F5F5F2] px-6 py-24 sm:px-10 lg:px-16 lg:py-32 border-b border-neutral-200"
      >
        <div className="mx-auto max-w-[1440px]">

          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[#58b9eb]" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
              Location &amp; Accessibility
            </span>
          </div>

          <h2 className="mb-12 text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Strategically positioned.
            <br />
            <span className="text-neutral-400">Direct highway frontage</span>
          </h2>

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

            <div className="flex flex-col justify-between space-y-8">

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-neutral-950 mb-2">
                    Direct Highway Entry Ramps
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Located directly on the primary national arterial corridor with smooth entry and exit deceleration lanes. Zero detour required.
                  </p>
                </div>

                <div className="rounded-none border border-neutral-200 bg-white p-6 shadow-sm">
                  <h4 className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#3298cb] mb-4">
                    Distance from Key Hubs
                  </h4>
                  <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
                    <li className="flex items-center justify-between border-b border-neutral-100 pb-2.5">
                      <span>Dhaka City Center</span>
                      <span className="font-bold text-neutral-950">45 km</span>
                    </li>
                    <li className="flex items-center justify-between border-b border-neutral-100 pb-2.5">
                      <span>Gazipur Intersection</span>
                      <span className="font-bold text-neutral-950">25 km</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Mymensingh Divisional Hub</span>
                      <span className="font-bold text-neutral-950">85 km</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-[10px] font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                    GPS Coordinates
                  </h4>
                  <p className="inline-block rounded-none bg-white border border-neutral-200 px-3 py-1 font-mono text-xs font-bold text-neutral-800">
                    23.95° N, 90.42° E
                  </p>
                </div>
              </div>

              <div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Express+Highway+Inn+Bangladesh"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 border-b-2 border-[#58b9eb] pb-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-neutral-950 transition-all duration-300 hover:text-[#3298cb]"
                >
                  <span>Get Live Directions</span>
                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

            </div>

            <div className="relative aspect-[16/10] overflow-hidden rounded-none border border-neutral-200 shadow-md lg:aspect-auto lg:h-full min-h-[380px] bg-white">
              <iframe
                title="Express Highway Inn Club & Lounge Location"
                src={mapUrl}
                className="h-full w-full border-0 grayscale contrast-125 transition-all duration-700 hover:grayscale-0 hover:contrast-100"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= 5. PHOTO/VIDEO GALLERY ================= */}
      <section className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-32 border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[#58b9eb]" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
              Architectural Gallery
            </span>
          </div>

          <h2 className="mb-12 text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Visual journey.
            <br />
            <span className="text-neutral-400">Moments across the private club wing.</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, i) => (
              <div
                key={item.title}
                onClick={() => setSelectedImage(item.src)}
                className={`group relative overflow-hidden rounded-none bg-neutral-100 border border-neutral-200 shadow-sm cursor-pointer ${i === 0
                  ? "aspect-[16/10] md:col-span-2 md:row-span-2 md:aspect-auto min-h-[340px]"
                  : "aspect-[16/10]"
                  }`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#58b9eb] transition-all duration-700 group-hover:w-full z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-5 sm:p-6">
                  <div className="flex items-end justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#58b9eb] block mb-1">
                        {item.tag}
                      </span>
                      <h4 className="text-white text-sm sm:text-base font-bold leading-snug truncate">
                        {item.title}
                      </h4>
                    </div>
                    <span className="shrink-0 inline-flex items-center gap-1.5 rounded-none bg-white text-neutral-950 font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 font-bold shadow-md group-hover:bg-[#58b9eb] group-hover:text-neutral-950 transition-colors">
                      <FaExpand className="text-[10px]" />
                      <span>Explore</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center font-mono text-xs text-neutral-400 uppercase tracking-wider">
            High-definition 3D virtual walkthroughs and member lounge previews releasing as development milestones are reached.
          </p>
        </div>
      </section>

      {/* ================= 6. NEARBY AT THIS LOCATION ================= */}
      <section className="bg-[#F5F5F2] px-6 py-24 sm:px-10 lg:px-16 lg:py-32 border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[#58b9eb]" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
              Nearby at This Location
            </span>
          </div>

          <h2 className="mb-4 text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Explore the neighborhood.
          </h2>

          <p className="mb-16 max-w-2xl text-sm sm:text-base text-neutral-500">
            Discover neighboring Sampan Group commercial centers and developments across the regional corridor.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {nearbyLocations.map((location, i) => (
              <article
                key={i}
                className="group flex flex-col overflow-hidden rounded-none border border-neutral-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#58b9eb] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]"
              >
                <div className="h-[3px] w-0 bg-[#58b9eb] transition-all duration-500 group-hover:w-full" />

                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 border border-neutral-200 px-3 py-1 font-mono text-[10px] font-bold text-neutral-950 shadow-sm">
                    {location.distance}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#3298cb]">
                    {location.type}
                  </span>
                  <h3 className="mb-2 mt-1 text-lg font-bold text-neutral-950 transition-colors group-hover:text-[#3298cb]">
                    {location.name}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    {location.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Facility & Gallery Zoom (Square) */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-in fade-in"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white p-3 rounded-none bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
          >
            <FaTimes className="text-lg" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[85vh] aspect-[16/10] rounded-none overflow-hidden border border-white/20 shadow-2xl bg-black"
          >
            <Image
              src={selectedImage}
              alt="Express Highway Inn Club & Lounge Facility Zoom"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* ================= FOOTER ================= */}
      <footer className="bg-white border-t border-neutral-200 px-6 py-12 sm:px-10 lg:px-16 text-neutral-600">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-neutral-950 mb-3">
                Express Highway Inn Club &amp; Lounge
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-md">
                Blending executive relaxation and luxury with modern comfort, fine dining, private lounges, and unmatched service for members on the national highway.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link href="#masterplan" className="hover:text-[#3298cb] transition-colors">
                    Masterplan
                  </Link>
                </li>
                <li>
                  <Link href="#facilities-gallery" className="hover:text-[#3298cb] transition-colors">
                    Facilities Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#location" className="hover:text-[#3298cb] transition-colors">
                    Location &amp; Access
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">
                Contact
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-500">
                <li>National Highway Corridor, Bangladesh</li>
                <li>+880 1929-918408</li>
                <li>club@expresshighwayinn.com</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-mono">
            <p>
              © {new Date().getFullYear()} Express Highway Inn Club &amp; Lounge. A Sampan Group Venture.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-[#3298cb] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-[#3298cb] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
