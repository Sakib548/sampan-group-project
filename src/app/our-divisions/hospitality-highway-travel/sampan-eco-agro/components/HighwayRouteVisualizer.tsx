"use client";

import { useState } from "react";
import { FaRoute, FaMapMarkerAlt, FaCar, FaClock, FaCheckCircle, FaChevronRight, FaFacebook, FaPhoneAlt, FaDirections, FaExternalLinkAlt, FaCompass } from "react-icons/fa";

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

          {/* 2-Column Split: Route & Destination Details (Left) + Interactive Map (Right - Half Screen) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Left Column: Route Milestone Details & Resort Address */}
            <div className="border border-white/15 bg-[#0c1c14] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1 w-full bg-[#b9e583]" />

              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-[#b9e583] bg-[#b9e583]/15 border border-[#b9e583]/40 px-3 py-1 uppercase">
                    Route Step: {selectedMarker.mile}
                  </span>
                  <span className="font-mono text-xs text-white/70 flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1">
                    <FaCar className="text-[#b9e583]" />
                    <span>{selectedMarker.driveTimeFromDhaka} from Dhaka</span>
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    {selectedMarker.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/75 leading-relaxed font-normal">
                    {selectedMarker.description}
                  </p>
                </div>

                {/* Transit Guarantees */}
                <div className="p-4 bg-white/[0.03] border border-white/10 space-y-2.5 font-mono text-xs text-white/80">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-[#b9e583] shrink-0" />
                    <span>Uninterrupted Dhaka–Mawa Expressway &amp; Padma Bridge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-[#b9e583] shrink-0" />
                    <span>Bhanga Interchange to Faridpur Regional Corridor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-[#b9e583] shrink-0" />
                    <span>On-Site Secure Resort Parking (100+ vehicles &amp; buses)</span>
                  </div>
                </div>

                {/* Resort Destination Address */}
                <div className="p-4 bg-[#10251b] border border-[#b9e583]/30 space-y-2">
                  <div className="flex items-center gap-2 text-[#b9e583] text-xs font-mono font-bold uppercase tracking-wider">
                    <FaMapMarkerAlt />
                    <span>Destination Address &amp; GPS</span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-white leading-relaxed">
                    Joydebpur, Boroga, Borice, Alphadanga-7870, Faridpur, Bangladesh
                  </p>
                  <div className="flex items-center justify-between text-[11px] font-mono text-white/60 pt-1 border-t border-white/10">
                    <span>GPS Coordinates:</span>
                    <span className="text-[#b9e583] font-bold">23.23° N, 89.70° E</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Joydebpur,+Boroga,+Borice,+Alphadanga,+Faridpur,+Bangladesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 bg-[#b9e583] hover:bg-[#a8dc6e] text-[#0c1c14] py-3 px-4 font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer text-center"
                >
                  <FaDirections className="text-sm" />
                  <span>Get Directions</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>

                <a
                  href="https://www.facebook.com/sampanecoandagro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white py-3 px-4 font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                >
                  <FaFacebook className="text-sm" />
                  <span className="hidden sm:inline">Facebook</span>
                </a>

                <a
                  href="tel:+8801929918408"
                  className="inline-flex items-center gap-2 border border-[#b9e583]/40 bg-[#b9e583]/15 hover:bg-[#b9e583]/25 text-[#b9e583] py-3 px-4 font-mono text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <FaPhoneAlt className="text-xs" />
                  <span className="hidden sm:inline">+880 1929-918408</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Map Box (Half of Screen on Desktop) */}
            <div className="border border-white/15 bg-[#0c1c14] overflow-hidden shadow-2xl flex flex-col justify-between">
              {/* Map Header */}
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between gap-4 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-none bg-[#b9e583]/15 border border-[#b9e583]/30 flex items-center justify-center text-[#b9e583] shrink-0">
                    <FaMapMarkerAlt className="text-base" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-wide">
                      Resort Live Map
                    </h4>
                    <p className="text-[11px] font-mono text-white/60">
                      Alphadanga, Faridpur Eco Belt
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Joydebpur,+Boroga,+Borice,+Alphadanga,+Faridpur,+Bangladesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#b9e583] hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Open Fullscreen</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              </div>

              {/* Embedded Iframe taking full available height */}
              <div className="relative w-full flex-1 min-h-[380px] lg:min-h-[420px] bg-[#0c1c14]">
                <iframe
                  title="Sampan Eco & Agro Resort Location Map"
                  src="https://maps.google.com/maps?q=Joydebpur+Alphadanga+Faridpur+Bangladesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter saturate-90 brightness-95"
                />
                <div className="absolute bottom-3 left-3 bg-[#0c1c14]/90 border border-white/20 px-3 py-1.5 font-mono text-[10px] text-white/90 backdrop-blur-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#b9e583] animate-pulse" />
                  <span>GPS: 23.23° N, 89.70° E</span>
                </div>
              </div>

              {/* Map Footer Bar */}
              <div className="p-3.5 bg-black/40 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-white/70">
                <span className="flex items-center gap-1.5">
                  <FaCompass className="text-[#b9e583]" />
                  <span>Joydebpur, Alphadanga-7870</span>
                </span>
                <span className="text-white/50">Padma Bridge Route</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
