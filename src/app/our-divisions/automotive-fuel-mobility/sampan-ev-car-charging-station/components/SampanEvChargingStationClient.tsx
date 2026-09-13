"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaBolt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaExpand,
  FaTimes,
  FaShieldAlt,
  FaCar,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const evImage = "/images/our-divisions/express-highway-inn/6.EV-Car-Charging.png";

const plannedFeatures = [
  {
    title: "High-Speed DC Fast Charging",
    type: "Rapid Power",
    description:
      "Designed for quick transit charging, providing high-output DC charging so EV drivers can recharge during a quick highway stop.",
    icon: FaBolt,
  },
  {
    title: "Universal Vehicle Compatibility",
    type: "Standard Connectors",
    description:
      "Planned support for standard European/Asian CCS2 and Type-2 connectors to serve private EVs, SUVs, and electric fleet vehicles.",
    icon: FaCar,
  },
  {
    title: "Located at Highway Inn Complex",
    type: "Highway Hub",
    description:
      "Situated next to Sampan Highway Inn, allowing travelers to dine, rest, and shop while their vehicle charges safely.",
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
    badge: "Adjacent / Next Door",
    driveTime: "Short Walk",
    image: "/images/our-divisions/sampan-highway-inn/heromain2.jpg",
    description:
      "Flagship highway hotel, multi-cuisine dining hall, prayer facilities, and 24/7 traveler rest stop.",
    link: "/our-divisions/hospitality-highway-travel/sampan-highway-inn",
  },
  {
    id: "filling-station",
    name: "Sampan Filling Station",
    type: "Automotive & Fuel",
    badge: "Highway Complex",
    driveTime: "Same Complex",
    image: "/images/our-divisions/sampan-filling-station/hero.jpeg",
    description:
      "24/7 digital-calibrated Octane 95 and Diesel dispensing with dedicated commercial vehicle bays.",
    link: "/our-divisions/automotive-fuel-mobility/sampan-filling-station",
  },
  {
    id: "lpg-station",
    name: "Sampan LPG Station",
    type: "Clean Autogas",
    badge: "In Complex",
    driveTime: "Same Complex",
    image: "/images/our-divisions/lpg-filling-station/hero.jpeg",
    description:
      "24/7 high-pressure Auto LPG autogas dispensing station for highway vehicles and private cars.",
    link: "/our-divisions/automotive-fuel-mobility/sampan-lpg-filling-station",
  },
  {
    id: "sampan-mart",
    name: "Sampan Mart",
    type: "24/7 Super Shop",
    badge: "In Complex",
    driveTime: "In Complex",
    image: "/images/our-divisions/sampan-mart/Sampan-Mart.jpg",
    description:
      "24/7 retail super shop stocked with travel essentials, groceries, beverages, and chilled snacks.",
    link: "/our-divisions/retail-super-shops/sampan-mart",
  },
  {
    id: "sweet-box",
    name: "Sampan Sweet Box",
    type: "Artisanal Bengali Sweets",
    badge: "In Complex",
    driveTime: "In Complex",
    image: "/images/our-divisions/sampan-sweet-box/DSC00468.JPG",
    description:
      "Authentic traditional mishti, fresh chhana sweets, celebration gift boxes, and travel refreshments.",
    link: "/our-divisions/retail-super-shops/sampan-sweet-box",
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
];

export default function SampanEvChargingStationClient() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#fcfbf9] text-[#1a1714] selection:bg-emerald-700 selection:text-white">

      {/* ================= 1. HERO SECTION (NO EYEBROW / COMPACT) ================= */}
      <section className="relative min-h-[65vh] lg:min-h-[75vh] flex items-center justify-center overflow-hidden bg-[#0c120f] text-white pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src={evImage}
            alt="Sampan EV Car Charging Facility"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/35" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-2 pb-8 lg:pb-12">
          <div className="max-w-4xl space-y-5 sm:space-y-6">

            {/* Headline */}
            <h1 className="text-[clamp(2.4rem,4.8vw,4.2rem)] font-bold tracking-tight text-white leading-[0.98]">
              Sampan <br />
              <span className="text-emerald-400 block mt-1">
                EV Charging Station
              </span>
            </h1>

            {/* Shortened Subheadline */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl font-light tracking-wide border-l-2 border-emerald-500/80 pl-4">
              Upcoming electric vehicle charging hub next to Sampan Highway Inn at KM 74, Dhaka–Khulna Highway, Gopalganj.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("overview")}
                className="group inline-flex items-center justify-center gap-2 rounded-none bg-emerald-700 hover:bg-emerald-600 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-lg shadow-emerald-950/40 cursor-pointer"
              >
                <span>Station Overview</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo("nearby")}
                className="inline-flex items-center justify-center rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                Nearby Places
              </button>

              <button
                onClick={() => scrollTo("location")}
                className="inline-flex items-center justify-center rounded-none border border-emerald-500/40 bg-emerald-950/30 hover:bg-emerald-900/60 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                Location &amp; Inquiries
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-amber-400 uppercase tracking-wider">Opening Soon</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Under Development</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-emerald-400 uppercase tracking-wider">Fast EV Hub</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Clean Mobility</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Gopalganj</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">KM 74 Highway</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Highway Inn</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Next Door Facility</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. OVERVIEW & PLANNED INFRASTRUCTURE ================= */}
      <section id="overview" className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#fcfbf9] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Modern electric mobility. <br />
                <span className="text-emerald-700">Planned highway charging hub.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Designed to bring convenient, high-capacity vehicle charging to the Dhaka–Khulna Highway right next to Sampan Highway Inn in Gopalganj.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-stretch">
            {/* Visual Preview Card */}
            <div className="lg:col-span-5 flex flex-col">
              <div
                onClick={() => setLightboxOpen(true)}
                className="group relative flex-1 min-h-[300px] border border-neutral-200 bg-black rounded-none overflow-hidden cursor-pointer"
              >
                <Image
                  src={evImage}
                  alt="Planned EV Charging Facility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                    Facility Preview
                  </span>
                  <p className="text-white text-base font-bold mt-1">
                    EV Charging Infrastructure Layout
                  </p>
                  <p className="text-neutral-300 text-xs mt-1">
                    Planned charging bays located next to Sampan Highway Inn.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-mono text-emerald-300 font-bold">
                    <FaExpand className="text-xs" />
                    <span>Click to Enlarge</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Planned Features Cards */}
            <div className="lg:col-span-7 grid gap-4 sm:grid-cols-1">
              {plannedFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="border border-neutral-200 bg-white p-6 sm:p-7 rounded-none hover:border-emerald-600 transition-colors duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 shrink-0 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 rounded-none">
                        <Icon className="text-base" />
                      </div>
                      <div className="flex-1">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                          {feat.type}
                        </span>
                        <h3 className="text-lg font-bold text-neutral-950">
                          {feat.title}
                        </h3>
                        <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ================= 3. NEARBY SISTER CONCERNS (NO METERS/KM) ================= */}
      <section id="nearby" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#0c120f] text-white border-b border-white/10 relative overflow-hidden">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Nearby at This Location
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Positioned next to Sampan Highway Inn with comprehensive dining, refueling, shopping, and relaxation facilities in Gopalganj.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nearbySpots.map((spot) => (
              <article
                key={spot.id}
                className="group relative flex flex-col h-full rounded-none overflow-hidden bg-[#121915] border border-white/10 hover:border-emerald-500/60 transition-all duration-300"
              >
                <div className="relative h-52 w-full overflow-hidden bg-neutral-900 shrink-0">
                  <Image
                    src={spot.image}
                    alt={spot.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121915] via-transparent to-black/30" />

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

      {/* ================= 4. LOCATION & INQUIRIES ================= */}
      <section id="location" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#f7f9f7] text-[#1a1714] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              Location &amp; Inquiries
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Located right next to Sampan Highway Inn at KM 74 on the Dhaka–Khulna Highway in Gopalganj.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Address */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 rounded-none">
                <FaMapMarkerAlt className="text-lg" />
              </div>
              <h3 className="text-xl font-bold text-neutral-950">
                EV Charging Site
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-mono">
                Next to Sampan Highway Inn <br />
                KM 74, Dhaka–Khulna Highway <br />
                Gopalganj, Bangladesh
              </p>
              <p className="pt-2 text-[11px] text-neutral-400 font-mono border-t border-neutral-100">
                Direct highway access
              </p>
            </div>

            {/* Card 2: Status */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 rounded-none">
                <FaClock className="text-base" />
              </div>
              <h3 className="text-xl font-bold text-neutral-950">
                Development Status
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-mono">
                Opening Soon <br />
                Infrastructure Under Setup <br />
                Planned 24/7 Access
              </p>
              <p className="pt-2 text-[11px] text-amber-700 font-mono border-t border-neutral-100">
                Haven&apos;t opened yet
              </p>
            </div>

            {/* Card 3: Complex Desk Inquiries */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 rounded-none">
                <FaPhoneAlt className="text-base" />
              </div>
              <h3 className="text-xl font-bold text-neutral-950">
                General Inquiries
              </h3>
              <div className="pt-1 text-sm text-neutral-700">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-neutral-400">Desk:</span>
                  <a href="tel:+8801929918408" className="font-mono font-bold text-emerald-700 hover:underline">
                    +880 1929-918408
                  </a>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href="tel:+8801929918408"
                  className="inline-flex items-center gap-2 rounded-none bg-emerald-700 hover:bg-emerald-600 text-white px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <FaPhoneAlt className="text-[10px]" />
                  <span>Call Complex Desk</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Modal (Square Style) */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-in fade-in"
        >
          <button
            onClick={() => setLightboxOpen(false)}
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
              src={evImage}
              alt="Sampan EV Charging Facility Layout"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* ================= 5. SQUARE MINIMAL FOOTER ================= */}
      <footer className="bg-white border-t border-neutral-200 px-6 py-12 sm:px-10 lg:px-16 text-neutral-600">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-neutral-950 mb-3">
                Sampan EV Charging Station
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-md">
                Upcoming electric vehicle charging hub next to Sampan Highway Inn on the Dhaka–Khulna Highway in Gopalganj. A Sampan Group initiative.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs font-mono">
                <li>
                  <button onClick={() => scrollTo("overview")} className="hover:text-emerald-700 transition-colors text-left">
                    Hub Overview
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("nearby")} className="hover:text-emerald-700 transition-colors text-left">
                    Nearby Places
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
                <li>Next to Sampan Highway Inn</li>
                <li>KM 74, Dhaka–Khulna Highway, Gopalganj</li>
                <li>Status: Opening Soon</li>
                <li>+880 1929-918408</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-mono">
            <p>
              © {new Date().getFullYear()} Sampan EV Charging Station. A Sampan Group Venture.
            </p>
            <div className="flex gap-6">
              <Link href="/our-divisions/hospitality-highway-travel/sampan-highway-inn" className="hover:text-emerald-700 transition-colors">
                Sampan Highway Inn
              </Link>
              <Link href="/our-divisions/automotive-fuel-mobility/sampan-filling-station" className="hover:text-emerald-700 transition-colors">
                Sampan Filling Station
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
