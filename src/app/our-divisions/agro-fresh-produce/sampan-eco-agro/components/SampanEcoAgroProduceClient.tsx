"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaLeaf,
  FaPhoneAlt,
  FaFacebookF,
  FaMapMarkerAlt,
  FaRoute,
  FaShoppingBasket,
  FaCheckCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import FarmToTableStorytelling from "../../components/FarmToTableStorytelling";
import AgroSeasonalAvailability from "../../components/AgroSeasonalAvailability";
import AgroPhotosGallery, { AgroPhotoItem } from "../../components/AgroPhotosGallery";
import AgroNearbyModule from "../../components/AgroNearbyModule";

// --- Hero Background ---
const heroBackground = "/images/our-divisions/sampan-eco-agro/frontview2.jpg";

// --- Storytelling Paragraphs & Pillars (No delivery/bulk claims) ---
const storyParagraphs = [
  "Founded with a commitment to sustainable, wholesome agriculture, Sampan Eco & Agro manages fertile cultivation fields, seasonal fruit orchards, and greenhouse floriculture in Alphadanga, Faridpur. We focus on natural soil enrichment and chemical-free farming to grow clean, healthy crops.",
  "Every harvest is gathered with care directly from our estate fields, ensuring natural flavor, aroma, and freshness are preserved from the soil to your table.",
];

const storyPillars = [
  {
    title: "Natural Soil Care",
    description: "Enriching soil fertility naturally through organic compost and responsible crop rotation.",
    icon: "seed" as const,
  },
  {
    title: "Chemical-Free Farming",
    description: "Dedicated to wholesome agricultural methods free from harmful synthetic chemicals.",
    icon: "sun" as const,
  },
  {
    title: "Morning Fresh Harvest",
    description: "Hand-picked vegetables and seasonal fruits gathered at peak natural maturity.",
    icon: "water" as const,
  },
  {
    title: "Careful Daily Gathering",
    description: "Gathered at natural ripeness to preserve crisp texture, fresh aroma, and nutrition.",
    icon: "seed" as const,
  },
];

// --- Simplified "What's Sold" Produce Data ---
interface SimplifiedProduceItem {
  id: string;
  name: string;
  category: "Fresh Vegetables" | "Seasonal Fruits" | "Flowers & Floriculture";
  image: string;
  tag: string;
  description: string;
}

const ecoAgroProducts: SimplifiedProduceItem[] = [
  {
    id: "dragon-fruits",
    name: "Fresh Dragon Fruits",
    category: "Seasonal Fruits",
    image: "/images/our-divisions/eco-agro/dragon_fruits.png",
    tag: "Farm Fresh",
    description: "Vibrant, sweet, nutrient-rich dragon fruits naturally cultivated and hand-harvested in our Alphadanga orchards.",
  },
  {
    id: "field-pumpkin",
    name: "Sweet Field Pumpkins",
    category: "Fresh Vegetables",
    image: "/images/our-divisions/eco-agro/pumpkin.jpg",
    tag: "Soil Grown",
    description: "Naturally grown pumpkins with sweet dense flesh, rich natural flavor, and long shelf life.",
  },
  {
    id: "fresh-eggplants",
    name: "Purple Eggplants (Brinjal)",
    category: "Fresh Vegetables",
    image: "/images/our-divisions/eco-agro/486247078_122141364842588506_5865218886699525094_n.jpg",
    tag: "Estate Grown",
    description: "Tender, glossy purple eggplants hand-picked fresh from our fertile cultivation rows.",
  },
  {
    id: "vine-tomatoes",
    name: "Vine-Fresh Tomatoes",
    category: "Fresh Vegetables",
    image: "/images/our-divisions/eco-agro/485807461_122141364836588506_5451588892501741969_n.jpg",
    tag: "Farm Fresh",
    description: "Sun-nourished vine tomatoes harvested at peak maturity and sorted with care.",
  },
  {
    id: "estate-mangoes",
    name: "Sweet Orchard Mangoes",
    category: "Seasonal Fruits",
    image: "/images/our-divisions/eco-agro/mango.jpg",
    tag: "Seasonal",
    description: "Naturally tree-ripened, fragrant sweet mangoes harvested fresh during peak summer harvest.",
  },
  {
    id: "floriculture-gerbera",
    name: "Greenhouse Gerbera & Cut Flowers",
    category: "Flowers & Floriculture",
    image: "/images/our-divisions/eco-agro/flower.jpg",
    tag: "Greenhouse",
    description: "Vibrant gerbera daisies and seasonal ornamental cut flowers cultivated under protected greenhouse care.",
  },
];

