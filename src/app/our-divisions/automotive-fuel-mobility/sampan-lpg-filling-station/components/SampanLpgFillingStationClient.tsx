"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaGasPump,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaExpand,
  FaTimes,
  FaCheck,
  FaShieldAlt,
  FaDirections,
  FaExternalLinkAlt,
  FaFacebookF,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const highwayInnFacebookUrl = "https://www.facebook.com/sampanhighwayinn/";
const highwayInnDirectionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Sampan+Highway+Inn+Restaurant+%26+Party+Centre";
const highwayInnMapEmbed =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14662.089219414334!2d89.765406!3d23.260465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ffc915b3e67a43%3A0xc9ccd3be4ea97668!2sSampan%20Highway%20Inn%20Restaurant%20%26%20Party%20Centre!5e0!3m2!1sen!2sbd!4v1788938537834!5m2!1sen!2sbd";

const heroBackground = "/images/our-divisions/lpg-filling-station/hero.jpeg";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "lpg-1",
    title: "Station Forecourt & Main Canopy",
    category: "Main Station",
    image: "/images/our-divisions/lpg-filling-station/lpg.png",
    description: "High-pressure Auto LPG refueling station on the Dhaka–Khulna Highway at KM 74.",
  },
  {
    id: "lpg-2",
    title: "High-Pressure Auto LPG Dispenser",
    category: "Fuel Dispenser",
    image: "/images/our-divisions/lpg-filling-station/hero (1).jpeg",
    description: "Digital safety dispensers calibrated for rapid and steady vehicle tank refilling.",
  },
  {
    id: "lpg-3",
    title: "Refueling Bay & Forecourt Lanes",
    category: "Forecourt Lanes",
    image: "/images/our-divisions/lpg-filling-station/hero.jpeg",
    description: "Spacious vehicle slipway lanes designed for private cars, microbuses, and commercial fleets.",
  },
];

const stationFeatures = [
  {
    name: "High-Pressure Auto LPG Dispensers",
    type: "Clean Autogas",
    description:
      "Precision flow-metered high-pressure nozzles designed for rapid vehicle refills without pressure drops.",
    icon: FaGasPump,
  },
  {
    name: "24/7 Highway Refueling",
    type: "Continuous Service",
    description:
      "Round-the-clock autogas availability for day commuters, highway travelers, and overnight transit vehicles.",
    icon: FaClock,
  },
  {
    name: "Certified Safety Standards",
    type: "BERC Regulated",
    description:
      "Operates under strict national safety guidelines with automated shut-off systems and regular leak inspections.",
    icon: FaShieldAlt,
  },
];

interface NearbySpot {
  id: string;
  name: string;
  type: string;
  badge: string;
  driveTime: string;
  image: string;
  description: string;
  link: string;
}

