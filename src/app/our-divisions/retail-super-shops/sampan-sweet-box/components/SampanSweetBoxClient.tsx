"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaClock,
  FaTimes,
  FaExpand,
  FaPhoneAlt,
  FaFacebookF,
  FaDirections,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const highwayInnFacebookUrl = "https://www.facebook.com/sampanhighwayinn/";
const highwayInnDirectionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Sampan+Highway+Inn+Restaurant+%26+Party+Centre";
const highwayInnMapEmbed =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14662.089219414334!2d89.765406!3d23.260465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ffc915b3e67a43%3A0xc9ccd3be4ea97668!2sSampan%20Highway%20Inn%20Restaurant%20%26%20Party%20Centre!5e0!3m2!1sen!2sbd!4v1788938537834!5m2!1sen!2sbd";

const heroBackground = "/images/our-divisions/sampan-sweet-box/DSC00468.JPG";
// const heroBackground = "/images/our-divisions/sampan-highway-inn/sweet-shop.JPG";
// Photo Gallery Items (no sweet names, pure visual showcase from folder)
const galleryItems = [
  { id: "g-1", src: "/images/our-divisions/sampan-sweet-box/DSC00468.JPG" },
  // { id: "g-2", src: "/images/our-divisions/sampan-sweet-box/DSC00471.JPG" },
  // { id: "g-3", src: "/images/our-divisions/sampan-sweet-box/DSC00473.JPG" },
  // { id: "g-4", src: "/images/our-divisions/sampan-sweet-box/DSC00482.JPG" },
  { id: "g-5", src: "/images/our-divisions/sampan-sweet-box/Image-2.jpg" },
  { id: "g-6", src: "/images/our-divisions/sampan-sweet-box/Image-1.jpg" },
  { id: "g-7", src: "/images/our-divisions/sampan-sweet-box/Image-3.jpg" },
  { id: "g-8", src: "/images/our-divisions/sampan-sweet-box/Gemini_Generated_Image_8pnlof8pnlof8pnl.jpg" },
  { id: "g-9", src: "/images/our-divisions/sampan-sweet-box/Gemini_Generated_Image_dim99ydim99ydim9.jpg" },
  { id: "g-10", src: "/images/our-divisions/sampan-sweet-box/Gemini_Generated_Image_eehc2deehc2deehc.jpg" },
  { id: "g-11", src: "/images/our-divisions/sampan-sweet-box/Gemini_Generated_Image_gwg9u0gwg9u0gwg9.jpg" },
  { id: "g-12", src: "/images/our-divisions/sampan-sweet-box/Gemini_Generated_Image_w7cnnpw7cnnpw7cn.jpg" },
  { id: "g-13", src: "/images/our-divisions/sampan-sweet-box/Gemini_Generated_Image_uf2kxiuf2kxiuf2k.jpg" },
  { id: "g-14", src: "/images/our-divisions/sampan-sweet-box/Gemini_Generated_Image_utm3xgutm3xgutm3.jpg" },
  { id: "g-15", src: "/images/our-divisions/sampan-sweet-box/Gemini_Generated_Image_zdk3m4zdk3m4zdk3.jpg" },
  { id: "g-16", src: "/images/our-divisions/sampan-sweet-box/Gemini_Generated_Image_3kfk583kfk583kfk.jpg" },
];

