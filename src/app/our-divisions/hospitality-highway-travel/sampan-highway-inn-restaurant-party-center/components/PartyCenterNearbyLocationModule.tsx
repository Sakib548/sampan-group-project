"use client";

import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaClock, FaExternalLinkAlt } from "react-icons/fa";

interface NearbySpot {
  id: string;
  name: string;
  type: string;
  distance: string;
  driveTime: string;
  image: string;
  description: string;
  link: string;
  external?: boolean;
}

const nearbySpots: NearbySpot[] = [
  {
    id: "highway-inn",
    name: "Sampan Highway Inn",
    type: "Highway Transit & Rest Suites",
    distance: "Adjacent",
    driveTime: "Same Premises",
    image: "/images/projects/sampan-highway-inn.png",
    description: "Our flagship sister property featuring 24/7 rest suites, fast food, sweet shop, juice bar, and EV charging plaza.",
    link: "/our-divisions/hospitality-highway-travel/sampan-highway-inn",
  },
  {
    id: "white-house",
    name: "Sampan White House",
    type: "Highway Motel & Suites",
    distance: "50 m",
    driveTime: "1 min walk",
    image: "/images/projects/Sampan-White-House-&-Motel.png",
    description: "A softer, luxurious highway pause offering quiet deluxe motel rooms, meeting lounges, and veranda dining.",
    link: "/our-divisions/hospitality-highway-travel/sampan-white-house",
  },
  {
    id: "filling-station",
    name: "Sampan Filling Station",
    type: "Automotive & Fuel",
    distance: "100 m",
    driveTime: "1 min walk",
    image: "/images/our-divisions/sampan-filling-station/hero.jpeg",
    description: "24/7 high-volume highway refuel, octane & diesel station with dedicated heavy vehicle bays.",
    link: "/our-divisions/automotive-fuel-mobility/sampan-filling-station",
  },
  {
    id: "lpg-station",
    name: "Sampan LPG Station",
    type: "Clean Mobility & Fuel",
    distance: "150 m",
    driveTime: "2 min walk",
    image: "/images/our-divisions/lpg-filling-station/hero.jpeg",
    description: "State-of-the-art LPG autogas conversion and rapid dispenser refueling station.",
    link: "/our-divisions/automotive-fuel-mobility/sampan-lpg-filling-station",
  },
  {
    id: "sampan-mart",
    name: "Sampan Mart",
    type: "Retail Super Shop",
    distance: "50 m",
    driveTime: "In Complex",
    image: "/images/facilities/express_highway_inn/4.Sampan-Mart.png",
    description: "24/7 highway retail super shop stocked with travel essentials, groceries, and fresh snacks.",
    link: "/our-divisions/retail-super-shops/sampan-mart",
  },
  {
    id: "mini-sampan",
    name: "Mini Sampan Super Shop",
    type: "Express Convenience",
    distance: "50 m",
    driveTime: "In Complex",
    image: "/images/logos/mini-sampan.png",
    description: "Quick-stop express retail kiosk for instant refreshments and travel accessories.",
    link: "/our-divisions/retail-super-shops/mini-sampan-super-shop",
  },
];

export default function PartyCenterNearbyLocationModule() {
  return (
    <section className="bg-[#111613] py-24 sm:py-32 text-white border-t border-neutral-800">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-amber-500" />
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-400">
                Connected Highway Ecosystem
              </p>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Nearby at this location. <br />
              <span className="text-amber-400">Complete destination amenities.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-neutral-400 leading-relaxed font-light">
            Located within the expansive Sampan Highway Complex, event hosts and guests enjoy immediate access to fuel, shopping, and lodging without detours.
          </p>
        </div>

        {/* Spot Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nearbySpots.map((spot) => (
            <article
              key={spot.id}
              className="group flex flex-col rounded-2xl overflow-hidden bg-neutral-900/90 border border-neutral-800 hover:border-amber-500/50 transition-all duration-500 hover:-translate-y-1 shadow-lg"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-800">
                <Image
                  src={spot.image}
                  alt={spot.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Distance Chip */}
                <div className="absolute top-3.5 right-3.5 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-bold text-amber-400 flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-[10px]" />
                  <span>{spot.distance}</span>
                </div>

                {/* Drive Time Chip */}
                <div className="absolute bottom-3.5 left-3.5 bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-neutral-900 flex items-center gap-1">
                  <FaClock className="text-[9px] text-amber-700" />
                  <span>{spot.driveTime}</span>
                </div>
              </div>

              {/* Body Content */}
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1">
                  {spot.type}
                </span>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {spot.name}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed flex-1">
                  {spot.description}
                </p>

                <div className="mt-6 pt-4 border-t border-white/10">
                  {spot.external ? (
                    <a
                      href={spot.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      <span>Explore Directions</span>
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  ) : (
                    <Link
                      href={spot.link}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      <span>Discover Property</span>
                      <span>→</span>
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
