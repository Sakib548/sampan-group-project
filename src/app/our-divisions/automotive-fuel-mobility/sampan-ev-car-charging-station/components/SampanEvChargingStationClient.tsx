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
    title: "Located at Sampan Highway Inn",
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
    image: "/images/our-divisions/express-highway-inn/sampan-mart.jpg",
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
              Upcoming electric vehicle charging hub next to Sampan Highway Inn at KM 74, Dhaka–Khulna Highway,Kashiani.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-xs">
              <button
                onClick={() => scrollTo("overview")}
                className="group inline-flex items-center justify-center gap-2 rounded-none bg-emerald-700 hover:bg-emerald-600 px-6 py-3 sm:px-7 sm:py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 shadow-lg shadow-emerald-950/40 cursor-pointer text-center"
              >
                <span>Station Overview</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo("nearby")}
                className="inline-flex items-center justify-center rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-6 py-3 sm:px-7 sm:py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer text-center"
              >
                Nearby Places
              </button>

              <a
                href={highwayInnFacebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-none border border-emerald-500/40 bg-emerald-900/30 hover:bg-emerald-800/60 hover:border-emerald-400 px-6 py-3 sm:px-7 sm:py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-emerald-300 hover:text-white transition-all duration-300 backdrop-blur-sm cursor-pointer text-center"
              >
                <FaFacebookF className="text-xs text-emerald-400" />
                <span>Facebook Page</span>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-amber-400 uppercase tracking-wider">Construction Ongoing</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Development Status</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-emerald-400 uppercase tracking-wider">Fast EV Hub</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Clean Mobility</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Dhaka–Khulna Highway</p>
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
              Designed to bring convenient, high-capacity vehicle charging to the Dhaka–Khulna Highway right next to Sampan Highway Inn in Kashiani.
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
              Positioned next to Sampan Highway Inn with comprehensive dining, refueling, shopping, and relaxation facilities along the Dhaka–Khulna Highway.
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

                  {/* <div className="absolute bottom-3 right-4 z-10">
                    <span className="inline-flex items-center rounded-none bg-white/10 backdrop-blur-md px-2.5 py-0.5 font-mono text-[10px] text-neutral-300">
                      {spot.driveTime}
                    </span>
                  </div> */}
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
      <section id="location" className="scroll-mt-20 py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#f7f9f7] text-[#1a1714] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 border border-emerald-600/40 bg-emerald-600/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-800 mb-4 rounded-none">
              <FaMapMarkerAlt className="text-xs text-emerald-700" />
              <span>Location &amp; Route Access</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              Visit Sampan EV Charging &amp; Highway Inn
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Located right next to Sampan Highway Inn at KM 74 on the Dhaka–Khulna Highway. Open 24/7 access planned for electric vehicles, passenger cars, and transit fleets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Station Details, Schedule & Contact */}
            <div className="flex flex-col gap-6 justify-between">
              {/* Card 1: Station Location & Address */}
              <div className="bg-white border border-neutral-300 p-6 sm:p-7 rounded-none shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 rounded-none shrink-0">
                    <FaMapMarkerAlt className="text-base" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
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
                  <span>Status: Construction Ongoing • Planned 24/7 Fast-Charging Bay</span>
                </p>
              </div>

              {/* Sub-grid: Direct Contact & Social */}
              <div className="grid sm:grid-cols-2 gap-6 flex-1">
                {/* Card 2: Contact Numbers */}
                <div className="bg-white border border-neutral-300 p-6 rounded-none shadow-sm flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 rounded-none">
                      <FaPhoneAlt className="text-sm" />
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                      Direct Inquiries
                    </span>
                    <h4 className="text-base font-bold text-neutral-950">
                      Complex Desk
                    </h4>
                    <div className="text-xs text-neutral-700 space-y-1">
                      <a href="tel:+8801929918408" className="font-mono font-bold text-emerald-700 hover:underline block text-sm">
                        +880 1929-918408
                      </a>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-none bg-emerald-700 hover:bg-emerald-600 text-white px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center"
                  >
                    <FaPhoneAlt className="text-[10px]" />
                    <span>Call Complex Desk</span>
                  </Link>
                </div>

                {/* Card 3: Development Status */}
                <div className="bg-white border border-neutral-300 p-6 rounded-none shadow-sm flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 rounded-none">
                      <FaClock className="text-sm" />
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
                      Site Timeline
                    </span>
                    <h4 className="text-base font-bold text-neutral-950">
                      Development Status
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Civil works and dedicated high-voltage electrical grid setup are underway for fast DC vehicle charging.
                    </p>
                  </div>
                  <div className="inline-flex items-center justify-center gap-2 rounded-none bg-amber-600 text-white px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-center select-none shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span>Construction Ongoing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 50% Interactive Google Map routing to Sampan Highway Inn */}
            <div className="border border-neutral-300 bg-white p-2 sm:p-3 shadow-sm flex flex-col h-full min-h-[420px] lg:min-h-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-3 py-2.5 mb-2 border-b border-neutral-200">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-700 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse shrink-0" />
                  <span className="font-bold text-neutral-900 uppercase tracking-wider shrink-0">Route to:</span>
                  <span className="truncate">Sampan Highway Inn Restaurant &amp; Party Centre</span>
                </div>
                <a
                  href={highwayInnDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-emerald-800 hover:text-emerald-950 transition-colors shrink-0"
                >
                  <FaDirections className="text-xs text-emerald-700" />
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

      {/* Duplicate local footer removed: Global site layout renders footer */}

    </main>
  );
}
