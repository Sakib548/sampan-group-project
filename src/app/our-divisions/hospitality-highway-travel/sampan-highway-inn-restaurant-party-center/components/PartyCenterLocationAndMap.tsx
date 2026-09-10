"use client";

import { FaMapMarkerAlt, FaDirections, FaPhoneAlt, FaClock, FaCheck } from "react-icons/fa";

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14662.089219414334!2d89.74752500982524!3d23.260464021760214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ffc915b3e67a43%3A0xc9ccd3be4ea97668!2sSampan%20Highway%20Inn%20Restaurant%20%26%20Party%20Centre!5e0!3m2!1sen!2sbd!4v1788938537834!5m2!1sen!2sbd";
const googleMapsDeepLink =
  "https://www.google.com/maps/dir/?api=1&destination=Sampan+Highway+Inn+Restaurant+%26+Party+Centre";

const hubDistances = [
  { hub: "Dhaka Zero Point / Jatrabari", distance: "74 km", time: "1h 05m" },
  { hub: "Padma Bridge Toll Plaza (Mawa)", distance: "39 km", time: "30m" },
  { hub: "Bhanga Junction Expressway Interchange", distance: "16 km", time: "15m" },
  { hub: "Gopalganj District HQ", distance: "36 km", time: "32m" },
  { hub: "Khulna Divisional City Hub", distance: "106 km", time: "1h 35m" },
  { hub: "Barishal Divisional Airport Hub", distance: "68 km", time: "55m" },
];

export default function PartyCenterLocationAndMap() {
  return (
    <section id="location" className="bg-[#faf9f6] pt-4 pb-20 sm:pt-6 sm:pb-28 text-[#1a1a1a]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-6 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-amber-600" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-amber-800">
              Strategic Location
            </p>
          </div>
        </div>

        {/* Map & Distance Layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

          {/* Left Column: Details & Distances */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Coordinates Pill */}
              <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-neutral-200 shadow-sm text-xs">
                <FaMapMarkerAlt className="text-amber-600" />
                <span className="font-mono font-bold text-neutral-800">23.260464° N, 89.747525° E</span>
                <span className="text-neutral-400">|</span>
                <span className="text-neutral-600">Dhaka–Khulna Highway</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#111111]">Direct Highway Frontage</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  Located right along the primary national corridor with direct dual deceleration ramps. No narrow link roads or village detours, allowing tourist coaches and wedding motorcades to enter seamlessly.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-neutral-700">
                  <FaCheck className="text-amber-600 text-[10px]" />
                  <span>Dedicated wide slipway entry with valet drop-off canopy</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-neutral-700">
                  <FaCheck className="text-amber-600 text-[10px]" />
                  <span>Paved parking lot accommodating 100+ guest vehicles and tour coaches</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-neutral-700">
                  <FaCheck className="text-amber-600 text-[10px]" />
                  <span>24/7 Security guard post, CCTV coverage, and illuminated perimeter</span>
                </div>
              </div>
            </div>

            {/* Distance Matrix */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
              <h4 className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-800 mb-4">
                Transit Times from Key Regional Hubs
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {hubDistances.map((hub, idx) => (
                  <div key={idx} className="bg-neutral-50 rounded-xl p-3 border border-neutral-100">
                    <p className="text-[11px] font-medium text-neutral-600 truncate">{hub.hub}</p>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-bold text-sm text-[#111111]">{hub.distance}</span>
                      <span className="text-[10px] font-mono text-amber-700 font-semibold">{hub.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Directions Action */}
            <div className="flex items-center gap-4">
              <a
                href={googleMapsDeepLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
              >
                <FaDirections className="text-amber-400 text-sm" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href="tel:+8801929918408"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
              >
                <FaPhoneAlt className="text-amber-600 text-xs" />
                <span>Call Venue Front Desk</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Map */}
          <div className="lg:col-span-7 flex">
            <div className="w-full h-full min-h-[460px] rounded-3xl overflow-hidden border border-neutral-200 shadow-sm relative">
              <iframe
                title="Sampan Highway Inn Restaurant & Party Center Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "460px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
