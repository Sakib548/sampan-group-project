"use client";

import Image from "next/image";
import Link from "next/link";
import { FaMapPin, FaCompass } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

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
  {
    id: "highway-inn",
    name: "Sampan Highway Inn",
    type: "Flagship Highway Dining & Stay",
    distance: "1.2 km",
    driveTime: "2 min drive",
    image: "/images/projects/sampan-highway-inn.png",
    description: "Our flagship sister property featuring 24/7 fine dining, party center, multi-cuisine restaurant, and EV supercharging hub.",
    link: "/our-divisions/hospitality-highway-travel/sampan-highway-inn",
  },
  {
    id: "short-drive-range",
    name: "Sampan Short Drive Range (Coming Soon)",
    type: "Golf & Recreation",
    distance: "Adjacent",
    driveTime: "Coming Soon",
    image: "/images/featuredConcerns/sampan-agro-golf-resort.png",
    description: "Upcoming precision short-game golf practice range and driving bays for golf enthusiasts and highway visitors.",
    link: "/our-divisions/golf-zone/sampan-short-drive-range",
  },
];

export default function NearbyLocationModule() {
  return (
    <section className="bg-[#F5F5F2] py-24 sm:py-32 text-neutral-950 border-b border-neutral-200">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-[#e8b84b]"></span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-600">
                Regional Surroundings
              </span>
            </div>
            <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
              Nearby at this location. <br />
              <span className="text-[#ca8a04]">Sampan corridor network.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-neutral-500 leading-relaxed font-normal">
            Discover other high-value Sampan Group developments, natural riverfronts, and tourism landmarks in the immediate corridor vicinity.
          </p>
        </div>

        {/* Nearby Cards Grid (Square Cards, 3 columns matching Highway Inn) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nearbySpots.map((spot) => (
            <article
              key={spot.id}
              className="group flex flex-col rounded-none overflow-hidden bg-white border border-neutral-200 hover:border-[#e8b84b] transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1"
            >
              {/* Top Accent Line */}
              <div className="h-[3px] w-0 bg-[#e8b84b] transition-all duration-500 group-hover:w-full" />

              {/* Image with Distance Tag */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <Image
                  src={spot.image}
                  alt={spot.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3.5 right-3.5 bg-white/95 border border-neutral-200 px-3 py-1 font-mono text-[10px] font-bold text-neutral-950 shadow-sm">
                  {spot.distance} • {spot.driveTime}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ca8a04]">
                  {spot.type}
                </span>

                <h3 className="text-base font-bold text-neutral-950 mt-1 transition-colors group-hover:text-[#ca8a04]">
                  {spot.name}
                </h3>

                <p className="mt-2 text-xs text-neutral-500 leading-relaxed flex-1">
                  {spot.description}
                </p>

                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <Link
                    href={spot.link}
                    className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-neutral-900 hover:text-[#ca8a04] transition-colors"
                  >
                    <span>Explore Concern</span>
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
