"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaGolfBall,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRoute,
  FaExpand,
  FaTimes,
  FaCheck,
  FaGraduationCap,
  FaUserFriends,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

// --- Hero & Gallery Images ---
const heroBackground = "/images/our-divisions/sampan-golf-academy/hero.jpg";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "g-1",
    title: "Swing Practice & Technique Drills",
    category: "Instruction",
    image: "/images/our-divisions/sampan-golf-academy/training2.jpg",
    description: "Dedicated practice bays focusing on grip posture, hip turn, and clean ball striking.",
  },
  {
    id: "g-2",
    title: "Iron Play & Target Alignment",
    category: "Fundamentals",
    image: "/images/our-divisions/sampan-golf-academy/LiningUpIrons.jpg",
    description: "Precision iron alignment setups and distance calibration drills.",
  },
  {
    id: "g-3",
    title: "Equipment & Club Preparation",
    category: "Pro Gear",
    image: "/images/our-divisions/sampan-golf-academy/golf-club-sunshine-bag.jpg",
    description: "Quality training clubs, range bags, and practice gear available on site.",
  },
  {
    id: "g-4",
    title: "Personalized Coaching Sessions",
    category: "Coaching",
    image: "/images/our-divisions/sampan-golf-academy/training.png",
    description: "One-on-one swing guidance tailored to beginners and developing golfers.",
  },
  {
    id: "g-5",
    title: "Fairway Grounds & Mobility",
    category: "Course Experience",
    image: "/images/our-divisions/sampan-golf-academy/golf-cart-golf-club-car-beautiful-golf-course.jpg",
    description: "Expansive green landscapes and practice fairways designed for focused learning.",
  },
  {
    id: "g-6",
    title: "Scenic Club Environment",
    category: "Surroundings",
    image: "/images/our-divisions/sampan-golf-academy/scenic-villa-overlooking-golf-course (1).jpg",
    description: "Tranquil outdoor setting offering a calm and inspiring backdrop for practice.",
  },
];

const nearbyConcerns = [
  {
    name: "Sampan Eco & Agro Resort",
    category: "Hospitality & Leisure",
    badge: "Eco Resort",
    description: "Serene lakeside wooden cottages, boating, and open-air dining in Alphadanga.",
    href: "/our-divisions/hospitality-highway-travel/sampan-eco-agro",
  },
  {
    name: "Sampan Eco & Agro",
    category: "Fresh Produce & Farming",
    badge: "Agro Estate",
    description: "Fresh vegetable cultivation, fruit orchards, and natural agriculture.",
    href: "/our-divisions/agro-fresh-produce/sampan-eco-agro",
  },
  {
    name: "Sampan Agro & Golf Resort",
    category: "Hospitality & Golf",
    badge: "Golf Destination",
    description: "Integrated agro-resort, 9-hole golf course, and family leisure destination.",
    href: "/our-divisions/hospitality-highway-travel/sampan-agro-golf-resort",
  },
];

