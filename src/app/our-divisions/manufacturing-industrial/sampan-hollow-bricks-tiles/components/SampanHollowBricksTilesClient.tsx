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
  category: string;
  image: string;
  specs: string;
  description: string;
}

const mainProducts: ProductItem[] = [
  {
    id: "hollow-block-8",
    name: "8-Inch Standard Hollow Concrete Block",
    category: "Load-Bearing Blocks",
    image: "/images/our-divisions/sampan-hollow-bricks/Our-Products.jpg",
    specs: "390 × 190 × 190 mm | >10 MPa Strength",
    description: "High-density vibro-compacted hollow blocks engineered for exterior perimeter and load-bearing construction walls.",
  },
  {
    id: "hollow-block-6",
    name: "6-Inch Interior Partition Hollow Block",
    category: "Partition Blocks",
    image: "/images/our-divisions/sampan-hollow-bricks/Our-Products3.jpg",
    specs: "390 × 140 × 190 mm | High Thermal Barrier",
    description: "Lightweight, uniform concrete partition blocks offering quick mortar alignment, sound insulation, and reduced dead load.",
  },
  {
    id: "uni-paver",
    name: "Heavy-Duty Interlocking Paver Bricks",
    category: "Pavement & Driveway",
    image: "/images/our-divisions/sampan-hollow-bricks/Our-Products-3.jpg",
    specs: "200 × 100 × 80 mm | >35 MPa Strength",
    description: "Heavy-traffic interlocking pavement bricks formulated for factory accessways, fuel stations, and urban parking zones.",
  },
];

interface ParkingTile {
  id: string;
  name: string;
  code: string;
  image: string;
  texture: string;
}

