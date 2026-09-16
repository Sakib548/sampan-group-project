"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaStore,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaExpand,
  FaTimes,
  FaCheck,
  FaCoffee,
  FaShoppingBag,
  FaShieldAlt,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

// Hero Background: Authentic banner from mini-sampan-super-shop
const heroBackground = "/images/our-divisions/mini-sampan-super-shop/Web-Banner-new.jpg";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "mini-1",
    title: "Express Storefront & Quick Display",
    category: "Storefront",
    image: "/images/our-divisions/mini-sampan-super-shop/Feature-Image.jpg",
    description: "Compact ~200 sq. ft. express retail kiosk at the Sampan Highway Inn Complex.",
  },
  {
    id: "mini-2",
    title: "Curated Snack & Beverage Shelves",
    category: "Express Aisle",
    image: "/images/our-divisions/mini-sampan-super-shop/Feature-Image-1.jpg",
    description: "High-density shelving organized for quick selection and rapid customer checkout.",
  },
  {
    id: "mini-3",
    title: "Chilled Drinks & Highway Refreshments",
    category: "Coolers",
    image: "/images/our-divisions/mini-sampan-super-shop/Feature-Image-4.jpg",
    description: "Cold beverages, mineral water, energy drinks, and packaged juices.",
  },
  {
    id: "mini-4",
    title: "Checkout Counter & Travel Essentials",
    category: "Point of Sale",
    image: "/images/our-divisions/mini-sampan-super-shop/Feature-Image-5.jpg",
    description: "Grab-and-go confectioneries, biscuits, personal care, and immediate road necessities.",
  },
  {
    id: "mini-5",
    title: "Kiosk Exterior & Complex Integration",
    category: "Highway Hub",
    image: "/images/our-divisions/mini-sampan-super-shop/Web-Banner-1.jpg",
    description: "Positioned right beside the highway dining and fueling facilities in Gopalganj.",
  },
];

