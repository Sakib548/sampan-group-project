"use client";

import Image from "next/image";
import { FiArrowDownRight, FiArrowRight, FiPhone } from "react-icons/fi";

export interface HeroFact {
  value: string;
  label: string;
}

export interface RealEstateHero2Props {
  title: string;
  subtitle?: string;
  divisionName?: string;
  description?: string;
  image: string;
  facts?: HeroFact[];
  accentColor?: string;
  badgeColor?: string;
  statusBadge?: string;
  statusType?: "ongoing" | "coming-soon" | "flagship" | "completed";
  locationLabel?: string;
  onBookSiteVisit?: () => void;
  onDownloadBrochure?: () => void;
}

export default function RealEstateHero2({
  title,
  subtitle,
  divisionName = "Sampan Development Ltd",
  description,
  image,
  facts,
  accentColor = "#ca8a04",
  locationLabel = "Ashulia Metro Corridor, Dhaka",
  onBookSiteVisit,
  onDownloadBrochure,
}: RealEstateHero2Props) {
  const titleWords = title.trim().split(" ");
  const firstWord = titleWords[0];
  const remainingTitle = titleWords.slice(1).join(" ");

  return (
    <section className="relative min-h-[80vh] lg:min-h-[85vh] flex flex-col justify-between overflow-hidden bg-[#070a10] text-white border-b border-white/10 pt-22 pb-8 sm:pt-24 sm:pb-10 lg:pt-26 lg:pb-12">

      {/* 1. Immersive Architectural Backdrop with High-Contrast Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.01]"
        />

        {/* Deep, solid architectural scrim to guarantee 100% readable text without being washed out */}
        {/* Left-to-right gradient: dark and solid behind text on left, opening to reveal building on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070a10] via-[#070a10]/88 sm:via-[#070a10]/75 to-[#070a10]/20 w-full lg:w-[70%]" />

        {/* Top-to-bottom vignette: protects navbar and bottom stats */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070a10]/90 via-transparent to-[#070a10]/95" />

        {/* Subtle dark tint over entire canvas to stop bright road/trees from blowing out */}
        <div className="absolute inset-0 bg-[#070a10]/25" />
      </div>

      {/* 2. Main Center Architectural Typography & Content (Starts cleanly below Navbar) */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-2 pb-6 sm:pt-4 sm:pb-8">
        <div className="max-w-3xl space-y-5 sm:space-y-6">

          {/* Subtitle / Category Eyebrow */}
          {subtitle && (
            <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold tracking-[0.22em] uppercase" style={{ color: accentColor }}>
              <span className="h-[1px] w-6 inline-block" style={{ backgroundColor: accentColor }} />
              <span>{subtitle}</span>
            </div>
          )}

          {/* Grand, Bold Architectural Headline */}
          <h1 className="text-[clamp(3rem,5vw,5.75rem)]  font-extrabold leading-[0.94] tracking-[-0.035em] text-white drop-shadow-md">
            <span>{firstWord}</span>
            {remainingTitle && (
              <>
                <br />
                <span className="block mt-1 sm:mt-2 font-light text-white/90">
                  {remainingTitle}
                </span>
              </>
            )}
          </h1>

          {/* Clean, high-readability description */}
          {description && (
            <p className="text-sm sm:text-base text-neutral-200 leading-relaxed max-w-xl font-normal font-sans border-l-2 pl-4" style={{ borderColor: `${accentColor}90` }}>
              {description}
            </p>
          )}

          {/* Sleek Minimal CTA Row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
            <button
              onClick={onBookSiteVisit}
              className="group inline-flex items-center gap-3 bg-white hover:bg-neutral-100 text-neutral-950 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-xl cursor-pointer"
            >
              <span>Schedule Site Visit</span>
              <FiArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {onDownloadBrochure && (
              <button
                onClick={onDownloadBrochure}
                className="group inline-flex items-center gap-2 border border-white/30 hover:border-white/70 bg-black/40 hover:bg-black/60 px-6 py-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-white transition-all duration-300 cursor-pointer backdrop-blur-md"
              >
                <span>Download Brochure</span>
                <FiArrowDownRight className="text-sm text-white/70 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>
            )}

            <a
              href="tel:+8801929918408"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors py-2 px-1"
            >
              <FiPhone className="text-xs" style={{ color: accentColor }} />
              <span>+880 1929-918408</span>
            </a>
          </div>

        </div>
      </div>

      {/* 4. Frosted Glass Minimal Metrics Strip (Guaranteed Contrast against Ground/Road) */}
      {facts && facts.length > 0 && (
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 mt-auto">
          <div className="bg-[#070a10]/80 backdrop-blur-md border border-white/15 px-6 sm:px-8 py-5 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 shadow-2xl">
            {facts.map((fact, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-light tracking-tight text-white font-mono">
                  {fact.value}
                </div>
                <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/60">
                  {fact.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </section>
  );
}

// Alias for convenience matching user's requested naming
export { RealEstateHero2 as RealStateHero2 };
