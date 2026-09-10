"use client";

import Image from "next/image";
import { 
  FaLeaf, 
  FaRoute, 
  FaPhoneAlt
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const heroImage = "/images/concerns/eco-agro.png";

export default function HeroOverview({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section id="overview" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#0c1c14] text-white pt-20 pb-10 lg:pt-24 lg:pb-14 border-b border-white/10">
      {/* Background Image with Dark Nature Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Sampan Eco & Agro Resort"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dual-layer dark gradient for text readability and navbar contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07130d]/95 via-[#07130d]/80 to-[#07130d]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1c14] via-transparent to-[#07130d]/80" />
      </div>

      {/* Subtle Emerald & Leaf Green Glow Effects */}
      <div className="pointer-events-none absolute top-1/4 left-10 w-96 h-96 bg-[#2f6b45]/20 rounded-full blur-[140px] z-0" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 bg-[#b9e583]/15 rounded-full blur-[120px] z-0" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-2 pb-8 lg:pb-12">
        {/* Main Hero Content */}
        <div className="max-w-4xl space-y-4 sm:space-y-5">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-3 border border-[#b9e583]/50 bg-[#b9e583]/15 backdrop-blur-md px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#b9e583]">
              <FaLeaf className="text-xs text-[#b9e583]" />
              <span>Sustainable Farming • Agro-Resort &amp; Farm Dining</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[clamp(2.4rem,4.8vw,4.2rem)] font-bold tracking-tight text-white leading-[0.98]">
              Sampan Eco &amp; <br />
              <span className="text-[#b9e583] block mt-1">
                Agro Resort
              </span>
            </h1>

            {/* Tagline & Subheading */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl font-light tracking-wide border-l-2 border-[#b9e583]/80 pl-4">
              A 50+ acre organic farm sanctuary with lakeview eco-cottages and farm-to-table dining.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="group relative inline-flex items-center justify-center gap-3 bg-[#b9e583] hover:bg-[#a6db6c] px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0c1c14] shadow-lg shadow-[#b9e583]/20 transition-all duration-300 cursor-pointer"
              >
                <span>Book Resort &amp; Tour</span>
                <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#route-map"
                className="inline-flex items-center justify-center gap-2 border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-[#0c1c14] px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm"
              >
                <FaRoute className="text-[#b9e583]" />
                <span>Highway Route</span>
              </a>

              <a
                href="tel:+8801929918408"
                className="inline-flex items-center justify-center gap-2 border border-[#b9e583]/40 bg-[#b9e583]/10 hover:bg-[#b9e583]/20 px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#b9e583] transition-all duration-300 backdrop-blur-sm"
              >
                <FaPhoneAlt className="text-xs text-[#b9e583]" />
                <span>+880 1929-918408</span>
              </a>
            </div>

            {/* Quick Value Badges */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="border-l-2 border-[#b9e583] pl-4">
                <p className="text-xs font-bold text-white uppercase tracking-wider">50+ Organic Acres</p>
                <p className="text-[11px] text-white/60 mt-0.5">Chemical-Free Cultivation</p>
              </div>

              <div className="border-l-2 border-[#b9e583] pl-4">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Eco-Cottages</p>
                <p className="text-[11px] text-white/60 mt-0.5">Lakefront Bamboo &amp; Wood</p>
              </div>

              <div className="border-l-2 border-[#b9e583] pl-4">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Farm to Table</p>
                <p className="text-[11px] text-white/60 mt-0.5">100% Fresh Daily Harvest</p>
              </div>

              <div className="border-l-2 border-[#b9e583] pl-4">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Expressway Stop</p>
                <p className="text-[11px] text-white/60 mt-0.5">35 Mins from Dhaka City</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