const nearbySpots: NearbySpot[] = [
  {
    id: "highway-inn",
    name: "Sampan Highway Inn",
    type: "Hospitality & Dining",
    badge: "Adjacent / In Complex",
    driveTime: "Short Walk",
    image: "/images/our-divisions/sampan-highway-inn/heromain2.jpg",
    description:
      "Flagship highway hotel, multi-cuisine dining hall, prayer facilities, and 24/7 traveler rest stop.",
    link: "/our-divisions/hospitality-highway-travel/sampan-highway-inn",
  },
  {
    id: "sweet-box",
    name: "Sampan Sweet Box",
    type: "Artisanal Bengali Sweets",
    badge: "In Complex",
    driveTime: "In Complex",
    image: "/images/facilities/highway_inn/sweet-shop.jpg", description:
      "Authentic traditional mishti, fresh chhana sweets, celebration gift boxes, and highway travel treats.",
    link: "/our-divisions/retail-super-shops/sampan-sweet-box",
  },
  {
    id: "sampan-mart",
    name: "Sampan Mart",
    type: "24/7 Super Shop",
    badge: "In Complex",
    driveTime: "In Complex",
    image: "/images/our-divisions/sampan-mart/Sampan-Mart.jpg",
    description:
      "24/7 full-range retail super shop stocked with travel essentials, groceries, and chilled snacks.",
    link: "/our-divisions/retail-super-shops/sampan-mart",
  },
  {
    id: "filling-station",
    name: "Sampan Filling Station",
    type: "Automotive & Fuel",
    badge: "Highway Complex",
    driveTime: "Nearby Fuel Bay",
    image: "/images/our-divisions/sampan-filling-station/hero.jpeg",
    description:
      "24/7 digital-calibrated Octane 95 and Diesel dispensing with dedicated commercial vehicle bays.",
    link: "/our-divisions/automotive-fuel-mobility/sampan-filling-station",
  },
  {
    id: "white-house",
    name: "Sampan White House & Motel",
    type: "Transit Accommodation",
    badge: "Transit Stop",
    driveTime: "Short Drive",
    image: "/images/projects/Sampan-White-House-&-Motel.png",
    description:
      "Sister hospitality property providing comfortable private rooms, quiet overnight rest, and secured parking.",
    link: "/our-divisions/hospitality-highway-travel/sampan-white-house",
  },
  {
    id: "short-drive-range",
    name: "Sampan Short Drive Range",
    type: "Golf & Recreation",
    badge: "Adjacent",
    driveTime: "Coming Soon",
    image: "/images/featuredConcerns/sampan-agro-golf-resort.png",
    description:
      "Upcoming short-game golf practice range and driving bays for golf enthusiasts and highway visitors.",
    link: "/our-divisions/golf-zone/sampan-short-drive-range",
  },
];

