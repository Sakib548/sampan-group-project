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
  FaOilCan,
  FaTruck,
  FaShieldAlt,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

// Hero Background: Authentic 4K photo of the filling station forecourt
const heroBackground = "/images/our-divisions/sampan-filling-station/hero.jpeg";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "fs-1",
    title: "Highway Forecourt & Main Canopy",
    category: "Main Station",
    image: "/images/our-divisions/sampan-filling-station/hero.jpeg",
    description: "Spacious multi-lane fueling forecourt on the Dhaka–Khulna Highway at KM 74, Gopalganj.",
  },
  {
    id: "fs-2",
    title: "Official Mobil Lubricants & Engine Oils",
    category: "Mobil Care",
    image: "/images/our-divisions/sampan-filling-station/Mobils-New1.jpg",
    description: "Genuine Mobil 1 synthetic oils, Mobil Super, and Delvac lubricants for all vehicle types.",
  },
  {
    id: "fs-3",
    title: "Engine Protection & Fluid Stock",
    category: "Lubricants",
    image: "/images/our-divisions/sampan-filling-station/Mobils-New2.jpg",
    description: "Certified automotive lubricants, coolants, and engine care products in stock.",
  },
  {
    id: "fs-4",
    title: "24/7 Night Fueling Operations",
    category: "Night Service",
    image: "/images/our-divisions/sampan-filling-station/WhatsApp-Image-2024-05-29-at-3.16.53-AM-1.jpeg",
    description: "Fully illuminated round-the-clock service for overnight buses and long-haul transport.",
  },
  {
    id: "fs-5",
    title: "Heavy Vehicle & Bus Refueling Bays",
    category: "Commercial Bays",
    image: "/images/our-divisions/sampan-filling-station/Filling-Station-2.jpg",
    description: "Dedicated wide-turn lanes and high-flow diesel nozzles for commercial coaches and trucks.",
  },
];

// Service Highlights
const stationServices = [
  {
    name: "100% Calibrated Octane & Diesel",
    type: "Digital Metered Fuel",
    description:
      "Precision flow-metered dispensers tested and calibrated regularly to ensure strict volumetric accuracy and zero adulteration.",
    icon: FaGasPump,
    status: "24/7 Available",
  },
  {
    name: "Heavy Commercial Vehicle Bays",
    type: "High-Flow Dispensers",
    description:
      "Wide turning radii and dedicated high-flow diesel bays engineered specifically for intercity buses, trucks, and covered vans.",
    icon: FaTruck,
    status: "Dedicated Lanes",
  },
  {
    name: "Mobil 1 Lubricants & Engine Care",
    type: "Official Mobil Center",
    description:
      "Authorized Mobil product counter carrying synthetic engine oils, gear oils, coolants, and brake fluids for petrol and diesel engines.",
    icon: FaOilCan,
    status: "Genuine Stock",
  },
  {
    name: "Free Tire Air & Radiator Water",
    type: "Highway Care Amenities",
    description:
      "Complimentary digital tire air pressure gauge, high-pressure air line, and fresh radiator water points for travelers.",
    icon: FaShieldAlt,
    status: "Free Courtesy Service",
  },
];

// Nearby Spots (Same as Sampan Highway Inn, NO meters/km as instructed)
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
    image: "/images/our-divisions/sampan-sweet-box/DSC00468.JPG",
    description:
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
    id: "lpg-station",
    name: "Sampan LPG Station",
    type: "Clean Mobility & Fuel",
    badge: "Highway Complex",
    driveTime: "Clean Mobility",
    image: "/images/our-divisions/lpg-filling-station/hero.jpeg",
    description:
      "Rapid dispenser LPG autogas refueling station for modern eco-friendly and clean vehicles.",
    link: "/our-divisions/automotive-fuel-mobility/sampan-lpg-filling-station",
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