// --- Seasonal Availability Calendar ---
const seasonalCalendar = [
  {
    seasonName: "Summer (Baishakh - Jaistha)" as const,
    seasonCode: "summer" as const,
    description: "Peak harvest for sweet orchard mangoes, field okra, and seasonal summer crops.",
    icon: "sun" as const,
    items: [
      { name: "Orchard Mangoes", category: "Fruits", peakMonths: "May - July", status: "Peak Harvest" as const, notes: "Direct estate harvest" },
      { name: "Fresh Field Okra", category: "Vegetables", peakMonths: "April - July", status: "Peak Harvest" as const, notes: "Morning harvest daily" },
      { name: "Seasonal Gourds", category: "Vegetables", peakMonths: "May - August", status: "Available" as const, notes: "Naturally cultivated" },
    ],
  },
  {
    seasonName: "Monsoon (Ashar - Shravan)" as const,
    seasonCode: "monsoon" as const,
    description: "Growth and harvest period for sweet field pumpkins, purple eggplants, and lush greens.",
    icon: "rain" as const,
    items: [
      { name: "Sweet Field Pumpkins", category: "Vegetables", peakMonths: "June - September", status: "Peak Harvest" as const, notes: "Dense soil-grown yield" },
      { name: "Purple Eggplants", category: "Vegetables", peakMonths: "June - October", status: "Peak Harvest" as const, notes: "Tender glossy harvest" },
      { name: "Field Greens", category: "Leafy Greens", peakMonths: "July - Sept", status: "Available" as const, notes: "Chemical-free beds" },
    ],
  },
  {
    seasonName: "Winter (Kartik - Falgun)" as const,
    seasonCode: "winter" as const,
    description: "Prime harvest season for farm tomatoes, winter vegetables, and greenhouse floral blooms.",
    icon: "winter" as const,
    items: [
      { name: "Vine-Fresh Tomatoes", category: "Vegetables", peakMonths: "Dec - March", status: "Peak Harvest" as const, notes: "Firm hand-picked yield" },
      { name: "Greenhouse Gerbera", category: "Flowers", peakMonths: "Nov - Feb", status: "Peak Harvest" as const, notes: "Protected commercial blooms" },
      { name: "Winter Vegetables", category: "Vegetables", peakMonths: "Dec - Feb", status: "Peak Harvest" as const, notes: "Crisp seasonal harvest" },
    ],
  },
];

