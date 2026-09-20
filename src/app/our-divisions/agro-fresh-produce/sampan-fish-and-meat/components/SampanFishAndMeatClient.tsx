"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFish,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaCheck,
  FaExpand,
  FaTimes,
  FaShieldAlt,
  FaWater,
  FaLeaf,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

// --- Authentic Photos from public/images/our-divisions/sampan-fish-and-meat ---
const heroBackground = "/images/our-divisions/sampan-fish-and-meat/fish.jpg";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "gallery-fish-sorting",
    title: "Morning Catch Inspection",
    category: "Lake Harvest",
    image: "/images/our-divisions/sampan-fish-and-meat/fish.jpg",
    description:
      "Daily morning sorting of healthy freshwater fish immediately upon harvest from our Alphadanga lakes.",
  },
  {
    id: "gallery-fish-basin",
    title: "Live Basin Conditioning",
    category: "Fresh Handling",
    image: "/images/our-divisions/sampan-fish-and-meat/fish3.jpg",
    description:
      "Conditioning freshly caught fish in natural aerated water tanks before swift, chilled dispatch.",
  },
  {
    id: "fm-3",
    title: "Prime Rui & Katla Harvest",
    category: "Freshwater Carp",
    image: "/images/our-divisions/sampan-fish-and-meat/481202817_122135838860588506_3713604981635475854_n.jpg",
    description: "Naturally grown carp with firm sweet flesh, reared in clean circulating freshwater.",
  },
  {
    id: "fm-4",
    title: "Freshwater Species Assortment",
    category: "Lake Varieties",
    image: "/images/our-divisions/sampan-fish-and-meat/486105634_122141364974588506_860658534188589523_n.jpg",
    description: "Multiple native fish varieties harvested in batches to ensure peak freshness and taste.",
  },
];

// Highlighted varieties (grounded & honest without fabricated pricing)
const produceHighlights = [
  {
    name: "Freshwater Rui & Katla",
    type: "Native River & Lake Carp",
    origin: "Sampan Eco & Agro Lakes",
    description:
      "Grown in clean natural water with healthy grain feed. Chemical-free, firm texture, and authentic sweet taste.",
    status: "Regular Daily Supply",
  },
  {
    name: "Mrigel & Native Carp",
    type: "Freshwater Bottom Feeders",
    origin: "Alphadanga Ponds",
    description:
      "Naturally cultivated alongside Rui and Katla in bio-secure freshwater lakes without growth chemicals.",
    status: "Regular Harvest",
  },
  {
    name: "Shol, Pangas & Lake Fish",
    type: "Traditional Freshwater Catch",
    origin: "Farm Aquaculture",
    description:
      "Diverse seasonal freshwater fish varieties carefully netted and handled under clean sanitary conditions.",
    status: "Seasonal Batches",
  },
  {
    name: "Farm Poultry & Meat",
    type: "Free-Range Farm Produce",
    origin: "Sampan Eco & Agro Farm",
    description:
      "Naturally raised farm poultry and livestock options in development to complement our fresh fish offerings.",
    status: "Limited / In Development",
  },
];

