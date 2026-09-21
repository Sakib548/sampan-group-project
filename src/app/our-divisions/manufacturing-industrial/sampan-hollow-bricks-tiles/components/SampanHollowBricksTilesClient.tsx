"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaCubes,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaExpand,
  FaTimes,
  FaCheck,
  FaShieldAlt,
  FaLeaf,
  FaThLarge,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const heroBackground = "/images/our-divisions/sampan-hollow-bricks/Image-Edit.jpg";

interface ProductItem {
  id: string;
  name: string;
  category: "blocks" | "pavers" | "infrastructure";
  categoryLabel: string;
  image: string;
  specs: string;
  description: string;
  contain?: boolean;
}

const mainProducts: ProductItem[] = [
  {
    id: "hollow-block-2-core",
    name: "2-Core Standard Hollow Block (4″, 6″ & 8″)",
    category: "blocks",
    categoryLabel: "Structural Hollow Block",
    image: "/images/our-divisions/sampan-hollow-bricks/brick_paver/Hollow Block_4″_6″_8″.png",
    specs: "390 × 190 × 190 mm (8″) / 390 × 140 × 190 mm (6″) | >10 MPa Strength",
    description: "Vibro-compacted dual-cell load-bearing concrete hollow blocks engineered for external boundary walls, columns, and structural perimeter masonry.",
    contain: true,
  },
  {
    id: "hollow-block-3-core",
    name: "3-Core Multi-Cavity Hollow Block (4″, 6″ & 8″)",
    category: "blocks",
    categoryLabel: "Load-Bearing & Insulated",
    image: "/images/our-divisions/sampan-hollow-bricks/brick_paver/Hollow Block+4″, 6″ & 8″.png",
    specs: "3-Chamber Vertical Cavities | High Compressive Strength & Thermal Barrier",
    description: "Uniform multi-chamber hollow blocks with reinforced vertical cores for rebar/mortar infill, conduit routing, and superior thermal insulation.",
    contain: true,
  },
  {
    id: "hollow-block-90mm",
    name: "90 mm Slim Partition Hollow Block",
    category: "blocks",
    categoryLabel: "Interior Partition Block",
    image: "/images/our-divisions/sampan-hollow-bricks/brick_paver/Hollow_Block _90_mm.png",
    specs: "390 × 90 × 190 mm | Space-Saving Light Partition",
    description: "Lightweight 90 mm slim 3-core concrete block for internal wall separations, reducing dead weight load on multi-storey structures while maximizing usable floor area.",
    contain: true,
  },
  {
    id: "hollow-block-stretcher",
    name: "Grooved Stretcher Hollow Masonry Block",
    category: "blocks",
    categoryLabel: "Stretcher Masonry Block",
    image: "/images/our-divisions/sampan-hollow-bricks/brick_paver/Hollow Block 4″_6″_8″.png",
    specs: "Mortar-Locking End Grooves • 4″ / 6″ / 8″ Modules",
    description: "Features specialized interlocking end mortar keys that lock neighboring blocks rigidly, preventing rainwater seepage and accelerating masonry laying speed.",
    contain: true,
  },
  {
    id: "solid-block-4-6-8",
    name: "Solid Concrete Masonry Block (4″, 6″ & 8″)",
    category: "blocks",
    categoryLabel: "Solid Dense Masonry",
    image: "/images/our-divisions/sampan-hollow-bricks/brick_paver/Solid Block_4″_6″_8″.png",
    specs: "400 × 200 × 100/150/200 mm | >15 MPa Extreme Compressive Load",
    description: "Maximum density solid concrete blocks built for heavy basement retaining walls, structural plinths, heavy foundation courses, and acoustic isolation rooms.",
    contain: true,
  },
  {
    id: "i-shape-paver",
    name: "I-Shape (Uni) Heavy-Duty Interlocking Paver",
    category: "pavers",
    categoryLabel: "Interlocking Traffic Paver",
    image: "/images/our-divisions/sampan-hollow-bricks/brick_paver/I_shape_Interlocking_Paver.png",
    specs: "200 × 160 × 60/80 mm | Dual-Tone Non-Skid Finish | >35 MPa",
    description: "Heavy-traffic interlocking bone/I-shape paver designed to transfer heavy wheel shear forces across adjacent blocks without shifting or rutting.",
    contain: true,
  },
  {
    id: "trihex-paver",
    name: "Trihex Patterned Interlocking Paver (60 mm)",
    category: "pavers",
    categoryLabel: "Architectural Traffic Paver",
    image: "/images/our-divisions/sampan-hollow-bricks/brick_paver/Trihex_Paver_60_mm.png",
    specs: "60 mm Thickness | Textured Non-Skid Geometric Face | >30 MPa",
    description: "Triple-hexagonal interlocking paver with textured anti-slip surface ridges, offering high decorative aesthetic appeal for walkways, public plazas, and parking areas.",
    contain: true,
  },
  {
    id: "hexagonal-paver",
    name: "Hexagonal Pavement Block (300 × 150 × 60 mm)",
    category: "pavers",
    categoryLabel: "Decorative Pavement Block",
    image: "/images/our-divisions/sampan-hollow-bricks/brick_paver/Hexagonal_Block_300 x150 x 60_mm.png",
    specs: "300 × 150 × 60 mm | Terracotta Pigment Option | >35 MPa",
    description: "Classic geometric hexagonal paver block engineered for upscale pedestrian zones, garden walkways, residential driveways, and institutional campuses.",
    contain: true,
  },
  {
    id: "uni-paver-wavy",
    name: "Uni-Paver Wave Interlocking Block (222 × 109.5 mm)",
    category: "pavers",
    categoryLabel: "High-Stress Industrial Paver",
    image: "/images/our-divisions/sampan-hollow-bricks/Uni_Paver_222×109.5_mm.png",
    specs: "222 × 109.5 × 60/80 mm | Heavy Axle Rating | >40 MPa",
    description: "Continuous wavy interlocking block system delivering maximum joint interlock for industrial freight yards, port container aprons, and fueling terminals.",
    contain: true,
  },
  {
    id: "curb-stone-500",
    name: "Precast Concrete Road Curb Stone",
    category: "infrastructure",
    categoryLabel: "Roadway Infrastructure",
    image: "/images/our-divisions/sampan-hollow-bricks/brick_paver/Curb_Stone_500 X 400 X 120 mm.png",
    specs: "500 × 400 × 120 mm | Chamfered Edge Roadway Barrier",
    description: "Heavy precast concrete road curbing providing edge restraint for pavement layers, roadway edge delineation, and median divider protection along highways.",
    contain: true,
  },
  {
    id: "factory-hollow-batch",
    name: "Automated Plant Production Batch",
    category: "blocks",
    categoryLabel: "Factory Cured Units",
    image: "/images/our-divisions/sampan-hollow-bricks/Our-Products.jpg",
    specs: "Computerized Vibro-Compaction • Alfadanga Plant",
    description: "Continuous automated manufacturing cycle ensuring uniform cement hydration, sharp crisp edges, and consistent dimensional accuracy across every pallet.",
    contain: false,
  },
  {
    id: "factory-stack-cured",
    name: "Cured Block Staging & Palletized Inventory",
    category: "blocks",
    categoryLabel: "High-Volume Staging",
    image: "/images/our-divisions/sampan-hollow-bricks/Our-Products3.jpg",
    specs: "High-Capacity Storage • Ready for Immediate Truck Dispatch",
    description: "Extensive cured stock kept in Alfadanga Industrial Park ready for immediate bulk delivery to construction sites across Faridpur, Dhaka, and nationwide.",
    contain: false,
  },
  {
    id: "factory-paver-yard",
    name: "Industrial Interlocking Paver Staging",
    category: "pavers",
    categoryLabel: "Paver Yard Staging",
    image: "/images/our-divisions/sampan-hollow-bricks/Our-Products-3.jpg",
    specs: "Multi-Tonne Paver Inventory • Industrial Grade Testing",
    description: "Palletized interlocking pavers ready for prompt crane-unloading at highway service areas, industrial park internal roads, and commercial parking projects.",
    contain: false,
  },
];