// --- Photo Gallery Data ---
const photos: AgroPhotoItem[] = [
  {
    id: "photo-1",
    title: "Fresh Field Okra & Garden Harvest",
    category: "Fresh Vegetables",
    image: "/images/our-divisions/eco-agro/veg2.jpg",
    caption: "Crates of crisp green okra and garden produce harvested fresh in Alphadanga.",
  },
  {
    id: "photo-2",
    title: "Sweet Field Pumpkin Harvest",
    category: "Field Produce",
    image: "/images/our-divisions/eco-agro/pumpkin.jpg",
    caption: "Naturally soil-grown organic pumpkins arranged in harvest baskets.",
  },
  {
    id: "photo-3",
    title: "Estate Purple Eggplant Harvest",
    category: "Fresh Vegetables",
    image: "/images/our-divisions/eco-agro/486247078_122141364842588506_5865218886699525094_n.jpg",
    caption: "Glossy purple eggplants sorted fresh from the Alphadanga fields.",
  },
  {
    id: "photo-4",
    title: "Fresh Green & Vine Tomatoes",
    category: "Fresh Vegetables",
    image: "/images/our-divisions/eco-agro/485807461_122141364836588506_5451588892501741969_n.jpg",
    caption: "Hand-picked vine tomatoes sorted from our Alphadanga farm beds.",
  },
  {
    id: "photo-5",
    title: "Greenhouse Gerbera Floriculture",
    category: "Floriculture",
    image: "/images/our-divisions/eco-agro/flower.jpg",
    caption: "Commercial gerbera daisy greenhouse rows grown under attentive estate care.",
  },
  {
    id: "photo-6",
    title: "Orchard Mango Harvest Baskets",
    category: "Fruit Orchards",
    image: "/images/our-divisions/eco-agro/mango.jpg",
    caption: "Freshly picked sweet mangoes gathered directly beneath the estate trees.",
  },
  {
    id: "photo-7",
    title: "Fresh Tuberose Blooms & Harvest",
    category: "Floriculture & Greens",
    image: "/images/our-divisions/eco-agro/veg.jpg",
    caption: "Fragrant tuberose floral bundles and garden vegetables gathered fresh.",
  },
  {
    id: "photo-8",
    title: "Harvested Farm Mango Baskets",
    category: "Seasonal Fruits",
    image: "/images/our-divisions/eco-agro/fruits.jpg",
    caption: "Baskets of orchard mangoes ready during seasonal harvest.",
  },
];

// --- Nearby Sister Concerns ---
const nearbyConcerns = [
  {
    name: "Sampan Eco & Agro Resort",
    category: "Hospitality & Leisure",
    distance: "Adjoining Countryside Retreat",
    tagline: "Serene lakeview wooden cottages, boating, and open-air dining in Alphadanga.",
    href: "/our-divisions/hospitality-highway-travel/sampan-eco-agro",
    logo: "/images/brand/sampanechoagro.png",
    icon: "resort" as const,
  },
  {
    name: "Sampan Agro & Golf Resort",
    category: "Hospitality & Leisure",
    distance: "Sister Hospitality Venture",
    tagline: "Integrated agro-resort, golf academy, and family leisure destination.",
    href: "/our-divisions/hospitality-highway-travel/sampan-agro-golf-resort",
    logo: "/images/brand/agroandgolf.png",
    icon: "resort" as const,
  },
];

