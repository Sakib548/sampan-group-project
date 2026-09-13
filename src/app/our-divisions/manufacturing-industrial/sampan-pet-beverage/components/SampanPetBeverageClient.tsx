"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaWineBottle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaExpand,
  FaTimes,
  FaCheck,
  FaShieldAlt,
  FaIndustry,
  FaWater,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const heroBackground = "/images/our-divisions/sampan-pet-beverage/hero.jpeg";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

const factoryGallery: GalleryItem[] = [
  {
    id: "pet-1",
    title: "Automated Bottling & Production Line",
    category: "Plant Operations",
    image: "/images/our-divisions/sampan-pet-beverage/Web-Banner-2.jpg",
    description: "High-speed automated beverage bottling and packaging line inside Sampan Industrial Park.",
  },
  {
    id: "pet-2",
    title: "Industrial Packaging & Bottling Machinery",
    category: "Machinery & Quality",
    image: "/images/our-divisions/sampan-pet-beverage/WhatsApp-Image-2024-05-30-at-6.53.17-PM-1-1(1).jpeg",
    description: "Automated filling, capping, and label application system for food-grade bottled beverages.",
  },
];

const productionCapabilities = [
  {
    name: "Virgin Food-Grade PET Preforms",
    type: "Bottle Preforms",
    description:
      "Precision-injection molded preforms manufactured from 100% virgin food-grade resin with uniform wall thickness and high clarity.",
    icon: FaWineBottle,
  },
  {
    name: "Natural Purified Water Bottling",
    type: "Beverage Packaging",
    description:
      "Fully hygienic reverse-osmosis purified water packaging equipped with UV sterilization and automated capping.",
    icon: FaWater,
  },
  {
    name: "Pressure-Resistant CSD Containers",
    type: "Specialized Packaging",
    description:
      "Engineered carbonated soft drink bottle packaging designed to withstand interior carbonation pressures without base deformation.",
    icon: FaShieldAlt,
  },
];