interface ParkingTile {
  id: string;
  image: string;
}

const parkingTilesCollection: ParkingTile[] = [
  { id: "pt-1", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-1.jpg" },
  { id: "pt-2", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-2.jpg" },
  { id: "pt-3", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-3.jpg" },
  { id: "pt-4", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-4.jpg" },
  { id: "pt-5", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-5.jpg" },
  { id: "pt-6", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-6.jpg" },
  { id: "pt-7", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-7.jpg" },
  { id: "pt-8", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-8.jpg" },
  { id: "pt-9", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-9.jpg" },
  { id: "pt-10", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-10.jpg" },
];

const ecoAdvantages = [
  {
    title: "Zero Clay Burning (Eco-Friendly)",
    desc: "100% soil preservation without kiln emissions or topsoil degradation, compliant with national environmental green guidelines.",
    icon: FaLeaf,
  },
  {
    title: "Thermal Insulation & Energy Saving",
    desc: "Hollow interior air cavities reduce room heat transmission by up to 35%, cutting cooling expenses significantly.",
    icon: FaShieldAlt,
  },
  {
    title: "Certified Compressive Strength",
    desc: "Automated hydraulic vibro-press technology ensures high load-bearing capacity (>10 MPa) and uniform mortar keying.",
    icon: FaCubes,
  },
];

interface ModalItem {
  image: string;
  title: string;
  category?: string;
  specs?: string;
}

export default function SampanHollowBricksTilesClient() {
  const [selectedModalItem, setSelectedModalItem] = useState<ModalItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Products", count: mainProducts.length },
    { id: "blocks", label: "Hollow & Solid Blocks", count: mainProducts.filter((p) => p.category === "blocks").length },
    { id: "pavers", label: "Interlocking Pavers", count: mainProducts.filter((p) => p.category === "pavers").length },
    { id: "infrastructure", label: "Roadway Curb Stones", count: mainProducts.filter((p) => p.category === "infrastructure").length },
  ];

  const filteredProducts = activeCategory === "all"
    ? mainProducts
    : mainProducts.filter((p) => p.category === activeCategory);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#fcfbf9] text-[#1a1714] selection:bg-red-700 selection:text-white">

      {/* ================= 1. HERO SECTION (NO EYEBROW) ================= */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#140b0b] text-white pt-24 pb-16 lg:pt-28 lg:pb-20 border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBackground}
            alt="Sampan Hollow Bricks Plant"
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
              <span className="text-red-500 block mt-1">
                Hollow Bricks &amp; Tiles
              </span>
            </h1>

            {/* Shortened Subheadline */}
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl font-light tracking-wide border-l-2 border-red-500/80 pl-4">
              Automated eco-friendly concrete hollow blocks, solid masonry, interlocking pavers, and heavy-duty parking tiles plant inside Sampan Industrial Park, Alfadanga, Faridpur.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("products")}
                className="group inline-flex items-center justify-center gap-2 rounded-none bg-red-700 hover:bg-red-600 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-lg shadow-red-950/40 cursor-pointer"
              >
                <span>Product Catalogue </span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo("tiles")}
                className="inline-flex items-center justify-center rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                Parking Tiles
              </button>

              {/* <button
                onClick={() => scrollTo("location")}
                className="inline-flex items-center justify-center rounded-none border border-red-500/40 bg-red-950/30 hover:bg-red-900/60 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-red-300 transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                Wholesale Inquiries
              </button> */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-none border border-red-500/40 bg-red-950/30 hover:bg-red-900/60 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-red-300 transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                Wholesale Inquiries
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="mt-10 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="border-l-2 border-red-500 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Alfadanga</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Faridpur District</p>
              </div>
              <div className="border-l-2 border-red-500 pl-4">
                <p className="text-sm sm:text-base font-bold text-red-400 uppercase tracking-wider">Zero Burning</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">100% Eco Green</p>
              </div>
              <div className="border-l-2 border-red-500 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">10+ Pavers &amp; Blocks</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">High Compressive</p>
              </div>
              <div className="border-l-2 border-red-500 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">10+ Tile Types</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Heavy Vehicle Rated</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 3. CORE PRODUCTS (HOLLOW BLOCKS, PAVERS & CURB STONES) ================= */}
      <section id="products" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-10 bg-red-600" />
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-red-700">
                  Engineered Product Catalogue
                </p>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Hollow Blocks, Pavers &amp; Curb Stones
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-500 leading-relaxed">
              Precision manufactured for multi-storey residential projects, perimeter walls, industrial factory roadways, and highway edge restraints.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 pb-6 border-b border-neutral-200">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-none font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${activeCategory === cat.id
                  ? "bg-red-700 text-white shadow-sm"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
              >
                <span>{cat.label}</span>
                <span className={`ml-2 text-[10px] ${activeCategory === cat.id ? "text-white/80" : "text-neutral-500"}`}>
                  ({cat.count})
                </span>
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                onClick={() =>
                  setSelectedModalItem({
                    image: product.image,
                    title: product.name,
                    category: product.categoryLabel,
                    specs: product.specs,
                  })
                }
                className="group relative flex flex-col h-full rounded-none overflow-hidden bg-white border border-neutral-200 hover:border-red-600 transition-all duration-300 hover:shadow-lg cursor-pointer min-h-[420px]"
              >
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-red-600 transition-all duration-500 group-hover:w-full z-20" />

                <div
                  className={`relative w-full h-64 overflow-hidden border-b border-neutral-100 ${product.contain ? "bg-[#f8f6f3] flex items-center justify-center p-6" : "bg-neutral-200"
                    }`}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`${product.contain
                      ? "object-contain p-4 transition-transform duration-700 group-hover:scale-105 drop-shadow-md"
                      : "object-cover transition-transform duration-700 group-hover:scale-105"
                      }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-white bg-red-700 px-2.5 py-1">
                      <FaExpand className="text-[9px]" /> Click to Enlarge
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-red-700 block mb-1">
                      {product.categoryLabel}
                    </span>
                    <h3 className="text-lg font-bold text-neutral-950 group-hover:text-red-700 transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-100">
                    <p className="font-mono text-[11px] font-bold text-neutral-800">
                      {product.specs}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 4. 10-PIECE PARKING TILES COLLECTION ================= */}
      <section id="tiles" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#0c0909] text-white border-b border-white/10">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Parking &amp; Outdoor Tiles Collection
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-400 leading-relaxed">
              10 distinctive high-compressive parking tile textures engineered for vehicular driveways, residential ramps, and commercial forecourts.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {parkingTilesCollection.map((tile, idx) => (
              <div
                key={tile.id}
                onClick={() =>
                  setSelectedModalItem({
                    image: tile.image,
                    title: `Heavy-Duty Parking Tile (Design #${idx + 1})`,
                    category: "Vehicular Parking & Driveway Tiles",
                    specs: "Heavy Axle Load Support • Anti-Skid Grip",
                  })
                }
                className="group relative aspect-square w-full bg-[#161010] border border-white/10 hover:border-red-500 rounded-none overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <Image
                  src={tile.image}
                  alt={`Parking Tile Design #${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                  <span className="font-mono text-[9px] text-white flex items-center gap-1">
                    <FaExpand className="text-[8px]" /> Enlarge
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
            <p>• Engineered for extreme tire grip, anti-skid textures, and maximum vehicle axle weight support.</p>
            <span className="text-red-400 font-bold">Custom color pigmentation available on bulk order</span>
          </div>

        </div>
      </section>

      {/* ================= 5. INDUSTRIAL PARK INTEGRATION ================= */}
      <section className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#1a0f0f] text-white border-b border-white/10">
        <div className="mx-auto max-w-[1440px]">

          <div className="border border-white/10 bg-[#221414] p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 rounded-none">
            <div className="max-w-2xl space-y-3">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-red-400">
                Inside Sampan Industrial Park
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold text-white">
                Manufacturing Hub in Alfadanga, Faridpur
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Operating directly within Sampan Industrial Park in Alfadanga alongside Sampan PET &amp; Beverage with direct access to high-capacity power lines, heavy freight roads, and centralized logistics.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                href="/our-divisions/manufacturing-industrial/sampan-industrial-park"
                className="inline-flex items-center gap-2 rounded-none bg-red-700 hover:bg-red-600 text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>View Industrial Park</span>
                <FiArrowRight className="text-xs" />
              </Link>
              <Link
                href="/our-divisions/manufacturing-industrial/sampan-pet-beverage"
                className="inline-flex items-center gap-2 rounded-none border border-white/25 hover:border-white hover:bg-white hover:text-black text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>PET &amp; Beverage Plant</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 6. LOCATION & WHOLESALE INQUIRIES ================= */}
      <section id="location" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#f7f9f7] text-[#1a1714] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
              Location &amp; Wholesale Supply
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Located in Alfadanga, Faridpur. Supplying contractors, real estate developers, and municipal road projects across Bangladesh.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Address */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-red-50 border border-red-200 flex items-center justify-center text-red-700 rounded-none">
                <FaMapMarkerAlt className="text-lg" />
              </div>
              <h3 className="text-xl font-bold text-neutral-950">
                Factory Location
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-mono">
                Sampan Hollow Bricks &amp; Tiles <br />
                Sampan Industrial Park <br />
                Sampan Pet & Beverage<br />
                Alfadanga, Faridpur, Bangladesh
              </p>
              <p className="pt-2 text-[11px] text-neutral-400 font-mono border-t border-neutral-100">
                Alfadanga Industrial Corridor
              </p>
            </div>

            {/* Card 2: Standards & Dispatch */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-red-50 border border-red-200 flex items-center justify-center text-red-700 rounded-none">
                <FaShieldAlt className="text-base" />
              </div>
              <h3 className="text-xl font-bold text-neutral-950">
                Quality &amp; Logistics
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-mono">
                BSTI Quality Compliant <br />
                Truckload Freight Dispatch <br />
                Consistent Vibro-Compaction
              </p>
              <p className="pt-2 text-[11px] text-neutral-400 font-mono border-t border-neutral-100">
                Heavy vehicle load bearing
              </p>
            </div>

            {/* Card 3: B2B Order Desk */}
            <div className="bg-white border border-neutral-300 p-8 rounded-none shadow-sm space-y-4">
              <div className="w-12 h-12 bg-red-50 border border-red-200 flex items-center justify-center text-red-700 rounded-none">
                <FaPhoneAlt className="text-base" />
              </div>
              <h3 className="text-xl font-bold text-neutral-950">
                B2B Bulk Orders
              </h3>
              <div className="pt-1 text-sm text-neutral-700 space-y-1 font-mono">
                <p>
                  <span className="text-neutral-400">Phone: </span>
                  <a href="tel:+8801929918400" className="text-red-700 font-bold hover:underline">
                    +880 1929918400
                  </a>
                </p>
                <p>
                  <span className="text-neutral-400">Email: </span>
                  <a href="mailto:info@sampangroup.com.bd.bd" className="text-red-700 font-bold hover:underline">
                    info@sampangroup.com.bd.bd
                  </a>
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-none bg-red-700 hover:bg-red-600 text-white px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Request Bulk Price Quote</span>
                  <FiArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Modal (Square Architectural Spec Style) */}
      {selectedModalItem && (
        <div
          onClick={() => setSelectedModalItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-in fade-in"
        >
          <button
            onClick={() => setSelectedModalItem(null)}
            className="absolute top-6 right-6 text-white p-3 rounded-none bg-white/10 hover:bg-white/20 transition-colors cursor-pointer z-30"
            aria-label="Close Lightbox"
          >
            <FaTimes className="text-lg" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] rounded-none overflow-hidden border border-white/20 shadow-2xl bg-[#141010] flex flex-col"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-[#1a1414] flex items-center justify-center p-6">
              <Image
                src={selectedModalItem.image}
                alt={selectedModalItem.title}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-contain p-4"
              />
            </div>

            <div className="p-5 sm:p-6 bg-[#110c0c] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                {selectedModalItem.category && (
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-red-500 block mb-1">
                    {selectedModalItem.category}
                  </span>
                )}
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {selectedModalItem.title}
                </h3>
                {selectedModalItem.specs && (
                  <p className="font-mono text-xs text-neutral-400 mt-1">
                    {selectedModalItem.specs}
                  </p>
                )}
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <button
                  onClick={() => {
                    setSelectedModalItem(null);
                    scrollTo("location");
                  }}
                  className="inline-flex items-center gap-2 rounded-none bg-red-700 hover:bg-red-600 text-white px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Request Quote</span>
                  <FiArrowRight className="text-xs" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}



    </main>
  );
}