export default function SampanGolfAcademyClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="bg-[#f8faf6] text-[#183b2b] selection:bg-emerald-700 selection:text-white">

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#07150d] text-white pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-white/10">
        {/* Real Background Image with Dark Nature Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBackground}
            alt="Sampan Golf Academy Green"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-75"
          />
          {/* Dual-layer dark gradient for optimal contrast and readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/60 to-black/45" />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-[#07150d] via-transparent to-black/50" /> */}
        </div>

        {/* Ambient Emerald & Warm Glow */}
        {/* <div className="pointer-events-none absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/15 rounded-none blur-[140px] z-0" /> */}
        <div className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-none blur-[120px] z-0" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-2 pb-8 lg:pb-12">
          <div className="max-w-4xl space-y-5 sm:space-y-6">

            {/* Eyebrow Square Badge */}
            {/* <div className="inline-flex items-center gap-2.5 border border-emerald-500/40 bg-emerald-950/60 backdrop-blur-md px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-400 rounded-none">
              <FaGolfBall className="text-xs text-emerald-400" />
              <span>Golf Zone • Instruction &amp; Practice</span>
            </div> */}

            {/* Headline */}
            <h1 className="text-[clamp(2.4rem,4.8vw,4.2rem)] font-bold tracking-tight text-white leading-[0.98]">
              Sampan <br />
              <span className="text-emerald-400 block mt-1">
                Golf Academy
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl font-light tracking-wide border-l-2 border-emerald-400/80 pl-4">
              Structured golf instruction, swing practice, and beginner fundamentals set within the peaceful rural landscape of Alphadanga, Faridpur.
            </p>

            {/* Square Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#overview"
                className="group inline-flex items-center justify-center gap-2 rounded-none bg-emerald-600 hover:bg-emerald-500 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-lg shadow-emerald-950/40 cursor-pointer"
              >
                <span>Explore Academy</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#gallery"
                className="inline-flex items-center justify-center rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                View Gallery
              </Link>

              {/* <Link
                href="#location"
                className="inline-flex items-center justify-center gap-2 rounded-none border border-emerald-500/40 bg-emerald-950/40 hover:bg-emerald-900/50 px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                <FaMapMarkerAlt className="text-xs" />
                <span>Location Details</span>
              </Link>

              <a
                href="tel:+8801929918408"
                className="inline-flex items-center justify-center gap-2 rounded-none border border-white/15 bg-black/40 hover:bg-white/10 px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white/80 hover:text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                <FaPhoneAlt className="text-xs text-emerald-400" />
                <span>+880 1929-918408</span>
              </a> */}
            </div>

            {/* Quick Metrics (Square Cards) */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Instruction</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Swing &amp; Grip Basics</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-emerald-400 uppercase tracking-wider">Practice</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Fairways &amp; Greens</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">All Ages</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Beginners &amp; Youth</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Location</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Alphadanga, Faridpur</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. OVERVIEW & ABOUT ================= */}
      <section id="overview" className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#f8faf6] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-emerald-600" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-700">
              Academy Overview
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Learn the game. <br />
                <span className="text-emerald-700">Master every swing.</span>
              </h2>

              <p className="mt-6 text-sm sm:text-base text-neutral-600 leading-relaxed">
                Sampan Golf Academy is designed to introduce, nurture, and develop golfing skills in a peaceful and welcoming environment. Situated in Alphadanga, Faridpur, the academy provides practice spaces where enthusiasts can practice their swing, learn course etiquette, and develop proper technique.
              </p>

              <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                Whether you are holding a club for the first time or looking to sharpen your short game, our open-air setup provides the ideal space to practice at your own pace.
              </p>

              <div className="mt-8">
                <Link
                  href="#location"
                  className="inline-flex items-center gap-2 rounded-none bg-[#183b2b] hover:bg-emerald-800 text-white px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] transition-colors shadow-sm cursor-pointer"
                >
                  <span>Visit Location</span>
                  <FiArrowRight className="text-xs" />
                </Link>
              </div>
            </div>

            {/* 3 Square Feature Highlights */}
            <div className="grid gap-4 sm:grid-cols-1">
              <div className="border border-neutral-200 bg-white p-6 rounded-none shadow-sm hover:border-emerald-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                    <FaGraduationCap className="text-base" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-950">
                      Fundamental Swing Training
                    </h3>
                    <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                      Hands-on guidance on grip fundamentals, posture alignment, and rhythm for consistent ball contact.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-neutral-200 bg-white p-6 rounded-none shadow-sm hover:border-emerald-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                    <FaGolfBall className="text-base" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-950">
                      Short Game &amp; Putting Practice
                    </h3>
                    <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                      Dedicated practice green areas for chipping, approach shots, and putter precision.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-neutral-200 bg-white p-6 rounded-none shadow-sm hover:border-emerald-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                    <FaUserFriends className="text-base" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-950">
                      Welcoming for Beginners &amp; Families
                    </h3>
                    <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                      An encouraging outdoor atmosphere welcoming newcomers, youth players, and visiting families.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 3. PHOTO GALLERY SHOWCASE ================= */}
      <section id="gallery" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-white border-b border-neutral-200">
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
                Academy &amp; grounds. <br />
                <span className="text-emerald-700">Practice moments.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-500 leading-relaxed">
              Explore authentic views of training sessions, equipment setups, and scenic outdoor fairways.
            </p>
          </div>

          {/* Square Image Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <article
                key={item.id}
                onClick={() => setSelectedImage(item.image)}
                className={`group relative flex flex-col h-full rounded-none overflow-hidden bg-white border border-neutral-200 hover:border-emerald-600 transition-all duration-300 hover:shadow-md cursor-pointer ${index === 0
                  ? "sm:col-span-2 lg:col-span-2 aspect-[16/10] min-h-[340px]"
                  : index === 1
                    ? "sm:col-span-2 lg:col-span-1 min-h-[340px]"
                    : "aspect-[16/10] min-h-[280px]"
                  }`}
              >
                {/* Top Green Accent Line on Hover */}
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-emerald-600 transition-all duration-500 group-hover:w-full z-20" />

                <div className="relative w-full flex-1 min-h-[200px] overflow-hidden bg-neutral-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

                {/* Always-visible lower label bar */}
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

      {/* ================= 4. LOCATION & ACCESSIBILITY (Address Only - Not Google Verified) ================= */}
      <section id="location" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15">
        <div className="mx-auto max-w-[1440px]">

          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 border border-emerald-600/40 bg-emerald-600/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-800 mb-4 rounded-none">
              <FaMapMarkerAlt className="text-xs text-emerald-700" />
              <span>Location Details</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              Academy Address &amp; Access
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Located in Alphadanga, Faridpur, with direct highway connectivity from Dhaka via the Padma Bridge corridor.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Physical Address */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 rounded-none">
                <FaMapMarkerAlt className="text-lg" />
              </div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                Physical Address
              </span>
              <h3 className="text-xl font-bold text-neutral-950">
                Alphadanga, Faridpur
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-mono">
                Alphadanga-7870, Faridpur District <br />
                Dhaka Division, Bangladesh
              </p>
              <p className="pt-2 text-[11px] text-neutral-400 font-mono border-t border-neutral-100">
                Direct physical address • Awaiting Google Maps verification
              </p>
            </div>

            {/* Card 2: Contact & Social */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 rounded-none">
                <FaPhoneAlt className="text-base" />
              </div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                Direct Contact
              </span>
              <h3 className="text-xl font-bold text-neutral-950">
                Inquiries &amp; Information
              </h3>
              <div className="space-y-3 pt-1 text-sm text-neutral-700">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-neutral-400">Phone:</span>
                  <a href="tel:+8801929918408" className="font-mono font-bold text-emerald-700 hover:underline">
                    +880 1929-918408
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-neutral-400">Concern:</span>
                  <span className="font-mono text-xs font-semibold text-neutral-900">
                    Sampan Group Golf Zone
                  </span>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href="tel:+8801929918408"
                  className="inline-flex items-center gap-2 rounded-none bg-emerald-700 hover:bg-emerald-600 text-white px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <FaPhoneAlt className="text-[10px]" />
                  <span>Call For Inquiry</span>
                </a>
              </div>
            </div>

            {/* Card 3: Route Notes */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 rounded-none">
                <FaRoute className="text-lg" />
              </div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                Accessibility
              </span>
              <h3 className="text-xl font-bold text-neutral-950">
                Padma Bridge Corridor
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                From Dhaka, travel along the expressway across the Padma Bridge to Bhanga Interchange, then proceed along the regional highway directly to Alphadanga.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs text-emerald-700 font-mono font-bold">
                <FaCheck className="text-[10px]" />
                <span>Paved Road Access</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 5. OTHER SAMPAN VENTURES ================= */}
      <section className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#f8faf6] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-emerald-600" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-700">
              Sampan Group Destinations
            </span>
          </div>

          <h2 className="mb-4 text-3xl sm:text-4xl font-bold text-neutral-950 tracking-tight">
            Explore Other Destinations.
          </h2>

          <p className="mb-12 max-w-2xl text-xs sm:text-sm text-neutral-500">
            Discover sister hospitality, leisure, and agro-tourism ventures across the Sampan Group portfolio.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {nearbyConcerns.map((venture, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between border border-neutral-200 bg-white p-6 rounded-none shadow-sm hover:border-emerald-600 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="h-[3px] w-0 bg-emerald-600 transition-all duration-500 group-hover:w-full mb-4" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                    {venture.category} • {venture.badge}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-950 group-hover:text-emerald-700 transition-colors">
                    {venture.name}
                  </h3>
                  <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                    {venture.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <Link
                    href={venture.href}
                    className="inline-flex items-center gap-2 font-mono text-xs font-bold text-emerald-800 hover:text-emerald-600 uppercase tracking-wider transition-colors"
                  >
                    <span>Learn More</span>
                    <FiArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
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
              alt="Sampan Golf Academy Fullscreen Preview"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* ================= 6. FOOTER ================= */}
      <footer className="bg-white border-t border-neutral-200 px-6 py-12 sm:px-10 lg:px-16 text-neutral-600">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-neutral-950 mb-3">
                Sampan Golf Academy
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-md">
                Dedicated golf instruction and practice greens in Alphadanga, Faridpur. Encouraging newcomers, young talent, and experienced players to enjoy the game of golf.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">
                Quick Navigation
              </h4>
              <ul className="space-y-2.5 text-xs font-mono">
                <li>
                  <Link href="#overview" className="hover:text-emerald-700 transition-colors">
                    Academy Overview
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="hover:text-emerald-700 transition-colors">
                    Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#location" className="hover:text-emerald-700 transition-colors">
                    Location &amp; Address
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">
                Contact
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-500 font-mono">
                <li>Alphadanga-7870</li>
                <li>Faridpur, Bangladesh</li>
                <li>+880 1929-918408</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-mono">
            <p>
              © {new Date().getFullYear()} Sampan Golf Academy. A Sampan Group Venture.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-emerald-700 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-emerald-700 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
