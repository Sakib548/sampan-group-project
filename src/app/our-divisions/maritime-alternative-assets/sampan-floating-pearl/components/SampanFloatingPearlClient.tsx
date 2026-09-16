"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaShip,
  FaCompass,
  FaBed,
  FaUtensils,
  FaGlassCheers,
  FaDumbbell,
  FaTimes,
  FaChevronRight,
  FaChevronLeft,
  FaCheckCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { FiArrowRight, FiMaximize2 } from "react-icons/fi";

interface GalleryPhoto {
  id: number;
  title: string;
  category: "exterior" | "interior" | "suites" | "dining" | "progress";
  categoryLabel: string;
  src: string;
  caption: string;
}

const galleryPhotos: GalleryPhoto[] = [
  {
    id: 1,
    title: "The Floating Pearl Sunset Vista",
    category: "exterior",
    categoryLabel: "Exterior Architecture",
    src: "/images/our-divisions/sampan-floating-pearl/WhatsApp Image 2026-08-01 at 17.41.07 (1).jpeg",
    caption: "Architectural dusk render showcasing curved multi-tier observation balconies, warm ambient illumination, and private shore gangway.",
  },
  {
    id: 2,
    title: "Vessel Bow & Panoramic Lounge",
    category: "exterior",
    categoryLabel: "Exterior Architecture",
    src: "/images/our-divisions/sampan-floating-pearl/WhatsApp Image 2026-08-01 at 17.40.59.jpeg",
    caption: "The iconic curved forward bridge with floor-to-ceiling glass viewing galleries and rooftop open-air gardens.",
  },
  {
    id: 3,
    title: "Rooftop Sky Garden & Open Deck",
    category: "dining",
    categoryLabel: "Dining & Deck",
    src: "/images/our-divisions/sampan-floating-pearl/WhatsApp Image 2026-08-01 at 17.41.00.jpeg",
    caption: "Vast open-air sky lawn equipped with sunset dining setups, shade canopies, and unobstructed 360-degree river horizon views.",
  },
  {
    id: 4,
    title: "Sampan Branded Rooftop Bar & Cafe",
    category: "dining",
    categoryLabel: "Dining & Deck",
    src: "/images/our-divisions/sampan-floating-pearl/WhatsApp Image 2026-08-01 at 17.41.06.jpeg",
    caption: "Custom fluted wood refreshment counter bearing the signature Sampan insignia, serving artisan drinks and fresh appetizers.",
  },
  {
    id: 5,
    title: "Grand Atrium & Reception Lobby",
    category: "interior",
    categoryLabel: "Interior & Lounge",
    src: "/images/our-divisions/sampan-floating-pearl/WhatsApp Image 2026-08-01 at 17.40.57 (2).jpeg",
    caption: "Marble service desk, fluted acoustic timber accents, and lounge seating welcoming guests aboard the floating resort.",
  },
  {
    id: 6,
    title: "Deluxe Water-View Balcony Stateroom",
    category: "suites",
    categoryLabel: "Suites & Cabins",
    src: "/images/our-divisions/sampan-floating-pearl/WhatsApp Image 2026-08-01 at 17.41.02 (1).jpeg",
    caption: "Master suite with glass sliding door veranda directly over the river waves, designer headboard, and climate control.",
  },
  {
    id: 7,
    title: "Executive Suite Bedchamber",
    category: "suites",
    categoryLabel: "Suites & Cabins",
    src: "/images/our-divisions/sampan-floating-pearl/WhatsApp Image 2026-08-01 at 17.41.11 (1).jpeg",
    caption: "Intimate architectural lighting, fluted soundproof wall cladding, and king-size luxury hospitality bedding.",
  },
  {
    id: 8,
    title: "Stateroom Vanity & Work Station",
    category: "suites",
    categoryLabel: "Suites & Cabins",
    src: "/images/our-divisions/sampan-floating-pearl/WhatsApp Image 2026-08-01 at 17.40.58 (1).jpeg",
    caption: "Private vanity table, discreet mirror closet storage, and smart entertainment screen.",
  },
  {
    id: 9,
    title: "Waterfront Atrium Lounge",
    category: "interior",
    categoryLabel: "Interior & Lounge",
    src: "/images/our-divisions/sampan-floating-pearl/WhatsApp Image 2026-08-01 at 17.41.10 (2).jpeg",
    caption: "Second-tier reception lounge with expansive waterside viewing windows and bespoke sofa suites.",
  },
  {
    id: 10,
    title: "Onboard Fitness & Wellness Center",
    category: "interior",
    categoryLabel: "Interior & Lounge",
    src: "/images/our-divisions/sampan-floating-pearl/WhatsApp Image 2026-08-01 at 17.41.01 (2).jpeg",
    caption: "Fully equipped health club with state-of-the-art treadmills, stationary cycles, and free weights overlooking the water.",
  },
  {
    id: 11,
    title: "Sunset Sky Lounge & Terrace",
    category: "dining",
    categoryLabel: "Dining & Deck",
    src: "/images/our-divisions/sampan-floating-pearl/WhatsApp Image 2026-08-01 at 17.41.14 (1).jpeg",
    caption: "Open-air cocktail bar and elevated canopy lounge catching coastal evening sea breezes.",
  },
  {
    id: 12,
    title: "Full Vessel Elevation & Twin Slipways",
    category: "exterior",
    categoryLabel: "Exterior Architecture",
    src: "/images/our-divisions/sampan-floating-pearl/WhatsApp Image 2026-08-01 at 17.40.54 (1).jpeg",
    caption: "Full lateral view demonstrating multi-deck passenger capacity, perimeter garden planters, and shore gangway access.",
  },
  {
    id: 13,
    title: "Structural Hull Fitout in Progress",
    category: "progress",
    categoryLabel: "Project Progress",
    src: "/images/our-divisions/sampan-floating-pearl/WhatsApp Image 2026-08-01 at 17.40.38.jpeg",
    caption: "Actual heavy-steel vessel hull docked during preliminary architectural framing and multi-deck superstructure fabrication.",
  },
];

