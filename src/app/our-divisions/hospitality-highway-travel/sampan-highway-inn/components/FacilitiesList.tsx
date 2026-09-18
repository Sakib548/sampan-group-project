"use client";

import Image from "next/image";

interface FacilityItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  image: string;
  description: string;
  hours: string;
}

const facilitiesData: FacilityItem[] = [
  {
    id: "vvip-suites",
    title: "VVIP Rest Suites",
    category: "Rest & Accommodations",
    badge: "Premium Comfort",
    image: "/images/facilities/highway_inn/all_day_comfort.png",
    description:
      "Acoustically engineered suites offering plush king-size beds, private en-suite rain showers, smart IPTV, and climate control for quiet respite from highway rumble.",
    hours: "24/7 Available",
  },
  {
    id: "vip-lounge",
    title: "VIP Executive Lounge",
    category: "Executive & Leisure",
    badge: "Exclusive Lounge",
    image: "/images/our-divisions/sampan-highway-inn/vvip-lounge.jpeg",
    description:
      "Lavish seating with quiet ambiance, complimentary refreshments, and premium amenities for executives and families seeking an upscale rest stop.",
    hours: "24/7 Open",
  },
  {
    id: "fast-food",
    title: "Sampan Fast Food",
    category: "Quick Bites & Dining",
    badge: "Quick Bites",
    image: "/images/our-divisions/sampan-highway-inn/fast-food.jpeg",
    description:
      "Serving up delicious, piping-hot burgers, crispy fried chicken, wraps, and quick savory bites prepared freshly to keep you energized on your journey.",
    hours: "24/7 Service",
  },
  {
    id: "sweet-shop",
    title: "Sampan Sweet Shop",
    category: "Traditional Delights",
    badge: "Authentic Sweets",
    image: "/images/our-divisions/sampan-highway-inn/sweet-shop.jpg",
    description:
      "Discover traditional Bengali sweets, freshly baked delicacies, and gourmet treats prepared daily with pure chhana, ghee, and premium ingredients.",
    hours: "7:00 AM – 11:30 PM",
  },
  {
    id: "juice-bar",
    title: "Sampan Juice Bar",
    category: "Fresh & Healthy",
    badge: "Cold Pressed",
    image: "/images/our-divisions/sampan-highway-inn/sampan-juicebar.jpg",
    description:
      "Quench your thirst with freshly pressed, handcrafted juices, energizing seasonal fruit blends, smoothies, and detox drinks with zero artificial additives.",
    hours: "8:00 AM – 12:00 AM",
  },
  {
    id: "sampan-achar",
    title: "Sampan Achar & Regional Delicacies",
    category: "Artisanal Specialty",
    badge: "Artisanal Spices",
    image: "/images/our-divisions/sampan-highway-inn/sampan-achar.jpg",
    description:
      "A taste of authentic heritage packed in jars — artisanal pickles, specialty chutneys, and regional culinary treasures crafted with traditional family recipes.",
    hours: "24/7 Available",
  },
  {
    id: "executive-meetings",
    title: "Meeting & Corporate Conference Hub",
    category: "Corporate & Events",
    badge: "Corporate Ready",
    image: "/images/facilities/highway_inn/Official-Outing.png",
    description:
      "Conduct professional meetings, team debriefs, and corporate offsite retreats in equipped conference spaces with presentation tech and catering.",
    hours: "On Demand & Booking",
  },
];

export default function FacilitiesList({ onSelectFacility }: { onSelectFacility?: (title: string) => void }) {
  return (
    <section id="facilities" className="bg-[#faf9f6] py-24 sm:py-32 text-[#1a1a1a] border-b border-neutral-200">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px w-10 bg-emerald-600" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
                World-Class Facilities
              </span>
            </div>
            <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
              Thoughtfully curated. <br />
              <span className="text-emerald-700">For every traveler.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-neutral-500 leading-relaxed">
            Whether you need a quick refreshing bite, authentic Bengali sweets, artisanal pickles, or a quiet restful suite, our transit hub provides complete comfort and hospitality under one roof.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilitiesData.map((item) => (
            <article
              key={item.id}
              className="group relative flex flex-col rounded-none overflow-hidden bg-[#F5F5F2] border border-neutral-200 hover:border-emerald-600 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1"
            >
              {/* Top Emerald Line Hover */}
              <div className="absolute top-0 left-0 h-[3px] w-0 bg-emerald-600 transition-all duration-700 group-hover:w-full z-10" />

              {/* Gallery Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />

                {/* Square Badge */}
                <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-none border border-neutral-200 font-mono text-[9px] font-bold uppercase tracking-widest text-emerald-800">
                  {item.badge}
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-6 bg-white">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                    {item.category}
                  </span>
                  <span className="font-mono text-[10px] text-neutral-400 font-medium">
                    {item.hours}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-neutral-950 group-hover:text-emerald-700 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