export default function SampanEcoAgroProduceClient() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Fresh Vegetables", "Seasonal Fruits", "Flowers & Floriculture"];

  const filteredProducts =
    activeCategory === "All"
      ? ecoAgroProducts
      : ecoAgroProducts.filter((p) => p.category === activeCategory);

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
    <main className="min-h-screen bg-[#F5F5F2] text-neutral-950 overflow-x-hidden w-full">

      {/* ================= 1. HERO SECTION (Hospitality Eco-Agro Style) ================= */}
      <section
        id="overview"
        data-no-reveal
        className="relative min-h-0 sm:min-h-screen flex flex-col justify-start sm:justify-center overflow-hidden bg-[#0c1c14] text-white pt-24 pb-12 sm:pt-28 sm:pb-20 border-b border-white/10"
      >
        {/* Real Background Image with Dark Nature Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBackground}
            alt="Sampan Eco & Agro Cultivation & Harvest Grounds"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Dual-layer dark gradient for text readability and navbar contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07130d]/95 via-[#07130d]/80 to-[#07130d]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1c14] via-transparent to-[#07130d]/80" />
        </div>

        {/* Subtle Emerald & Leaf Green Glow Effects */}
        <div className="pointer-events-none absolute top-1/4 left-10 w-96 h-96 bg-[#2f6b45]/20 rounded-full blur-[140px] z-0" />
        <div className="pointer-events-none absolute bottom-10 right-10 w-96 h-96 bg-[#b9e583]/15 rounded-full blur-[120px] z-0" />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 pt-0 sm:pt-2 pb-8 lg:pb-12">
          {/* Main Hero Content */}
          <div className="max-w-4xl space-y-4 sm:space-y-5">

            {/* Eyebrow Badge */}
            {/* <div className="inline-flex items-center gap-3 border border-[#b9e583]/50 bg-[#b9e583]/15 backdrop-blur-md px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#b9e583]">
              <FaLeaf className="text-xs text-[#b9e583]" />
              <span>Agro &amp; Fresh Produce • Organic Farming &amp; Seasonal Harvest</span>
            </div> */}

            {/* Main Headline */}
            <h1 className="text-[clamp(2.4rem,4.8vw,4.2rem)] font-bold tracking-tight text-white leading-[0.98]">
              Sampan Eco &amp; <br />
              <span className="text-[#b9e583] block mt-1">
                Agro
              </span>
            </h1>

            {/* Tagline & Subheading */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl font-light tracking-wide border-l-2 border-[#b9e583]/80 pl-4">
              Naturally cultivated organic vegetable fields, sweet seasonal fruit orchards, and greenhouse floriculture in Alphadanga, Faridpur.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4">
              <a
                href="#products"
                onClick={(e) => scrollToSection(e, "products")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-none bg-[#b9e583] hover:bg-[#a6db6c] px-7 py-3.5 sm:px-8 sm:py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#0c1c14] shadow-lg shadow-[#b9e583]/20 transition-all duration-300 text-center cursor-pointer select-none"
              >
                <span>What We Grow</span>
                <FiArrowRight className="text-sm" />
              </a>

              <a
                href="#location"
                onClick={(e) => scrollToSection(e, "location")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-none border border-white/15 bg-black/40 hover:bg-white/10 px-7 py-3.5 sm:px-8 sm:py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white/80 hover:text-white transition-all duration-300 backdrop-blur-sm text-center cursor-pointer select-none"
              >
                <FaMapMarkerAlt className="text-xs text-[#b9e583]" />
                <span>Farm Address</span>
              </a>

              <a
                href="https://www.facebook.com/sampanecoandagro"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-none bg-[#1877F2] hover:bg-[#166fe5] px-7 py-3.5 sm:px-8 sm:py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-md text-center"
              >
                <FaFacebookF className="text-sm" />
                <span>Facebook Page</span>
              </a>
            </div>

            {/* Quick Value Badges */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="border-l-2 border-[#b9e583] pl-4">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Natural Soil Care</p>
                <p className="text-[11px] text-white/60 mt-0.5">Chemical-Free Farming</p>
              </div>

              <div className="border-l-2 border-[#b9e583] pl-4">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Fresh Harvest</p>
                <p className="text-[11px] text-white/60 mt-0.5">Field Okra, Pumpkins, Brinjal</p>
              </div>

              {/* <div className="border-l-2 border-[#b9e583] pl-4">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Fruit Orchards &amp; Flora</p>
                <p className="text-[11px] text-white/60 mt-0.5">Sweet Mangoes &amp; Gerbera</p>
              </div> */}

              <div className="border-l-2 border-[#b9e583] pl-4">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Alphadanga, Faridpur</p>
                <p className="text-[11px] text-white/60 mt-0.5">Dhaka Division, Bangladesh</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. FARM PHILOSOPHY & STORYTELLING ================= */}
      <FarmToTableStorytelling
        title=" Cultivation & Farming Values"
        subtitle="Nurturing the fertile soil of Alphadanga, Faridpur with natural compost and sustainable agricultural care."
        concernName="Sampan Eco & Agro"
        storyParagraphs={storyParagraphs}
        pillars={storyPillars}
        farmImage="/images/our-divisions/sampan-eco-agro/vegetables-table-garden-sunlight.jpg"
        bgTheme="divisions-green"
        accentColor="#15803d"
      />

      {/* ================= 3. WHAT'S SOLD (SIMPLIFIED) ================= */}
      <section id="products" className="scroll-mt-20 py-24 bg-[#F5F5F2] border-b border-neutral-300/60">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

          {/* Section Header & Category Filter Tabs */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 border border-[#15803d]/40 bg-[#15803d]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#15803d] mb-4">
                <FaShoppingBasket className="text-xs" />
                <span>What We Grow &amp; Sell</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Fresh Harvest &amp; Produce
              </h2>

              <p className="mt-3 text-base text-neutral-600 font-normal leading-relaxed max-w-2xl">
                Naturally grown vegetables, seasonal fruits, and greenhouse cut flowers harvested fresh from our Alphadanga farm beds.
              </p>
            </div>

            {/* Filter Pills */}
            {/* <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${activeCategory === cat
                      ? "bg-emerald-800 text-white border-emerald-900 shadow-md"
                      : "bg-white text-neutral-700 border-neutral-300 hover:border-emerald-600 hover:text-emerald-800"
                    }`}
                >
                  {cat === "All" ? "All Produce" : cat}
                </button>
              ))}
            </div> */}
          </div>

          {/* Simplified Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border border-neutral-300 bg-white flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden"
              >
                <div>
                  {/* Product Image */}
                  <div className="relative h-60 w-full bg-neutral-100 border-b border-neutral-200 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-emerald-700 text-white shadow-sm z-10">
                      {product.tag}
                    </span>
                  </div>

                  {/* Product Details */}
                  <div className="p-6 space-y-3">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-700 block">
                      {product.category}
                    </span>

                    <h3 className="text-xl font-bold text-neutral-950 leading-snug">
                      {product.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Footer badge */}
                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-mono">
                    <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
                      <FaCheckCircle className="text-xs" />
                      <span>Naturally Grown</span>
                    </span>
                    <span>Alphadanga Farm</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 4. SEASONAL AVAILABILITY SCHEDULE ================= */}
      {/* <AgroSeasonalAvailability
        title="Seasonal Harvest Availability Schedule"
        subtitle="Natural seasonal crop cycles across Summer, Monsoon, and Winter growing periods."
        concernName="Sampan Eco & Agro"
        seasons={seasonalCalendar}
        bgTheme="divisions-green"
        accentColor="#15803d"
      /> */}

      {/* ================= 5. PHOTO GALLERY ================= */}
      <AgroPhotosGallery
        title="Farm Operations & Harvest Gallery"
        subtitle="Authentic photos from our Alphadanga crop fields, vegetable beds, fruit orchards, and floriculture greenhouse."
        photos={photos}
        bgTheme="about-ivory"
        accentColor="#15803d"
      />

      {/* ================= 6. LOCATION & CONTACT (Address Only - Not Google Verified) ================= */}
      <section id="location" className="scroll-mt-20 py-24 bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 border border-[#15803d]/40 bg-[#15803d]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#15803d] mb-4">
              <FaMapMarkerAlt className="text-xs" />
              <span>Estate Location</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950">
              Farm Estate Location &amp; Map
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              Located in Alphadanga, Faridpur, with direct road connectivity from Dhaka via the Padma Bridge corridor.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Farm Details, Direct Contact & Social */}
            <div className="flex flex-col gap-6 justify-between">
              {/* Card 1: Physical Address */}
              <div className="bg-white border border-neutral-300 p-6 sm:p-7 rounded-none shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 rounded-none shrink-0">
                    <FaMapMarkerAlt className="text-base" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                      Physical Estate Address
                    </span>
                    <h3 className="text-lg font-bold text-neutral-950">
                      Joydebpur, Alphadanga
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-mono">
                  Joydebpur, Boroga, Borice, Alphadanga <br />
                  Faridpur District, Dhaka Division, Bangladesh
                </p>
                <p className="pt-2 text-[11px] text-neutral-500 font-mono border-t border-neutral-100 flex items-center gap-2">
                  <FaRoute className="text-xs text-emerald-600 shrink-0" />
                  <span>Padma Bridge Corridor via Bhanga Interchange</span>
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
                      Farm Office
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
                      Follow our official Facebook page for live crop updates, orchard photos, and seasonal yields.
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
                  title="Sampan Eco & Agro Location Map"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 7. NEARBY SISTER VENTURES ================= */}
      <AgroNearbyModule
        title="Adjoining Ventures &amp; Sister Concerns"
        subtitle="Explore our adjoining countryside eco-resort retreat and sister divisions."
        currentStoreName="Sampan Eco & Agro"
        locationHubName="Sampan Agro Hub, Alphadanga, Faridpur"
        nearbyConcerns={nearbyConcerns}
        bgTheme="about-ivory"
        accentColor="#15803d"
      />

    </main>
  );
}
