"use client";

import { useState } from "react";
import { 
  FaMapMarkerAlt, 
  FaCarSide, 
  FaRoute, 
  FaClock, 
  FaCompass, 
  FaShieldAlt,
  FaCheckCircle
} from "react-icons/fa";

const routeCorridor = [
  {
    id: "dhaka",
    name: "Dhaka Zero Point",
    km: 0,
    timeFromDhaka: "0 min",
    type: "Origin Gateway",
    detail: "Mayor Hanif Flyover & Postogola Bridge Exit",
  },
  {
    id: "padma-toll",
    name: "Padma Bridge Toll Plaza",
    km: 35,
    timeFromDhaka: "32 min",
    type: "National Landmark",
    detail: "Mawa Toll Plaza & Expressway Interchange",
  },
  {
    id: "bhanga",
    name: "Bhanga Junction Interchange",
    km: 58,
    timeFromDhaka: "50 min",
    type: "Expressway Flyover",
    detail: "Tri-directional Cloverleaf connecting Barishal & Khulna",
  },
  {
    id: "party-center",
    name: "SAMPAN HIGHWAY INN & PARTY CENTER",
    km: 74,
    timeFromDhaka: "65 min",
    isDestination: true,
    type: "★ Premier Event Venue",
    detail: "Direct Highway Frontage • Dedicated Valet Parking • Dual Slipway Entry",
  },
  {
    id: "gopalganj",
    name: "Gopalganj District Hub",
    km: 110,
    timeFromDhaka: "1h 35m",
    type: "Regional Hub",
    detail: "Connecting Southern Agricultural Corridors",
  },
  {
    id: "khulna",
    name: "Khulna Divisional City",
    km: 180,
    timeFromDhaka: "2h 15m",
    type: "Terminal Gateway",
    detail: "Rupsha Bridge & Industrial Port Connection",
  },
];

const origins = [
  {
    id: "dhaka",
    name: "From Dhaka (Jatrabari / Motijheel)",
    distanceToInn: "74 km",
    estTime: "1h 05m",
    advice: "Take Mayor Hanif Flyover down to Postogola, connect with the 4-Lane N8 Expressway directly to our gates.",
  },
  {
    id: "padma",
    name: "From Padma Bridge (Jajira Toll)",
    distanceToInn: "39 km",
    estTime: "30 min",
    advice: "Follow the straight southern alignment of the expressway; our illuminated venue is visible 1 km in advance.",
  },
  {
    id: "bhanga",
    name: "From Bhanga Interchange",
    distanceToInn: "16 km",
    estTime: "14 min",
    advice: "Keep right after the roundabout towards the southern highway corridor; take our dedicated deceleration slipway.",
  },
  {
    id: "barishal",
    name: "From Barishal City",
    distanceToInn: "68 km",
    estTime: "55 min",
    advice: "Northbound route through the Bhanga junction with dedicated U-turn bay right before our complex gate.",
  },
  {
    id: "khulna",
    name: "From Khulna / Bagerhat",
    distanceToInn: "106 km",
    estTime: "1h 35m",
    advice: "Direct highway cruise passing Gopalganj bypass with wide paved approach into our valet parking grounds.",
  },
];

export default function PartyCenterHighwayRouteVisualizer() {
  const [selectedOrigin, setSelectedOrigin] = useState("dhaka");
  const currentOrigin = origins.find((o) => o.id === selectedOrigin) || origins[0];

  return (
    <section id="route-map" className="relative bg-[#F5F5F2] py-24 sm:py-32 text-neutral-950 border-b border-neutral-200 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border border-amber-700/30 bg-amber-50 px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-amber-800 mb-4">
            <FaCompass />
            <span>Corridor Navigation</span>
          </div>
          <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Convenient highway access for every guest.
          </h2>
          <p className="mt-4 text-base text-neutral-600 leading-relaxed">
            Positioned directly along the primary highway corridor with dedicated deceleration slipways so guests and wedding party motorcades arrive safely and smoothly.
          </p>
        </div>

        {/* Interactive Origin Selector */}
        <div className="mb-12 rounded-none border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-neutral-200">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-800">
              Where are your event guests traveling from?
            </span>
            <span className="text-xs text-neutral-500 font-mono">
              Click starting hub to calculate transit times:
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-4">
            {origins.map((orig) => (
              <button
                key={orig.id}
                type="button"
                onClick={() => setSelectedOrigin(orig.id)}
                className={`p-3.5 rounded-none text-left border transition-all duration-300 cursor-pointer ${
                  selectedOrigin === orig.id
                    ? "bg-neutral-950 text-white border-neutral-950 shadow-sm"
                    : "bg-[#F5F5F2] text-neutral-800 border-neutral-200 hover:bg-neutral-100"
                }`}
              >
                <p className="font-mono text-[11px] font-semibold">{orig.name}</p>
                <p className={`text-sm font-bold mt-1 ${selectedOrigin === orig.id ? "text-amber-400" : "text-amber-700"}`}>
                  {orig.distanceToInn} • {orig.estTime}
                </p>
              </button>
            ))}
          </div>

          {/* Traveler Recommendation Pill */}
          <div className="mt-4 flex items-center gap-3 bg-amber-50 border border-amber-300 rounded-none p-3.5 text-xs text-amber-950">
            <FaCheckCircle className="text-amber-700 flex-shrink-0 text-base" />
            <span><strong>Trip Recommendation:</strong> {currentOrigin.advice}</span>
          </div>
        </div>

        {/* Visual Highway Route Line */}
        <div className="relative rounded-none border border-neutral-200 bg-white p-8 sm:p-12 shadow-sm">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-neutral-200">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 rounded-full bg-amber-500 animate-ping" />
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-900">
                National Highway Expressway Kilometer Profile
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-neutral-500">
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-600 inline-block" />
                <span>Venue (KM 74)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 inline-block" />
                <span>Corridor Waypoints</span>
              </span>
            </div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-6 gap-6 pt-4">
            <div className="hidden md:block absolute top-[52px] left-[8%] right-[8%] h-1 bg-neutral-200 z-0">
              <div className="h-full bg-gradient-to-r from-neutral-300 via-amber-500 to-neutral-300 w-full" />
            </div>

            {routeCorridor.map((point) => (
              <div
                key={point.id}
                className={`relative z-10 flex flex-col items-center text-center p-4 transition-all duration-300 ${
                  point.isDestination
                    ? "bg-amber-50/70 border-2 border-amber-500 shadow-md scale-105"
                    : "border border-transparent"
                }`}
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center font-mono font-bold text-xs mb-3 transition-colors ${
                    point.isDestination
                      ? "bg-amber-600 text-white shadow-lg ring-4 ring-amber-200"
                      : "bg-white text-neutral-700 border-2 border-neutral-300"
                  }`}
                >
                  {point.isDestination ? <FaCarSide className="text-base" /> : `${point.km}k`}
                </div>

                <span
                  className={`text-[10px] font-mono font-bold uppercase tracking-wider mb-1 ${
                    point.isDestination ? "text-amber-700 font-extrabold" : "text-neutral-400"
                  }`}
                >
                  {point.type}
                </span>

                <h4
                  className={`text-sm font-bold leading-tight ${
                    point.isDestination ? "text-amber-950 font-black" : "text-neutral-900"
                  }`}
                >
                  {point.name}
                </h4>

                <p className="font-mono text-xs font-semibold text-neutral-500 mt-1">
                  ⏱ {point.timeFromDhaka}
                </p>

                <p className="text-[11px] text-neutral-500 mt-2 leading-snug">
                  {point.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
