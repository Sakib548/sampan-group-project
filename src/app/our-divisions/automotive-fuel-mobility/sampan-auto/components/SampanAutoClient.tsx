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
  FaMapMarkerAlt,
  FaCamera,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { carStockList, CarStockItem } from "../data/carStockList";

// Hero Background: Authentic showroom banner from sampan-auto folder
const heroBackground = "/images/our-divisions/sampan-auto/Website-Banner-2.jpg";

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
    title: "Doorstep Delivery & After-Sales",
    description:
      "Your vehicle is delivered directly to your doorstep in pristine condition with complete documentation, warranty options, and servicing guidance.",
    icon: FaTruckLoading,
  },
];

export default function SampanAutoClient() {
  const [selectedCar, setSelectedCar] = useState<CarStockItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [onlyWithPhotos, setOnlyWithPhotos] = useState<boolean>(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredCars = carStockList.filter((car) => {
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      query === "" ||
      car.model.toLowerCase().includes(query) ||
      car.subModel.toLowerCase().includes(query) ||
      car.chassis.toLowerCase().includes(query) ||
      car.engine.toLowerCase().includes(query) ||
      car.color.toLowerCase().includes(query) ||
      car.year.toString().includes(query);

    const matchesCategory =
      selectedCategory === "all" || car.category === selectedCategory;

    const matchesLocation =
      selectedLocation === "all" || car.location === selectedLocation;

    const matchesPhoto = !onlyWithPhotos || Boolean(car.image);

    return matchesSearch && matchesCategory && matchesLocation && matchesPhoto;
  });

  const suvCount = carStockList.filter((c) => c.category === "suv-crossover").length;
  const mpvCount = carStockList.filter((c) => c.category === "mpv-van").length;
  const sedanCount = carStockList.filter((c) => c.category === "sedan-wagon").length;
  const showroomCount = carStockList.filter((c) => c.location === "Showroom").length;
  const portCount = carStockList.filter((c) => c.location === "Port").length;
  const upcomingCount = carStockList.filter((c) => c.location === "Upcoming" || c.location === "In Transit").length;

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

            {/* Headline */}
            <h1 className="text-[clamp(2.4rem,4.8vw,4.2rem)] font-bold tracking-tight text-white leading-[0.98]">
              Sampan <br />
              <span className="text-amber-400 block mt-1">
                Auto
              </span>
            </h1>

            {/* Subheadline: Clear explanation of business model */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl font-light tracking-wide border-l-2 border-amber-500/80 pl-4">
              Specializing in imported Japanese reconditioned vehicles and quality pre-owned cars. Explore our live sales stock currently in port and showroom, or place a bespoke on-demand import order.
            </p>

            {/* Square Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("inventory")}
                className="group inline-flex items-center justify-center gap-2 rounded-none bg-amber-600 hover:bg-amber-500 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-lg shadow-amber-950/40 cursor-pointer"
              >
                <span>Sales Stock ({carStockList.length} Cars)</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-none border border-amber-500/60 bg-amber-500/15 hover:bg-amber-600 hover:border-amber-600 hover:text-white px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-300 transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                <span>Get a Car</span>
                <FiArrowRight className="text-xs" />
              </Link>

              <button
                onClick={() => scrollTo("process")}
                className="inline-flex items-center justify-center rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                How Sourcing Works
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
                <p className="text-sm sm:text-base font-bold text-amber-400 uppercase tracking-wider">Imported</p>
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
                    <span>Step {idx + 1}</span>
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

      {/* ================= 4. CURRENT VEHICLE STOCK & INCOMING UNITS ================= */}
      <section id="inventory" className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#fcfbf9] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <span className="h-px w-10 bg-amber-600" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-amber-700">
                  Stock Inventory
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Current Stock &amp; <br />
                <span className="text-amber-700">Incoming Shipments</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-600 leading-relaxed font-mono">
              Live stock listing including port arrivals, showroom units, and verified pre-orders. Contact us with vehicle chassis number for immediate booking.
            </p>
          </div>

          {/* Filter & Search Bar */}
          <div className="bg-white border border-neutral-200 p-5 mb-8 shadow-xs space-y-4">
            {/* Row 1: Search Box & Location Status Pills */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              {/* Search Box */}
              <div className="relative flex-1 max-w-xl">
                <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 text-xs" />
                <input
                  type="text"
                  placeholder="Search model, submodel, chassis, engine, color..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#fdfcfa] border border-neutral-200 pl-9 pr-8 py-2.5 text-xs text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-amber-600 rounded-none font-mono"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 text-xs cursor-pointer"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>

              {/* Location Filter */}
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-400 mr-1">
                  Location:
                </span>
                <button
                  onClick={() => setSelectedLocation("all")}
                  className={`px-3 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider rounded-none cursor-pointer border ${selectedLocation === "all"
                    ? "bg-[#111318] text-white border-[#111318]"
                    : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400"
                    }`}
                >
                  All ({carStockList.length})
                </button>
                <button
                  onClick={() => setSelectedLocation(selectedLocation === "Showroom" ? "all" : "Showroom")}
                  className={`px-3 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider rounded-none cursor-pointer border ${selectedLocation === "Showroom"
                    ? "bg-amber-600 text-white border-amber-600"
                    : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400"
                    }`}
                >
                  Showroom ({showroomCount})
                </button>
                <button
                  onClick={() => setSelectedLocation(selectedLocation === "Port" ? "all" : "Port")}
                  className={`px-3 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider rounded-none cursor-pointer border ${selectedLocation === "Port"
                    ? "bg-neutral-900 text-white border-neutral-900"
                    : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400"
                    }`}
                >
                  Port ({portCount})
                </button>
                {upcomingCount > 0 && (
                  <button
                    onClick={() => setSelectedLocation(selectedLocation === "Upcoming" ? "all" : "Upcoming")}
                    className={`px-3 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider rounded-none cursor-pointer border ${selectedLocation === "Upcoming"
                      ? "bg-emerald-700 text-white border-emerald-700"
                      : "bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400"
                      }`}
                  >
                    Upcoming ({upcomingCount})
                  </button>
                )}
              </div>
            </div>

            {/* Row 2: Category Tabs & Result Count */}
            <div className="pt-3 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { id: "all", label: `All Vehicles (${carStockList.length})` },
                  { id: "suv-crossover", label: `SUV & Crossover (${suvCount})` },
                  { id: "mpv-van", label: `MPV & Minivan (${mpvCount})` },
                  { id: "sedan-wagon", label: `Sedan & Wagon (${sedanCount})` },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`px-3.5 py-2 text-[11px] font-mono font-bold uppercase tracking-wider transition-colors rounded-none cursor-pointer border ${selectedCategory === tab.id
                      ? "bg-[#111318] text-white border-[#111318]"
                      : "bg-neutral-100 text-neutral-700 border-neutral-200 hover:bg-neutral-200"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Active Filter Summary */}
              <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
                <span>
                  Showing <strong className="text-neutral-900">{filteredCars.length}</strong> of {carStockList.length} vehicles
                </span>
                {(searchQuery || selectedCategory !== "all" || selectedLocation !== "all") && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("all");
                      setSelectedLocation("all");
                    }}
                    className="text-amber-700 hover:underline font-bold text-[11px] cursor-pointer"
                  >
                    Reset filters
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Vehicle Grid */}
          {filteredCars.length === 0 ? (
            <div className="text-center py-16 bg-white border border-neutral-200 p-8">
              <FaCar className="mx-auto text-3xl text-neutral-300 mb-3" />
              <h3 className="text-base font-bold text-neutral-800">No vehicles match your criteria</h3>
              <p className="text-xs text-neutral-500 mt-1 font-mono">
                Try clearing search filters or request custom sourcing.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setSelectedLocation("all");
                  setOnlyWithPhotos(false);
                }}
                className="mt-4 px-4 py-2 bg-neutral-900 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-none cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredCars.map((car) => (
                <article
                  key={car.sl}
                  onClick={() => setSelectedCar(car)}
                  className="group relative flex flex-col h-full rounded-none overflow-hidden bg-white border border-neutral-200 hover:border-amber-600 transition-all duration-300 hover:shadow-md cursor-pointer"
                >
                  <div className="absolute top-0 left-0 h-[3px] w-0 bg-amber-600 transition-all duration-500 group-hover:w-full z-20" />

                  {/* Top Image or Authentic Placeholder */}
                  <div className="relative w-full h-[200px] overflow-hidden bg-neutral-100 flex items-center justify-center">
                    {car.image ? (
                      <>
                        <Image
                          src={car.image}
                          alt={`${car.model} ${car.subModel}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-3 right-3 z-10">
                          <span className="inline-flex items-center gap-1 bg-black/75 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 font-bold uppercase">
                            <FaCamera className="text-[9px]" />
                            <span>Photo</span>
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="text-center p-6 space-y-2">
                        <div className="w-12 h-12 mx-auto bg-neutral-200/70 border border-neutral-300 flex items-center justify-center text-neutral-400">
                          <FaCar className="text-lg" />
                        </div>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 block">
                          Stock Spec Sheet
                        </span>
                        <span className="font-mono text-[11px] font-bold text-neutral-700 block">
                          {car.chassis}
                        </span>
                      </div>
                    )}

                    {/* Location Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span
                        className={`inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 font-bold uppercase ${car.location === "Showroom"
                          ? "bg-amber-600 text-white"
                          : car.location === "Upcoming" || car.location === "In Transit"
                            ? "bg-emerald-700 text-white"
                            : "bg-neutral-900 text-white"
                          }`}
                      >
                        <FaMapMarkerAlt className="text-[8px]" />
                        <span>{car.location}</span>
                      </span>
                    </div>

                    {/* Auction Grade Badge */}
                    <div className="absolute bottom-3 left-3 z-10">
                      <span className="bg-white/95 text-neutral-900 border border-neutral-200 text-[10px] font-mono px-2 py-0.5 font-bold">
                        Grade {car.grade}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1">
                        <span className="text-amber-700 font-bold uppercase">
                          SL #{car.sl.toString().padStart(2, "0")}
                        </span>
                        <span>{car.year} • {car.color}</span>
                      </div>

                      <h4 className="text-base font-bold text-neutral-950 leading-snug group-hover:text-amber-700 transition-colors line-clamp-1">
                        {car.model}
                      </h4>
                      <p className="text-xs text-neutral-600 font-medium line-clamp-1">
                        {car.subModel}
                      </p>

                      <div className="mt-2.5 pt-2.5 border-t border-neutral-100 grid grid-cols-2 gap-2 text-[11px] font-mono text-neutral-500">
                        <div>
                          <span className="block text-[10px] text-neutral-400 uppercase">Mileage</span>
                          <span className="font-semibold text-neutral-700">{car.mileage}</span>
                        </div>
                        <div>
                          <span className="block text-[10px] text-neutral-400 uppercase">Chassis</span>
                          <span className="font-semibold text-neutral-700 truncate block" title={car.chassis}>
                            {car.chassis}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Price & Action Row */}
                    <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                      {/* <div>
                        <span className="block text-[10px] font-mono text-neutral-400 uppercase">Price (BDT)</span>
                        <span className="font-mono text-sm font-bold text-neutral-950">
                          {car.isSold ? (
                            <span className="text-neutral-400 line-through">Pre-Sold</span>
                          ) : car.priceLakh.toLowerCase().includes("call") || car.priceLakh.toLowerCase().includes("request") ? (
                            <span className="text-amber-800 text-xs">{car.priceLakh}</span>
                          ) : (
                            <span>{car.priceLakh} Lac</span>
                          )}
                        </span>
                      </div> */}

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCar(car);
                        }}
                        className="inline-flex items-center gap-1 bg-neutral-100 group-hover:bg-amber-600 group-hover:text-white text-neutral-800 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider transition-colors rounded-none cursor-pointer"
                      >
                        <span>Details</span>
                        <FiArrowRight className="text-[10px]" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

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

      {/* Vehicle Details & Image Lightbox Modal */}
      {selectedCar && (
        <div
          onClick={() => setSelectedCar(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-white border border-neutral-300 shadow-2xl rounded-none my-8 overflow-hidden"
          >
            {/* Modal Header */}
            <div className="bg-[#111318] text-white px-6 py-4 flex items-center justify-between border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-amber-500 uppercase tracking-widest">
                  SL #{selectedCar.sl.toString().padStart(2, "0")} • {selectedCar.categoryLabel}
                </span>
              </div>
              <button
                onClick={() => setSelectedCar(null)}
                className="text-neutral-400 hover:text-white p-1 rounded-none transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <FaTimes className="text-base" />
              </button>
            </div>

            {/* Modal Content Grid */}
            <div className="grid md:grid-cols-12 gap-0">
              {/* Image Preview / Placeholder */}
              <div className="md:col-span-6 bg-neutral-950 relative min-h-[260px] md:min-h-[380px] flex items-center justify-center">
                {selectedCar.image ? (
                  <Image
                    src={selectedCar.image}
                    alt={`${selectedCar.model} ${selectedCar.subModel}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                  />
                ) : (
                  <div className="text-center p-8 space-y-3 text-neutral-400">
                    <div className="w-16 h-16 mx-auto bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-400">
                      <FaCar className="text-2xl" />
                    </div>
                    <p className="font-mono text-xs uppercase tracking-wider">
                      Factory / Auction Spec Unit
                    </p>
                    <p className="text-xs text-neutral-500 font-mono">
                      Chassis: {selectedCar.chassis}
                    </p>
                    <p className="text-[11px] text-amber-500 font-mono">
                      Engine verification sheet available on request
                    </p>
                  </div>
                )}
              </div>

              {/* Vehicle Full Details */}
              <div className="md:col-span-6 p-6 flex flex-col justify-between bg-white">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="bg-amber-100 text-amber-900 border border-amber-300 font-mono text-[10px] font-bold px-2 py-0.5 uppercase">
                        {selectedCar.location}
                      </span>
                      <span className="bg-neutral-100 text-neutral-800 border border-neutral-300 font-mono text-[10px] font-bold px-2 py-0.5">
                        Grade {selectedCar.grade}
                      </span>
                      <span className="bg-neutral-100 text-neutral-800 border border-neutral-300 font-mono text-[10px] font-bold px-2 py-0.5">
                        {selectedCar.year} Model
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-950">
                      {selectedCar.model}
                    </h3>
                    <p className="text-xs text-neutral-600 font-medium">
                      {selectedCar.subModel}
                    </p>
                  </div>

                  {/* Spec Table */}
                  <div className="border border-neutral-200 divide-y divide-neutral-200 text-xs font-mono">
                    <div className="grid grid-cols-3 p-2 bg-neutral-50">
                      <span className="text-neutral-500 uppercase text-[10px]">Chassis No.</span>
                      <span className="col-span-2 font-bold text-neutral-900">{selectedCar.chassis}</span>
                    </div>
                    <div className="grid grid-cols-3 p-2">
                      <span className="text-neutral-500 uppercase text-[10px]">Engine No.</span>
                      <span className="col-span-2 font-bold text-neutral-900">{selectedCar.engine}</span>
                    </div>
                    <div className="grid grid-cols-3 p-2 bg-neutral-50">
                      <span className="text-neutral-500 uppercase text-[10px]">Color / Odo</span>
                      <span className="col-span-2 text-neutral-900">{selectedCar.color} • {selectedCar.mileage}</span>
                    </div>
                    <div className="grid grid-cols-3 p-2">
                      <span className="text-neutral-500 uppercase text-[10px]">L/C Reference</span>
                      <span className="col-span-2 text-neutral-900">{selectedCar.lcNo}</span>
                    </div>
                  </div>

                  {/* Features */}
                  {selectedCar.features && (
                    <div className="text-xs">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-500 block mb-1">
                        Features &amp; Options:
                      </span>
                      <p className="text-neutral-700 text-xs leading-relaxed bg-[#fbfaf8] border border-neutral-200 p-2.5 font-mono text-[11px]">
                        {selectedCar.features}
                      </p>
                    </div>
                  )}

                  {/* Price */}
                  <div className="pt-2 border-t border-neutral-200 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] font-mono text-neutral-400 uppercase">Stock Price</span>
                      <span className="text-xl font-bold font-mono text-neutral-950">
                        {selectedCar.isSold ? (
                          <span className="text-neutral-400">Pre-Sold</span>
                        ) : selectedCar.priceLakh.toLowerCase().includes("call") || selectedCar.priceLakh.toLowerCase().includes("request") ? (
                          <span className="text-amber-700">{selectedCar.priceLakh}</span>
                        ) : (
                          <span>BDT {selectedCar.priceLakh} Lac</span>
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-5 border-t border-neutral-200 flex flex-wrap gap-2 mt-4">
                  <a
                    href={`tel:+8801929918408`}
                    className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 bg-[#111318] hover:bg-amber-700 text-white py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors rounded-none text-center"
                  >
                    <FaPhoneAlt className="text-[10px]" />
                    <span>Call Hotline</span>
                  </a>
                  <a
                    href="https://www.facebook.com/sampandhaka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 border border-neutral-300 hover:border-neutral-900 text-neutral-800 px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors rounded-none text-center"
                  >
                    <FaFacebookF className="text-[11px]" />
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= 6. SQUARE MINIMAL FOOTER ================= */}


    </main>
  );
}
