"use client";

import Image from "next/image";
import {
  FaBed,
  FaFish,
  FaLeaf,
  FaWater,
  FaUtensils,
  FaTree,
} from "react-icons/fa";

interface Facility {
  id: string;
  name: string;
  badge: string;
  description: string;
  image: string;
  icon: any;
}

const facilitiesData: Facility[] = [
  {
    id: "cottages",
    name: "Lakeview Wooden Cottages",
    badge: "Accommodations",
    description: "Serene lakeside wooden cottages crafted for peaceful overnight stays, refreshing weekend getaways, and quiet countryside relaxation.",
    image: "/images/our-divisions/sampan-eco-agro/frontview2.jpg",
    icon: FaBed,
  },
  {
    id: "dining",
    name: "Lakeside Open-Air Dining",
    badge: "Dining & Cuisine",
    description: "Waterfront open dining terrace serving freshly prepared traditional dishes and evening barbecue in a tranquil open-air ambiance.",
    image: "/images/our-divisions/sampan-eco-agro/frontview.jpg",
    icon: FaUtensils,
  },
  {
    id: "lake",
    name: "Freshwater Lake & Boating",
    badge: "Lake Recreation",
    description: "A wide natural freshwater lake offering serene wooden boat rides, cooling water breezes, and scenic sunset views.",
    image: "/images/our-divisions/sampan-eco-agro/lake.jpg",
    icon: FaWater,
  },
  {
    id: "gardens",
    name: "Botanical Gardens & Trails",
    badge: "Nature Promenades",
    description: "Curated floral displays, aromatic botanical pathways, and winding tree canopies immersed in refreshing natural greenery.",
    image: "/images/our-divisions/sampan-eco-agro/flower-garden.jpeg",
    icon: FaLeaf,
  },
  {
    id: "pier",
    name: "Sunset Pier & Waterside Deck",
    badge: "Waterfront Pier",
    description: "Peaceful wooden boardwalk extending out over the water, designed for quiet reflection, photography, and evening breezes.",
    image: "/images/our-divisions/sampan-eco-agro/lake4.jpg",
    icon: FaFish,
  },
  {
    id: "lawns",
    name: "Landscaped Picnic Lawns",
    badge: "Outdoor Leisure",
    description: "Spacious green open grounds surrounded by palms and trees, ideal for family leisure, outdoor walks, and fresh air.",
    image: "/images/our-divisions/sampan-eco-agro/frontview3.jpg",
    icon: FaTree,
  },
];

export default function FacilitiesList() {
  return (
    <section id="facilities" className="py-24 bg-[#faf9f6] text-[#173326] relative overflow-hidden border-b border-[#173326]/15">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 relative z-10">

        {/* Header */}
        <div className="flex flex-col gap-4 mb-16 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#2f6b45]" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#2f6b45]">
              Resort Experience
            </p>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#173326] leading-tight">
            Resort Facilities &amp; <br />
            <span className="text-[#2f6b45]">Nature Enclave</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            A peaceful countryside retreat offering serene lakefront cottages, open-air dining, gentle boat rides, and lush botanical pathways.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilitiesData.map((facility) => {
            const Icon = facility.icon;
            return (
              <article
                key={facility.id}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-[#173326]/15 shadow-sm hover:shadow-xl hover:border-[#2f6b45]/40 transition-all duration-500 hover:-translate-y-1"
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

                  <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