export default function SampanLpgFillingStationClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <main className="bg-[#fcfbf9] text-[#1a1714] selection:bg-amber-600 selection:text-white">

      {/* ================= 1. HERO SECTION (NO STATUS BADGE / EYEBROW) ================= */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#0c0e0d] text-white pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBackground}
            alt="Sampan LPG Station Forecourt"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-2 pb-8 lg:pb-12">
          <div className="max-w-4xl space-y-5 sm:space-y-6">

            {/* Headline */}
            <h1 className="text-[clamp(2.4rem,4.8vw,4.2rem)] font-bold tracking-tight text-white leading-[0.98]">
              Sampan <br />
              <span className="text-amber-400 block mt-1">
                LPG Station
              </span>
            </h1>

            {/* Shortened Subheadline */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl font-light tracking-wide border-l-2 border-amber-500/80 pl-4">
              24/7 high-pressure Auto LPG autogas refueling at the Sampan Highway Inn Complex (KM 74, Dhaka–Khulna Highway).
            </p>

            {/* Square Action Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-xs">
              <button
                onClick={() => scrollTo("overview")}
                className="group inline-flex items-center justify-center gap-2 rounded-none bg-amber-600 hover:bg-amber-500 px-6 py-3 sm:px-7 sm:py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 shadow-lg shadow-amber-950/40 cursor-pointer text-center"
              >
                <span>Station Overview</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-none border border-amber-500/60 bg-amber-500/15 hover:bg-amber-600 hover:border-amber-600 hover:text-white px-6 py-3 sm:px-7 sm:py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-amber-300 transition-all duration-300 backdrop-blur-sm cursor-pointer text-center"
              >
                <span>Get Pricing</span>
                <FiArrowRight className="text-xs" />
              </Link>

              <button
                onClick={() => scrollTo("gallery")}
                className="inline-flex items-center justify-center rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-6 py-3 sm:px-7 sm:py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer text-center"
              >
                Station Photos
              </button>

              <a
                href={highwayInnFacebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-none border border-amber-500/40 bg-amber-900/30 hover:bg-amber-800/60 hover:border-amber-400 px-6 py-3 sm:px-7 sm:py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-amber-300 hover:text-white transition-all duration-300 backdrop-blur-sm cursor-pointer text-center"
              >
                <FaFacebookF className="text-xs text-amber-400" />
                <span>Facebook Page</span>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="border-l-2 border-amber-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Open 24/7</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Continuous Supply</p>
              </div>
              <div className="border-l-2 border-amber-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-amber-400 uppercase tracking-wider">Auto LPG</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">High Pressure</p>
              </div>
              <div className="border-l-2 border-amber-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Dhaka–Khulna Highway</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">KM 74 Highway</p>
              </div>
              <div className="border-l-2 border-amber-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Safety Tested</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">BERC Standards</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. OVERVIEW & FEATURES (NO EYEBROW) ================= */}
      <section id="overview" className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#fcfbf9] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Clean mobility. <br />
                <span className="text-amber-700">Fast autogas refilling.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Equipped with calibrated high-pressure dispensers for eco-friendly vehicle refueling along the Dhaka–Khulna corridor.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {stationFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col justify-between border border-neutral-200 bg-white p-6 sm:p-7 rounded-none hover:border-amber-600 hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="w-10 h-10 bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 rounded-none group-hover:bg-amber-600 group-hover:text-white transition-colors mb-6">
                      <Icon className="text-base" />
                    </div>

                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-700 block mb-1">
                      {item.type}
                    </span>
                    <h3 className="text-lg font-bold text-neutral-950 group-hover:text-amber-700 transition-colors">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-amber-800 font-bold">
                    <span>Active Bay</span>
                    <FaCheck className="text-[10px] text-amber-600" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= 3. STATION GALLERY (NO EYEBROW) ================= */}
      <section id="gallery" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Station Gallery
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-500 leading-relaxed">
              Authentic on-site photographs of the LPG forecourt, high-pressure dispensers, and canopy.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {galleryItems.map((item) => (
              <article
                key={item.id}
                onClick={() => setSelectedImage(item.image)}
                className="group relative flex flex-col h-full rounded-none overflow-hidden bg-white border border-neutral-200 hover:border-amber-600 transition-all duration-300 hover:shadow-md cursor-pointer min-h-[340px]"
              >
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-amber-600 transition-all duration-500 group-hover:w-full z-20" />

                <div className="relative w-full flex-1 min-h-[240px] overflow-hidden bg-neutral-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 z-10">
                    <div className="flex items-end justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
                          {item.category}
                        </span>
                        <h4 className="text-white text-sm font-bold leading-snug truncate">
                          {item.title}
                        </h4>
                        <p className="text-xs text-neutral-300 mt-1 line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                      <span className="shrink-0 inline-flex items-center gap-1.5 rounded-none bg-white text-neutral-950 font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 font-bold shadow-md group-hover:bg-amber-600 group-hover:text-white transition-colors">
                        <FaExpand className="text-[10px]" />
                        <span>View</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white border-t border-neutral-100 flex items-center justify-between shrink-0 mt-auto">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-amber-700 font-bold block">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-neutral-900 truncate">
                      {item.title}
                    </h4>
                  </div>
                  <FaExpand className="text-xs text-neutral-400 group-hover:text-amber-600 transition-colors" />
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 4. NEARBY SISTER CONCERNS (NO EYEBROW, NO METERS/KM) ================= */}
      <section id="nearby" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#0c0e0d] text-white border-b border-white/10 relative overflow-hidden">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Nearby at This Location
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Situated within the Sampan Highway Inn complex alongside dining, petrol/diesel fueling, lodging, and retail stores along the Dhaka–Khulna Highway.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nearbySpots.map((spot) => (
              <article
                key={spot.id}
                className="group relative flex flex-col h-full rounded-none overflow-hidden bg-[#121614] border border-white/10 hover:border-amber-500/60 transition-all duration-300"
              >
                <div className="relative h-52 w-full overflow-hidden bg-neutral-900 shrink-0">
                  <Image
                    src={spot.image}
                    alt={spot.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121614] via-transparent to-black/30" />

                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center rounded-none bg-black/80 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-amber-400 border border-amber-500/30">
                      {spot.badge}
                    </span>
                  </div>

                  {/* <div className="absolute bottom-3 right-4 z-10">
                    <span className="inline-flex items-center rounded-none bg-white/10 backdrop-blur-md px-2.5 py-0.5 font-mono text-[10px] text-neutral-300">
                      {spot.driveTime}
                    </span>
                  </div> */}
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                      {spot.type}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {spot.name}
                    </h3>
                    <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                      {spot.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <Link
                      href={spot.link}
                      className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      <span>Explore Division</span>
                      <FiArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 5. LOCATION & CONTACT ================= */}
      <section id="location" className="scroll-mt-20 py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#f7f9f7] text-[#1a1714] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 border border-amber-600/40 bg-amber-600/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-amber-800 mb-4 rounded-none">
              <FaMapMarkerAlt className="text-xs text-amber-700" />
              <span>Location &amp; Route Access</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              Visit Sampan LPG Station &amp; Highway Inn
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Situated right beside Sampan Highway Inn at KM 74 on the Dhaka–Khulna Highway. Open 24/7 every day of the year for private vehicles, microbuses, and commercial fleets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Station Details, Schedule & Contact */}
            <div className="flex flex-col gap-6 justify-between">
              {/* Card 1: Station Location & Address */}
              <div className="bg-white border border-neutral-300 p-6 sm:p-7 rounded-none shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 rounded-none shrink-0">
                    <FaMapMarkerAlt className="text-base" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
                      Physical Location
                    </span>
                    <h3 className="text-lg font-bold text-neutral-950">
                      Sampan Highway Inn Complex
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-mono">
                  KM 74, Dhaka–Khulna Highway <br />
                  Direct Highway Access, Bangladesh
                </p>
                <p className="pt-2 text-[11px] text-neutral-500 font-mono border-t border-neutral-100 flex items-center gap-2">
                  <FaClock className="text-xs text-amber-600 shrink-0" />
                  <span>Open 24 Hours / 7 Days • Wide Slipway Refueling Access</span>
                </p>
              </div>

              {/* Sub-grid: Direct Contact & Social */}
              <div className="grid sm:grid-cols-2 gap-6 flex-1">
                {/* Card 2: Contact Numbers */}
                <div className="bg-white border border-neutral-300 p-6 rounded-none shadow-sm flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 rounded-none">
                      <FaPhoneAlt className="text-sm" />
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
                      Direct Inquiries
                    </span>
                    <h4 className="text-base font-bold text-neutral-950">
                      Station Desk
                    </h4>
                    <div className="text-xs text-neutral-700 space-y-1">
                      <a href="tel:+8801929918408" className="font-mono font-bold text-amber-700 hover:underline block text-sm">
                        +880 1929-918408
                      </a>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-none bg-amber-700 hover:bg-amber-600 text-white px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center"
                  >
                    <FaPhoneAlt className="text-[10px]" />
                    <span>Call Station</span>
                  </Link>
                </div>

                {/* Card 3: Social Updates (Sampan Highway Inn Facebook Page) */}
                <div className="bg-white border border-neutral-300 p-6 rounded-none shadow-sm flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 rounded-none">
                      <FaFacebookF className="text-sm" />
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
                      Live Updates
                    </span>
                    <h4 className="text-base font-bold text-neutral-950">
                      Highway Inn Page
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Follow our official Facebook page for live updates, complex amenities, and announcements.
                    </p>
                  </div>
                  <a
                    href={highwayInnFacebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-none bg-[#1877F2] hover:bg-[#166fe5] text-white px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center"
                  >
                    <FaFacebookF className="text-[10px]" />
                    <span>Facebook Page</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: 50% Interactive Google Map routing to Sampan Highway Inn */}
            <div className="border border-neutral-300 bg-white p-2 sm:p-3 shadow-sm flex flex-col h-full min-h-[420px] lg:min-h-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-3 py-2.5 mb-2 border-b border-neutral-200">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-700 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse shrink-0" />
                  <span className="font-bold text-neutral-900 uppercase tracking-wider shrink-0">Route to:</span>
                  <span className="truncate">Sampan Highway Inn Restaurant &amp; Party Centre</span>
                </div>
                <a
                  href={highwayInnDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-amber-800 hover:text-amber-950 transition-colors shrink-0"
                >
                  <FaDirections className="text-xs text-amber-700" />
                  <span>Get Directions</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              </div>

              <div className="relative w-full flex-1 min-h-[380px] bg-neutral-100 overflow-hidden">
                <iframe
                  src={highwayInnMapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sampan Highway Inn Live Map Route"
                />
              </div>
            </div>
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
              alt="Sampan LPG Station Preview"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* Duplicate local footer removed: Global site layout renders footer */}

    </main>
  );
}
