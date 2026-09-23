"use client";

import { FaMapMarkerAlt, FaDirections, FaClock, FaCompass, FaExternalLinkAlt, FaCheck } from "react-icons/fa";

export default function LocationAndMap() {
  return (
    <section id="location-map" className="py-24 bg-[#f4f1e8] text-[#173326] relative border-b border-[#173326]/15">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#2f6b45]/30 bg-[#2f6b45]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#2f6b45] mb-4">
              <span>03 • Location &amp; Accessibility</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#173326]">
              Where to Find <span className="font-semibold text-[#2f6b45]">Sampan Eco &amp; Agro</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#173326]/75 leading-relaxed font-normal">
            Located directly accessible from the main Dhaka expressway arterial corridor, positioned gracefully within the serene countryside green belt.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Location Details & GPS Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="border border-[#173326]/20 bg-white p-8 space-y-6 relative overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 h-1 w-full bg-[#2f6b45]" />
              
              <div className="flex items-center gap-3 text-[#2f6b45]">
                <FaMapMarkerAlt className="text-2xl" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">Official Address &amp; GPS</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#173326]">Sampan Eco &amp; Agro Resort</h3>
                <p className="text-xs text-[#173326]/75 mt-1 leading-relaxed">
                  Joydebpur, Boroga, Borice, Alphadanga-7870, Faridpur, Bangladesh.
                </p>
              </div>

              <div className="p-4 bg-[#f4f1e8] border border-[#173326]/15 font-mono text-xs space-y-2">
                <div className="flex justify-between text-[#173326]/75">
                  <span>GPS Coordinates:</span>
                  <span className="text-[#2f6b45] font-bold">23.23° N, 89.70° E</span>
                </div>
                <div className="flex justify-between text-[#173326]/75">
                  <span>Highway Access:</span>
                  <span className="text-[#173326] font-bold">Dhaka-Mawa Expressway &amp; Padma Bridge</span>
                </div>
              </div>

              {/* Distance Matrix */}
              <div className="space-y-3 pt-2">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#173326]/80 border-b border-[#173326]/10 pb-2">
                  Drive Time &amp; Distances
                </h4>
                
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-[#173326]/10">
                  <div className="flex items-center gap-2 text-[#173326]/75">
                    <FaClock className="text-[#2f6b45]" />
                    <span>Dhaka City Center (Jatrabari / Postogola)</span>
                  </div>
                  <span className="font-mono font-bold text-[#173326]">~2 Hours</span>
                </div>

                <div className="flex items-center justify-between text-xs py-1.5 border-b border-[#173326]/10">
                  <div className="flex items-center gap-2 text-[#173326]/75">
                    <FaCompass className="text-[#2f6b45]" />
                    <span>Padma Bridge</span>
                  </div>
                  <span className="font-mono font-bold text-[#173326]">45 Mins</span>
                </div>

                <div className="flex items-center justify-between text-xs py-1.5">
                  <div className="flex items-center gap-2 text-[#173326]/75">
                    <FaDirections className="text-[#2f6b45]" />
                    <span>Bhanga Expressway Interchange</span>
                  </div>
                  <span className="font-mono font-bold text-[#173326]">35 Mins</span>
                </div>
              </div>

              {/* Directions Button */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Joydebpur,+Boroga,+Borice,+Alphadanga,+Faridpur,+Bangladesh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#173326] hover:bg-[#2f6b45] py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-md"
              >
                <FaDirections className="text-base text-[#b9e583]" />
                <span>Open Google Maps Directions</span>
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>

            {/* Parking & Transit Guarantee */}
            <div className="border border-[#173326]/20 bg-white p-6 grid grid-cols-2 gap-4 text-xs shadow-sm">
              <div className="flex items-start gap-2.5">
                <FaCheck className="text-[#2f6b45] mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-[#173326]">Secure Gated Parking</p>
                  <p className="text-[11px] text-[#173326]/60 mt-0.5">100+ car &amp; bus bays</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <FaCheck className="text-[#2f6b45] mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-[#173326]">Concierge Support</p>
                  <p className="text-[11px] text-[#173326]/60 mt-0.5">Route &amp; arrival assistance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Map View */}
          <div className="lg:col-span-7 border border-[#173326]/20 bg-[#10251b] relative min-h-[420px] overflow-hidden shadow-sm">
            <iframe
              title="Sampan Eco & Agro Location Map"
              src="https://maps.google.com/maps?q=Joydebpur+Alphadanga+Faridpur+Bangladesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[480px] border-0 filter saturate-90 brightness-90 grayscale-[20%]"
              loading="lazy"
              allowFullScreen
            />
            <div className="absolute bottom-4 right-4 bg-[#0c1c14]/90 border border-white/20 p-3 font-mono text-[11px] text-white backdrop-blur-md">
              <span className="text-[#b9e583] font-bold">Live GPS:</span> Alphadanga, Faridpur Eco Belt
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
