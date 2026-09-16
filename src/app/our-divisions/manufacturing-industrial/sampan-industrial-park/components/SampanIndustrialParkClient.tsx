"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaIndustry,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaExpand,
  FaTimes,
  FaCheck,
  FaShieldAlt,
  FaCogs,
  FaBuilding,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const heroBackground = "/images/our-divisions/sampan-industrial-park/hero.jpeg";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

const parkGallery: GalleryItem[] = [
  {
    id: "park-facility-main",
    title: "Industrial Manufacturing Facility",
    category: "Production Plant",
    image: "/images/our-divisions/sampan-industrial-park/6.jpeg",
    description: "Main pre-engineered industrial production facility and logistics access road inside the park.",
  },
  {
    id: "park-shed-green",
    title: "Structural Manufacturing Shed",
    category: "Operations Shed",
    image: "/images/our-divisions/sampan-industrial-park/2.jpeg",
    description: "Heavy structural production shed equipped for automated machinery and manufacturing lines.",
  },
  {
    id: "park-admin-office",
    title: "Park Administration & Site Office",
    category: "Site Infrastructure",
    image: "/images/our-divisions/sampan-industrial-park/3.jpeg",
    description: "Dedicated on-site management and engineering administrative quarters built with precision masonry.",
  },
  {
    id: "park-storage-facility",
    title: "Logistics & Storage Warehouse",
    category: "Logistics & Storage",
    image: "/images/our-divisions/sampan-industrial-park/4.jpeg",
    description: "Ramped masonry storage and material dispatch facility for secure industrial transit.",
  },
  {
    id: "park-office-front",
    title: "Administrative Complex & Grounds",
    category: "Site Management",
    image: "/images/our-divisions/sampan-industrial-park/5.jpeg",
    description: "Frontal view of the administrative offices and landscaped perimeter grounds.",
  },
  {
    id: "park-hero-overview",
    title: "Primary Production Complex",
    category: "Industrial Zone",
    image: "/images/our-divisions/sampan-industrial-park/hero.jpeg",
    description: "Panoramic ground perspective of the primary manufacturing complex at Alfadanga.",
  },
];

const residentUnits = [
  {
    id: "hollow-bricks",
    name: "Sampan Hollow Bricks & Tiles",
    category: "Eco Building Materials",
    status: "Operational Anchor Plant",
    image: "/images/our-divisions/sampan-hollow-bricks/Image-Edit.jpg",
    description:
      "Automated manufacturing of eco-friendly hollow concrete blocks, interlocking pavement pavers, and heavy-duty parking tiles with zero clay burning.",
    link: "/our-divisions/manufacturing-industrial/sampan-hollow-bricks-tiles",
    highlights: ["High Compressive Strength", "10+ Parking Tile Designs", "Eco-Friendly BSTI Certified"],
  },
  {
    id: "pet-beverage",
    name: "Sampan PET & Beverage",
    category: "Packaging & Bottling",
    status: "Operational Anchor Plant",
    image: "/images/our-divisions/sampan-pet-beverage/Web-Banner-2.jpg",
    description:
      "Modern automated PET preform injection molding, purified mineral water bottling, and pressure-resistant beverage packaging unit.",
    link: "/our-divisions/manufacturing-industrial/sampan-pet-beverage",
    highlights: ["Virgin Food-Grade PET", "Purified Water Bottling", "Automated Blow Molding"],
  },
];

const parkFeatures = [
  {
    name: "Master-Planned Zoning",
    type: "Infrastructure",
    description:
      "Engineered layout in Alfadanga with dedicated industrial plots, freight access roads, and utility corridors.",
    icon: FaIndustry,
  },
  {
    name: "Integrated Utility Network",
    type: "Power & Water",
    description:
      "Equipped with dedicated industrial electric substation access, uninterrupted water supply, and central drainage.",
    icon: FaCogs,
  },
  {
    name: "Alfadanga Logistics Hub",
    type: "Connectivity",
    description:
      "Strategically situated in Faridpur with seamless highway transit connecting central and southwest Bangladesh.",
    icon: FaBuilding,
  },
];