export default function SampanFloatingPearlClient() {
  const [activeTab, setActiveTab] = useState<"all" | "exterior" | "suites" | "dining" | "interior" | "progress">("all");
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeTab === "all"
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === activeTab);

  const openModal = (index: number) => setActiveModalIndex(index);
  const closeModal = () => setActiveModalIndex(null);

  const prevPhoto = () => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((activeModalIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  const nextPhoto = () => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((activeModalIndex + 1) % filteredPhotos.length);
  };

  return (
    <div className="bg-[#FAF9F6] text-neutral-900 font-sans">

      {/* 1. HERO SECTION (Compact, impactful, square styling) */}
      <section className="relative bg-[#07162C] text-white pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden border-b border-cyan-950">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/images/our-divisions/sampan-floating-pearl/WhatsApp Image 2026-08-01 at 17.41.07 (1).jpeg"
            alt="Sampan Floating Pearl Hero"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#07162C] via-[#07162C]/80 to-transparent z-0" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-2 w-2 rounded-none bg-amber-400" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-300">
              Maritime &amp; Alternative Assets • Flagship Project
            </span>
          </div>

          <h1 className="text-[clamp(2.4rem,5vw,4.5rem)] font-bold tracking-tight text-white leading-[1.02] max-w-4xl">
            Sampan <br />
            <span className="text-amber-400">Floating Pearl</span>
          </h1>

          <p className="mt-6 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed border-l-2 border-amber-400 pl-4">
            Bangladesh’s upcoming multi-tier luxury floating resort and destination vessel. Engineered with riverfront staterooms, an open-air sky garden, panoramic dining hall, and Sampan-branded cocktail lounge.
          </p>

          {/* Status & Highlights Strip */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-2 border border-amber-400/40 bg-amber-950/40 px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-amber-300">
              <span className="h-1.5 w-1.5 rounded-none bg-amber-400 animate-pulse" />
              <span>Coming Soon • Under Active Construction</span>
            </div>

            <a
              href="#gallery"
              className="inline-flex items-center gap-2 rounded-none bg-white/10 hover:bg-white hover:text-black border border-white/30 px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white transition-all"
            >
              <span>View Architectural Gallery</span>
              <FiArrowRight />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-none bg-amber-500 hover:bg-amber-400 px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-neutral-950 transition-all shadow-md"
            >
              <span>Project Inquiries</span>
            </a>
          </div>

          {/* Quick Specifications Strip */}
          <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="border-l-2 border-cyan-400 pl-3">
              <p className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Vessel Profile</p>
              <p className="text-xs sm:text-sm font-bold text-white mt-0.5">Multi-Deck Floating Resort</p>
            </div>
            <div className="border-l-2 border-cyan-400 pl-3">
              <p className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Top Amenities</p>
              <p className="text-xs sm:text-sm font-bold text-white mt-0.5">Sky Lawn &amp; Garden Bar</p>
            </div>
            <div className="border-l-2 border-cyan-400 pl-3">
              <p className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Hospitality</p>
              <p className="text-xs sm:text-sm font-bold text-white mt-0.5">Water-View Deluxe Suites</p>
            </div>
            <div className="border-l-2 border-cyan-400 pl-3">
              <p className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Wellness &amp; Leisure</p>
              <p className="text-xs sm:text-sm font-bold text-white mt-0.5">Gym &amp; Banquet Hall</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE VESSEL HIGHLIGHTS (Clean, square grid) */}
      <section className="py-16 sm:py-24 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-800">
              Curated Experience
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 mt-1 tracking-tight">
              Hospitality Redefined on the Water
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
              Designed as a premier destination for leisure staycations, celebration events, and corporate retreats along Bangladesh’s picturesque waterways.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="p-6 bg-[#FAF9F6] border border-neutral-200 rounded-none hover:border-neutral-400 transition-colors">
              <div className="w-10 h-10 rounded-none bg-cyan-900 text-amber-400 flex items-center justify-center text-base mb-4">
                <FaBed />
              </div>
              <h3 className="text-sm font-bold text-neutral-950">Luxury Balcony Suites</h3>
              <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                Staterooms featuring private verandas with unrestricted water views, soundproof wood cladding, and king-size accommodations.
              </p>
            </div>

            <div className="p-6 bg-[#FAF9F6] border border-neutral-200 rounded-none hover:border-neutral-400 transition-colors">
              <div className="w-10 h-10 rounded-none bg-cyan-900 text-amber-400 flex items-center justify-center text-base mb-4">
                <FaGlassCheers />
              </div>
              <h3 className="text-sm font-bold text-neutral-950">Rooftop Sky Garden &amp; Bar</h3>
              <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                Vast open-air green terrace with an artisan cafe, cocktail bar, and canopy lounges for breathtaking sunrise and sunset vistas.
              </p>
            </div>

            <div className="p-6 bg-[#FAF9F6] border border-neutral-200 rounded-none hover:border-neutral-400 transition-colors">
              <div className="w-10 h-10 rounded-none bg-cyan-900 text-amber-400 flex items-center justify-center text-base mb-4">
                <FaUtensils />
              </div>
              <h3 className="text-sm font-bold text-neutral-950">Panoramic Dining Saloon</h3>
              <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                Full-height perimeter glass restaurant and celebration banquet venue serving gourmet farm-to-table cuisine directly on the waves.
              </p>
            </div>

            <div className="p-6 bg-[#FAF9F6] border border-neutral-200 rounded-none hover:border-neutral-400 transition-colors">
              <div className="w-10 h-10 rounded-none bg-cyan-900 text-amber-400 flex items-center justify-center text-base mb-4">
                <FaDumbbell />
              </div>
              <h3 className="text-sm font-bold text-neutral-950">Health &amp; Wellness Club</h3>
              <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                Dedicated cardio and fitness studio equipped with modern workout stations overlooking the tranquil river horizons.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PHOTO & ARCHITECTURE GALLERY (Interactive, Square Lightbox) */}
      <section id="gallery" className="py-16 sm:py-24 bg-[#FAF9F6] border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-neutral-200">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-800">
                Official Visual Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 mt-1 tracking-tight">
                Vessel Architecture &amp; Renders
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                Explore the exterior decks, luxury suites, and structural fabrication of The Floating Pearl.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {(
                [
                  { id: "all", label: "All Photos" },
                  { id: "exterior", label: "Exterior" },
                  { id: "suites", label: "Suites" },
                  { id: "dining", label: "Dining & Deck" },
                  { id: "interior", label: "Lobby & Gym" },
                  { id: "progress", label: "Refit Progress" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer rounded-none border ${activeTab === tab.id
                      ? "bg-neutral-950 text-white border-neutral-950 shadow-sm"
                      : "bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-100"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => openModal(index)}
                className="group relative bg-white border border-neutral-200 rounded-none overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-mono flex items-center gap-1.5">
                      <FiMaximize2 /> Click to inspect
                    </span>
                  </div>
                  <span className="absolute top-2.5 left-2.5 bg-neutral-950/80 backdrop-blur-sm text-amber-400 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 border border-white/10">
                    {photo.categoryLabel}
                  </span>
                </div>

                <div className="p-4 border-t border-neutral-100">
                  <h4 className="text-sm font-bold text-neutral-950 group-hover:text-cyan-800 transition-colors">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-neutral-500 mt-1 line-clamp-2 leading-relaxed">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. LIGHTBOX MODAL */}
      {activeModalIndex !== null && filteredPhotos[activeModalIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl w-full bg-neutral-950 border border-neutral-800 rounded-none p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800 text-white">
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-400">
                  {filteredPhotos[activeModalIndex].categoryLabel} • {activeModalIndex + 1} of {filteredPhotos.length}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                  {filteredPhotos[activeModalIndex].title}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="p-2 bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer rounded-none"
              >
                <FaTimes />
              </button>
            </div>

            {/* Modal Image Frame */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black overflow-hidden border border-neutral-900">
              <Image
                src={filteredPhotos[activeModalIndex].src}
                alt={filteredPhotos[activeModalIndex].title}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Modal Caption & Navigation Controls */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-neutral-300 max-w-2xl leading-relaxed">
                {filteredPhotos[activeModalIndex].caption}
              </p>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  type="button"
                  onClick={prevPhoto}
                  className="p-2.5 bg-neutral-800 hover:bg-neutral-700 text-white font-mono text-xs transition-colors cursor-pointer rounded-none border border-neutral-700"
                >
                  <FaChevronLeft />
                </button>
                <button
                  type="button"
                  onClick={nextPhoto}
                  className="p-2.5 bg-neutral-800 hover:bg-neutral-700 text-white font-mono text-xs transition-colors cursor-pointer rounded-none border border-neutral-700"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. PROJECT INQUIRY & CONTACT SECTION (Compact, functional) */}
      <section id="contact" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-6 sm:px-10">
          <div className="border border-neutral-200 bg-[#FAF9F6] p-8 sm:p-12 shadow-sm rounded-none">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-800 mb-2">
                  <FaShip />
                  <span>Commercial &amp; Charter Inquiries</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
                  Interested in Sampan Floating Pearl?
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-3 leading-relaxed">
                  Connect directly with the Sampan Group Maritime Division for project updates, partnership opportunities, corporate event charters, and stateroom pre-launch reservations.
                </p>

                <div className="mt-6 flex flex-wrap gap-4 text-xs">
                  <div className="flex items-center gap-2 text-neutral-800">
                    <FaCheckCircle className="text-emerald-600 text-sm" />
                    <span>Private Corporate Retreats</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-800">
                    <FaCheckCircle className="text-emerald-600 text-sm" />
                    <span>Gourmet Cruise Dinners</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-800">
                    <FaCheckCircle className="text-emerald-600 text-sm" />
                    <span>VIP River Staycations</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-3">
                <a
                  href="tel:+8801929918408"
                  className="flex items-center justify-between p-4 bg-white border border-neutral-200 hover:border-neutral-950 transition-all rounded-none group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-amber-50 text-amber-700">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">Direct Hotline</p>
                      <p className="text-xs font-bold text-neutral-950">+880 1929-918408</p>
                    </div>
                  </div>
                  <FiArrowRight className="text-neutral-400 group-hover:translate-x-1 group-hover:text-neutral-950 transition-all" />
                </a>

                <a
                  href="mailto:info@sampangroup.com.bd"
                  className="flex items-center justify-between p-4 bg-white border border-neutral-200 hover:border-neutral-950 transition-all rounded-none group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-cyan-50 text-cyan-800">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">Official Email</p>
                      <p className="text-xs font-bold text-neutral-950">info@sampangroup.com.bd</p>
                    </div>
                  </div>
                  <FiArrowRight className="text-neutral-400 group-hover:translate-x-1 group-hover:text-neutral-950 transition-all" />
                </a>

                <Link
                  href="/our-divisions/maritime-alternative-assets"
                  className="p-3.5 text-center font-mono text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-neutral-950 border border-neutral-300 hover:bg-neutral-100 transition-all rounded-none"
                >
                  ← Back to Maritime Division
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
