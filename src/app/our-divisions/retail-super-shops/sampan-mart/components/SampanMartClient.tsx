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
  FaExternalLinkAlt,
  FaFacebookF,
  FaDirections,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const highwayInnFacebookUrl = "https://www.facebook.com/sampanhighwayinn/";
const highwayInnDirectionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Sampan+Highway+Inn+Restaurant+%26+Party+Centre";
const highwayInnMapEmbed =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14662.089219414334!2d89.765406!3d23.260465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ffc915b3e67a43%3A0xc9ccd3be4ea97668!2sSampan%20Highway%20Inn%20Restaurant%20%26%20Party%20Centre!5e0!3m2!1sen!2sbd!4v1788938537834!5m2!1sen!2sbd";

// Hero Background: Authentic storefront photo of Sampan Mart
const heroBackground = "/images/our-divisions/sampan-mart/Sampan-Mart.jpg";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "mart-1",
    title: "Storefront & Highway Entrance",
    category: "Storefront 24/7",
    image: "/images/our-divisions/sampan-mart/Sampan-Mart.jpg",
    description: "Illuminated 24/7 exterior signage welcoming travelers along the Dhaka–Khulna Highway.",
  },
  {
    id: "mart-2",
    title: "Supermarket Aisles & Beverage Chillers",
    category: "Retail Floor",
    image: "/images/our-divisions/sampan-mart/IMG_20250916_064230.jpg",
    description: "Wide aisles stocked with cold drinks, packaged snacks, and instant travel refreshments.",
  },
  {
    id: "mart-3",
    title: "Grocery & Household Provisions",
    category: "Store Shelves",
    image: "/images/our-divisions/sampan-mart/IMG_20250916_064333.jpg",
    description: "Neatly organized shelves with packaged kitchen staples, toiletries, and travel accessories.",
  },
  {
    id: "mart-4",
    title: "Checkout Counter & Confectioneries",
    category: "Point of Sale",
    image: "/images/our-divisions/sampan-mart/IMG_20250916_065230.jpg",
    description: "Quick customer checkout station with fresh bakery items, chocolates, and grab-and-go treats.",
  },
  {
    id: "mart-5",
    title: "Snack Racks & Travel Essentials",
    category: "Convenience Aisles",
    image: "/images/our-divisions/sampan-mart/IMG_20250916_065257.jpg",
    description: "Fully-stocked displays of branded crisps, cookies, biscuits, and personal care supplies.",
  },
];