export default function SampanFishAndMeatClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <main className="bg-[#f8faf6] text-[#183b2b] selection:bg-emerald-700 selection:text-white overflow-x-hidden w-full">

      {/* ================= 1. HERO SECTION ================= */}
      <section data-no-reveal className="relative min-h-0 sm:min-h-screen flex flex-col justify-start sm:justify-center overflow-hidden bg-[#07150d] text-white pt-24 pb-12 sm:pt-28 sm:pb-20 border-b border-white/10">
        {/* Authentic Background Image with Nature Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBackground}
            alt="Sampan Fresh Fish Harvest"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040e08]/95 via-[#06170e]/85 to-[#06170e]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07150d] via-transparent to-black/50" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-0 sm:pt-2 pb-8 lg:pb-12">
          <div className="max-w-4xl space-y-5 sm:space-y-6">

            {/* Sourcing Badge */}
            {/* <div className="inline-flex items-center gap-2 border border-emerald-500/40 bg-emerald-950/60 backdrop-blur-md px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-400 rounded-none">
              <FaFish className="text-xs text-emerald-400" />
              <span>Sourced Directly From Sampan Eco &amp; Agro</span>
            </div> */}

            {/* Headline */}
            <h1 className="text-[clamp(2.4rem,4.8vw,4.2rem)] font-bold tracking-tight text-white leading-[0.98]">
              Sampan <br />
              <span className="text-emerald-400 block mt-1">
                Fish &amp; Meat
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl font-light tracking-wide border-l-2 border-emerald-400/80 pl-4">
              Fresh, chemical-free freshwater fish harvested directly from the natural ponds and lakes of Sampan Eco &amp; Agro in Alphadanga, Faridpur. Sourced cleanly and delivered with uncompromised freshness.
            </p>

            {/* Square Action Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4 font-mono text-xs">
              <a
                href="#fresh-produce"
                onClick={(e) => scrollToSection(e, "fresh-produce")}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-none bg-emerald-600 hover:bg-emerald-500 px-7 py-3.5 sm:px-8 sm:py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-lg shadow-emerald-950/40 cursor-pointer text-center select-none"
              >
                <span>Explore Produce</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#gallery"
                onClick={(e) => scrollToSection(e, "gallery")}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-7 py-3.5 sm:px-8 sm:py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer text-center select-none"
              >
                View Harvest Gallery
              </a>

              {/* <a
                href="https://www.facebook.com/sampanecoandagro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-none bg-[#1877F2] hover:bg-[#166fe5] px-7 py-3.5 sm:px-8 sm:py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-md cursor-pointer text-center"
              >
                <FaFacebookF className="text-sm" />
                <span>Facebook Page</span>
              </a> */}
            </div>

            {/* Quick Metrics (Square Cards) */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Natural Catch</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Pond &amp; Lake Cultivated</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-emerald-400 uppercase tracking-wider">Pure &amp; Clean</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Zero Formalin / Chemicals</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Farm Origin</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Sampan Eco &amp; Agro</p>
              </div>
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Location</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Alphadanga, Faridpur</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. OVERVIEW & SOURCING PILLARS ================= */}
      <section id="overview" className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#f8faf6] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-emerald-600" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-700">
              Fresh Produce Overview
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Fresh from our waters. <br />
                <span className="text-emerald-700">Direct to your table.</span>
              </h2>

              <p className="mt-6 text-sm sm:text-base text-neutral-600 leading-relaxed">
                Sampan Fish &amp; Meat is dedicated to delivering healthy, authentically raised freshwater fish sourced directly from the expansive aquaculture waters of Sampan Eco &amp; Agro in Alphadanga, Faridpur.
              </p>

              <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                By maintaining natural lake ecosystems and avoiding harmful chemical preservatives or formalin, we ensure that every catch delivers natural flavor, rich nutrition, and wholesome quality for family meals.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-none bg-[#183b2b] hover:bg-emerald-800 text-white px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] transition-colors shadow-sm cursor-pointer"
                >
                  <span>Inquire for Orders</span>
                  <FiArrowRight className="text-xs" />
                </Link>


              </div>
            </div>

            {/* 3 Sourcing Pillars (Square Cards) */}
            <div className="grid gap-4 sm:grid-cols-1">
              <div className="border border-neutral-200 bg-white p-6 rounded-none shadow-sm hover:border-emerald-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 rounded-none">
                    <FaWater className="text-base" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-950">
                      Pristine Lake Aquaculture
                    </h3>
                    <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                      Reared in the natural freshwater lakes and ponds of Sampan Eco &amp; Agro with clean circulating water and balanced nutrition.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-neutral-200 bg-white p-6 rounded-none shadow-sm hover:border-emerald-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 rounded-none">
                    <FaShieldAlt className="text-base" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-950">
                      100% Formalin &amp; Chemical Free
                    </h3>
                    <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                      Zero chemical preservatives, synthetic dyes, or artificial shelf-life treatments. Strictly fresh farm harvests.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-neutral-200 bg-white p-6 rounded-none shadow-sm hover:border-emerald-600 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 rounded-none">
                    <FaLeaf className="text-base" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-950">
                      Farm Sourced
                    </h3>
                    <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                      Direct supply pipeline from the rural fields of Alphadanga, ensuring fair pricing and reliable agricultural transparency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 3. PRODUCE SPOTLIGHT ================= */}
      <section id="fresh-produce" className="scroll-mt-20 py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-10 bg-emerald-600" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-700">
                  Catch &amp; Farm Varieties
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Available varieties. <br />
                <span className="text-emerald-700">Harvest highlights.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-500 leading-relaxed">
              Wholesome freshwater fish cultivated in rural Alphadanga, along with complementary farm produce.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {produceHighlights.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between border border-neutral-200 bg-[#fafbfa] p-6 rounded-none hover:border-emerald-600 hover:shadow-md transition-all duration-300"
              >
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                    {item.type}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-950 group-hover:text-emerald-700 transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] text-neutral-400">
                    {item.origin}
                  </p>
                  <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-neutral-500 font-semibold">Status:</span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-800 font-bold">
                    <FaCheck className="text-[10px] text-emerald-600" />
                    <span>{item.status}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 4. REAL HARVEST GALLERY ================= */}
      <section id="gallery" className="scroll-mt-20 py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#f8faf6] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-10 bg-emerald-600" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-700">
                  Visual Showcase
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Authentic harvest. <br />
                <span className="text-emerald-700">From pond to basin.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-500 leading-relaxed">
              Real photographs captured directly during fish sorting and handling sessions from the farm.
            </p>
          </div>

          {/* Square Image Grid (Zero Blank Space) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {galleryItems.map((item, index) => (
              <article
                key={item.id}
                onClick={() => setSelectedImage(item.image)}
                className={`group relative flex flex-col h-full rounded-none overflow-hidden bg-white border border-neutral-200 hover:border-emerald-600 transition-all duration-300 hover:shadow-md cursor-pointer ${index === 0 ? "min-h-[380px]" : "min-h-[380px]"
                  }`}
              >
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-emerald-600 transition-all duration-500 group-hover:w-full z-20" />

                <div className="relative w-full flex-1 min-h-[260px] overflow-hidden bg-neutral-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-6 z-10">
                    <div className="flex items-end justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-400 block mb-1">
                          {item.category}
                        </span>
                        <h4 className="text-white text-sm sm:text-base font-bold leading-snug truncate">
                          {item.title}
                        </h4>
                        <p className="text-xs text-neutral-300 mt-1 line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                      <span className="shrink-0 inline-flex items-center gap-1.5 rounded-none bg-white text-neutral-950 font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 font-bold shadow-md group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <FaExpand className="text-[10px]" />
                        <span>View</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Lower label bar */}
                <div className="p-4 bg-white border-t border-neutral-100 flex items-center justify-between shrink-0 mt-auto">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-emerald-700 font-bold block">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-neutral-900 truncate">
                      {item.title}
                    </h4>
                  </div>
                  <FaExpand className="text-xs text-neutral-400 group-hover:text-emerald-600 transition-colors" />
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 5. LOCATION & DIRECT INQUIRY ================= */}
      <section id="contact" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15">
        <div className="mx-auto max-w-[1440px]">

          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 border border-emerald-600/40 bg-emerald-600/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-800 mb-4 rounded-none">
              <FaMapMarkerAlt className="text-xs text-emerald-700" />
              <span>Farm Origin &amp; Contact</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              Sourcing Origin &amp; Orders
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Harvested cleanly at Sampan Eco &amp; Agro in Alphadanga, Faridpur. Contact our farm team directly for batch inquiries, retail orders, and fresh deliveries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Farm Details, Direct Contact & Social */}
            <div className="flex flex-col gap-6 justify-between">
              {/* Card 1: Farm Origin Address */}
              <div className="bg-white border border-neutral-300 p-6 sm:p-7 rounded-none shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 rounded-none shrink-0">
                    <FaMapMarkerAlt className="text-base" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                      Sourcing Farm &amp; Origin
                    </span>
                    <h3 className="text-lg font-bold text-neutral-950">
                      Sampan Eco &amp; Agro
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-mono">
                  Joydebpur, Boroga, Borice, Alphadanga <br />
                  Faridpur District, Dhaka Division, Bangladesh
                </p>
                <p className="pt-2 text-[11px] text-neutral-500 font-mono border-t border-neutral-100 flex items-center gap-2">
                  <FaWater className="text-xs text-emerald-600 shrink-0" />
                  <span>Freshwater lake beds &amp; aquaculture cultivation ponds</span>
                </p>
              </div>

              {/* Sub-grid for Contact & Social Cards */}
              <div className="grid sm:grid-cols-2 gap-6 flex-1">
                {/* Card 2: Contact Numbers */}
                <div className="bg-white border border-neutral-300 p-6 rounded-none shadow-sm flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 rounded-none">
                      <FaPhoneAlt className="text-sm" />
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                      Direct Inquiries
                    </span>
                    <h4 className="text-base font-bold text-neutral-950">
                      Farm Orders
                    </h4>
                    <div className="text-xs text-neutral-700">
                      <span className="font-mono text-[11px] text-neutral-400 block mb-0.5">Phone:</span>
                      <a href="tel:+8801929918400" className="font-mono font-bold text-emerald-700 hover:underline text-sm">
                        +8801929918400
                      </a>
                    </div>
                  </div>
                  <a
                    href="tel:+8801929918400"
                    className="inline-flex items-center justify-center gap-2 rounded-none bg-emerald-700 hover:bg-emerald-600 text-white px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center"
                  >
                    <FaPhoneAlt className="text-[10px]" />
                    <span>Call For Inquiry</span>
                  </a>
                </div>

                {/* Card 3: Social & Farm Updates */}
                <div className="bg-white border border-neutral-300 p-6 rounded-none shadow-sm flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 rounded-none">
                      <FaFacebookF className="text-sm" />
                    </div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                      Live Updates
                    </span>
                    <h4 className="text-base font-bold text-neutral-950">
                      Harvest News
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Follow our Facebook page for live photos, announcements, and available catch batches.
                    </p>
                  </div>
                  <a
                    href="https://www.facebook.com/sampanecoandagro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-none bg-[#1877F2] hover:bg-[#166fe5] text-white px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center"
                  >
                    <FaFacebookF className="text-[10px]" />
                    <span>Facebook Page</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: 50% Width Interactive Google Map */}
            <div className="border border-neutral-300 bg-white p-2 sm:p-3 shadow-sm flex flex-col h-full min-h-[420px] lg:min-h-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-3 py-2.5 mb-2 border-b border-neutral-200">
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-700 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse shrink-0" />
                  <span className="font-bold text-neutral-900 uppercase tracking-wider shrink-0">Map:</span>
                  <span className="truncate">Joydebpur, Alphadanga, Faridpur</span>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Joydebpur,+Boroga,+Borice,+Alphadanga,+Faridpur,+Bangladesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-emerald-800 hover:text-emerald-950 transition-colors shrink-0"
                >
                  <span>Open in Maps</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              </div>

              <div className="relative w-full flex-1 min-h-[360px] bg-neutral-100 overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=Joydebpur+Alphadanga+Faridpur+Bangladesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sampan Fish & Meat Farm Origin Map"
                />
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
              alt="Sampan Fish & Meat Fullscreen Preview"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* ================= 6. FOOTER ================= */}


    </main>
  );
}
