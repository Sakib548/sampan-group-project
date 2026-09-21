"use client";

import { FaMapMarkerAlt, FaDirections, FaPhoneAlt } from "react-icons/fa";

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14662.089219414334!2d89.765406!3d23.260465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ffc915b3e67a43%3A0xc9ccd3be4ea97668!2sSampan%20Highway%20Inn%20Restaurant%20%26%20Party%20Centre!5e0!3m2!1sen!2sbd!4v1788938537834!5m2!1sen!2sbd";
const googleMapsDeepLink =
  "https://maps.app.goo.gl/KXSdwQf41PxZLmvf8";

const hubDistances = [
  { hub: "Dhaka Zero Point / Jatrabari", distance: "103 km", time: "1h 15m" },
  { hub: "Padma Bridge Toll Plaza (Mawa)", distance: "72 km", time: "50m" },
  { hub: "Bhanga Junction Expressway Interchange", distance: "30 km", time: "25m" },
  { hub: "South Highway Junction", distance: "41 km", time: "35m" },
  { hub: "Khulna Divisional City Hub", distance: "98 km", time: "1h 15m" },
  { hub: "Barishal Divisional City Hub", distance: "125 km", time: "1h 35m" },
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
              <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-none border border-neutral-200 shadow-sm text-xs">
                <FaMapMarkerAlt className="text-amber-600" />
                <span className="font-mono font-bold text-neutral-800">23.260465° N, 89.765979° E</span>
                <span className="text-neutral-400">|</span>
                <span className="text-neutral-600">KM 103, Dhaka–Khulna Highway</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#111111]">Direct Highway Access</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  Located right on the main corridor at KM 103 on the Dhaka–Khulna Highway. No narrow link roads, no rural detours, and no bridge bottlenecks. Turn in seamlessly and re-enter the highway within seconds.
                </p>
              </div>

              {/* Distance Matrix Table */}
              <div className="rounded-none border border-neutral-200 bg-white p-6 shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-4">
                  Distance Matrix from Major Regional Gateways
                </h4>
                <div className="divide-y divide-neutral-100 text-sm">
                  {hubDistances.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0">
                      <span className="text-neutral-700 font-medium text-xs sm:text-sm">{item.hub}</span>
                      <div className="flex items-center gap-3 text-xs font-bold text-right">
                        <span className="text-amber-700">{item.distance}</span>
                        <span className="text-neutral-400 font-normal">({item.time})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={googleMapsDeepLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-none bg-amber-700 hover:bg-amber-800 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-amber-700/20 transition-all duration-300"
              >
                <FaDirections className="text-base" />
                <span>Open Google Navigation</span>
              </a>

              {/* <a
                href="tel:+8801929918408"
                className="inline-flex items-center gap-2 rounded-none border border-neutral-300 bg-white hover:bg-neutral-100 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-neutral-800 transition-colors"
              >
                <FaPhoneAlt className="text-amber-600 text-xs" />
                <span>Route Concierge</span>
              </a> */}
            </div>

          </div>

          {/* Right Column: Google Maps Iframe Frame */}
          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[420px] rounded-none overflow-hidden border border-neutral-200 shadow-xl bg-neutral-100">
              <iframe
                title="Sampan Highway Inn Restaurant & Party Centre Live Map Location"
                src={mapEmbedUrl}
                className="w-full h-full min-h-[420px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
