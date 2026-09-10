"use client";

import { useState } from "react";

export default function ResortMasterplanMap() {
  const [activeZone, setActiveZone] = useState("golf");

  const zones = [
    {
      id: "golf",
      name: "Zone A: Championship Golf & Academy",
      acreage: "45 Acres",
      status: "Phase 2 Target Completion Q4 2026",
      description: "Includes the 9-hole executive golf course, TrackMan 4 academy bays, putting green studio, and floodlit night range.",
      features: ["PGA Practice Fairways", "Toptracer Automated Range", "Clubhouse & Pro Shop", "Lighting System"],
    },
    {
      id: "villas",
      name: "Zone B: VVIP Luxury Eco-Villas",
      acreage: "30 Acres",
      status: "Phase 3 Development",
      description: "Private secluded villas featuring infinity plunge pools, private garden courtyards, butler service, and eco-architecture.",
      features: ["Private Infinity Pools", "24/7 Butler Service", "Solar Powered Grid", "VIP Transport Hub"],
    },
    {
      id: "agro",
      name: "Zone C: Sustainable Agro & Fruit Orchards",
      acreage: "60 Acres",
      status: "Operational Harvest Estate",
      description: "Organic crop fields, dragon fruit orchards, greenhouse vegetable units, and bio-secure fisheries supplying fresh resort food.",
      features: ["Solar Drip Irrigation", "Farm-to-Table Restaurant Supply", "Agro Tour Trails", "Organic Produce Market"],
    },
    {
      id: "wellness",
      name: "Zone D: Wellness Spa, Lake & Club Lounge",
      acreage: "25 Acres",
      status: "Phase 2 & 3 Integration",
      description: "Natural lake for kayaking and paddle boating, luxury spa & sauna, SAGCL VIP Club Lounge, and event grounds.",
      features: ["Ayurvedic Wellness Spa", "Boating Lake & Pier", "SAGCL VIP Lounge", "Grand Banquet Lawn"],
    },
  ];

  const currentZoneObj = zones.find((z) => z.id === activeZone) || zones[0];

  return (
    <section id="masterplan" className="py-20 px-6 sm:px-12 lg:px-20 bg-[#f8faf6] text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full">
            Masterplan Overview & Interactive Map
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-[#071d13]">
            160-Acre Integrated Masterplan
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Select a zone below to explore the detailed architectural layout and development progress across our 160-acre estate.
          </p>

          {/* Zone Selector Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {zones.map((z) => (
              <button
                key={z.id}
                onClick={() => setActiveZone(z.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activeZone === z.id
                    ? "bg-[#071d13] text-amber-400 shadow-md scale-[1.02]"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-emerald-50"
                }`}
              >
                {z.name.split(":")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Masterplan Display Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-emerald-900/10 rounded-3xl p-8 sm:p-12 shadow-xl">
          {/* Left Zone Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-md">
                {currentZoneObj.acreage}
              </span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md">
                {currentZoneObj.status}
              </span>
            </div>

            <h3 className="text-3xl font-bold text-[#071d13] font-serif">
              {currentZoneObj.name}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              {currentZoneObj.description}
            </p>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Zone Facilities & Features
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {currentZoneObj.features.map((f, i) => (
                  <div key={i} className="flex items-center text-xs font-medium text-emerald-950">
                    <span className="text-amber-500 font-bold mr-2">✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Simulated Masterplan Map Visualizer */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#071d13] to-emerald-950 text-white rounded-2xl p-8 min-h-[360px] flex flex-col justify-between relative overflow-hidden border border-emerald-800/40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.15),transparent_70%)] pointer-events-none" />

            <div className="flex items-center justify-between text-xs font-mono text-emerald-300 z-10">
              <span>📍 MASTERPLAN GPS: 24.3000° N, 91.7000° E</span>
              <span>160 TOTAL ACRES</span>
            </div>

            <div className="my-auto text-center z-10 space-y-4">
              <div className="w-20 h-20 rounded-2xl bg-amber-400/20 text-amber-400 border border-amber-400/40 flex items-center justify-center font-bold text-2xl mx-auto shadow-xl">
                🗺
              </div>
              <h4 className="text-2xl font-bold font-serif text-white">
                {currentZoneObj.name}
              </h4>
              <p className="text-xs text-emerald-200/80 max-w-sm mx-auto">
                Architectural blueprints and 3D land plot models active for {currentZoneObj.name}.
              </p>
            </div>

            <div className="pt-4 border-t border-emerald-800/40 flex items-center justify-between text-[10px] font-mono text-emerald-300/80 z-10">
              <span>SAGR Architectural Blueprint</span>
              <a href="#waitlist-form" className="text-amber-400 font-bold hover:underline">
                Request High-Res Masterplan PDF →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
