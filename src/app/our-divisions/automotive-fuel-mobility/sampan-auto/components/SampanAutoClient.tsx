"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaCar,
  FaPhoneAlt,
  FaFacebookF,
  FaCheck,
  FaExpand,
  FaTimes,
  FaShieldAlt,
  FaTruckLoading,
  FaFileContract,
  FaSearch,
  FaExternalLinkAlt,
  FaGasPump,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

// Hero Background: Authentic showroom banner from sampan-auto folder
const heroBackground = "/images/our-divisions/sampan-auto/Website-Banner-2.jpg";

interface VehicleShowcase {
  id: string;
  name: string;
  category: string;
  image: string;
  fuelType: string;
  description: string;
}

const vehicleShowcase: VehicleShowcase[] = [
  {
    id: "v-1",
    name: "Toyota Harrier Z",
    category: "Luxury Hybrid Crossover",
    image: "/images/our-divisions/sampan-auto/Toyota_Harrier_Z_2021.jpg",
    fuelType: "Octane / Hybrid",
    description: "Sleek aerodynamic styling, Modellista trim options, panoramic roof, and modern safety suite.",
  },
  {
    id: "v-2",
    name: "Lexus RX300 F Sport",
    category: "Executive Sport SUV",
    image: "/images/our-divisions/sampan-auto/Lexus_RX300_F_Sport_2021.jpg",
    fuelType: "Turbo Petrol",
    description: "High-spec executive SUV featuring F Sport leather interior, triple-beam LED, and panoramic camera.",
  },
  {
    id: "v-3",
    name: "Toyota Land Cruiser Prado TX",
    category: "Full-Size 4WD SUV",
    image: "/images/our-divisions/sampan-auto/Toyota-Prado-TX.jpg",
    fuelType: "Petrol / Diesel",
    description: "Unrivaled highway presence, heavy-duty chassis, 7-passenger capability, and premium luxury.",
  },
  {
    id: "v-4",
    name: "Nissan X-Trail Hybrid",
    category: "Family Touring Crossover",
    image: "/images/our-divisions/sampan-auto/NissanX-Trail.jpg",
    fuelType: "Hybrid Crossover",
    description: "Spacious dual-zone interior, intelligent 4x4, excellent fuel economy, and smooth ride comfort.",
  },
  {
    id: "v-5",
    name: "Toyota Corolla Cross",
    category: "Compact Urban Crossover",
    image: "/images/our-divisions/sampan-auto/Toyota-corolla-cross-1.jpg",
    fuelType: "Hybrid / Petrol",
    description: "Modern high ground-clearance crossover suited for city commuting and highway family tours.",
  },
  {
    id: "v-6",
    name: "Toyota Noah / Esquire",
    category: "Premium 7-Seater MPV",
    image: "/images/our-divisions/sampan-auto/Toyota-Noah-Squire-GL-2020.jpg",
    fuelType: "Hybrid MPV",
    description: "Dual power sliding doors, captain seating, flexible family boot space, and outstanding economy.",
  },
  {
    id: "v-7",
    name: "Lexus GX 460",
    category: "Luxury All-Terrain 4WD",
    image: "/images/our-divisions/sampan-auto/Toyota-Lexus-Gx460.jpg",
    fuelType: "V8 Luxury 4WD",
    description: "Proven V8 capability, plush leather cabin, multi-terrain select, and commanding stance.",
  },
  {
    id: "v-8",
    name: "Toyota Prius Hybrid",
    category: "Aerodynamic Hybrid Sedan",
    image: "/images/our-divisions/sampan-auto/Toyota-prius-gulliver-1.jpg",
    fuelType: "Synergy Hybrid",
    description: "World-class hybrid efficiency, dependable Japanese build, low maintenance, and smooth cruising.",
  },
];

const sourcingSteps = [
  {
    title: "Specify Your Desired Vehicle",
    description:
      "Tell us the make, model, year, trim, auction grade, and budget you prefer. We handle new reconditioned Japanese imports and quality used cars.",
    icon: FaSearch,
  },
  {
    title: "Transparent Sourcing & Bidding",
    description:
      "We locate verified vehicles through certified Japanese auctions (USS, CAA, TAA) or trusted local networks with genuine condition sheets and history.",
    icon: FaFileContract,
  },
  {
    title: "Import, Port Clearance & BRTA",
    description:
      "Our team manages all international shipping, C&F port customs clearance, tax payments, BRTA vehicle registration, and mechanical inspection.",
    icon: FaShieldAlt,
  },
  {
    title: "Direct Doorstep Handover",
    description:
      "Your car is professionally cleaned, detailed, and delivered directly to your doorstep complete with all genuine ownership papers and keys.",
    icon: FaTruckLoading,
  },
];

