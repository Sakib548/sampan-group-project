"use client";

import { useState } from "react";
import { FaRoute, FaMapMarkerAlt, FaCar, FaClock, FaCheckCircle, FaChevronRight, FaFacebook, FaPhoneAlt } from "react-icons/fa";

interface RouteMarker {
  id: string;
  mile: string;
  name: string;
  type: "start" | "exit" | "resort" | "landmark";
  driveTimeFromDhaka: string;
  description: string;
  isSampanEcoAgro?: boolean;
}

const corridorMarkers: RouteMarker[] = [
  {
    id: "dhaka-start",
    mile: "KM 0",
    name: "Dhaka Expressway Entry (Jatrabari / Postogola)",
    type: "start",
    driveTimeFromDhaka: "0 Mins",
    description: "Start journey along the uninterrupted Dhaka–Mawa Expressway corridor.",
  },
  {
    id: "padma-bridge",
    mile: "KM 55",
    name: "Padma Multipurpose Bridge",
    type: "landmark",
    driveTimeFromDhaka: "45 Mins",
    description: "Cross the landmark Padma Bridge into the southern transit expressway.",
  },
  {
    id: "bhanga-interchange",
    mile: "KM 75",
    name: "Bhanga Expressway Interchange",
    type: "exit",
    driveTimeFromDhaka: "1 hr 10 mins",
    description: "Take the cloverleaf exit onto the Faridpur regional highway corridor.",
  },
  {
    id: "alphadanga-destination",
    mile: "Destination",
    name: "Sampan Eco & Agro Resort (Alphadanga, Faridpur)",
    type: "resort",
    driveTimeFromDhaka: "Approx 2 hrs",
    description: "Arrival at Joydebpur, Boroga, Borice, Alphadanga-7870, Faridpur, Bangladesh.",
    isSampanEcoAgro: true,
  },
];

export default function HighwayRouteVisualizer() {
  const [selectedMarker, setSelectedMarker] = useState<RouteMarker>(corridorMarkers[3]);

  return (
    <section id="route-map" className="py-24 bg-[#0c1c14] text-white relative border-b border-white/10">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#b9e583]/40 bg-[#b9e583]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#b9e583] mb-4">
              <FaRoute className="text-xs" />
              <span>Location &amp; Driving Directions</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
              Route Guide &amp; <span className="font-semibold text-[#b9e583]">Resort Location</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/70 leading-relaxed font-normal">
            Located in Joydebpur, Boroga, Borice, Alphadanga, Faridpur — reachable smoothly via the Dhaka–Mawa Expressway and Padma Bridge.
          </p>
        </div>

        {/* Visual Route Corridor Box */}
        <div className="border border-[#b9e583]/40 bg-[#10251b] p-8 relative overflow-hidden shadow-2xl space-y-8">
          <div className="absolute top-0 left-0 h-1.5 w-full bg-[#b9e583]" />

          {/* Timeline Mile Markers */}
          <div className="relative pt-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
              {corridorMarkers.map((marker) => {
                const isSelected = selectedMarker.id === marker.id;
                return (
                  <button
                    key={marker.id}
                    onClick={() => setSelectedMarker(marker)}
                    className={`p-4 border text-left flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                      marker.isSampanEcoAgro
                        ? "border-[#b9e583] bg-[#b9e583]/20 shadow-lg shadow-[#b9e583]/10"
                        : isSelected
                        ? "border-white bg-white/10"
                        : "border-white/15 bg-black/40 hover:border-white/30"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between font-mono text-xs">
                        <span className={`font-bold ${marker.isSampanEcoAgro ? "text-[#b9e583]" : "text-white/60"}`}>
                          {marker.mile}
                        </span>
                        {marker.isSampanEcoAgro && (
                          <span className="bg-[#b9e583] text-[#0c1c14] text-[9px] font-bold px-1.5 py-0.5">
                            DESTINATION
                          </span>
                        )}
                      </div>

                      <h3 className="text-xs font-bold text-white mt-2 line-clamp-2">
                        {marker.name}
                      </h3>
                    </div>

                    <div className="mt-4 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50">
                      <span className="flex items-center gap-1">
                        <FaClock className="text-[#b9e583] text-[9px]" />
                        <span>{marker.driveTimeFromDhaka}</span>
                      </span>
                      <FaChevronRight className="text-[9px] text-[#b9e583]" />
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Detailed Selected Marker Box */}
          <div className="border border-white/15 bg-[#0c1c14] p-6 grid lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#b9e583] bg-[#b9e583]/15 border border-[#b9e583]/40 px-3 py-1 uppercase">
                  Route Step: {selectedMarker.mile}
                </span>
                <span className="font-mono text-xs text-white/70 flex items-center gap-1">
                  <FaCar className="text-[#b9e583]" />
                  <span>{selectedMarker.driveTimeFromDhaka} from Dhaka</span>
                </span>
              </div>

              <h4 className="text-xl font-bold text-white">{selectedMarker.name}</h4>
              <p className="text-xs text-white/80 leading-relaxed font-normal">
                {selectedMarker.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-6 font-mono text-xs">
              <div className="flex items-center gap-2 text-white/80">
                <FaCheckCircle className="text-[#b9e583]" />
                <span>Expressway &amp; Padma Bridge Route</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <FaCheckCircle className="text-[#b9e583]" />
                <span>Scenic Countryside Driving Corridor</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <FaCheckCircle className="text-[#b9e583]" />
                <span>On-Site Secure Resort Parking</span>
              </div>
            </div>

          </div>

          {/* Location Details & Facebook Card */}
          <div className="border border-white/15 bg-black/40 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#b9e583] text-xs font-mono font-bold uppercase tracking-wider">
                <FaMapMarkerAlt />
                <span>Resort Location Address</span>
              </div>
              <p className="text-sm font-medium text-white">
                Joydebpur, Boroga, Borice, Alphadanga-7870, Faridpur, Bangladesh
              </p>
              <p className="text-xs text-white/60">
                For detailed arrival assistance, call our concierge or visit our official Facebook page.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.facebook.com/sampanecoandagro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                <FaFacebook className="text-sm" />
                <span>Facebook Page</span>
              </a>

              <a
                href="tel:+8801929918408"
                className="inline-flex items-center gap-2 border border-[#b9e583]/40 bg-[#b9e583]/15 hover:bg-[#b9e583]/25 text-[#b9e583] px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <FaPhoneAlt className="text-xs" />
                <span>+880 1929-918408</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
