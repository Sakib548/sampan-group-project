"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaRoute,
  FaBolt,
  FaBed,
  FaPhoneAlt,
  FaShieldAlt,
  FaClock
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { FiArrowRight } from "react-icons/fi";

const heroImage = "/images/projects/sampan-highway-inn.png";

export default function HeroOverview({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-neutral-950 text-white pt-20 pb-10 lg:pt-24 lg:pb-14 border-b border-white/10">
      {/* Real Background Image with cinematic dark gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Sampan Highway Inn"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dual-layer dark gradient for text readability and navbar contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/75" />
      </div>

      {/* Subtle Ambient Glow */}
      <div className="pointer-events-none absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/15 rounded-none blur-[140px] z-0" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-none blur-[120px] z-0" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-2 pb-8 lg:pb-12">
        {/* Main Hero Text Content */}
        <div className="max-w-4xl space-y-4 sm:space-y-5">
          {/* Highway Corridor Square Eyebrow Badge */}
          {/* <div className="inline-flex items-center gap-3 border border-emerald-500/50 bg-emerald-950/60 backdrop-blur-md px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-400">
              <span className="h-2 w-2 rounded-none bg-emerald-400" />
              <span>Dhaka – Khulna National Highway • KM 74 Transit Hub</span>
            </div> */}

          {/* Main Headline */}
          <h1 className="text-[clamp(2.4rem,4.8vw,4.2rem)] font-bold tracking-tight text-white leading-[0.98]">
            Sampan <br />
            <span className="text-emerald-400 block mt-1">
              Highway Inn
            </span>
          </h1>

          {/* Tagline & Subheading */}
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl font-light tracking-wide border-l-2 border-emerald-400/80 pl-4">
            Refined "" suites, 24/7 gourmet dining, and ultra-fast EV supercharging on the Dhaka–Khulna corridor.
          </p>

          {/* Square Quick Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="group relative inline-flex items-center justify-center gap-3 rounded-none bg-emerald-600 hover:bg-emerald-500 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-emerald-900/30 transition-all duration-300 cursor-pointer"
            >
              <span>Reserve A Room / Table</span>
              <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#route-map"
              className="inline-flex items-center justify-center gap-2 rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm"
            >
              <FaRoute className="text-emerald-400" />
              <span>View Route Map</span>
            </a>
            {/* 
            <a
              href="tel:+8801929918408"
              className="inline-flex items-center justify-center gap-2 rounded-none border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-300 transition-all duration-300 backdrop-blur-sm"
            >
              <FaPhoneAlt className="text-xs text-amber-400" />
              <span>+880 1929-918408</span>
            </a> */}
          </div>

          {/* Square Quick Value Badges */}
          <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-xs font-bold text-white uppercase tracking-wider">24/7 Service</p>
              <p className="text-[11px] text-white/50 mt-0.5">Always Open</p>
            </div>

            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-xs font-bold text-white uppercase tracking-wider">EV Charging</p>
              <p className="text-[11px] text-white/50 mt-0.5">Ultra-Fast DC</p>
            </div>
            {/* 
            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-xs font-bold text-white uppercase tracking-wider">VVIP Rooms</p>
              <p className="text-[11px] text-white/50 mt-0.5">100% ""</p>
            </div> */}

            <div className="border-l-2 border-emerald-500 pl-4">
              <p className="text-xs font-bold text-white uppercase tracking-wider">Secure Parking</p>
              <p className="text-[11px] text-white/50 mt-0.5">200+ Vehicles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
