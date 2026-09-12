"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaBed,
  FaUtensils,
  FaGlassCheers,
  FaCheck,
  FaClock
} from "react-icons/fa";

const facilityCategories = ["All", "Accommodations", "Meetings & Events", "Dining"];

const facilitiesData = [
  {
    id: "motel-suites",
    title: "Deluxe Motel Rest Suites",
    category: "Accommodations",
    tagline: "Uninterrupted quiet rest just off the highway",
    description: "Designed with double-glazed acoustic windows and plush bedding, allowing travelers to nap or sleep peacefully away from vehicle noise.",
    icon: FaBed,
    image: "/images/our-divisions/sampan-white-house/bed.jpg",
    hours: "24 Hours Check-in",
    highlights: ["Individual Climate Control", "Hot Rain Shower", "High-Speed Wi-Fi", "Daily Sanitized Linens"],
  },
  {
    id: "meeting-lounge",
    title: "Executive Conference & Meeting Lounge",
    category: "Meetings & Events",
    tagline: "Premier venue for corporate offsites, meetings & debriefs",
    description: "A column-free, modern meeting venue equipped with presentation screens, conference seating, high-speed fiber connectivity, and catering support.",
    icon: FaGlassCheers,
    image: "/images/our-divisions/sampan-white-house/meeting.jpg",
    hours: "Booking On Demand",
    highlights: ["Corporate Conference Seating", "High-Speed Fiber Network", "Coffee & Refreshment Catering", "Presentation Tech Support"],
  },
  {
    id: "veranda-dining",
    title: "Veranda Dining & Highway Restaurant",
    category: "Dining",
    tagline: "Multi-cuisine dining prepared around the clock",
    description: "Welcoming dining space serving traditional Bengali specialties, fresh grills, sizzling dishes, and refreshing beverages 24/7.",
    icon: FaUtensils,
    image: "/images/our-divisions/sampan-white-house/dining.jpg",
    hours: "Always Open 24/7",
    highlights: ["Express 20-Min Serving", "Farm-Fresh Ingredients", "Comfortable Family Seating", "Takeaway Travel Packs"],
  },
];

export default function FacilitiesList() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFacilities = activeCategory === "All"
    ? facilitiesData
    : facilitiesData.filter((f) => f.category === activeCategory);

  return (
    <section id="facilities" className="bg-white py-24 sm:py-32 text-neutral-950 border-b border-neutral-200 relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#e8b84b]"></span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
                Facilities &amp; Offerings
              </span>
            </div>
            <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
              Everything you need <br />
              <span className="text-[#ca8a04]">for a comfortable journey.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-neutral-500 leading-relaxed font-normal">
            Whether taking a quiet overnight rest, organizing an executive meeting, or enjoying a fresh meal, our roadside hub is fully at your service.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredFacilities.map((facility, i) => {
            const Icon = facility.icon;
            return (
              <article
                key={facility.id}
                className="group relative flex flex-col rounded-none overflow-hidden bg-[#F5F5F2] border border-neutral-200 hover:border-[#e8b84b] transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1"
              >
                {/* Top Gold Hover Line */}
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#e8b84b] transition-all duration-500 group-hover:w-full z-10" />

                {/* Facility Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />

                  <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-none border border-neutral-200 font-mono text-[9px] font-bold uppercase tracking-widest text-[#ca8a04]">
                    {facility.category}
                  </div>

                  <div className="absolute bottom-3.5 right-3.5 bg-black/80 px-2.5 py-1 rounded-none text-white text-[10px] font-mono flex items-center gap-1.5">
                    <FaClock className="text-[#e8b84b]" />
                    <span>{facility.hours}</span>
                  </div>
                </div>

                {/* Facility Content */}
                <div className="flex flex-1 flex-col p-6 bg-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="text-sm text-[#ca8a04]" />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-950 group-hover:text-[#ca8a04] transition-colors leading-snug">
                    {facility.title}
                  </h3>

                  <p className="mt-2 text-xs text-neutral-500 leading-relaxed flex-1">
                    {facility.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-neutral-100 space-y-1.5">
                    {facility.highlights.slice(0, 4).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-neutral-600">
                        <FaCheck className="text-[#ca8a04] text-[9px] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
