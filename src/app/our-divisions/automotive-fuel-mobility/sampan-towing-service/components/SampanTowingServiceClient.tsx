"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaTruckPickup,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaExpand,
  FaTimes,
  FaCheck,
  FaShieldAlt,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const heroBackground =
  "/images/our-divisions/sampan-towing/car-recovery-vehicle-transporting-yellow-car.jpg";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "tow-1",
    title: "Highway Flatbed Vehicle Recovery",
    category: "Emergency Towing",
    image:
      "/images/our-divisions/sampan-towing/car-recovery-vehicle-transporting-yellow-car.jpg",
    description:
      "Reliable flatbed towing truck transporting broken-down vehicles safely along the highway corridor.",
  },
  {
    id: "tow-2",
    title: "On-Site Roadside Assistance Unit",
    category: "Recovery Vehicle",
    image: "/images/our-divisions/sampan-towing/upscalemedia-transformed-(7).jpg",
    description:
      "Rapid-response towing vehicle on standby at Sampan Highway Inn for highway breakdowns.",
  },
  {
    id: "tow-3",
    title: "Safe Transport & Secure Lashing",
    category: "Specialized Towing",
    image: "/images/our-divisions/sampan-towing/upscalemedia-transformed-(8).jpg",
    description:
      "Damage-free hydraulic loading and wheel tie-down security for private cars, SUVs, and commercial vans.",
  },
];

