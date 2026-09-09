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

export default function LocationAndMap() {
  return (
    <section id="location" className="bg-[#faf9f6] pt-4 pb-20 sm:pt-6 sm:pb-28 text-[#1a1a1a]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-6 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-emerald-600" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-800">
              Strategic Location
            </p>
          </div>
          {/* <h2 className="text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
            Easy to access. <br />
            <span className="text-emerald-700">Seamless to continue.</span>
          </h2>
          <p className="max-w-2xl text-sm sm:text-base text-neutral-600 leading-relaxed pt-1">
            Positioned directly along the primary south-bound highway with dedicated acceleration and deceleration ramps for effortless stopping.
          </p> */}
        </div>

        {/* Map & Distance Layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

          {/* Left Column: Details & Distances */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">

            <div className="space-y-6">
              {/* Coordinates Pill */}
              <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-xl border border-neutral-200 shadow-sm text-xs">
                <FaMapMarkerAlt className="text-emerald-600" />
                <span className="font-mono font-bold text-neutral-800">23.260464° N, 89.747525° E</span>
                <span className="text-neutral-400">|</span>
                <span className="text-neutral-600">Dhaka–Khulna Highway</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#111111]">Direct Highway Access</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  Located right on the main corridor. No narrow link roads, no rural detours, and no bridge bottlenecks. Turn in seamlessly and re-enter the highway within seconds.
                </p>
              </div>

              {/* Distance Matrix Table */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-4">
                  Distance Matrix from Major Regional Gateways
                </h4>
                <div className="divide-y divide-neutral-100 text-sm">
                  {hubDistances.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0">
                      <span className="text-neutral-700 font-medium text-xs sm:text-sm">{item.hub}</span>
                      <div className="flex items-center gap-3 text-xs font-bold text-right">
                        <span className="text-emerald-700">{item.distance}</span>
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
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-emerald-700/20 transition-all duration-300"
              >
                <FaDirections className="text-base" />
                <span>Open Google Navigation</span>
              </a>

              <a
                href="tel:+8801929918408"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-100 px-5 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-neutral-800 transition-colors"
              >
                <FaPhoneAlt className="text-emerald-600 text-xs" />
                <span>Route Concierge</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Iframe Frame */}
          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[420px] rounded-3xl overflow-hidden border border-neutral-200 shadow-xl bg-neutral-100">
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