// Nearby Spots (Same as Sampan Mart / Highway Inn, NO meters/km)
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
    id: "sampan-mart",
    name: "Sampan Mart",
    type: "Retail Super Shop",
    badge: "In Complex",
    driveTime: "In Complex",
    image: "/images/facilities/express_highway_inn/4.Sampan-Mart.png",
    description:
      "24/7 highway retail super shop stocked with travel essentials, groceries, and fresh snacks.",
    link: "/our-divisions/retail-super-shops/sampan-mart",
  },
  {
    id: "mini-sampan",
    name: "Mini Sampan Super Shop",
    type: "Express Convenience",
    badge: "In Complex",
    driveTime: "In Complex",
    image: "/images/our-divisions/mini-sampan-super-shop/Web-Banner-new.jpg",
    description:
      "Quick-stop express retail kiosk for instant refreshments and travel accessories.",
    link: "/our-divisions/retail-super-shops/mini-sampan-super-shop",
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

export default function SampanSweetBoxClient() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#fcfbf7] text-[#1c140c] selection:bg-[#d97706] selection:text-white overflow-x-hidden w-full">

      {/* ================= 1. HERO SECTION (LESS WORDY & COMPACT) ================= */}
      <section data-no-reveal className="relative min-h-0 sm:min-h-screen flex flex-col justify-start sm:justify-center overflow-hidden bg-[#140d06] text-white pt-24 pb-12 sm:pt-28 sm:pb-20 border-b border-amber-900/30">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBackground}
            alt="Sampan Sweet Box"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/20 to-black/10" />

        </div>

        {/* <div className="pointer-events-none absolute top-1/4 left-10 w-80 h-80 bg-amber-500/15 rounded-full blur-[120px] z-0" />
        <div className="pointer-events-none absolute bottom-10 right-10 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] z-0" /> */}

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-0 sm:pt-2 pb-6">
          <div className="max-w-3xl space-y-4">

            {/* Status Badge */}
            {/* <div className="inline-flex items-center gap-2.5 border border-amber-500/50 bg-amber-950/70 backdrop-blur-md px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Dhaka-Khulna Highway • Sampan Complex, Dhaka-Khulna Highway</span>
            </div> */}

            {/* Headline */}
            <h1 className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-bold tracking-tight text-white leading-[1.02]">
              Sampan <br />
              <span className="text-amber-400 block mt-0.5">
                Sweet Box
              </span>
            </h1>

            {/* Sub-Tagline */}
            <div className="border-l-2 border-amber-500/90 pl-4">
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal max-w-2xl">
                Traditional Bangladeshi sweets, fresh handcrafted mishti, and celebration gift boxes located beside Sampan Highway Inn on the Dhaka–Khulna Highway.
              </p>
            </div>

            {/* Quick Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4 font-mono text-xs">
              <button
                onClick={() => scrollTo("gallery")}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-none bg-amber-600 hover:bg-amber-500 px-7 py-3.5 sm:px-8 sm:py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-amber-950/40 transition-all duration-300 cursor-pointer text-center"
              >
                <span>View Photos</span>
                <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo("nearby")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-7 py-3.5 sm:px-8 sm:py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer text-center"
              >
                <FaMapMarkerAlt className="text-amber-400" />
                <span>Nearby Places</span>
              </button>

              <a
                href={highwayInnFacebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-none border border-amber-500/40 bg-amber-900/30 hover:bg-amber-800/60 hover:border-amber-400 px-7 py-3.5 sm:px-8 sm:py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-300 hover:text-white transition-all duration-300 backdrop-blur-sm cursor-pointer text-center"
              >
                <FaFacebookF className="text-xs text-amber-400" />
                <span>Facebook Page</span>
              </a>
            </div>

            {/* Key Quality Highlights */}
            <div className="pt-4 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              <div className="border-l-2 border-amber-500 pl-3">
                <p className="text-lg sm:text-xl font-bold text-white">Fresh Daily</p>
                <p className="text-[10px] text-white/60 uppercase font-mono tracking-wider mt-0.5">Handcrafted Mishti</p>
              </div>

              <div className="border-l-2 border-amber-500 pl-3">
                <p className="text-lg sm:text-xl font-bold text-white">Pure Quality</p>
                <p className="text-[10px] text-white/60 uppercase font-mono tracking-wider mt-0.5">Milk Chhana &amp; Ghee</p>
              </div>

              <div className="border-l-2 border-amber-500 pl-3">
                <p className="text-lg sm:text-xl font-bold text-white">Gift Boxes</p>
                <p className="text-[10px] text-white/60 uppercase font-mono tracking-wider mt-0.5">Celebration Hampers</p>
              </div>

              <div className="border-l-2 border-amber-500 pl-3">
                <p className="text-lg sm:text-xl font-bold text-white">Dhaka–Khulna Highway</p>
                <p className="text-[10px] text-white/60 uppercase font-mono tracking-wider mt-0.5">Highway Complex</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= 2. PHOTO GALLERY SECTION (NO NAMES, NO FILTER BUTTONS) ================= */}
      <section id="gallery" className="py-20 sm:py-28 bg-[#fbfaf5] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-10 bg-amber-600" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-amber-700">
                  Visual Tour
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Photo <span className="text-amber-700">Gallery.</span>
              </h2>
            </div>
            <p className="text-neutral-600 text-xs sm:text-sm max-w-md leading-relaxed font-normal">
              A visual glimpse of our highway outlet, fresh displays, and celebration gift boxes. Click any image to view in fullscreen.
            </p>
          </div>

          {/* Clean Gallery Grid (No Filter Buttons, No Sweet Names) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxImage(item.src)}
                className={`group relative overflow-hidden bg-neutral-900 border border-neutral-200 hover:border-amber-600 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${index === 0 ? "aspect-[4/3] sm:col-span-2 sm:row-span-2 min-h-[300px]" : "aspect-[4/3]"
                  }`}
              >
                <Image
                  src={item.src}
                  alt="Sampan Sweet Box"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <span className="font-mono text-[11px] font-bold tracking-wider text-amber-300 uppercase">
                    Sampan Sweet Box
                  </span>
                  <div className="h-8 w-8 rounded-full bg-amber-500/30 text-amber-300 border border-amber-400/50 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all">
                    <FaExpand className="text-[10px]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= 3. NEARBY SISTER CONCERNS (NO METERS/KM) ================= */}
      <section id="nearby" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#0f0c08] text-white border-b border-white/10 relative overflow-hidden">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-10 bg-amber-400" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-amber-400">
                  03 • Highway Complex Assets
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

          {/* Nearby Cards Grid (Square Cards, matching Sampan Mart) */}
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


      {/* ================= 4. LOCATION & MAP (MATCHING SAMPAN MART / HIGHWAY INN) ================= */}
      <section id="location" className="scroll-mt-20 py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#f7f5f0] text-[#1a1714] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 border border-amber-600/40 bg-amber-600/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-amber-800 mb-4 rounded-none">
              <FaMapMarkerAlt className="text-xs text-amber-700" />
              <span>Location &amp; Route Access</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              Visit Sampan Sweet Box &amp; Highway Inn
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Situated directly within the Sampan Highway Inn Complex on the Dhaka–Khulna Highway, open with smooth vehicle drive-in and parking.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Outlet Details, Operating Hours & Contact */}
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
                  <span>Open Daily 7:00 AM – 11:30 PM • Ample Front Parking</span>
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
                      Outlet Manager
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
                    <span>Contact Outlet</span>
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
                  title="Sampan Sweet Box Highway Inn Map Route"
                />
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ================= 5. FULLSCREEN LIGHTBOX MODAL ================= */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 text-2xl z-50 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <FaTimes />
          </button>
          <div
            className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxImage}
              alt="Sampan Sweet Box"
              width={1600}
              height={1000}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl"
            />
          </div>
        </div>
      )}

    </main>
  );
}
