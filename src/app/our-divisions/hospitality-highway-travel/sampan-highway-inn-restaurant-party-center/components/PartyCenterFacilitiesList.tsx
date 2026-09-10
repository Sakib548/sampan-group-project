"use client";

import Image from "next/image";
import { FaCheck, FaArrowRight } from "react-icons/fa";

const facilitiesData = [
  {
    id: "grand-hall",
    title: "Central AC Banquet Hall",
    badge: "500+ Capacity",
    image: "/images/facilities/highway_inn/party_reservation.png",
    description:
      "A column-free, high-ceiling grand celebration hall equipped with acoustic stage lighting, crystal chandeliers, and flexible banquet seating for 500+ guests.",
    features: ["500+ Seated Guests", "Central Air Conditioning", "Crystal Chandeliers", "Flexible Floor Layouts"],
    hours: "Morning & Evening Slots",
  },
  {
    id: "gourmet-catering",
    title: "Executive Master Chef Catering",
    badge: "Royal Feasts",
    image: "/images/facilities/highway_inn/buffet_setup.png",
    description:
      "Authentic royal feasts including Shahi Mutton Kacchi Biryani, Polao, Chicken Roast, Rezala, and extensive live buffet spreads prepared by master executive chefs.",
    features: ["Traditional Kacchi Biryani", "Multi-Course Buffets", "Live Cooking Counters", "Hygienic Preparation Standards"],
    hours: "Feast on Event",
  },
  {
    id: "vip-saloon",
    title: "VIP Private Dining Saloons",
    badge: "Exclusive Lounge",
    image: "/images/our-divisions/sampan-highway-inn/vvip-lounge.jpeg",
    description:
      "Acoustically quiet, lavish dining suites designed for high-profile delegates, executive committee meetings, and intimate family gatherings.",
    features: ["Private Boardroom Seating", "Dedicated Attendants", "High-Speed Wi-Fi", "In-Suite Buffet Line"],
    hours: "24/7 Available",
  },
  {
    id: "bride-groom-suites",
    title: "Dedicated Bride & Groom Prep Suites",
    badge: "Private Comfort",
    image: "/images/facilities/highway_inn/all_day_comfort.png",
    description:
      "Private, climate-controlled suites equipped with full-length vanity mirrors, plush lounge sofas, private en-suite washrooms, and security safes.",
    features: ["Full Vanity Mirrors", "Private En-Suite Restrooms", "Climate Control", "Secure Dressing Spaces"],
    hours: "Included with Hall",
  },
  {
    id: "stage-av",
    title: "Elevated Stage & Pro Acoustic Sound",
    badge: "Audio & Visual",
    image: "/images/facilities/highway_inn/dining_area.png",
    description:
      "State-of-the-art stage with programmable ambient LED lighting, concert-grade acoustic sound system, cordless microphones, and projection capabilities.",
    features: ["Customizable Backdrops", "LED Stage Illumination", "Surround Sound Tech", "Wireless Mic Setup"],
    hours: "Event Duration",
  },
  {
    id: "generator-backup",
    title: "100% Industrial Generator Redundancy",
    badge: "Uninterrupted",
    image: "/images/our-divisions/sampan-highway-inn-party-center/hero.jpg",
    description:
      "Heavy-duty industrial generator system ensuring seamless 24/7 power backup with zero interruption to your wedding celebrations or corporate events.",
    features: ["Instant Auto-Switching", "Full Central AC Power", "Sound & Lighting Backup", "Zero Event Downtime"],
    hours: "24/7 Standby",
  },
  {
    id: "valet-parking",
    title: "Spacious Parking & Valet Services",
    badge: "Valet Security",
    image: "/images/our-divisions/sampan-highway-inn/hero.jpeg",
    description:
      "Paved parking ground accommodating 100+ vehicles with dedicated valet drivers, bright perimeter illumination, and 24/7 CCTV surveillance.",
    features: ["100+ Vehicle Capacity", "Dedicated Valet Drivers", "24/7 CCTV Monitoring", "Direct Highway Slipway"],
    hours: "Guarded 24/7",
  },
  {
    id: "corporate-meetings",
    title: "Conference & Meeting Hub",
    badge: "Corporate Ready",
    image: "/images/facilities/highway_inn/Official-Outing.png",
    description:
      "Fully equipped setup for corporate offsites, annual general meetings, brand activations, and dealer meets with tea-break and lunch catering.",
    features: ["HD Projection Systems", "Ergonomic Seating", "High-Speed Fiber Net", "Tea & Lunch Packages"],
    hours: "On Demand Booking",
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
                Venue Amenities &amp; Infrastructure
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
              Thoughtfully curated <br />
              <span className="text-amber-700">for grand celebrations.</span>
            </h2>
          </div>
          <p className="max-w-2xl text-sm sm:text-base text-neutral-600 leading-relaxed">
            Every detail is designed for your guests&apos; comfort, seamless event execution, and unforgettable memories on the highway corridor.
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
                    <span>Enquire Availability</span>
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
