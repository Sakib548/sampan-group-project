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

const bannerImage = "/images/our-divisions/nagar-arms-ammunation/hero.jpg";

const serviceHighlights = [
  {
    title: "Authorized Government Dealership",
    category: "Regulatory Status",
    description:
      "Officially enlisted and licensed dealer operating under statutory authorization to supply approved sporting and defense equipment to verified license holders.",
    icon: FaShieldAlt,
  },
  {
    title: "Strict Statutory Compliance",
    category: "Licensing Protocol",
    description:
      "Full adherence to Ministry of Home Affairs regulatory standards, mandatory original license booklet verification, and official registry documentation.",
    icon: FaFileContract,
  },
  {
    title: "Authorized Client Advisory",
    category: "Armory Support",
    description:
      "Dedicated consultation, safe storage solutions, and licensed equipment services exclusively for accredited institutions and lawful license holders.",
    icon: FaLock,
  },
];

interface GalleryImage {
  id: string;
  image: string;
}

const facilityGallery: GalleryImage[] = [
  { id: "img-1", image: "/images/our-divisions/nagar-arms-ammunation/Nagar-Arms-Image-13.jpg" },
  { id: "img-2", image: "/images/our-divisions/nagar-arms-ammunation/Nagar-Arms-&-Ammunition-iamge-6.jpg" },
  { id: "img-3", image: "/images/our-divisions/nagar-arms-ammunation/1.jpeg" },
  { id: "img-4", image: "/images/our-divisions/nagar-arms-ammunation/2.jpeg" },
  { id: "img-5", image: "/images/our-divisions/nagar-arms-ammunation/3.jpeg" },
  { id: "img-6", image: "/images/our-divisions/nagar-arms-ammunation/4.jpeg" },
  { id: "img-7", image: "/images/our-divisions/nagar-arms-ammunation/5.jpeg" },
  { id: "img-8", image: "/images/our-divisions/nagar-arms-ammunation/6.jpeg" },
  { id: "img-9", image: "/images/our-divisions/nagar-arms-ammunation/7.jpeg" },
  { id: "img-10", image: "/images/our-divisions/nagar-arms-ammunation/8.jpeg" },
  { id: "img-11", image: "/images/our-divisions/nagar-arms-ammunation/9.jpeg" },
  { id: "img-12", image: "/images/our-divisions/nagar-arms-ammunation/13.jpeg" },
];

export default function NagarArmsAmmunitionClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#fcfbf9] text-[#1a1714] selection:bg-[#7c2d12] selection:text-white">

      {/* ================= 1. HERO SECTION (NO EYEBROW / COMPACT) ================= */}
      <section className="relative min-h-[68vh] lg:min-h-[78vh] flex items-center justify-center overflow-hidden bg-[#100b08] text-white pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src={bannerImage}
            alt="Nagar Arms and Ammunition Facility"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/35" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-2 pb-8 lg:pb-12">
          <div className="max-w-4xl space-y-5 sm:space-y-6">

            {/* Headline */}
            <h1 className="text-[clamp(2.4rem,4.8vw,4.2rem)] font-bold tracking-tight text-white leading-[0.98]">
              Nagar Arms <br />
              <span className="text-[#ea580c] block mt-1">
                &amp; Ammunition
              </span>
            </h1>

            {/* Shortened Subheadline */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl font-light tracking-wide border-l-2 border-[#ea580c]/80 pl-4">
              Government-licensed arms and ammunition dealer operating under official regulatory authorization and strict compliance in Bangladesh.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("compliance")}
                className="group inline-flex items-center justify-center gap-2 rounded-none bg-[#c2410c] hover:bg-[#ea580c] px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-lg shadow-orange-950/40 cursor-pointer"
              >
                <span>Compliance &amp; Operations</span>
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
                className="inline-flex items-center justify-center rounded-none border border-[#ea580c]/40 bg-[#7c2d12]/30 hover:bg-[#7c2d12]/60 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-orange-300 transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                Inquiries &amp; Notice
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="border-l-2 border-[#ea580c] pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Govt Licensed</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Official Dealer</p>
              </div>
              <div className="border-l-2 border-[#ea580c] pl-4">
                <p className="text-sm sm:text-base font-bold text-[#ea580c] uppercase tracking-wider">Home Affairs</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Regulated Dealership</p>
              </div>
              <div className="border-l-2 border-[#ea580c] pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Verified Only</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">License Holders</p>
              </div>
              <div className="border-l-2 border-[#ea580c] pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Dhaka</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Armory Facility</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. COMPLIANCE & OPERATIONS (NO ARMS NAMES / CLEAN) ================= */}
      <section id="compliance" className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#fcfbf9] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Statutory compliance. <br />
                <span className="text-[#c2410c]">Licensed defense operations.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Operating with strict adherence to national arms regulations, ethical governance, and lawful oversight in Bangladesh.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {serviceHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col justify-between border border-neutral-200 bg-white p-6 sm:p-7 rounded-none hover:border-[#c2410c] hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="w-10 h-10 bg-orange-50 border border-orange-200 flex items-center justify-center text-[#c2410c] rounded-none group-hover:bg-[#c2410c] group-hover:text-white transition-colors mb-6">
                      <Icon className="text-base" />
                    </div>

                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#c2410c] block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-neutral-950 group-hover:text-[#c2410c] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-orange-800 font-bold">
                    <span>Authorized Standard</span>
                    <FaCheck className="text-[10px] text-[#c2410c]" />
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
              Official facility visual representing our authorized armory dealership operations.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {facilityGallery.map((item) => (
              <article
                key={item.id}
                onClick={() => setSelectedImage(item.image)}
                className="group relative aspect-[4/3] w-full bg-[#16100b] border border-neutral-200 hover:border-[#c2410c] rounded-none overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-[#c2410c] transition-all duration-500 group-hover:w-full z-20" />
                <Image
                  src={item.image}
                  alt="Nagar Arms Facility Showcase"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 z-10">
                  <span className="font-mono text-[10px] text-white flex items-center gap-1.5 font-bold uppercase tracking-wider">
                    <FaExpand className="text-[9px]" /> Enlarge
                  </span>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 4. REGULATORY NOTICE & INQUIRIES ================= */}
      <section id="location" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#0e0906] text-white border-b border-white/10">
        <div className="mx-auto max-w-[1440px]">

          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Regulatory Notice &amp; Contact
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              All transactions and inquiries are subject to strict legal eligibility and valid government documentation.
            </p>
          </div>

          {/* Legal Notice Banner */}
          <div className="mb-12 border-l-4 border-[#ea580c] bg-white/[0.04] p-6 sm:p-8 rounded-none">
            <h3 className="text-base font-bold text-orange-400 flex items-center gap-2">
              <FaShieldAlt className="text-sm" />
              <span>Mandatory Legal Compliance Notice</span>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              Services and supplies are strictly restricted to individuals and institutions presenting a valid, authentic Government Arms License issued by the competent licensing authority. Original license documentation, biometric verification, and official ledger entry are mandatory. No unsolicited or unlicensed requests are entertained.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Facility Location */}
            <div className="bg-[#17100b] border border-white/10 p-8 rounded-none space-y-4">
              <div className="w-12 h-12 bg-orange-950/60 border border-orange-500/30 flex items-center justify-center text-orange-400 rounded-none">
                <FaMapMarkerAlt className="text-lg" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Showroom Location
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-mono">
                Nagar Arms &amp; Ammunition <br />
                Armory District, Dhaka <br />
                Bangladesh
              </p>
              <p className="pt-2 text-[11px] text-neutral-400 font-mono border-t border-white/10">
                Official dealership facility
              </p>
            </div>

            {/* Card 2: Regulatory Authority */}
            <div className="bg-[#17100b] border border-white/10 p-8 rounded-none space-y-4">
              <div className="w-12 h-12 bg-orange-950/60 border border-orange-500/30 flex items-center justify-center text-orange-400 rounded-none">
                <FaFileContract className="text-base" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Regulatory Authority
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-mono">
                Ministry of Home Affairs <br />
                Govt Enlisted Dealership <br />
                Statutory Compliance Audit
              </p>
              <p className="pt-2 text-[11px] text-neutral-400 font-mono border-t border-white/10">
                Arms Act 1878 compliant
              </p>
            </div>

            {/* Card 3: Inquiries Desk */}
            <div className="bg-[#17100b] border border-white/10 p-8 rounded-none space-y-4">
              <div className="w-12 h-12 bg-orange-950/60 border border-orange-500/30 flex items-center justify-center text-orange-400 rounded-none">
                <FaPhoneAlt className="text-base" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Licensed Inquiries
              </h3>
              <div className="pt-1 text-sm text-neutral-300 space-y-1 font-mono">
                <p>
                  <span className="text-neutral-500">Phone: </span>
                  <a href="tel:+8801929918400" className="text-orange-400 hover:underline">
                    +880 1929918400
                  </a>
                </p>
                <p>
                  <span className="text-neutral-500">Email: </span>
                  <a href="mailto:info@sampangroup.com.bd.bd" className="text-orange-400 hover:underline">
                    info@sampangroup.com.bd.bd
                  </a>
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-none bg-[#c2410c] hover:bg-[#ea580c] text-white px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
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
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-in fade-in"
        >
          <button
            onClick={() => setSelectedImage(null)}
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
              src={selectedImage}
              alt="Nagar Arms & Ammunition Preview"
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
                Nagar Arms &amp; Ammunition
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-md">
                Government-licensed arms and ammunition dealership in Bangladesh operating under official Ministry of Home Affairs authorization. A Sampan Group Venture.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs font-mono">
                <li>
                  <button onClick={() => scrollTo("compliance")} className="hover:text-[#c2410c] transition-colors text-left">
                    Compliance &amp; Operations
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("facility")} className="hover:text-[#c2410c] transition-colors text-left">
                    Facility Visual
                  </button>
                </li>
                <li>
                  <Link href="/our-divisions/defense-security/sampan-fire-arms-co" className="hover:text-[#c2410c] transition-colors">
                    Sampan Fire Arms Co.
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
              © {new Date().getFullYear()} Nagar Arms &amp; Ammunition. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/our-divisions/defense-security" className="hover:text-[#c2410c] transition-colors">
                Defense Division Archive
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