const serviceFeatures = [
  {
    name: "24/7 Emergency Highway Towing",
    type: "Round-the-Clock",
    description:
      "Immediate assistance for stranded travelers experiencing mechanical failure, flat tires, or highway emergencies.",
    icon: FaTruckPickup,
  },
  {
    name: "Stationed at Sampan Highway Inn",
    type: "Complex Service",
    description:
      "Stationed directly at Sampan Highway Inn for prompt dispatch across the Dhaka–Khulna Highway corridor.",
    icon: FaClock,
  },
  {
    name: "Zero-Damage Transport",
    type: "Professional Care",
    description:
      "Equipped with secure wheel lashing and hydraulic tilt-bed mechanisms for smooth, scratch-free vehicle transport.",
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
    badge: "Service Base Location",
    driveTime: "On-Site Base",
    image: "/images/our-divisions/sampan-highway-inn/heromain2.jpg",
    description:
      "Flagship highway hotel, multi-cuisine dining hall, prayer facilities, and 24/7 traveler rest stop where towing is stationed.",
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

export default function SampanTowingServiceClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#fcfbf9] text-[#1a1714] selection:bg-orange-600 selection:text-white">

      {/* ================= 1. HERO SECTION (NO EYEBROW / COMPACT) ================= */}
      <section className="relative min-h-[68vh] lg:min-h-[78vh] flex items-center justify-center overflow-hidden bg-[#110e0c] text-white pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBackground}
            alt="Sampan Towing Service Highway Truck"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-2 pb-8 lg:pb-12">
          <div className="max-w-4xl space-y-5 sm:space-y-6">

            {/* Headline */}
            <h1 className="text-[clamp(2.4rem,4.8vw,4.2rem)] font-bold tracking-tight text-white leading-[0.98]">
              Sampan <br />
              <span className="text-orange-400 block mt-1">
                Towing Service
              </span>
            </h1>

            {/* Shortened Subheadline */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl font-light tracking-wide border-l-2 border-orange-500/80 pl-4">
              24/7 highway emergency flatbed towing and recovery operated directly from Sampan Highway Inn (KM 74, Dhaka–Khulna Highway).
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="tel:+8801929918408"
                className="group inline-flex items-center justify-center gap-2 rounded-none bg-orange-600 hover:bg-orange-500 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-lg shadow-orange-950/40 cursor-pointer"
              >
                <FaPhoneAlt className="text-xs" />
                <span>Call Towing Hotline</span>
              </a>

              <button
                onClick={() => scrollTo("gallery")}
                className="inline-flex items-center justify-center rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                Service Photos
              </button>

              <button
                onClick={() => scrollTo("nearby")}
                className="inline-flex items-center justify-center rounded-none border border-orange-500/40 bg-orange-950/30 hover:bg-orange-900/60 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-orange-300 transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                Nearby Places
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="border-l-2 border-orange-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">24/7 On-Call</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Emergency Dispatch</p>
              </div>
              <div className="border-l-2 border-orange-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-orange-400 uppercase tracking-wider">Flatbed Tow</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Damage-Free</p>
              </div>
              <div className="border-l-2 border-orange-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Dhaka–Khulna Highway</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">KM 74 Highway</p>
              </div>
              <div className="border-l-2 border-orange-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Highway Inn</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Stationed Base</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. SERVICE OVERVIEW (NO EYEBROW) ================= */}
      <section id="overview" className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#fcfbf9] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Roadside peace of mind. <br />
                <span className="text-orange-700">Swift highway recovery.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Operating directly from Sampan Highway Inn to deliver dependable towing, recovery, and vehicle transit along the Dhaka–Khulna corridor.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {serviceFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col justify-between border border-neutral-200 bg-white p-6 sm:p-7 rounded-none hover:border-orange-600 hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="w-10 h-10 bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-700 rounded-none group-hover:bg-orange-600 group-hover:text-white transition-colors mb-6">
                      <Icon className="text-base" />
                    </div>

                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-orange-700 block mb-1">
                      {item.type}
                    </span>
                    <h3 className="text-lg font-bold text-neutral-950 group-hover:text-orange-700 transition-colors">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-orange-800 font-bold">
                    <span>Highway Inn Service</span>
                    <FaCheck className="text-[10px] text-orange-600" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= 3. PHOTO GALLERY (NO EYEBROW) ================= */}
      <section id="gallery" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Service Photos
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-500 leading-relaxed">
              Photographs of our recovery trucks, flatbed transporter, and highway towing service units.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {galleryItems.map((item) => (
              <article
                key={item.id}
                onClick={() => setSelectedImage(item.image)}
                className="group relative flex flex-col h-full rounded-none overflow-hidden bg-white border border-neutral-200 hover:border-orange-600 transition-all duration-300 hover:shadow-md cursor-pointer min-h-[340px]"
              >
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-orange-600 transition-all duration-500 group-hover:w-full z-20" />

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
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-orange-400 block mb-1">
                          {item.category}
                        </span>
                        <h4 className="text-white text-sm font-bold leading-snug truncate">
                          {item.title}
                        </h4>
                        <p className="text-xs text-neutral-300 mt-1 line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                      <span className="shrink-0 inline-flex items-center gap-1.5 rounded-none bg-white text-neutral-950 font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 font-bold shadow-md group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <FaExpand className="text-[10px]" />
                        <span>View</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white border-t border-neutral-100 flex items-center justify-between shrink-0 mt-auto">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-orange-700 font-bold block">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-neutral-900 truncate">
                      {item.title}
                    </h4>
                  </div>
                  <FaExpand className="text-xs text-neutral-400 group-hover:text-orange-600 transition-colors" />
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 4. NEARBY SISTER CONCERNS (NO METERS/KM) ================= */}
      <section id="nearby" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#110e0c] text-white border-b border-white/10 relative overflow-hidden">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Nearby at This Location
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Stationed within the Sampan Highway Inn complex alongside dining, petrol/diesel &amp; autogas fueling, lodging, and retail stores along the Dhaka–Khulna Highway.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nearbySpots.map((spot) => (
              <article
                key={spot.id}
                className="group relative flex flex-col h-full rounded-none overflow-hidden bg-[#181412] border border-white/10 hover:border-orange-500/60 transition-all duration-300"
              >
                <div className="relative h-52 w-full overflow-hidden bg-neutral-900 shrink-0">
                  <Image
                    src={spot.image}
                    alt={spot.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181412] via-transparent to-black/30" />

                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center rounded-none bg-black/80 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-orange-400 border border-orange-500/30">
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
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-orange-400 block mb-1">
                      {spot.type}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                      {spot.name}
                    </h3>
                    <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                      {spot.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <Link
                      href={spot.link}
                      className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-orange-400 hover:text-orange-300 transition-colors"
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

      {/* ================= 5. LOCATION & EMERGENCY DISPATCH ================= */}
      <section id="location" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#f7f9f7] text-[#1a1714] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              Service Base &amp; Emergency Hotline
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Based directly at Sampan Highway Inn at KM 74 on the Dhaka–Khulna Highway. Available 24 hours a day for immediate highway dispatch.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Service Base Address */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-700 rounded-none">
                <FaMapMarkerAlt className="text-lg" />
              </div>
              <h3 className="text-xl font-bold text-neutral-950">
                Service Stationed At
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-mono">
                Sampan Highway Inn <br />
                KM 74, Dhaka–Khulna Highway <br />
                Dhaka–Khulna Highway, Bangladesh
              </p>
              <p className="pt-2 text-[11px] text-neutral-400 font-mono border-t border-neutral-100">
                Direct highway response base
              </p>
            </div>

            {/* Card 2: Operating Schedule */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-700 rounded-none">
                <FaClock className="text-base" />
              </div>
              <h3 className="text-xl font-bold text-neutral-950">
                24/7 Availability
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-mono">
                24 Hours / 7 Days a Week <br />
                Immediate Highway Callout <br />
                365 Days Non-Stop
              </p>
              <p className="pt-2 text-[11px] text-neutral-400 font-mono border-t border-neutral-100">
                Rapid breakdown assistance
              </p>
            </div>

            {/* Card 3: Emergency Towing Hotline */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-700 rounded-none">
                <FaPhoneAlt className="text-base" />
              </div>
              <h3 className="text-xl font-bold text-neutral-950">
                Emergency Hotline
              </h3>
              <div className="pt-1 text-sm text-neutral-700">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-neutral-400">Call:</span>
                  <a href="tel:+8801929918408" className="font-mono font-bold text-orange-700 hover:underline">
                    +880 1929-918408
                  </a>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href="tel:+8801929918408"
                  className="inline-flex items-center gap-2 rounded-none bg-orange-600 hover:bg-orange-500 text-white px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <FaPhoneAlt className="text-[10px]" />
                  <span>Call For Towing</span>
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
              alt="Sampan Towing Service Preview"
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
                Sampan Towing Service
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-md">
                24/7 highway emergency flatbed towing and recovery service stationed at Sampan Highway Inn on the Dhaka–Khulna Highway.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs font-mono">
                <li>
                  <button onClick={() => scrollTo("overview")} className="hover:text-orange-700 transition-colors text-left">
                    Service Overview
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("gallery")} className="hover:text-orange-700 transition-colors text-left">
                    Service Photos
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("nearby")} className="hover:text-orange-700 transition-colors text-left">
                    Nearby Places
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("location")} className="hover:text-orange-700 transition-colors text-left">
                    Service Base
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">
                Service Base
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-500 font-mono">
                <li>Stationed at Sampan Highway Inn</li>
                <li>KM 74, Dhaka–Khulna Highway</li>
                <li>24/7 Emergency Dispatch</li>
                <li>+880 1929-918408</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-mono">
            <p>
              © {new Date().getFullYear()} Sampan Towing Service. A Sampan Group Venture.
            </p>
            <div className="flex gap-6">
              <Link href="/our-divisions/hospitality-highway-travel/sampan-highway-inn" className="hover:text-orange-700 transition-colors">
                Sampan Highway Inn
              </Link>
              <Link href="/our-divisions/automotive-fuel-mobility/sampan-filling-station" className="hover:text-orange-700 transition-colors">
                Sampan Filling Station
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
