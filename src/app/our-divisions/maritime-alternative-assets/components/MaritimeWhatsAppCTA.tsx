"use client";

import { useState } from "react";

export default function MaritimeWhatsAppCTA() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappHref =
    "https://wa.me/8801700000000?text=Hello%20Sampan%20Maritime%20Desk%2C%20I%20would%20like%20to%20speak%20with%20an%20Investment%20Advisor%20regarding%20Sampan%20Floating%20Pearl%20ship-shares.";

  return (
    <>
      {/* Inline Section CTA */}
      <section className="py-16 px-6 sm:px-12 bg-gradient-to-r from-[#07162c] via-[#0077b6] to-[#07162c] text-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-black/30 px-3 py-1 rounded-full border border-white/10">
              Direct Investment Consultation
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mt-2">
              Speak Directly with a Maritime Investment Advisor
            </h3>
            <p className="text-xs sm:text-sm text-cyan-100/80 mt-1">
              Instant responses on WhatsApp regarding share pricing, dividend escrow, and deed transfer contracts.
            </p>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-2xl flex-shrink-0 flex items-center gap-2 hover:scale-105"
          >
            <span>💬 Chat on WhatsApp Now</span>
          </a>
        </div>
      </section>

      {/* Floating Bottom-Right WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {showTooltip && (
          <div className="hidden sm:flex items-center gap-2 bg-[#07162c] text-white text-xs px-3.5 py-2 rounded-xl border border-cyan-700/50 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Maritime Advisor Online</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-cyan-400 hover:text-white font-bold ml-1"
            >
              ✕
            </button>
          </div>
        )}

        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center font-bold text-2xl shadow-2xl border-2 border-white transition-all hover:scale-110"
          title="Talk to an Investment Advisor on WhatsApp"
        >
          💬
        </a>
      </div>
    </>
  );
}
