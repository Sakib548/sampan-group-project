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
    id: "fm-1",
    title: "Fresh Farm Harvest Collection",
    category: "Fresh Catch",
    image: "/images/our-divisions/sampan-fish-and-meat/fish.jpg",
    description: "Assorted healthy freshwater fish harvested directly from Sampan Eco & Agro lake beds.",
  },
  {
    id: "fm-2",
    title: "Daily Catch Sorting & Packaging",
    category: "Hygienic Handling",
    image: "/images/our-divisions/sampan-fish-and-meat/480963810_122135838734588506_2075645700594314133_n.jpg",
    description: "Carefully sorted and cleaned fish crated fresh for distribution and customer orders.",
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

  return (
    <main className="bg-[#f8faf6] text-[#183b2b] selection:bg-emerald-700 selection:text-white">

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#07150d] text-white pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-white/10">
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

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-2 pb-8 lg:pb-12">
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
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#overview"
                className="group inline-flex items-center justify-center gap-2 rounded-none bg-emerald-600 hover:bg-emerald-500 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-lg shadow-emerald-950/40 cursor-pointer"
              >
                <span>Explore Produce</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#gallery"
                className="inline-flex items-center justify-center rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                View Harvest Gallery
              </Link>

              <a
                href="https://www.facebook.com/sampanecoandagro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-none bg-[#1877F2] hover:bg-[#166fe5] px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-md cursor-pointer"
              >
                <FaFacebookF className="text-sm" />
                <span>Facebook Page</span>
              </a>
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
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-none bg-[#183b2b] hover:bg-emerald-800 text-white px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] transition-colors shadow-sm cursor-pointer"
                >
                  <span>Inquire for Orders</span>
                  <FiArrowRight className="text-xs" />
                </Link>

                <Link
                  href="/our-divisions/agro-fresh-produce/sampan-eco-agro"
                  className="inline-flex items-center gap-2 rounded-none border border-emerald-700 text-emerald-900 hover:bg-emerald-50 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.18em] transition-colors cursor-pointer"
                >
                  <span>View Sourcing Farm</span>
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
                      Farm Sourced &amp; Wholesome
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
      <section className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-white border-b border-neutral-200">
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
      <section id="gallery" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#f8faf6] border-b border-neutral-200">
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

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Farm Origin Address */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 rounded-none">
                <FaMapMarkerAlt className="text-lg" />
              </div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                Sourcing Farm
              </span>
              <h3 className="text-xl font-bold text-neutral-950">
                Sampan Eco &amp; Agro
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-mono">
                Alphadanga-7870, Faridpur District <br />
                Dhaka Division, Bangladesh
              </p>
              <p className="pt-2 text-[11px] text-neutral-400 font-mono border-t border-neutral-100">
                Freshwater lakes &amp; aquaculture ponds
              </p>
            </div>

            {/* Card 2: Contact Numbers */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 rounded-none">
                <FaPhoneAlt className="text-base" />
              </div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                Direct Contact
              </span>
              <h3 className="text-xl font-bold text-neutral-950">
                Farm Orders &amp; Inquiries
              </h3>
              <div className="space-y-3 pt-1 text-sm text-neutral-700">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-neutral-400">Phone:</span>
                  <a href="tel:+8801929918400" className="font-mono font-bold text-emerald-700 hover:underline">
                    +8801929918400
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-neutral-400">Alt:</span>
                  <a href="tel:+8801929918408" className="font-mono font-semibold text-emerald-700 hover:underline">
                    +880 1929-918408
                  </a>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href="tel:+8801929918400"
                  className="inline-flex items-center gap-2 rounded-none bg-emerald-700 hover:bg-emerald-600 text-white px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <FaPhoneAlt className="text-[10px]" />
                  <span>Call For Inquiry</span>
                </a>
              </div>
            </div>

            {/* Card 3: Social & Farm Updates */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 rounded-none">
                <FaFacebookF className="text-base" />
              </div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                Social Updates
              </span>
              <h3 className="text-xl font-bold text-neutral-950">
                Farm Harvest News
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Follow our Facebook page for live photos, harvest announcements, and available batches from the ponds.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.facebook.com/sampanecoandagro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-none bg-[#1877F2] hover:bg-[#166fe5] text-white px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <FaFacebookF className="text-[10px]" />
                  <span>Visit Facebook Page</span>
                </a>
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
      <footer className="bg-white border-t border-neutral-200 px-6 py-12 sm:px-10 lg:px-16 text-neutral-600">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-neutral-950 mb-3">
                Sampan Fish &amp; Meat
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-md">
                Naturally cultivated freshwater fish and quality farm produce sourced from Sampan Eco &amp; Agro in Alphadanga, Faridpur. Chemical-free, wholesome, and fresh for your family table.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs font-mono">
                <li>
                  <Link href="#overview" className="hover:text-emerald-700 transition-colors">
                    Produce Overview
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="hover:text-emerald-700 transition-colors">
                    Harvest Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-emerald-700 transition-colors">
                    Farm Origin &amp; Orders
                  </Link>
                </li>
                <li>
                  <Link href="/our-divisions/agro-fresh-produce/sampan-eco-agro" className="hover:text-emerald-700 transition-colors">
                    Sampan Eco &amp; Agro
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">
                Farm Origin
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-500 font-mono">
                <li>Sampan Eco &amp; Agro</li>
                <li>Alphadanga-7870, Faridpur</li>
                <li>+8801929918400</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-mono">
            <p>
              © {new Date().getFullYear()} Sampan Fish &amp; Meat. A Sampan Group Venture.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-emerald-700 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-emerald-700 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