// Product Category Highlights (Concise & Realistic)
const categoryHighlights = [
  {
    name: "All Refreshments & Cold Drinks",
    type: "Refrigerated Drinks",
    description:
      "Any type of chilled mineral water, soft drinks, energy drinks, fruit juices, and cold ice creams for road refreshment.",
    icon: FaCoffee,
    status: "24/7 Chilled Stock",
  },
  {
    name: "Road Snacks & Confectionery",
    type: "Quick Road Bites",
    description:
      "Branded potato crisps, savory snacks, cookies, wafers, premium chocolates, and packaged sweets.",
    icon: FaShoppingBag,
    status: "Wide Selection",
  },
  {
    name: "Foreign Foods & Travel Essentials",
    type: "Imported Goods & Hygiene",
    description:
      "Selected foreign foods, packaged imported goods, hand sanitizers, wet wipes, oral care, soaps, and travel personal care essentials.",
    icon: FaShieldAlt,
    status: "Always Available",
  },
  {
    name: "Packaged Groceries & Pantry",
    type: "Daily Staples",
    description:
      "Instant noodles, tea, premium coffee blends, milk powder, breakfast biscuits, and dry pantry items.",
    icon: FaStore,
    status: "Fresh Provisions",
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
    image: "/images/facilities/highway_inn/sweet-shop.jpg",
    description:
      "Authentic traditional mishti, fresh chhana sweets, celebration gift boxes, and highway travel treats.",
    link: "/our-divisions/retail-super-shops/sampan-sweet-box",
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

export default function SampanMartClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <main className="bg-[#fcfbf9] text-[#1a1714] selection:bg-amber-600 selection:text-white overflow-x-hidden w-full">

      {/* ================= 1. HERO SECTION ================= */}
      <section data-no-reveal className="relative min-h-0 sm:min-h-screen flex flex-col justify-start sm:justify-center overflow-hidden bg-[#0e0c08] text-white pt-24 pb-12 sm:pt-28 sm:pb-20 border-b border-amber-900/30">
        {/* Authentic Storefront Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBackground}
            alt="Sampan Mart 24/7 Storefront"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/65 to-black/20" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-0 sm:pt-2 pb-8 lg:pb-12">
          <div className="max-w-4xl space-y-5 sm:space-y-6">

            {/* Status Badge */}
            {/* <div className="inline-flex items-center gap-2 border border-amber-500/40 bg-amber-950/70 backdrop-blur-md px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400 rounded-none">
              <FaClock className="text-xs text-amber-400" />
              <span>Open 24/7 • Highway Super Shop</span>
            </div> */}

            {/* Headline */}
            <h1 className="text-[clamp(2.4rem,4.8vw,4.2rem)] font-bold tracking-tight text-white leading-[0.98]">
              Sampan <br />
              <span className="text-amber-400 block mt-1">
                Mart
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl font-light tracking-wide border-l-2 border-amber-500/80 pl-4">
              A modern 24/7 retail convenience super shop located directly at the Sampan Highway Inn Complex on the Dhaka–Khulna Highway (KM 74, Dhaka–Khulna Highway). Stocked with fresh snacks, chilled beverages, travel toiletries, and everyday household essentials.
            </p>

            {/* Square Action Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-xs">
              <button
                onClick={() => scrollTo("overview")}
                className="group inline-flex items-center justify-center gap-2 rounded-none bg-amber-600 hover:bg-amber-500 px-6 py-3 sm:px-7 sm:py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 shadow-lg shadow-amber-950/40 cursor-pointer text-center"
              >
                <span>Explore Store</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo("gallery")}
                className="inline-flex items-center justify-center rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-6 py-3 sm:px-7 sm:py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer text-center"
              >
                View Store Gallery
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

            {/* Quick Metrics (Square Cards) */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="border-l-2 border-amber-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Open 24/7</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Day &amp; Night Service</p>
              </div>
              <div className="border-l-2 border-amber-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-amber-400 uppercase tracking-wider">Highway Hub</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Highway Inn Complex</p>
              </div>
              <div className="border-l-2 border-amber-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Location</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono"> Dhaka–Khulna Highway</p>
              </div>
              <div className="border-l-2 border-amber-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Travel Ready</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Snacks &amp; Essentials</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. STORE OVERVIEW & PILLARS ================= */}
      <section id="overview" className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#fcfbf9] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-amber-600" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-amber-700">
              Store Overview
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Highway convenience. <br />
                <span className="text-amber-700">Open day and night.</span>
              </h2>

              <p className="mt-6 text-sm sm:text-base text-neutral-600 leading-relaxed">
                Sampan Mart is designed as a complete retail pit-stop for long-distance drivers, family road-trippers, passenger buses, and the local community along the Dhaka–Khulna Highway.
              </p>

              <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                Whether you need refreshing cold drinks, quick snacks for the road, baby care, hygiene products, or packaged groceries for home, our well-organized aisles are accessible 24 hours a day without highway detours.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollTo("gallery")}
                  className="inline-flex items-center gap-2 rounded-none bg-[#1c1813] hover:bg-amber-800 text-white px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] transition-colors shadow-sm cursor-pointer"
                >
                  <span>See Inside Store</span>
                  <FiArrowRight className="text-xs" />
                </button>

                <button
                  onClick={() => scrollTo("location")}
                  className="inline-flex items-center gap-2 rounded-none border border-amber-700 text-amber-900 hover:bg-amber-50 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] transition-colors cursor-pointer"
                >
                  <span>Get Directions</span>
                </button>
              </div>
            </div>

            {/* 3 Pillars (Square Cards) */}
            <div className="grid gap-4 sm:grid-cols-1">
              <div className="border border-neutral-200 bg-white p-6 rounded-none shadow-sm hover:border-amber-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0 rounded-none">
                    <FaClock className="text-base" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-950">
                      24/7 Round-The-Clock Service
                    </h3>
                    <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                      Always open throughout the day and late night to cater to highway commuters, night coach passengers, and transit drivers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-neutral-200 bg-white p-6 rounded-none shadow-sm hover:border-amber-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0 rounded-none">
                    <FaCoffee className="text-base" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-950">
                      Any Type of Refreshments &amp; Road Snacks
                    </h3>
                    <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                      Complete variety of all refreshments and highway road snacks — chilled beverages, mineral water, juices, ice creams, crisps, biscuits, and bakery items.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-neutral-200 bg-white p-6 rounded-none shadow-sm hover:border-amber-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0 rounded-none">
                    <FaShieldAlt className="text-base" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-950">
                      Foreign Foods, Travel Toiletries &amp; Daily Essentials
                    </h3>
                    <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                      Imported foreign food items, personal care necessities, emergency travel supplies, oral care, soaps, tissues, sanitizers, and packaged dry grocery goods.
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
                <span className="h-px w-10 bg-amber-600" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-amber-700">
                  • What You&apos;ll Find
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Stocked for the journey. <br />
                <span className="text-amber-700">Essential categories.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-500 leading-relaxed">
              Curated everyday groceries, snacks, and travel necessities ready for grab-and-go convenience.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categoryHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col justify-between border border-neutral-200 bg-[#fdfcfa] p-6 rounded-none hover:border-amber-600 hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="w-10 h-10 bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-4 rounded-none group-hover:bg-amber-600 group-hover:text-white transition-colors">
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

                  <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-neutral-500 font-semibold">Availability:</span>
                    <span className="inline-flex items-center gap-1.5 text-amber-800 font-bold">
                      <FaCheck className="text-[10px] text-amber-600" />
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
                <span className="h-px w-10 bg-amber-600" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-amber-700">
                  03 • Visual Showcase
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Inside Sampan Mart. <br />
                <span className="text-amber-700">Real store view.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-500 leading-relaxed">
              Authentic on-site photographs showing the storefront, supermarket aisles, beverage fridges, and checkout stations.
            </p>
          </div>

          {/* Square Image Grid (Zero Blank Space, Anchored Label Bars) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <article
                key={item.id}
                onClick={() => setSelectedImage(item.image)}
                className={`group relative flex flex-col h-full rounded-none overflow-hidden bg-white border border-neutral-200 hover:border-amber-600 transition-all duration-300 hover:shadow-md cursor-pointer ${index === 0 ? "sm:col-span-2 lg:col-span-2 min-h-[380px]" : "min-h-[340px]"
                  }`}
              >
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-amber-600 transition-all duration-500 group-hover:w-full z-20" />

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
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-1">
                          {item.category}
                        </span>
                        <h4 className="text-white text-sm sm:text-base font-bold leading-snug truncate">
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

                {/* Lower label bar (Anchored at bottom, no empty vertical gap) */}
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

      {/* ================= 5. NEARBY SISTER CONCERNS (NO METERS/KM) ================= */}
      <section id="nearby" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#0f0c08] text-white border-b border-white/10 relative overflow-hidden">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-10 bg-amber-400" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-amber-400">
                  04 • Highway Complex Assets
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Nearby at this location. <br />
                <span className="text-amber-400">Highway Inn Complex.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Situated in the Sampan Highway Inn complex alongside complementary dining, fueling, lodging, and leisure facilities.
            </p>
          </div>

          {/* Nearby Cards Grid (Square Cards, matching Highway Inn) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {nearbySpots.map((spot) => (
              <article
                key={spot.id}
                className="group relative flex flex-col h-full rounded-none overflow-hidden bg-[#16120b] border border-white/10 hover:border-amber-500/60 transition-all duration-300"
              >
                <div className="relative h-52 w-full overflow-hidden bg-neutral-900 shrink-0">
                  <Image
                    src={spot.image}
                    alt={spot.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16120b] via-transparent to-black/30" />

                  {/* Badge WITHOUT meters/km */}
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

      {/* ================= 6. LOCATION & CONTACT ================= */}
      <section id="location" className="scroll-mt-20 py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#f7f5f0] text-[#1a1714] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 border border-amber-600/40 bg-amber-600/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-amber-800 mb-4 rounded-none">
              <FaMapMarkerAlt className="text-xs text-amber-700" />
              <span>Location &amp; Route Access</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              Visit Sampan Mart &amp; Highway Inn
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Situated directly within the Sampan Highway Inn Complex on the Dhaka–Khulna Highway, open 24 hours a day with smooth vehicle drive-in and parking.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Store Details, Operating Hours & Contact */}
            <div className="flex flex-col gap-6 justify-between">
              {/* Card 1: Store Location & Address */}
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
                  <span>Open 24 Hours / 7 Days • Ample Front Parking</span>
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
                      Store Manager
                    </h4>
                    <div className="text-xs text-neutral-700 space-y-1">
                      <a href="tel:+8801929918408" className="font-mono font-bold text-amber-700 hover:underline block text-sm">
                        +880 1929-918408
                      </a>
                      {/* <a href="tel:+8801929918400" className="font-mono text-neutral-500 hover:underline block text-xs">
                        +880 1929-918400
                      </a> */}
                    </div>
                  </div>
                  <a
                    href="tel:+8801929918408"
                    className="inline-flex items-center justify-center gap-2 rounded-none bg-amber-700 hover:bg-amber-600 text-white px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center"
                  >
                    <FaPhoneAlt className="text-[10px]" />
                    <span>Call Store</span>
                  </a>
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
                      Follow our official Facebook page for live updates, offers, and announcements.
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
              alt="Sampan Mart Fullscreen Preview"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* ================= 7. SQUARE MINIMAL FOOTER ================= */}
      {/* <footer className="bg-white border-t border-neutral-200 px-6 py-12 sm:px-10 lg:px-16 text-neutral-600">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-neutral-950 mb-3">
                Sampan Mart 24/7
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-md">
                Your 24/7 convenience super shop located at the Sampan Highway Inn Complex on the Dhaka–Khulna Highway. Providing cold drinks, snacks, travel toiletries, and daily provisions.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs font-mono">
                <li>
                  <button onClick={() => scrollTo("overview")} className="hover:text-amber-700 transition-colors text-left">
                    Store Overview
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("gallery")} className="hover:text-amber-700 transition-colors text-left">
                    Store Gallery
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("nearby")} className="hover:text-amber-700 transition-colors text-left">
                    Nearby Attractions
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("location")} className="hover:text-amber-700 transition-colors text-left">
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
                <li>KM 74, Dhaka–Khulna Highway</li>
                <li>Open 24 Hours / 7 Days</li>
                <li>+880 1929-918408</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-mono">
            <p>
              © {new Date().getFullYear()} Sampan Mart. A Sampan Group Venture.
            </p>
            <div className="flex gap-6">
              <Link href="/our-divisions/retail-super-shops/sampan-sweet-box" className="hover:text-amber-700 transition-colors">
                Sampan Sweet Box
              </Link>
              <Link href="/our-divisions/hospitality-highway-travel/sampan-highway-inn" className="hover:text-amber-700 transition-colors">
                Sampan Highway Inn
              </Link>
            </div>
          </div>
        </div>
      </footer> */}

    </main>
  );
}