export default function SampanPetBeverageClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#fcfbf9] text-[#1a1714] selection:bg-orange-600 selection:text-white">

      {/* ================= 1. HERO SECTION (NO EYEBROW / COMPACT) ================= */}
      <section className="relative min-h-[68vh] lg:min-h-[78vh] flex items-center justify-center overflow-hidden bg-[#140e0a] text-white pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBackground}
            alt="Sampan PET and Beverage Factory"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-2 pb-8 lg:pb-12">
          <div className="max-w-4xl space-y-5 sm:space-y-6">

            {/* Headline */}
            <h1 className="text-[clamp(2.4rem,4.8vw,4.2rem)] font-bold tracking-tight text-white leading-[0.98]">
              Sampan <br />
              <span className="text-orange-400 block mt-1">
                PET &amp; Beverage
              </span>
            </h1>

            {/* Shortened Subheadline */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl font-light tracking-wide border-l-2 border-orange-500/80 pl-4">
              Automated food-grade PET bottle preforms and beverage bottling plant located inside Sampan Industrial Park, Alfadanga, Faridpur.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("capabilities")}
                className="group inline-flex items-center justify-center gap-2 rounded-none bg-orange-600 hover:bg-orange-500 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-lg shadow-orange-950/40 cursor-pointer"
              >
                <span>Plant Capabilities</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo("gallery")}
                className="inline-flex items-center justify-center rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                Plant Photos
              </button>

              <button
                onClick={() => scrollTo("location")}
                className="inline-flex items-center justify-center rounded-none border border-orange-500/40 bg-orange-950/30 hover:bg-orange-900/60 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-orange-300 transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                Location &amp; Inquiries
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="border-l-2 border-orange-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Alfadanga</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Faridpur District</p>
              </div>
              <div className="border-l-2 border-orange-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-orange-400 uppercase tracking-wider">Food Grade</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Virgin PET Resin</p>
              </div>
              {/* <div className="border-l-2 border-orange-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Automated Line</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">High-Speed Bottling</p>
              </div> */}
              <div className="border-l-2 border-orange-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Industrial Park</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Anchor Facility</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. CAPABILITIES & PRODUCTION (NO EYEBROW) ================= */}
      {/* <section id="capabilities" className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#fcfbf9] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Automated beverage packaging. <br />
                <span className="text-orange-700">Hygienic manufacturing.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Operating precision injection and blow molding equipment alongside automated filling lines to deliver hygienic, food-grade packaging from Alfadanga, Faridpur.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {productionCapabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col justify-between border border-neutral-200 bg-white p-6 sm:p-7 rounded-none hover:border-orange-600 hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <div className="w-10 h-10 bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-700 rounded-none group-hover:bg-orange-600 group-hover:text-white transition-colors mb-6">
                      <Icon className="text-base" />
                    </div>

                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-orange-700 block mb-1">
                      {item.type}
                    </span>
                    <h3 className="text-lg font-bold text-neutral-950 group-hover:text-orange-700 transition-colors">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-orange-800 font-bold">
                    <span>Hygienic Standard</span>
                    <FaCheck className="text-[10px] text-orange-600" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section> */}

      {/* ================= 3. PLANT PHOTOS (NO EYEBROW) ================= */}
      <section id="gallery" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Plant &amp; Facility Photos
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-500 leading-relaxed">
              Photographs of our automated bottling line, machinery, and production facility in Alfadanga.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {factoryGallery.map((item) => (
              <article
                key={item.id}
                onClick={() => setSelectedImage(item.image)}
                className="group relative flex flex-col h-full rounded-none overflow-hidden bg-white border border-neutral-200 hover:border-orange-600 transition-all duration-300 hover:shadow-md cursor-pointer min-h-[340px]"
              >
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-orange-600 transition-all duration-500 group-hover:w-full z-20" />

                <div className="relative w-full flex-1 min-h-[260px] overflow-hidden bg-neutral-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 z-10">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-orange-400 block mb-1">
                      {item.category}
                    </span>
                    <h4 className="text-white text-sm sm:text-base font-bold truncate">
                      {item.title}
                    </h4>
                    <p className="text-xs text-neutral-300 mt-1 line-clamp-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white border-t border-neutral-100 flex items-center justify-between shrink-0 mt-auto">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-orange-700 font-bold block">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-neutral-900 truncate">
                      {item.title}
                    </h4>
                  </div>
                  <FaExpand className="text-xs text-neutral-400 group-hover:text-orange-600 transition-colors" />
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 4. INDUSTRIAL PARK INTEGRATION ================= */}
      <section className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#140e0a] text-white border-b border-white/10">
        <div className="mx-auto max-w-[1440px]">

          <div className="border border-white/10 bg-[#1a130f] p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 rounded-none">
            <div className="max-w-2xl space-y-3">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-orange-400">
                Inside Sampan Industrial Park
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-white">
                Co-Located with Sister Manufacturing Plants
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Operating alongside Sampan Hollow Bricks &amp; Tiles in Alfadanga, Faridpur, benefiting from master-planned industrial utilities, dedicated high-capacity electric substation access, and arterial freight roads.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                href="/our-divisions/manufacturing-industrial/sampan-industrial-park"
                className="inline-flex items-center gap-2 rounded-none bg-orange-600 hover:bg-orange-500 text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>View Industrial Park</span>
                <FiArrowRight className="text-xs" />
              </Link>
              <Link
                href="/our-divisions/manufacturing-industrial/sampan-hollow-bricks-tiles"
                className="inline-flex items-center gap-2 rounded-none border border-white/25 hover:border-white hover:bg-white hover:text-black text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Hollow Bricks Plant</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 5. LOCATION & B2B INQUIRIES ================= */}
      <section id="location" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#f7f9f7] text-[#1a1714] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              Plant Location &amp; B2B Inquiries
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Situated inside Sampan Industrial Park, Alfadanga, Faridpur. For contract bottling, wholesale PET preform supply, or bulk distribution, contact our corporate desk.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Address */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-700 rounded-none">
                <FaMapMarkerAlt className="text-lg" />
              </div>
              <h3 className="text-xl font-bold text-neutral-950">
                Plant Location
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-mono">
                Sampan PET &amp; Beverage <br />
                Sampan Industrial Park <br />
                Alfadanga, Faridpur, Bangladesh
              </p>
              <p className="pt-2 text-[11px] text-neutral-400 font-mono border-t border-neutral-100">
                Alfadanga Industrial Corridor
              </p>
            </div>

            {/* Card 2: Quality & Certification */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-700 rounded-none">
                <FaShieldAlt className="text-base" />
              </div>
              <h3 className="text-xl font-bold text-neutral-950">
                Quality Standards
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-mono">
                100% Virgin Food-Grade PET <br />
                Multi-Stage Water Purification <br />
                Zero BPA &amp; FDA Compliant
              </p>
              <p className="pt-2 text-[11px] text-neutral-400 font-mono border-t border-neutral-100">
                Hygienic manufacturing
              </p>
            </div>

            {/* Card 3: Inquiries Contact */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-700 rounded-none">
                <FaPhoneAlt className="text-base" />
              </div>
              <h3 className="text-xl font-bold text-neutral-950">
                B2B Supply Desk
              </h3>
              <div className="pt-1 text-sm text-neutral-700 space-y-1 font-mono">
                <p>
                  <span className="text-neutral-400">Phone: </span>
                  <a href="tel:+8801929918400" className="text-orange-700 font-bold hover:underline">
                    +880 1929918400
                  </a>
                </p>
                <p>
                  <span className="text-neutral-400">Email: </span>
                  <a href="mailto:info@sampangroup.com.bd.bd" className="text-orange-700 font-bold hover:underline">
                    info@sampangroup.com.bd.bd
                  </a>
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-none bg-orange-600 hover:bg-orange-500 text-white px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Request Wholesale Quote</span>
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
              alt="Sampan PET & Beverage Preview"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* ================= 6. SQUARE MINIMAL FOOTER ================= */}
      <footer className="bg-white border-t border-neutral-200 px-6 py-12 sm:px-10 lg:px-16 text-neutral-600">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-neutral-950 mb-3">
                Sampan PET &amp; Beverage
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-md">
                Automated PET bottle preforms and beverage bottling plant inside Sampan Industrial Park in Alfadanga, Faridpur. A Sampan Group Venture.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs font-mono">
                <li>
                  <button onClick={() => scrollTo("capabilities")} className="hover:text-orange-700 transition-colors text-left">
                    Capabilities
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("gallery")} className="hover:text-orange-700 transition-colors text-left">
                    Factory Photos
                  </button>
                </li>
                <li>
                  <Link href="/our-divisions/manufacturing-industrial/sampan-industrial-park" className="hover:text-orange-700 transition-colors">
                    Sampan Industrial Park
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">
                Plant Location
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-500 font-mono">
                <li>Sampan Industrial Park</li>
                <li>Alfadanga, Faridpur, Bangladesh</li>
                <li>Tel: +880 1929918400</li>
                <li>info@sampangroup.com.bd.bd</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-mono">
            <p>
              © {new Date().getFullYear()} Sampan PET &amp; Beverage. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/our-divisions/manufacturing-industrial" className="hover:text-orange-700 transition-colors">
                Manufacturing Division Archive
              </Link>
              <Link href="/our-divisions/manufacturing-industrial/sampan-hollow-bricks-tiles" className="hover:text-orange-700 transition-colors">
                Hollow Bricks &amp; Tiles
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
