"use client";

import Image from "next/image";
import { FaCheck, FaArrowRight } from "react-icons/fa";

const facilitiesData = [
  {
    id: "banquet-party-center",
    title: "Celebration & Banquet Hall",
    badge: "Grand Celebrations",
    image: "/images/facilities/highway_inn/party_reservation.png",
    description:
      "Magnificent event venue with modern acoustic treatment, flexible seating for 500+ guests, tailored banquet catering, and celebratory decor for weddings and galas.",
    features: ["500+ Seating Capacity", "Full Banquet Catering", "AV Sound & Stage Lighting", "Dedicated Event Coordinator"],
    hours: "Advance Reservation",
  },
  {
    id: "fast-food",
    title: "Sampan Fast Food",
    badge: "Quick Bites",
    image: "/images/our-divisions/sampan-highway-inn/fast-food.jpeg",
    description:
      "Serving up delicious, piping-hot burgers, crispy fried chicken, wraps, and quick savory bites prepared freshly to keep you energized on your journey.",
    features: ["Fresh Burgers & Wraps", "Crispy Fried Chicken", "Express 10-Min Ordering", "Takeaway & Dine-In"],
    hours: "24/7 Service",
  },
  {
    id: "vip-lounge",
    title: "VIP Executive Lounge",
    badge: "Exclusive Lounge",
    image: "/images/our-divisions/sampan-highway-inn/vvip-lounge.jpeg",
    description:
      "Lavish seating with quiet ambiance, complimentary refreshments, and premium amenities for executives and families seeking an upscale rest stop.",
    features: ["Plush Leather Recliners", "Complimentary Refreshments", "Dedicated Service Staff", "Workstations & High-Speed Wi-Fi"],
    hours: "24/7 Open",
  },
  {
    id: "sweet-shop",
    title: "Sampan Sweet Shop",
    badge: "Traditional Delights",
    image: "/images/our-divisions/sampan-highway-inn/sweet-shop.jpg",
    description:
      "Discover traditional Bengali sweets, freshly baked delicacies, and gourmet treats prepared daily with pure chhana, ghee, and premium ingredients.",
    features: ["Traditional Chhana Sweets", "Fresh Ghee Delicacies", "Gift Box Packaging", "Daily Fresh Batches"],
    hours: "7:00 AM – 11:30 PM",
  },
  {
    id: "executive-meetings",
    title: "Meeting & Corporate Conference Hub",
    badge: "Corporate Ready",
    image: "/images/facilities/highway_inn/Official-Outing.png",
    description:
      "Conduct professional meetings, team debriefs, and corporate offsite retreats in equipped conference spaces with presentation tech and catering.",
    features: ["HD Projection & Video Tech", "Ergonomic Conference Seating", "High-Speed Fiber Network", "Coffee & Lunch Catering"],
    hours: "On Demand & Booking",
  },
  {
    id: "juice-bar",
    title: "Sampan Juice Bar",
    badge: "Fresh & Healthy",
    image: "/images/our-divisions/sampan-highway-inn/sampan-juicebar.jpg",
    description:
      "Quench your thirst with freshly pressed, handcrafted juices, energizing seasonal fruit blends, smoothies, and detox drinks with zero artificial additives.",
    features: ["100% Pure Fresh Fruits", "Seasonal Smoothies & Shakes", "Detox & Energy Blends", "Hygienic Cold-Pressed"],
    hours: "8:00 AM – 12:00 AM",
  },
  {
    id: "vvip-suites",
    title: "VVIP Rest Suites",
    badge: "Premium Comfort",
    image: "/images/facilities/highway_inn/all_day_comfort.png",
    description:
      "Acoustically engineered suites offering plush king-size beds, private en-suite rain showers, smart IPTV, and climate control for quiet respite from highway rumble.",
    features: ["King Orthopaedic Bedding", "High-Speed Fiber Wi-Fi", "In-Room Gourmet Service", "Hourly & Overnight Stays"],
    hours: "24/7 Available",
  },
  {
    id: "sampan-achar",
    title: "Sampan Achar & Regional Delicacies",
    badge: "Artisanal Spices",
    image: "/images/our-divisions/sampan-highway-inn/sampan-achar.jpg",
    description:
      "A taste of authentic heritage packed in jars — artisanal pickles, specialty chutneys, and regional culinary treasures crafted with traditional family recipes.",
    features: ["Traditional Homemade Recipes", "Sun-Dried Mustard Oil Base", "Assorted Mango, Olive & Garlic", "Travel-Friendly Sealed Jars"],
    hours: "24/7 Available",
  },
];

export default function PartyCenterFacilitiesList({
  onSelectFacility,
}: {
  onSelectFacility?: (title: string) => void;
}) {
  return (
    <section id="facilities" className="bg-[#faf9f6] py-24 sm:py-32 text-[#1a1a1a]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <div className="flex flex-col gap-6 mb-12 max-w-3xl">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-amber-600" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-800">
                World-Class Facilities
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
              Thoughtfully curated <br />
              <span className="text-amber-700">for every traveler &amp; celebration.</span>
            </h2>
          </div>
          <p className="max-w-2xl text-sm sm:text-base text-neutral-600 leading-relaxed">
            Whether you need a grand banquet celebration, quick refreshing bite, authentic Bengali sweets, artisanal pickles, or a quiet restful suite, our transit and party hub provides complete comfort and hospitality under one roof.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilitiesData.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-neutral-200/80 shadow-sm hover:shadow-xl hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-amber-400">
                  {item.badge}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-neutral-800">
                  {item.hours}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-[#111111] group-hover:text-amber-700 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* Features Pill List */}
                <div className="mt-5 pt-4 border-t border-neutral-100 space-y-1.5">
                  {item.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-neutral-700">
                      <FaCheck className="text-[9px] text-amber-600 flex-shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <a
                    href="#booking-form"
                    onClick={() => onSelectFacility?.(item.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 group-hover:text-amber-900 transition-colors"
                  >
                    <span>Reserve Access</span>
                    <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