const brandTags = [
  "Toyota",
  "Lexus",
  "Nissan",
  "Honda",
  "Mercedes-Benz",
  "Mitsubishi",
  "Subaru",
  "Mazda",
];

export default function SampanAutoClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#fcfbf9] text-[#1a1714] selection:bg-amber-600 selection:text-white">

      {/* ================= 1. HERO SECTION (SHOWROOM BANNER) ================= */}
      <section className="relative min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0c0d10] text-white pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-white/10">
        {/* Authentic Showroom Image with Balanced Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBackground}
            alt="Sampan Auto Showroom Display"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-2 pb-8 lg:pb-12">
          <div className="max-w-4xl space-y-5 sm:space-y-6">

            {/* Sourcing Badge */}
            {/* <div className="inline-flex items-center gap-2 border border-amber-500/40 bg-amber-950/70 backdrop-blur-md px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400 rounded-none">
              <FaCar className="text-xs text-amber-400" />
              <span>Vehicle Importer &amp; Dealer • On-Demand Delivery</span>
            </div> */}

            {/* Headline */}
            <h1 className="text-[clamp(2.4rem,4.8vw,4.2rem)] font-bold tracking-tight text-white leading-[0.98]">
              Sampan <br />
              <span className="text-amber-400 block mt-1">
                Auto
              </span>
            </h1>

            {/* Subheadline: Clear explanation of business model */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl font-light tracking-wide border-l-2 border-amber-500/80 pl-4">
              Specializing in imported Japanese reconditioned vehicles and quality pre-owned cars. While we currently operate on a bespoke on-demand model without a physical walk-in showroom, simply inform us what car you want—we source, inspect, import, and deliver it directly to you.
            </p>

            {/* Square Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("process")}
                className="group inline-flex items-center justify-center gap-2 rounded-none bg-amber-600 hover:bg-amber-500 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-lg shadow-amber-950/40 cursor-pointer"
              >
                <span>How Sourcing Works</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo("inventory")}
                className="inline-flex items-center justify-center rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                Featured Vehicles
              </button>

              <a
                href="https://www.facebook.com/sampandhaka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-none bg-[#1877F2] hover:bg-[#166fe5] px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-md cursor-pointer"
              >
                <FaFacebookF className="text-sm" />
                <span>Facebook Page</span>
              </a>
            </div>

            {/* Quick Metrics (Square Cards) */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="border-l-2 border-amber-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">On-Demand</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Bespoke Sourcing</p>
              </div>
              <div className="border-l-2 border-amber-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-amber-400 uppercase tracking-wider">Recondition &amp; Used</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Certified Inspections</p>
              </div>
              <div className="border-l-2 border-amber-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Doorstep</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Port to Delivery</p>
              </div>
              <div className="border-l-2 border-amber-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Transparency</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Auction Sheets</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. HOW IT WORKS (ON-DEMAND SOURCING PROCESS) ================= */}
      <section id="process" className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#fcfbf9] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-amber-600" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-amber-700">
              Sourcing &amp; Delivery Process
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Tell us what you want. <br />
                <span className="text-amber-700">We source and deliver it.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Operating without physical showroom overhead allows us to deliver competitive pricing, genuine auction grade transparency, and customized vehicle searches tailored to your exact budget.
            </p>
          </div>

          {/* 4 Square Steps Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sourcingSteps.map((item, idx) => {
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

                    <h3 className="text-lg font-bold text-neutral-950 group-hover:text-amber-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-amber-800 font-bold">
                    <span>Verified Process</span>
                    <FaCheck className="text-[10px] text-amber-600" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= 3. SOURCING PILLARS & BRAND FOCUS ================= */}
      <section className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-10 bg-amber-600" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-amber-700">
                  Vehicle Services
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Imported recondition. <br />
                <span className="text-amber-700">Quality used cars.</span>
              </h2>

              <p className="mt-6 text-sm sm:text-base text-neutral-600 leading-relaxed">
                Whether you are seeking a fresh, high-grade Japanese reconditioned SUV or a carefully vetted pre-owned family vehicle, Sampan Auto bridges the gap with professional sourcing, mechanical validation, and comprehensive paperwork support.
              </p>

              <div className="mt-6">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-950 mb-3">
                  Popular Brands We Source &amp; Deliver:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {brandTags.map((brand, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-mono font-medium rounded-none"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollTo("contact")}
                  className="inline-flex items-center gap-2 rounded-none bg-[#111318] hover:bg-amber-800 text-white px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] transition-colors shadow-sm cursor-pointer"
                >
                  <span>Request Vehicle Sourcing</span>
                  <FiArrowRight className="text-xs" />
                </button>

                <a
                  href="https://www.facebook.com/sampandhaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-none border border-amber-700 text-amber-900 hover:bg-amber-50 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] transition-colors cursor-pointer"
                >
                  <FaFacebookF className="text-xs" />
                  <span>See Recent Deliveries</span>
                </a>
              </div>
            </div>

            {/* 3 Value Cards */}
            <div className="grid gap-4 sm:grid-cols-1">
              <div className="border border-neutral-200 bg-[#fdfcfa] p-6 rounded-none shadow-sm hover:border-amber-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0 rounded-none">
                    <FaCar className="text-base" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-950">
                      Japanese Auction Pre-Orders
                    </h3>
                    <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                      Direct access to certified USS, CAA, and TAA auction systems in Japan. Live inspection sheet verification and genuine odometer verification.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-neutral-200 bg-[#fdfcfa] p-6 rounded-none shadow-sm hover:border-amber-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0 rounded-none">
                    <FaShieldAlt className="text-base" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-950">
                      Verified Pre-Owned Cars
                    </h3>
                    <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                      Every used car undergoes comprehensive engine, transmission, body panel, and chassis inspections to ensure complete peace of mind.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-neutral-200 bg-[#fdfcfa] p-6 rounded-none shadow-sm hover:border-amber-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0 rounded-none">
                    <FaFileContract className="text-base" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-950">
                      Complete Customs &amp; Registration
                    </h3>
                    <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                      Full turnkey handling of port customs clearance, tax tokens, fitness certificates, and BRTA digital registration smart cards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 4. FEATURED VEHICLE SHOWCASE ================= */}
      <section id="inventory" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#fcfbf9] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-10 bg-amber-600" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-amber-700">
                  Import Showcase
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Sourced vehicles. <br />
                <span className="text-amber-700">Popular import portfolio.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-500 leading-relaxed">
              A sample of premier Japanese reconditioned crossovers, SUVs, and luxury sedans available for bespoke import.
            </p>
          </div>

          {/* Square Image Grid (Zero Blank Space, Anchored Label Bars) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {vehicleShowcase.map((car) => (
              <article
                key={car.id}
                onClick={() => setSelectedImage(car.image)}
                className="group relative flex flex-col h-full rounded-none overflow-hidden bg-white border border-neutral-200 hover:border-amber-600 transition-all duration-300 hover:shadow-md cursor-pointer min-h-[360px]"
              >
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-amber-600 transition-all duration-500 group-hover:w-full z-20" />

                <div className="relative w-full flex-1 min-h-[220px] overflow-hidden bg-neutral-200">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 z-10">
                    <div className="flex items-end justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
                          {car.category}
                        </span>
                        <h4 className="text-white text-sm font-bold leading-snug truncate">
                          {car.name}
                        </h4>
                        <p className="text-xs text-neutral-300 mt-1 line-clamp-1">
                          {car.description}
                        </p>
                      </div>
                      <span className="shrink-0 inline-flex items-center gap-1.5 rounded-none bg-white text-neutral-950 font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 font-bold shadow-md group-hover:bg-amber-600 group-hover:text-white transition-colors">
                        <FaExpand className="text-[10px]" />
                        <span>View</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Lower label bar (Anchored at bottom, no empty vertical gap) */}
                <div className="p-4 bg-white border-t border-neutral-100 flex flex-col justify-between shrink-0 mt-auto">
                  <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                    <span className="text-amber-700 font-bold uppercase">
                      {car.category}
                    </span>
                    <span className="text-neutral-400">
                      {car.fuelType}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-neutral-900 truncate">
                    {car.name}
                  </h4>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 5. DIRECT SOURCING INQUIRY & CONTACT ================= */}
      <section id="contact" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#0c0d10] text-white border-b border-white/10">
        <div className="mx-auto max-w-[1440px]">

          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 border border-amber-500/40 bg-amber-950/70 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-amber-400 mb-4 rounded-none">
              <FaCar className="text-xs text-amber-400" />
              <span>Direct Sourcing &amp; Orders</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Order Your Next Vehicle
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              No showroom visit required. Contact our automotive sourcing desk directly via phone, WhatsApp, or through our active Facebook page.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Official Facebook Page */}
            <div className="bg-[#13151b] border border-white/10 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-[#1877F2]/20 border border-[#1877F2]/40 flex items-center justify-center text-[#1877F2] rounded-none">
                <FaFacebookF className="text-lg" />
              </div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
                Official Facebook
              </span>
              <h3 className="text-xl font-bold text-white">
                Sampan Auto Facebook
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-mono">
                facebook.com/sampandhaka
              </p>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Browse our real-time vehicle uploads, live import sheets, customer delivery stories, and direct messages.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.facebook.com/sampandhaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-none bg-[#1877F2] hover:bg-[#166fe5] text-white px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <FaFacebookF className="text-[10px]" />
                  <span>Visit Facebook Page</span>
                </a>
              </div>
            </div>

            {/* Card 2: Phone & WhatsApp Hotlines */}
            <div className="bg-[#13151b] border border-white/10 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 rounded-none">
                <FaPhoneAlt className="text-base" />
              </div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
                Direct Hotline
              </span>
              <h3 className="text-xl font-bold text-white">
                Automotive Sales Desk
              </h3>
              <div className="space-y-3 pt-1 text-sm text-neutral-300 font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-500">Phone:</span>
                  <a href="tel:+8801929918404" className="font-bold text-amber-400 hover:underline">
                    01929-918404
                  </a>
                </div>
                {/* <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-500">Alt:</span>
                  <a href="tel:+8801929918400" className="font-semibold text-amber-400 hover:underline">
                    +880 1929-918400
                  </a>
                </div> */}
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Call or message us on WhatsApp with your vehicle requirements for instant estimated landed quotes.
              </p>
              <div className="pt-2">
                <a
                  href="tel:+8801929918408"
                  className="inline-flex items-center gap-2 rounded-none bg-amber-600 hover:bg-amber-500 text-white px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <FaPhoneAlt className="text-[10px]" />
                  <span>Call Sales Desk</span>
                </a>
              </div>
            </div>

            {/* Card 3: Business Model Info */}
            <div className="bg-[#13151b] border border-white/10 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 rounded-none">
                <FaTruckLoading className="text-base" />
              </div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">
                Operating Format
              </span>
              <h3 className="text-xl font-bold text-white">
                Doorstep Delivery Model
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Operating digitally without a physical walk-in showroom. Every car is handpicked, imported, cleared through customs, and delivered directly to you.
              </p>
              <div className="pt-2 border-t border-white/10 text-xs font-mono text-neutral-400 space-y-1.5">
                <p>• Japanese Auction Pre-Orders</p>
                <p>• Verified Used Car Sourcing</p>
                <p>• Doorstep Vehicle Handover</p>
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
              alt="Sampan Auto Vehicle Preview"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* ================= 6. SQUARE MINIMAL FOOTER ================= */}
      <footer className="bg-white border-t border-neutral-200 px-6 py-12 sm:px-10 lg:px-16 text-neutral-600">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-neutral-950 mb-3">
                Sampan Auto
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-md">
                Automotive vehicle importer and dealer offering Japanese recondition pre-orders, verified used cars, and doorstep delivery across Bangladesh. A division of Sampan Group.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs font-mono">
                <li>
                  <button onClick={() => scrollTo("process")} className="hover:text-amber-700 transition-colors text-left">
                    How Sourcing Works
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("inventory")} className="hover:text-amber-700 transition-colors text-left">
                    Import Showcase
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("contact")} className="hover:text-amber-700 transition-colors text-left">
                    Order Inquiries
                  </button>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/sampandhaka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-700 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Facebook Page</span>
                    <FaExternalLinkAlt className="text-[9px]" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">
                Contact Desk
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-500 font-mono">
                <li>Dhaka, Bangladesh</li>
                <li>+880 1929-918408</li>
                <li>+880 1929-918400</li>
                <li>facebook.com/sampandhaka</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-mono">
            <p>
              © {new Date().getFullYear()} Sampan Auto. A Sampan Group Venture.
            </p>
            <div className="flex gap-6">
              <Link href="/our-divisions/automotive-fuel-mobility/sampan-filling-station" className="hover:text-amber-700 transition-colors">
                Sampan Filling Station
              </Link>
              <Link href="/our-divisions/automotive-fuel-mobility/sampan-lpg-filling-station" className="hover:text-amber-700 transition-colors">
                Sampan LPG Station
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
