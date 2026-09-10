"use client";

import Image from "next/image";
import {
  FaBed,
  FaFish,
  FaLeaf,
  FaAppleAlt,
  FaWater,
  FaCheckCircle,
  FaArrowRight
} from "react-icons/fa";

interface Facility {
  id: string;
  name: string;
  badge: string;
  description: string;
  image: string;
  highlights: string[];
  hours: string;
  icon: any;
}

const facilitiesData: Facility[] = [
  {
    id: "resort-stay",
    name: "Lakeview Luxury Resort & Eco-Cottages",
    badge: "Resort Stay",
    description: "Serene lakeside wooden cottages and deluxe eco-suites designed for peaceful overnight stays, weekend family holidays, and countryside retreats.",
    image: "/images/our-divisions/sampan-eco-agro/frontview2.jpg",
    highlights: ["Overnight & Hourly Accommodations", "Private Lake Veranda & AC Suites", "24/7 Room & Hospitality Service", "Family & Executive Suites"],
    hours: "24 Hours Check-in",
    icon: FaBed,
  },
  {
    id: "fruit-orchards",
    name: "Multi-Fruit Organic Orchards (Mango, Dragonfruit, Lemon & Malta)",
    badge: "Fruit Orchards",
    description: "Vast chemical-free orchards growing sweet Haribhanga mangoes, vibrant dragonfruits, fragrant Kagoji lemons, juicy maltas, and seasonal guavas.",
    image: "/images/our-divisions/sampan-eco-agro/mango.jpg",
    highlights: ["Fresh Mango, Dragonfruit, Lemon & Malta", "100% Chemical-Free Cultivation", "Pick-Your-Own Fruit Experience", "Fresh Harvest Packing for Visitors"],
    hours: "Daytime Guided Tours",
    icon: FaAppleAlt,
  },
  {
    id: "fish-farming",
    name: "Freshwater Fish Farming & Aquaculture",
    badge: "Fish Farming",
    description: "Expansive bio-secure freshwater ponds dedicated to sustainable fish farming of Rui, Katla, Tilapia, and native species in clean natural water.",
    image: "/images/our-divisions/sampan-eco-agro/fish.jpg",
    highlights: ["Scientific Freshwater Aquaculture", "Recreational Angling & Fishing Pier", "Live Catch-and-Cook Service", "Sustainably Fed & Managed Ponds"],
    hours: "Open All Week",
    icon: FaFish,
  },
  {
    id: "botanical-gardens",
    name: "Lush Flower & Botanical Gardens",
    badge: "Botanical Gardens",
    description: "Vibrant flower gardens, winding shaded walking trails, and curated exotic plants creating a tranquil setting for relaxation and photography.",
    image: "/images/our-divisions/sampan-eco-agro/flower-garden.jpeg",
    highlights: ["Landscaped Seasonal Flower Displays", "Shaded Walkways & Photo Spots", "Herbal & Aromatic Plant Flora", "Clean Countryside Air"],
    hours: "Sunrise to Sunset",
    icon: FaLeaf,
  },
  {
    id: "natural-lake",
    name: "Natural Freshwater Lake & Boating",
    badge: "Lake Recreation",
    description: "Serene multi-acre freshwater lake surrounded by greenery, featuring peaceful wooden boat rides, lakeside sunset decks, and breeze verandas.",
    image: "/images/our-divisions/sampan-eco-agro/lake.jpg",
    highlights: ["Peaceful Wooden Boat Rides", "Lakeside Sunset Pier & Benches", "Cool Waterfront Breeze", "Ideal for Nature Photography"],
    hours: "Open Daily",
    icon: FaWater,
  },
  {
    id: "farm-vegetables",
    name: "Organic Vegetable & Field Harvest",
    badge: "Farm Harvest",
    description: "Rich soil-cultivated fields growing natural pumpkins, gourds, leafy greens, and seasonal vegetables without synthetic pesticides.",
    image: "/images/our-divisions/sampan-eco-agro/pumpkin.jpg",
    highlights: ["Chemical-Free Soil Cultivation", "Daily Farm-Fresh Harvests", "Direct Farm-to-Table Dining Supply", "Traveler Farm Bazaar Purchases"],
    hours: "Daily Harvest",
    icon: FaLeaf,
  },
];

export default function FacilitiesList() {
  return (
    <section id="facilities" className="py-24 bg-[#faf9f6] text-[#173326] relative overflow-hidden border-b border-[#173326]/15">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 relative z-10">

        {/* Header */}
        <div className="flex flex-col gap-6 mb-16 max-w-3xl">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#2f6b45]" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#2f6b45]">
                What We Offer
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-[#173326] leading-tight">
              Resort Facilities &amp; <br />
              <span className="text-[#2f6b45]">Agro Offerings</span>
            </h2>
          </div>
          <p className="max-w-2xl text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            Immerse yourself in 50+ acres of natural beauty, organic orchards, fish farming ponds, serene lakefront stays, and refreshing countryside gardens.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilitiesData.map((facility) => {
            const Icon = facility.icon;
            return (
              <article
                key={facility.id}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-[#173326]/15 shadow-sm hover:shadow-xl hover:border-[#2f6b45]/40 transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Image Header */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#b9e583]">
                    {facility.badge}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-neutral-800">
                    {facility.hours}
                  </div>
                </div>

                {/* Body Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 mb-2 text-[#2f6b45]">
                    <Icon className="text-sm" />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#2f6b45]">
                      {facility.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#173326] group-hover:text-[#2f6b45] transition-colors leading-snug">
                    {facility.name}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed flex-1">
                    {facility.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="mt-5 pt-4 border-t border-neutral-100 space-y-1.5">
                    {facility.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-700">
                        <FaCheckCircle className="text-[#2f6b45] text-[10px] shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <a
                      href="#booking-widget"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2f6b45] group-hover:text-[#173326] transition-colors"
                    >
                      <span>Inquire Access</span>
                      <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
                    </a>
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

