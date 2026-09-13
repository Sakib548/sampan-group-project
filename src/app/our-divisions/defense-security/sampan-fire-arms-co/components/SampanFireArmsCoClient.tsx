"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaShieldAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaExpand,
  FaTimes,
  FaCheck,
  FaLock,
  FaFileContract,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const bannerImage = "/images/our-divisions/sampan-firearms/banner.jpg";

const serviceHighlights = [
  {
    title: "Government-Enlisted Importer",
    category: "Defense Procurement",
    description:
      "Licensed and enlisted by national regulatory authorities to procure, import, and distribute approved defense and sporting equipment.",
    icon: FaShieldAlt,
  },
  {
    title: "Biometric & Ledger Compliance",
    category: "Regulatory Standard",
    description:
      "Strict integration with government licensing databases, mandatory biometric identity verification, and audited chain-of-custody protocols.",
    icon: FaLock,
  },
  {
    title: "Institutional & Licensed Supply",
    category: "Authorized Entities",
    description:
      "Providing compliant equipment solutions strictly for accredited law enforcement, sports shooting associations, and verified civilian license holders.",
    icon: FaFileContract,
  },
];

export default function SampanFireArmsCoClient() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#fcfbf9] text-[#1a1714] selection:bg-red-800 selection:text-white">

      {/* ================= 1. HERO SECTION (NO EYEBROW / COMPACT) ================= */}
      <section className="relative min-h-[68vh] lg:min-h-[78vh] flex items-center justify-center overflow-hidden bg-[#0e0a0a] text-white pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src={bannerImage}
            alt="Sampan Fire Arms Co. Facility"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/35" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-2 pb-8 lg:pb-12">
          <div className="max-w-4xl space-y-5 sm:space-y-6">

            {/* Headline */}
            <h1 className="text-[clamp(2.4rem,4.8vw,4.2rem)] font-bold tracking-tight text-white leading-[0.98]">
              Sampan <br />
              <span className="text-red-500 block mt-1">
                Fire Arms Co.
              </span>
            </h1>

            {/* Shortened Subheadline */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl font-light tracking-wide border-l-2 border-red-500/80 pl-4">
              Government-enlisted defense importer and licensed firearms concern operating under official Ministry of Home Affairs compliance in Bangladesh.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("operations")}
                className="group inline-flex items-center justify-center gap-2 rounded-none bg-red-700 hover:bg-red-600 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-lg shadow-red-950/40 cursor-pointer"
              >
                <span>Operations &amp; Scope</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo("facility")}
                className="inline-flex items-center justify-center rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                Facility Visual
              </button>

              <button
                onClick={() => scrollTo("location")}
                className="inline-flex items-center justify-center rounded-none border border-red-500/40 bg-red-950/30 hover:bg-red-900/60 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-red-300 transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                Inquiries &amp; Notice
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="border-l-2 border-red-500 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Govt Enlisted</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Defense Importer</p>
              </div>
              <div className="border-l-2 border-red-500 pl-4">
                <p className="text-sm sm:text-base font-bold text-red-400 uppercase tracking-wider">Home Affairs</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Regulatory License</p>
              </div>
              <div className="border-l-2 border-red-500 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Biometric Audit</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Verified Ledger</p>
              </div>
              <div className="border-l-2 border-red-500 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Dhaka</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Armory Facility</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. OPERATIONS & REGULATORY SCOPE (NO ARMS NAMES / CLEAN) ================= */}
      <section id="operations" className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#fcfbf9] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Authorized defense supply. <br />
                <span className="text-red-700">Strict regulatory oversight.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Operating with statutory certification to facilitate authorized defense procurement, official sporting equipment, and lawful personal protection arms.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {serviceHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col justify-between border border-neutral-200 bg-white p-6 sm:p-7 rounded-none hover:border-red-600 hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="w-10 h-10 bg-red-50 border border-red-200 flex items-center justify-center text-red-700 rounded-none group-hover:bg-red-600 group-hover:text-white transition-colors mb-6">
                      <Icon className="text-base" />
                    </div>

                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-red-700 block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-neutral-950 group-hover:text-red-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-red-800 font-bold">
                    <span>Statutory Enlistment</span>
                    <FaCheck className="text-[10px] text-red-600" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= 3. FACILITY VISUAL (NO EYEBROW) ================= */}
      <section id="facility" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Facility &amp; Operations
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-500 leading-relaxed">
              Official facility visual representing our government-enlisted defense supply operations.
            </p>
          </div>

          <div className="max-w-4xl">
            <article
              onClick={() => setLightboxOpen(true)}
              className="group relative flex flex-col h-full rounded-none overflow-hidden bg-white border border-neutral-200 hover:border-red-600 transition-all duration-300 hover:shadow-md cursor-pointer"
            >
              <div className="absolute top-0 left-0 h-[3px] w-0 bg-red-600 transition-all duration-500 group-hover:w-full z-20" />

              <div className="relative w-full h-[320px] sm:h-[420px] overflow-hidden bg-neutral-900">
                <Image
                  src={bannerImage}
                  alt="Sampan Fire Arms Co. Facility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 z-10">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-red-400 block mb-1">
                    Licensed Armory Concern
                  </span>
                  <h4 className="text-white text-lg sm:text-xl font-bold">
                    Sampan Fire Arms Co. Facility
                  </h4>
                  <p className="text-xs text-neutral-300 mt-1 max-w-xl">
                    Authorized defense and firearms dealership operating under strict government oversight and statutory compliance in Dhaka.
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-mono text-red-300 font-bold">
                    <FaExpand className="text-xs" />
                    <span>Click to Enlarge</span>
                  </div>
                </div>
              </div>
            </article>
          </div>

        </div>
      </section>

      {/* ================= 4. REGULATORY NOTICE & INQUIRIES ================= */}
      <section id="location" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#0c0808] text-white border-b border-white/10">
        <div className="mx-auto max-w-[1440px]">

          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Regulatory Notice &amp; Contact
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              All transactions and procurement inquiries are subject to strict legal eligibility and valid government documentation.
            </p>
          </div>

          {/* Legal Notice Banner */}
          <div className="mb-12 border-l-4 border-red-600 bg-white/[0.04] p-6 sm:p-8 rounded-none">
            <h3 className="text-base font-bold text-red-400 flex items-center gap-2">
              <FaShieldAlt className="text-sm" />
              <span>Mandatory Legal Compliance Notice</span>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              Services and supplies are strictly restricted to individuals and institutions presenting a valid, authentic Government Arms License issued by the competent licensing authority. Original license documentation, biometric verification, and official ledger entry are mandatory. No unsolicited or unlicensed requests are entertained.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Facility Location */}
            <div className="bg-[#140e0e] border border-white/10 p-8 rounded-none space-y-4">
              <div className="w-12 h-12 bg-red-950/60 border border-red-500/30 flex items-center justify-center text-red-400 rounded-none">
                <FaMapMarkerAlt className="text-lg" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Showroom Location
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-mono">
                Sampan Fire Arms Co. <br />
                Armory Corridor, Dhaka <br />
                Bangladesh
              </p>
              <p className="pt-2 text-[11px] text-neutral-400 font-mono border-t border-white/10">
                Official dealership facility
              </p>
            </div>

            {/* Card 2: Regulatory Authority */}
            <div className="bg-[#140e0e] border border-white/10 p-8 rounded-none space-y-4">
              <div className="w-12 h-12 bg-red-950/60 border border-red-500/30 flex items-center justify-center text-red-400 rounded-none">
                <FaFileContract className="text-base" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Regulatory Authority
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-mono">
                Ministry of Home Affairs <br />
                Govt Enlisted Importer <br />
                Statutory Compliance Audit
              </p>
              <p className="pt-2 text-[11px] text-neutral-400 font-mono border-t border-white/10">
                Arms Act 1878 compliant
              </p>
            </div>

            {/* Card 3: Inquiries Desk */}
            <div className="bg-[#140e0e] border border-white/10 p-8 rounded-none space-y-4">
              <div className="w-12 h-12 bg-red-950/60 border border-red-500/30 flex items-center justify-center text-red-400 rounded-none">
                <FaPhoneAlt className="text-base" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Licensed Inquiries
              </h3>
              <div className="pt-1 text-sm text-neutral-300 space-y-1 font-mono">
                <p>
                  <span className="text-neutral-500">Phone: </span>
                  <a href="tel:+8801929918400" className="text-red-400 hover:underline">
                    +880 1929918400
                  </a>
                </p>
                <p>
                  <span className="text-neutral-500">Email: </span>
                  <a href="mailto:info@sampangroup.com.bd.bd" className="text-red-400 hover:underline">
                    info@sampangroup.com.bd.bd
                  </a>
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-none bg-red-700 hover:bg-red-600 text-white px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Official Inquiries</span>
                  <FiArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Modal (Square Style) */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-in fade-in"
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white p-3 rounded-none bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <FaTimes className="text-lg" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[85vh] aspect-[16/10] rounded-none overflow-hidden border border-white/20 shadow-2xl bg-black"
          >
            <Image
              src={bannerImage}
              alt="Sampan Fire Arms Co. Preview"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* ================= 5. SQUARE MINIMAL FOOTER ================= */}
      <footer className="bg-white border-t border-neutral-200 px-6 py-12 sm:px-10 lg:px-16 text-neutral-600">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-neutral-950 mb-3">
                Sampan Fire Arms Co.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-md">
                Government-enlisted defense importer and licensed firearms dealership in Bangladesh operating under official Ministry of Home Affairs oversight. A Sampan Group Venture.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs font-mono">
                <li>
                  <button onClick={() => scrollTo("operations")} className="hover:text-red-700 transition-colors text-left">
                    Operations &amp; Scope
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("facility")} className="hover:text-red-700 transition-colors text-left">
                    Facility Visual
                  </button>
                </li>
                <li>
                  <Link href="/our-divisions/defense-security/nagar-arms-ammunition" className="hover:text-red-700 transition-colors">
                    Nagar Arms &amp; Ammunition
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">
                Head Office
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-500 font-mono">
                <li>Dhaka, Bangladesh</li>
                <li>Tel: +880 1929918400</li>
                <li>info@sampangroup.com.bd.bd</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-mono">
            <p>
              © {new Date().getFullYear()} Sampan Fire Arms Co. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/our-divisions/defense-security" className="hover:text-red-700 transition-colors">
                Defense Division Archive
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