export default function SampanFillingStationClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#fcfbf9] text-[#1a1714] selection:bg-emerald-700 selection:text-white">

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0a110d] text-white pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-emerald-900/30">
        {/* Authentic 4K Station Image with Balanced Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBackground}
            alt="Sampan Filling Station Forecourt"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-2 pb-8 lg:pb-12">
          <div className="max-w-4xl space-y-5 sm:space-y-6">

            {/* Headline */}
            <h1 className="text-[clamp(2.4rem,4.8vw,4.2rem)] font-bold tracking-tight text-white leading-[0.98]">
              Sampan <br />
              <span className="text-emerald-400 block mt-1">
                Filling Station
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl font-light tracking-wide border-l-2 border-emerald-500/80 pl-4">
              24/7 calibrated Octane, Diesel, and Mobil lubricants at the Sampan Highway Inn Complex (KM 74, Gopalganj).
            </p>

            {/* Square Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("services")}
                className="group inline-flex items-center justify-center gap-2 rounded-none bg-emerald-600 hover:bg-emerald-500 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-lg shadow-emerald-950/40 cursor-pointer"
              >
                <span>Station Services</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo("gallery")}
                className="inline-flex items-center justify-center rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                Station Gallery
              </button>

              <button
                onClick={() => scrollTo("nearby")}
                className="inline-flex items-center justify-center rounded-none border border-emerald-500/40 bg-emerald-900/30 hover:bg-emerald-800/60 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                Nearby Locations
              </button>
            </div>

            {/* Quick Metrics (Square Cards) */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Open 24/7</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Day &amp; Night Fueling</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-emerald-400 uppercase tracking-wider">Calibrated</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Digital Flow Meters</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Gopalganj</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">KM 74, Highway</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Mobil Bay</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Genuine Lubricants</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. SERVICES & PILLARS ================= */}
      <section id="services" className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#fcfbf9] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-emerald-600" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-700">
              Fuel Services &amp; Highway Care
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                24/7 Highway Fueling. <br />
                <span className="text-emerald-700">Calibrated precision.</span>
              </h2>

              <p className="mt-6 text-sm sm:text-base text-neutral-600 leading-relaxed">
                Sampan Filling Station delivers continuous, high-volume fuel service for private passenger vehicles, corporate fleets, intercity buses, and heavy transport along the Dhaka–Khulna corridor.
              </p>

              <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                Positioned directly on the highway without narrow link roads or delays, drivers benefit from digital flow metering, high-flow nozzles, authorized Mobil lubricants, and seamless vehicle turnaround.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollTo("gallery")}
                  className="inline-flex items-center gap-2 rounded-none bg-[#112419] hover:bg-emerald-800 text-white px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] transition-colors shadow-sm cursor-pointer"
                >
                  <span>See Station Photos</span>
                  <FiArrowRight className="text-xs" />
                </button>

                <button
                  onClick={() => scrollTo("location")}
                  className="inline-flex items-center gap-2 rounded-none border border-emerald-700 text-emerald-900 hover:bg-emerald-50 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] transition-colors cursor-pointer"
                >
                  <span>Highway Location</span>
                </button>
              </div>
            </div>

            {/* 3 Pillars (Square Cards) */}
            <div className="grid gap-4 sm:grid-cols-1">
              <div className="border border-neutral-200 bg-white p-6 rounded-none shadow-sm hover:border-emerald-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 rounded-none">
                    <FaGasPump className="text-base" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-950">
                      100% Calibrated Octane &amp; Diesel
                    </h3>
                    <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                      Digital flow meters calibrated regularly to ensure zero adulteration, maximum fuel economy, and exact volumetric delivery.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-neutral-200 bg-white p-6 rounded-none shadow-sm hover:border-emerald-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 rounded-none">
                    <FaTruck className="text-base" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-950">
                      Heavy Commercial &amp; Bus Bays
                    </h3>
                    <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                      Spacious dual slipways and high-flow diesel nozzles designed for long-distance passenger buses and freight trucks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-neutral-200 bg-white p-6 rounded-none shadow-sm hover:border-emerald-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 rounded-none">
                    <FaOilCan className="text-base" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-950">
                      Genuine Mobil Engine Oils &amp; Lubricants
                    </h3>
                    <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                      Official Mobil product outlet stocking Mobil 1 synthetic lubricants, Delvac heavy-duty oils, and fluid maintenance supplies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 3. STATION AMENITIES & FEATURES ================= */}
      <section className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-10 bg-emerald-600" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-700">
                  Station Facilities
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Designed for speed. <br />
                <span className="text-emerald-700">Complete highway care.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-500 leading-relaxed">
              Every facility at Sampan Filling Station is built to give drivers and vehicles a seamless, safe highway stop.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stationServices.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col justify-between border border-neutral-200 bg-[#fdfcfa] p-6 rounded-none hover:border-emerald-600 hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-4 rounded-none group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <Icon className="text-base" />
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                      {item.type}
                    </span>
                    <h3 className="text-lg font-bold text-neutral-950 group-hover:text-emerald-700 transition-colors">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-neutral-500 font-semibold">Service Status:</span>
                    <span className="inline-flex items-center gap-1.5 text-emerald-800 font-bold">
                      <FaCheck className="text-[10px] text-emerald-600" />
                      <span>{item.status}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= 4. AUTHENTIC STATION GALLERY ================= */}
      <section id="gallery" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#fcfbf9] border-b border-neutral-200">
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
                Station in pictures. <br />
                <span className="text-emerald-700">Forecourt &amp; facilities.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-500 leading-relaxed">
              Authentic on-site photographs of our multi-lane fueling forecourt, canopy, and Mobil lubricants stock.
            </p>
          </div>

          {/* Square Image Grid (Zero Blank Space, Anchored Label Bars) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <article
                key={item.id}
                onClick={() => setSelectedImage(item.image)}
                className={`group relative flex flex-col h-full rounded-none overflow-hidden bg-white border border-neutral-200 hover:border-emerald-600 transition-all duration-300 hover:shadow-md cursor-pointer ${index === 0 ? "sm:col-span-2 lg:col-span-2 min-h-[380px]" : "min-h-[340px]"
                  }`}
              >
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-emerald-600 transition-all duration-500 group-hover:w-full z-20" />

                <div className="relative w-full flex-1 min-h-[240px] overflow-hidden bg-neutral-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
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

                {/* Lower label bar (Anchored at bottom, no empty vertical gap) */}
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

      {/* ================= 5. NEARBY SISTER CONCERNS (NO METERS/KM) ================= */}
      <section id="nearby" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#0a110d] text-white border-b border-white/10 relative overflow-hidden">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-10 bg-emerald-400" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-400">
                  Highway Complex Assets
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Nearby at this location. <br />
                <span className="text-emerald-400">Highway Inn Complex.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Located directly within the Sampan Highway Inn complex alongside complementary dining, fueling, lodging, and retail stores in Gopalganj.
            </p>
          </div>

          {/* Nearby Cards Grid (Square Cards, matching Highway Inn) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nearbySpots.map((spot) => (
              <article
                key={spot.id}
                className="group relative flex flex-col h-full rounded-none overflow-hidden bg-[#111c16] border border-white/10 hover:border-emerald-500/60 transition-all duration-300"
              >
                <div className="relative h-52 w-full overflow-hidden bg-neutral-900 shrink-0">
                  <Image
                    src={spot.image}
                    alt={spot.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111c16] via-transparent to-black/30" />

                  {/* Badge WITHOUT meters/km */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center rounded-none bg-black/80 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/30">
                      {spot.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-4 z-10">
                    <span className="inline-flex items-center rounded-none bg-white/10 backdrop-blur-md px-2.5 py-0.5 font-mono text-[10px] text-neutral-300">
                      {spot.driveTime}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                      {spot.type}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {spot.name}
                    </h3>
                    <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                      {spot.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <Link
                      href={spot.link}
                      className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
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

      {/* ================= 6. LOCATION & CONTACT ================= */}
      <section id="location" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#f7f9f7] text-[#1a1714] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 border border-emerald-600/40 bg-emerald-600/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-800 mb-4 rounded-none">
              <FaMapMarkerAlt className="text-xs text-emerald-700" />
              <span>Location &amp; Access</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              Visit Sampan Filling Station
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Situated right beside Sampan Highway Inn at KM 74 on the Dhaka–Khulna Highway in Gopalganj. Open 24/7 every day of the year.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Station Address */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 rounded-none">
                <FaMapMarkerAlt className="text-lg" />
              </div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                Highway Location
              </span>
              <h3 className="text-xl font-bold text-neutral-950">
                Sampan Filling Station
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-mono">
                Sampan Highway Inn Complex <br />
                KM 74, Dhaka–Khulna Highway <br />
                Gopalganj, Bangladesh
              </p>
              <p className="pt-2 text-[11px] text-neutral-400 font-mono border-t border-neutral-100">
                Wide highway slipway access
              </p>
            </div>

            {/* Card 2: Operating Schedule */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 rounded-none">
                <FaClock className="text-base" />
              </div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                Operational Hours
              </span>
              <h3 className="text-xl font-bold text-neutral-950">
                24 Hours / 7 Days
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-mono">
                Open All Day &amp; Night <br />
                365 Days a Year <br />
                Uninterrupted Fuel Service
              </p>
              <p className="pt-2 text-[11px] text-neutral-400 font-mono border-t border-neutral-100">
                Full night staff &amp; security
              </p>
            </div>

            {/* Card 3: Contact & Station Desk */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 rounded-none">
                <FaPhoneAlt className="text-base" />
              </div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                Direct Contact
              </span>
              <h3 className="text-xl font-bold text-neutral-950">
                Station Manager &amp; Fleet
              </h3>
              <div className="space-y-3 pt-1 text-sm text-neutral-700">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-neutral-400">Phone:</span>
                  <a href="tel:+8801929918408" className="font-mono font-bold text-emerald-700 hover:underline">
                    +880 1929-918408
                  </a>
                </div>
                {/* <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-neutral-400">Alt:</span>
                  <a href="tel:+8801929918400" className="font-mono font-semibold text-emerald-700 hover:underline">
                    +880 1929-918400
                  </a>
                </div> */}
              </div>
              <div className="pt-2">
                <a
                  href="tel:+8801929918408"
                  className="inline-flex items-center gap-2 rounded-none bg-emerald-700 hover:bg-emerald-600 text-white px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <FaPhoneAlt className="text-[10px]" />
                  <span>Call Station Manager</span>
                </a>
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
              alt="Sampan Filling Station Preview"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* ================= 7. SQUARE MINIMAL FOOTER ================= */}
      <footer className="bg-white border-t border-neutral-200 px-6 py-12 sm:px-10 lg:px-16 text-neutral-600">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-neutral-950 mb-3">
                Sampan Filling Station
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-md">
                24/7 digital-metered Octane, Diesel, and official Mobil lubricants station located at the Sampan Highway Inn Complex on the Dhaka–Khulna Highway in Gopalganj.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs font-mono">
                <li>
                  <button onClick={() => scrollTo("services")} className="hover:text-emerald-700 transition-colors text-left">
                    Station Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("gallery")} className="hover:text-emerald-700 transition-colors text-left">
                    Station Gallery
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("nearby")} className="hover:text-emerald-700 transition-colors text-left">
                    Nearby Attractions
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("location")} className="hover:text-emerald-700 transition-colors text-left">
                    Highway Location
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">
                Highway Location
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-500 font-mono">
                <li>Sampan Highway Inn Complex</li>
                <li>KM 74, Dhaka–Khulna Highway, Gopalganj</li>
                <li>Open 24 Hours / 7 Days</li>
                <li>+880 1929-918408</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-mono">
            <p>
              © {new Date().getFullYear()} Sampan Filling Station. A Sampan Group Venture.
            </p>
            <div className="flex gap-6">
              <Link href="/our-divisions/automotive-fuel-mobility/sampan-lpg-filling-station" className="hover:text-emerald-700 transition-colors">
                Sampan LPG Station
              </Link>
              <Link href="/our-divisions/hospitality-highway-travel/sampan-highway-inn" className="hover:text-emerald-700 transition-colors">
                Sampan Highway Inn
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
