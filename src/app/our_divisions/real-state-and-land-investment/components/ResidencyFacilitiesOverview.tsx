"use client";

import Image from "next/image";
import { FaSwimmingPool, FaDumbbell, FaCheckCircle, FaAward } from "react-icons/fa";

export interface FacilityItem {
  id: string;
  title: string;
  category: string;
  tag: string;
  image: string;
  description: string;
  features: string[];
}

export interface ResidencyFacilitiesOverviewProps {
  title?: string;
  subtitle?: string;
  facilities?: FacilityItem[];
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
}

const defaultFacilities: FacilityItem[] = [
  {
    id: "fac-pool",
    title: "Resort-Style Swimming Pool & Sun Deck",
    category: "Aquatic Wellness",
    tag: "Outdoor Pool",
    image: "/images/facilities/express_highway_inn/10.swimming-pool.png",
    description:
      "Exclusive access to the temperature-controlled outdoor pool at the adjacent Express Highway Inn. Featuring dedicated family swimming zones, poolside cabanas, loungers, and 24/7 lifeguard supervision.",
    features: [
      "Olympic-Proportioned Swimming Bay",
      "Dedicated Shallow Kids' Splash Zone",
      "Poolside Sun Loungers & Covered Cabanas",
      "Hygienic Showers & Private Changing Suites",
    ],
  },
  {
    id: "fac-gym",
    title: "High-Performance Fitness Center & Gym",
    category: "Strength & Conditioning",
    tag: "Fitness Center",
    image: "/images/facilities/express_highway_inn/9.GYM.png",
    description:
      "State-of-the-art cardiovascular and strength conditioning gym. Equipped with commercial-grade treadmills, free weights, Olympic racks, and on-demand certified fitness trainers for all residents.",
    features: [
      "Commercial-Grade Treadmills & Cardio Units",
      "Full Dumbbell Racks & Olympic Bench Presses",
      "Certified Personal Trainers on Schedule",
      "Acoustic Sound System & Locker Facilities",
    ],
  },
];

export default function ResidencyFacilitiesOverview({
  title = "Exclusive Lifestyle & Wellness Facilities",
  subtitle = "Residents of Sampan Residency Tower 1 & 2 enjoy complimentary, integrated privileges at the adjacent Express Highway Inn lifestyle complex.",
  facilities = defaultFacilities,
  bgTheme = "about-ivory",
  accentColor = "#ca8a04",
}: ResidencyFacilitiesOverviewProps) {
  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="residency-facilities" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
      {/* Signature Ambient Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(202,138,4,0.08),transparent_28%),radial-gradient(circle_at_94%_92%,rgba(24,59,43,0.06),transparent_24%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div
              className="inline-flex items-center gap-2 border px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em]"
              style={{
                color: accentColor,
                borderColor: `${accentColor}40`,
                backgroundColor: `${accentColor}10`,
              }}
            >
              <FaAward className="text-xs" />
              <span>Lifestyle &amp; Recreation Amenities</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-current">
              {title}
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed opacity-80 font-normal">
            {subtitle}
          </p>
        </div>

        {/* 2-Column Facilities Showcase */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10">
          {facilities.map((facility) => {
            const isPool = facility.id.includes("pool");
            return (
              <div
                key={facility.id}
                className="group border border-current/15 bg-white flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image Container with subtle zoom */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] px-3.5 py-1.5 bg-black/75 text-white border border-white/20 backdrop-blur-md">
                      {facility.tag}
                    </span>
                  </div>

                  {/* Category icon indicator */}
                  <div className="absolute top-4 right-4 z-10 h-10 w-10 flex items-center justify-center bg-white/95 text-neutral-950 shadow-md">
                    {isPool ? <FaSwimmingPool className="text-base text-sky-600" /> : <FaDumbbell className="text-base text-amber-600" />}
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-semibold block">
                      {facility.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {facility.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm leading-relaxed opacity-85 font-normal text-neutral-700">
                    {facility.description}
                  </p>

                  {/* Features Bullet List */}
                  <div className="space-y-2.5 pt-4 border-t border-neutral-200">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-500 block">
                      Facility Highlights
                    </span>
                    <div className="grid sm:grid-cols-2 gap-2.5 font-mono text-xs">
                      {facility.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-neutral-800">
                          <FaCheckCircle className="text-emerald-700 text-xs shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