// Product Category Highlights (Concise & Realistic)
const categoryHighlights = [
  {
    name: "Chilled Soft Drinks & Mineral Water",
    type: "Cold Beverages",
    description:
      "Chilled water, soft drinks, juices, and energy drinks ready for instant highway rehydration.",
    icon: FaCoffee,
    status: "Fresh & Chilled",
  },
  {
    name: "Roadside Snacks & Confectionery",
    type: "Quick Road Bites",
    description:
      "Crispy potato chips, wafers, bakery biscuits, cookies, and branded chocolate bars.",
    icon: FaShoppingBag,
    status: "Grab & Go",
  },
  {
    name: "Travel Toiletries & Personal Hygiene",
    type: "Journey Care",
    description:
      "Pocket hand sanitizers, wet wipes, facial tissues, oral care, soaps, and road-trip necessities.",
    icon: FaShieldAlt,
    status: "Always Available",
  },
  {
    name: "Quick Meals & Instant Sips",
    type: "Pantry Staples",
    description:
      "Instant cup noodles, tea bags, instant coffee sachets, and packaged dry breakfast biscuits.",
    icon: FaStore,
    status: "Instant Stock",
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
    image: "/images/our-divisions/sampan-highway-inn/hero.jpeg",
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
    id: "filling-station",
    name: "Sampan Filling Station",
    type: "Automotive & Fuel",
    badge: "Highway Complex",
    driveTime: "Nearby Fuel Bay",
    image: "/images/our-divisions/sampan-filling-station/hero.jpeg",
    description:
      "24/7 high-volume highway refuel, octane and diesel dispensers with dedicated heavy vehicle bays.",
    link: "/our-divisions/automotive-fuel-mobility/sampan-filling-station",
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
];

export default function MiniSampanClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#fcfbf9] text-[#1a1714] selection:bg-emerald-700 selection:text-white overflow-x-hidden w-full">

      {/* ================= 1. HERO SECTION ================= */}
      <section data-no-reveal className="relative min-h-0 sm:min-h-screen flex flex-col justify-start sm:justify-center overflow-hidden bg-[#0a120e] text-white pt-24 pb-12 sm:pt-28 sm:pb-20 border-b border-emerald-900/30">
        {/* Authentic Storefront Image with Light Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBackground}
            alt="Mini Sampan Super Shop"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/72 to-black/45" />

        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-0 sm:pt-2 pb-8 lg:pb-12">
          <div className="max-w-4xl space-y-5 sm:space-y-6">

            {/* Status Badge */}
            {/* <div className="inline-flex items-center gap-2 border border-emerald-500/40 bg-emerald-950/70 backdrop-blur-md px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-400 rounded-none">
              <FaClock className="text-xs text-emerald-400" />
              <span>~200 Sq. Ft. Express Super Shop</span>
            </div> */}

            {/* Headline */}
            <h1 className="text-[clamp(2.4rem,4.8vw,4.2rem)] font-bold tracking-tight text-white leading-[0.98]">
              Mini Sampan <br />
              <span className="text-emerald-400 block mt-1">
                Super Shop
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl font-light tracking-wide border-l-2 border-emerald-500/80 pl-4">
              A compact ~200 sq. ft. express convenience kiosk located at the Sampan Highway Inn Complex on the Dhaka–Khulna Highway (KM 74, Gopalganj). Perfectly curated for rapid grab-and-go refreshments, road snacks, and daily travel essentials.
            </p>

            {/* Square Action Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4 font-mono text-xs">
              <button
                onClick={() => scrollTo("overview")}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-none bg-emerald-600 hover:bg-emerald-500 px-7 py-3.5 sm:px-8 sm:py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-lg shadow-emerald-950/40 cursor-pointer text-center"
              >
                <span>Explore Kiosk</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo("gallery")}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-7 py-3.5 sm:px-8 sm:py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer text-center"
              >
                View Photos
              </button>

              <button
                onClick={() => scrollTo("nearby")}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-none border border-emerald-500/40 bg-emerald-900/30 hover:bg-emerald-800/60 px-7 py-3.5 sm:px-8 sm:py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 transition-all duration-300 backdrop-blur-sm cursor-pointer text-center"
              >
                Nearby Places
              </button>
            </div>

            {/* Quick Metrics (Square Cards) */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">~200 Sq Ft</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Express Footprint</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-emerald-400 uppercase tracking-wider">Grab &amp; Go</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Counter Checkout</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Gopalganj</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">KM 74, Highway</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Essentials</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Drinks &amp; Snacks</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. CONCEPT OVERVIEW & PILLARS ================= */}
      <section id="overview" className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#fcfbf9] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-emerald-600" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-700">
              01 • Express Concept
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Compact footprint. <br />
                <span className="text-emerald-700">Instant convenience.</span>
              </h2>

              <p className="mt-6 text-sm sm:text-base text-neutral-600 leading-relaxed">
                Mini Sampan Super Shop is tailored for maximum speed and simplicity. Covering roughly 200 sq. ft., this express kiosk provides transit commuters, road travelers, and locals with an immediate grab-and-go experience without navigating a large superstore.
              </p>

              <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                Situated right beside Sampan Highway Inn in Gopalganj, every product category is intentionally curated: ice-cold water, soft drinks, biscuits, chips, hygiene items, and travel necessities ready at your fingertips.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollTo("gallery")}
                  className="inline-flex items-center gap-2 rounded-none bg-[#112419] hover:bg-emerald-800 text-white px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] transition-colors shadow-sm cursor-pointer"
                >
                  <span>See Inside Kiosk</span>
                  <FiArrowRight className="text-xs" />
                </button>

                <button
                  onClick={() => scrollTo("location")}
                  className="inline-flex items-center gap-2 rounded-none border border-emerald-700 text-emerald-900 hover:bg-emerald-50 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] transition-colors cursor-pointer"
                >
                  <span>Location Details</span>
                </button>
              </div>
            </div>

            {/* 3 Pillars (Square Cards) */}
            <div className="grid gap-4 sm:grid-cols-1">
              <div className="border border-neutral-200 bg-white p-6 rounded-none shadow-sm hover:border-emerald-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 rounded-none">
                    <FaStore className="text-base" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-950">
                      Smart ~200 Sq. Ft. Layout
                    </h3>
                    <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                      Compact footprint optimized for rapid discovery, uncluttered navigation, and seamless entry and exit for busy travelers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-neutral-200 bg-white p-6 rounded-none shadow-sm hover:border-emerald-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 rounded-none">
                    <FaCoffee className="text-base" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-950">
                      Grab-and-Go Highway Refreshments
                    </h3>
                    <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                      Refrigerated coolers packed with cold mineral water, sodas, energy drinks, packaged juices, crisps, and bakery snacks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-neutral-200 bg-white p-6 rounded-none shadow-sm hover:border-emerald-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 rounded-none">
                    <FaShieldAlt className="text-base" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-950">
                      Transit Essentials &amp; Toiletries
                    </h3>
                    <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                      Pocket hand sanitizers, facial tissues, wet wipes, oral care, travel soaps, and roadside emergency hygiene supplies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 3. AISLE & CATEGORY HIGHLIGHTS ================= */}
      <section className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-10 bg-emerald-600" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-700">
                  02 • Kiosk Shelves
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Curated for speed. <br />
                <span className="text-emerald-700">What&apos;s in stock.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-500 leading-relaxed">
              Every item in Mini Sampan is selected specifically for quick grab-and-go satisfaction on the road.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categoryHighlights.map((item, idx) => {
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
                    <span className="text-neutral-500 font-semibold">Availability:</span>
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

      {/* ================= 4. AUTHENTIC STORE GALLERY ================= */}
      <section id="gallery" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#fcfbf9] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-10 bg-emerald-600" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-700">
                  03 • Visual Showcase
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Inside Mini Sampan. <br />
                <span className="text-emerald-700">Store gallery.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-500 leading-relaxed">
              Authentic on-site photographs of the express kiosk, product displays, and beverage chillers.
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
      <section id="nearby" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#0a120e] text-white border-b border-white/10 relative overflow-hidden">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-10 bg-emerald-400" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-400">
                  04 • Highway Complex Assets
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Nearby at this location. <br />
                <span className="text-emerald-400">Highway Inn Complex.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Situated directly within the Sampan Highway Inn complex alongside complementary dining, fueling, lodging, and retail stores.
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
              Visit Mini Sampan
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Located right inside the Sampan Highway Inn Complex at KM 74 on the Dhaka–Khulna Highway in Gopalganj. Open for all travelers and visitors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Store Address */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 rounded-none">
                <FaMapMarkerAlt className="text-lg" />
              </div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                Highway Location
              </span>
              <h3 className="text-xl font-bold text-neutral-950">
                Mini Sampan Super Shop
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-mono">
                Sampan Highway Inn Complex <br />
                KM 74, Dhaka–Khulna Highway <br />
                Gopalganj, Bangladesh
              </p>
              <p className="pt-2 text-[11px] text-neutral-400 font-mono border-t border-neutral-100">
                ~200 Sq. Ft. Express Kiosk
              </p>
            </div>

            {/* Card 2: Footprint & Format */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 rounded-none">
                <FaStore className="text-base" />
              </div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                Store Footprint
              </span>
              <h3 className="text-xl font-bold text-neutral-950">
                ~200 Sq. Ft. Express
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-mono">
                Rapid Grab &amp; Go Format <br />
                Open Every Day <br />
                No Bottlenecks
              </p>
              <p className="pt-2 text-[11px] text-neutral-400 font-mono border-t border-neutral-100">
                Fast counter checkouts
              </p>
            </div>

            {/* Card 3: Contact & Help */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 rounded-none">
                <FaPhoneAlt className="text-base" />
              </div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                Direct Contact
              </span>
              <h3 className="text-xl font-bold text-neutral-950">
                Outlet Assistance
              </h3>
              <div className="space-y-3 pt-1 text-sm text-neutral-700">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-neutral-400">Phone:</span>
                  <a href="tel:+8801929918408" className="font-mono font-bold text-emerald-700 hover:underline">
                    +880 1929-918408
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-neutral-400">Alt:</span>
                  <a href="tel:+8801929918400" className="font-mono font-semibold text-emerald-700 hover:underline">
                    +880 1929-918400
                  </a>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href="tel:+8801929918408"
                  className="inline-flex items-center gap-2 rounded-none bg-emerald-700 hover:bg-emerald-600 text-white px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <FaPhoneAlt className="text-[10px]" />
                  <span>Call Outlet Manager</span>
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
              alt="Mini Sampan Super Shop Fullscreen Preview"
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
                Mini Sampan Super Shop
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-md">
                A compact ~200 sq. ft. express convenience kiosk located at the Sampan Highway Inn Complex on the Dhaka–Khulna Highway in Gopalganj. Built for quick highway grab-and-go purchases.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs font-mono">
                <li>
                  <button onClick={() => scrollTo("overview")} className="hover:text-emerald-700 transition-colors text-left">
                    Express Concept
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("gallery")} className="hover:text-emerald-700 transition-colors text-left">
                    Store Gallery
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
                <li>~200 Sq. Ft. Express Format</li>
                <li>+880 1929-918408</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-mono">
            <p>
              © {new Date().getFullYear()} Mini Sampan Super Shop. A Sampan Group Venture.
            </p>
            <div className="flex gap-6">
              <Link href="/our-divisions/retail-super-shops/sampan-mart" className="hover:text-emerald-700 transition-colors">
                Sampan Mart 24/7
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
