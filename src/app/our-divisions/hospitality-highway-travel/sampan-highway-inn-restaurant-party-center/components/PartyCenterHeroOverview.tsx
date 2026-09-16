"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { FaRoute, FaFacebook } from "react-icons/fa";

interface HeroOverviewProps {
  onOpenBooking?: () => void;
}

const heroImage = "/images/our-divisions/sampan-highway-inn-party-center/hero.jpg";

export default function PartyCenterHeroOverview({ onOpenBooking }: HeroOverviewProps) {
  return (
    <section data-no-reveal className="relative min-h-0 sm:min-h-screen flex flex-col justify-start sm:justify-center overflow-hidden bg-neutral-950 text-white pt-24 pb-12 sm:pt-28 sm:pb-20 border-b border-white/10">
      {/* Background Image with dark gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Sampan Highway Inn Restaurant & Party Center"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Balanced dark gradient for text readability and navbar contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/25 to-black/75" />
      </div>

      {/* Subtle Amber Glow */}
      <div className="pointer-events-none absolute top-1/4 left-10 w-96 h-96 bg-amber-500/15 rounded-none blur-[140px] z-0" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 bg-amber-600/10 rounded-none blur-[120px] z-0" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-0 sm:pt-2 pb-6">
        {/* Main Hero Text Content */}
        <div className="max-w-4xl space-y-4 sm:space-y-5">

          {/* Main Headline */}
          <h1 className="text-[clamp(2.4rem,4.8vw,4.2rem)] font-bold tracking-tight text-white leading-[0.98]">
            Sampan Highway Inn <br />
            <span className="text-amber-400 block mt-1">
              Restaurant &amp; Party Center
            </span>
          </h1>

          {/* Subtitle / Tagline */}
          <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed max-w-xl font-light tracking-wide border-l-2 border-amber-400/80 pl-4">
            Premier central air-conditioned banquet halls for 500+ guests, gourmet feasts, and culinary dining on the Dhaka–Khulna Highway corridor in Gopalganj (KM 103).
          </p>

          {/* CTAs */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4">
            <a
              href="#location"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-7 py-3.5 sm:px-8 sm:py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm text-center"
            >
              <FaRoute className="text-amber-400" />
              <span>View Route Map</span>
            </a>

            <a
              href="https://www.facebook.com/sampanhighwayinn/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-none bg-amber-400 hover:bg-amber-300 px-7 py-3.5 sm:px-8 sm:py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-950 shadow-lg shadow-amber-900/30 transition-all duration-300 text-center"
            >
              <FaFacebook className="text-base" />
              <span>Facebook Page</span>
              <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Value Badges */}
          <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="border-l-2 border-amber-400 pl-4">
              <p className="text-xs font-bold text-white uppercase tracking-wider">Multi-Cuisine</p>
              <p className="text-[11px] text-white/60 mt-0.5">Feast &amp; Buffet</p>
            </div>

            <div className="border-l-2 border-amber-400 pl-4">
              <p className="text-xs font-bold text-white uppercase tracking-wider">Gopalganj</p>
              <p className="text-[11px] text-white/60 mt-0.5">KM 103 Highway</p>
            </div>

            <div className="border-l-2 border-amber-400 pl-4">
              <p className="text-xs font-bold text-white uppercase tracking-wider">24/7 Power</p>
              <p className="text-[11px] text-white/60 mt-0.5">Generator Backup</p>
            </div>

            <div className="border-l-2 border-amber-400 pl-4">
              <p className="text-xs font-bold text-white uppercase tracking-wider">Valet Parking</p>
              <p className="text-[11px] text-white/60 mt-0.5">Spacious Lot</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