const parkingTilesCollection: ParkingTile[] = [
  { id: "pt-1", name: "Geometric Star Paver", code: "Model PT-01", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-1.jpg", texture: "Heavy-Duty Grip" },
  { id: "pt-2", name: "Cross Fluted Surface", code: "Model PT-02", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-2.jpg", texture: "Anti-Skid Ribbed" },
  { id: "pt-3", name: "Interlock Wave Pattern", code: "Model PT-03", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-3.jpg", texture: "Traffic Load Rated" },
  { id: "pt-4", name: "Square Matrix Paver", code: "Model PT-04", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-4.jpg", texture: "High-Abrasion Proof" },
  { id: "pt-5", name: "Diamond Check Textured", code: "Model PT-05", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-5.jpg", texture: "All-Weather Drainage" },
  { id: "pt-6", name: "Radial Cobble Design", code: "Model PT-06", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-6.jpg", texture: "Heavy Axle Bearing" },
  { id: "pt-7", name: "Sunburst Relief Paver", code: "Model PT-07", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-7.jpg", texture: "Commercial Parking" },
  { id: "pt-8", name: "Hexagonal Grip Tile", code: "Model PT-08", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-8.jpg", texture: "Slip-Resistant" },
  { id: "pt-9", name: "Multi-Groove Tread", code: "Model PT-09", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-9.jpg", texture: "Wash-Resistant" },
  { id: "pt-10", name: "Classic Stud Pavement", code: "Model PT-10", image: "/images/our-divisions/sampan-hollow-bricks/Parking-Tiles-10.jpg", texture: "High Tensile Concrete" },
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

export default function SampanHollowBricksTilesClient() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
              Automated eco-friendly concrete hollow blocks, interlocking pavers, and heavy-duty parking tiles plant inside Sampan Industrial Park, Alfadanga, Faridpur.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("products")}
                className="group inline-flex items-center justify-center gap-2 rounded-none bg-red-700 hover:bg-red-600 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 shadow-lg shadow-red-950/40 cursor-pointer"
              >
                <span>Product Catalogue</span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo("tiles")}
                className="inline-flex items-center justify-center rounded-none border border-white/25 bg-white/5 hover:border-white hover:bg-white hover:text-black px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                Parking Tiles (10 Designs)
              </button>

              <button
                onClick={() => scrollTo("location")}
                className="inline-flex items-center justify-center rounded-none border border-red-500/40 bg-red-950/30 hover:bg-red-900/60 px-7 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-red-300 transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                Wholesale Inquiries
              </button>
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
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">10+ Tile Types</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">Heavy Vehicle Rated</p>
              </div>
              <div className="border-l-2 border-red-500 pl-4">
                <p className="text-sm sm:text-base font-bold text-white uppercase tracking-wider">Vibro-Press</p>
                <p className="text-[11px] text-white/60 mt-0.5 font-mono">High Compressive</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 2. ECO ADVANTAGES & CAPACITY ================= */}
      {/* <section className="py-20 sm:py-24 px-6 sm:px-10 lg:px-16 bg-[#fcfbf9] border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Sustainable construction. <br />
                <span className="text-red-700">Engineered concrete strength.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Replacing burnt clay bricks with high-strength vibro-pressed concrete blocks manufactured cleanly in Alfadanga, Faridpur.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {ecoAdvantages.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <div
                  key={idx}
                  className="group border border-neutral-200 bg-white p-6 sm:p-7 rounded-none hover:border-red-600 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 bg-red-50 border border-red-200 flex items-center justify-center text-red-700 rounded-none group-hover:bg-red-600 group-hover:text-white transition-colors mb-6">
                      <Icon className="text-base" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-950 group-hover:text-red-700 transition-colors">
                      {adv.title}
                    </h3>
                    <p className="mt-3 text-xs text-neutral-600 leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-red-800 font-bold">
                    <span>BSTI Standard Compliant</span>
                    <FaCheck className="text-[10px] text-red-600" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section> */}

      {/* ================= 3. CORE PRODUCTS (HOLLOW BLOCKS & PAVERS) ================= */}
      <section id="products" className="py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-950 leading-tight">
                Hollow Blocks &amp; Pavement Pavers
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-neutral-500 leading-relaxed">
              Precision manufactured for multi-storey residential projects, perimeter walls, and commercial pavement infrastructure.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {mainProducts.map((product) => (
              <article
                key={product.id}
                onClick={() => setSelectedImage(product.image)}
                className="group relative flex flex-col h-full rounded-none overflow-hidden bg-white border border-neutral-200 hover:border-red-600 transition-all duration-300 hover:shadow-md cursor-pointer min-h-[380px]"
              >
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-red-600 transition-all duration-500 group-hover:w-full z-20" />

                <div className="relative w-full h-56 overflow-hidden bg-neutral-200">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] text-white bg-red-700 px-2 py-1">
                      <FaExpand className="text-[9px]" /> Click to Zoom
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-red-700 block mb-1">
                      {product.category}
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
            {parkingTilesCollection.map((tile) => (
              <div
                key={tile.id}
                onClick={() => setSelectedImage(tile.image)}
                className="group relative flex flex-col bg-[#161010] border border-white/10 hover:border-red-500 rounded-none overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-black/40">
                  <Image
                    src={tile.image}
                    alt={tile.name}
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

                <div className="p-3">
                  <span className="font-mono text-[9px] font-bold text-red-400 block mb-0.5">
                    {tile.code}
                  </span>
                  <h4 className="text-xs font-bold text-white truncate">
                    {tile.name}
                  </h4>
                  <p className="font-mono text-[10px] text-neutral-400 mt-1">
                    {tile.texture}
                  </p>
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
                Manufacturing Anchor in Alfadanga, Faridpur
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
              Plant Location &amp; Wholesale Supply
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
                Plant Location
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-mono">
                Sampan Hollow Bricks &amp; Tiles <br />
                Sampan Industrial Park <br />
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
              alt="Sampan Hollow Bricks & Tiles Preview"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* ================= 7. SQUARE MINIMAL FOOTER ================= */}
      <footer className="bg-white border-t border-neutral-200 px-6 py-12 sm:px-10 lg:px-16 text-neutral-600">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 md:grid-cols-4 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-neutral-950 mb-3">
                Sampan Hollow Bricks &amp; Tiles
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-md">
                Automated eco-friendly concrete hollow blocks, interlocking pavers, and heavy-duty parking tiles plant inside Sampan Industrial Park in Alfadanga, Faridpur. A Sampan Group Venture.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-950 mb-4">
                Products &amp; Catalogue
              </h4>
              <ul className="space-y-2.5 text-xs font-mono">
                <li>
                  <button onClick={() => scrollTo("products")} className="hover:text-red-700 transition-colors text-left">
                    Hollow Blocks &amp; Pavers
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("tiles")} className="hover:text-red-700 transition-colors text-left">
                    Parking Tiles (10 Designs)
                  </button>
                </li>
                <li>
                  <Link href="/our-divisions/manufacturing-industrial/sampan-industrial-park" className="hover:text-red-700 transition-colors">
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
              © {new Date().getFullYear()} Sampan Hollow Bricks &amp; Tiles. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/our-divisions/manufacturing-industrial" className="hover:text-red-700 transition-colors">
                Manufacturing Division Archive
              </Link>
              <Link href="/our-divisions/manufacturing-industrial/sampan-pet-beverage" className="hover:text-red-700 transition-colors">
                PET &amp; Beverage
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