export default function SampanIndustrialParkClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#fcfbf9] text-[#1a1714] selection:bg-emerald-700 selection:text-white">

      {/* ================= 1. HERO SECTION (NO EYEBROW / COMPACT) ================= */}
      <section className="relative min-h-[68vh] lg:min-h-[78vh] flex items-center justify-center overflow-hidden bg-[#0c1410] text-white pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBackground}
            alt="Sampan Industrial Park Overview"
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
              <span className="text-emerald-400 block mt-1">
                Industrial Park
              </span>
            </h1>

            {/* Shortened Subheadline */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl font-light tracking-wide border-l-2 border-emerald-500/80 pl-4">
              Master-planned industrial zone in Alfadanga, Faridpur housing Sampan Group&apos;s eco-building materials and beverage packaging plants.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("anchors")}
                className="group inline-flex items-center justify-center gap-2 rounded-none bg-emerald-700 hover:bg-emerald-600 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-lg shadow-emerald-950/40 cursor-pointer"
              >
                <span>Resident Plants</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo("gallery")}
                className="inline-flex items-center justify-center rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                Park Photos
              </button>

              <button
                onClick={() => scrollTo("location")}
                className="inline-flex items-center justify-center rounded-none border border-emerald-500/40 bg-emerald-950/30 hover:bg-emerald-900/60 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                Location &amp; Inquiries
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Alfadanga</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Faridpur District</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-emerald-400 uppercase tracking-wider">2 Anchor Plants</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Hollow Bricks &amp; PET</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Heavy Power</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Dedicated Grid Access</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Master Planned</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Modern Industry Hub</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. RESIDENT MANUFACTURING PLANTS (NO EYEBROW) ================= */}
      <section id="anchors" className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#fcfbf9] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Resident manufacturing units <br />
                <span className="text-emerald-700">inside the industrial park.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Housing specialized production facilities for eco-friendly building blocks, interlocking pavers, and automated beverage packaging in Alfadanga, Faridpur.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {residentUnits.map((unit) => (
              <article
                key={unit.id}
                className="group relative flex flex-col bg-white border border-neutral-200 rounded-none overflow-hidden hover:border-emerald-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={unit.image}
                    alt={unit.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-none bg-black/80 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/30">
                      {unit.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                      {unit.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {unit.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between space-y-6">
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {unit.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-neutral-100">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                      Key Highlights
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {unit.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-50 border border-neutral-200 font-mono text-[11px] text-neutral-700 rounded-none"
                        >
                          <FaCheck className="text-[9px] text-emerald-600" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={unit.link}
                      className="inline-flex items-center justify-center gap-2 w-full rounded-none bg-neutral-900 hover:bg-emerald-700 text-white py-3.5 px-6 font-mono text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      <span>Explore Plant Details</span>
                      <FiArrowRight className="text-xs" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 3. PARK INFRASTRUCTURE (NO EYEBROW) ================= */}
      <section id="infrastructure" className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#f7f9f7] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Park Infrastructure &amp; Utilities
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Engineered with heavy industrial utilities to support continuous manufacturing operations.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {parkFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="border border-neutral-200 bg-white p-6 sm:p-7 rounded-none hover:border-emerald-600 transition-colors"
                >
                  <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 rounded-none mb-5">
                    <Icon className="text-base" />
                  </div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                    {feat.type}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-950">
                    {feat.name}
                  </h3>
                  <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= 4. PARK PHOTO SHOWCASE (NO EYEBROW) ================= */}
      <section id="gallery" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Park &amp; Operations Gallery
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-500 leading-relaxed">
              Photographs of active manufacturing plants, machinery, and production yards in Alfadanga.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {parkGallery.map((item) => (
              <article
                key={item.id}
                onClick={() => setSelectedImage(item.image)}
                className="group relative flex flex-col h-full rounded-none overflow-hidden bg-white border border-neutral-200 hover:border-emerald-600 transition-all duration-300 hover:shadow-md cursor-pointer min-h-[320px]"
              >
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-emerald-600 transition-all duration-500 group-hover:w-full z-20" />

                <div className="relative w-full flex-1 min-h-[240px] overflow-hidden bg-neutral-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 z-10">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-emerald-400 block mb-0.5">
                      {item.category}
                    </span>
                    <h4 className="text-white text-xs font-bold truncate">
                      {item.title}
                    </h4>
                  </div>
                </div>

                <div className="p-3 bg-white border-t border-neutral-100 flex items-center justify-between shrink-0 mt-auto">
                  <div className="min-w-0 flex-1 pr-2">
                    <span className="font-mono text-[9px] uppercase text-emerald-700 font-bold block">
                      {item.category}
                    </span>
                    <h4 className="text-xs font-bold text-neutral-900 truncate">
                      {item.title}
                    </h4>
                  </div>
                  <FaExpand className="text-xs text-neutral-400 group-hover:text-emerald-600 transition-colors shrink-0" />
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 5. LOCATION & CORPORATE INQUIRIES (NO EYEBROW) ================= */}
      <section id="location" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#0c1410] text-white border-b border-white/10">
        <div className="mx-auto max-w-[1440px]">

          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Park Location &amp; Inquiries
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              Located in Alfadanga, Faridpur. For industrial land inquiries, supply contracts, or plant visits, contact our corporate desk.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Park Address */}
            <div className="bg-[#121c16] border border-white/10 p-8 rounded-none space-y-4">
              <div className="w-12 h-12 bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 rounded-none">
                <FaMapMarkerAlt className="text-lg" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Industrial Park Location
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-mono">
                Sampan Industrial Park <br />
                Alfadanga, Faridpur <br />
                Bangladesh
              </p>
              <p className="pt-2 text-[11px] text-neutral-400 font-mono border-t border-white/10">
                Alfadanga Industrial Corridor
              </p>
            </div>

            {/* Card 2: Resident Facilities */}
            <div className="bg-[#121c16] border border-white/10 p-8 rounded-none space-y-4">
              <div className="w-12 h-12 bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 rounded-none">
                <FaIndustry className="text-base" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Resident Operations
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-mono">
                • Hollow Bricks &amp; Tiles <br />
                • PET &amp; Beverage Packaging <br />
                • Industrial Logistics Yard
              </p>
              <p className="pt-2 text-[11px] text-neutral-400 font-mono border-t border-white/10">
                Operational Anchor Plants
              </p>
            </div>

            {/* Card 3: Corporate Contact */}
            <div className="bg-[#121c16] border border-white/10 p-8 rounded-none space-y-4">
              <div className="w-12 h-12 bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 rounded-none">
                <FaPhoneAlt className="text-base" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Corporate Inquiries
              </h3>
              <div className="pt-1 text-sm text-neutral-300 space-y-1 font-mono">
                <p>
                  <span className="text-neutral-500">Phone: </span>
                  <a href="tel:+8801929918400" className="text-emerald-400 hover:underline">
                    +880 1929918400
                  </a>
                </p>
                <p>
                  <span className="text-neutral-500">Email: </span>
                  <a href="mailto:info@sampangroup.com.bd.bd" className="text-emerald-400 hover:underline">
                    info@sampangroup.com.bd.bd
                  </a>
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-none bg-emerald-700 hover:bg-emerald-600 text-white px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Contact Head Office</span>
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
              alt="Sampan Industrial Park Preview"
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
                Sampan Industrial Park
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-md">
                Master-planned industrial park in Alfadanga, Faridpur housing manufacturing anchors for eco-friendly building blocks and automated beverage packaging.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">
                Resident Plants
              </h4>
              <ul className="space-y-2.5 text-xs font-mono">
                <li>
                  <Link href="/our-divisions/manufacturing-industrial/sampan-hollow-bricks-tiles" className="hover:text-emerald-700 transition-colors">
                    Hollow Bricks &amp; Tiles
                  </Link>
                </li>
                <li>
                  <Link href="/our-divisions/manufacturing-industrial/sampan-pet-beverage" className="hover:text-emerald-700 transition-colors">
                    PET &amp; Beverage
                  </Link>
                </li>
                <li>
                  <button onClick={() => scrollTo("gallery")} className="hover:text-emerald-700 transition-colors text-left">
                    Park Gallery
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">
                Park Location
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-500 font-mono">
                <li>Alfadanga, Faridpur</li>
                <li>Bangladesh</li>
                <li>Tel: +880 1929918400</li>
                <li>info@sampangroup.com.bd.bd</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-mono">
            <p>
              © {new Date().getFullYear()} Sampan Industrial Park. A Sampan Group Venture.
            </p>
            <div className="flex gap-6">
              <Link href="/our-divisions/manufacturing-industrial" className="hover:text-emerald-700 transition-colors">
                Manufacturing Division Archive
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
