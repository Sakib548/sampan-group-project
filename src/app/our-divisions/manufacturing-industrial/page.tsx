import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaIndustry, FaMapMarkerAlt, FaArrowRight, FaCheckCircle, FaCogs } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Manufacturing & Industrial Division | Sampan Group",
  description:
    "Explore Sampan Group's Manufacturing & Industrial division in Alfadanga, Faridpur, featuring Sampan Industrial Park, eco-friendly hollow bricks & tiles manufacturing, and automated PET beverage bottling.",
};

const manufacturingConcerns = [
  {
    id: "sampan-industrial-park",
    name: "Sampan Industrial Park",
    category: "Master Manufacturing Hub",
    status: "Master Industrial Zone",
    statusType: "active",
    location: "Alfadanga, Faridpur",
    description: "Master-planned industrial park in Alfadanga, Faridpur housing anchor facilities for eco-friendly building materials and automated beverage packaging.",
    image: "/images/our-divisions/sampan-industrial-park/6.jpeg",
    link: "/our-divisions/manufacturing-industrial/sampan-industrial-park",
    accentColor: "#047857",
    highlights: ["Alfadanga Industrial Corridor", "Dedicated Electric Substation", "Resident Manufacturing Anchors"],
  },
  {
    id: "sampan-hollow-bricks-tiles",
    name: "Sampan Hollow Bricks & Tiles",
    category: "Eco Building Materials",
    status: "Active Manufacturing Unit",
    statusType: "active",
    location: "Sampan Industrial Park, Alfadanga, Faridpur",
    description: "Automated eco-friendly hollow concrete block, interlocking paver, and parking tile manufacturing plant with zero clay burning.",
    image: "/images/our-divisions/sampan-hollow-bricks/Our-Products.jpg",
    link: "/our-divisions/manufacturing-industrial/sampan-hollow-bricks-tiles",
    accentColor: "#b91c1c",
    highlights: ["Eco-Friendly Zero Burning", "10+ Parking Tile Designs", "BSTI Compliant Strength"],
  },
  {
    id: "sampan-pet-beverage",
    name: "Sampan PET & Beverage",
    category: "Packaging & Beverage Bottling",
    status: "Active Manufacturing Unit",
    statusType: "active",
    location: "Sampan Industrial Park, Alfadanga, Faridpur",
    description: "High-speed automated food-grade PET bottle preform injection molding, purified drinking water bottling, and beverage packaging plant.",
    image: "/images/our-divisions/sampan-pet-beverage/Web-Banner-2.jpg",
    link: "/our-divisions/manufacturing-industrial/sampan-pet-beverage",
    accentColor: "#ea580c",
    highlights: ["Virgin Food-Grade PET", "Purified Water Bottling", "Automated Packaging Line"],
  },
];

export default function ManufacturingIndustrialArchivePage() {
  return (
    <main className="bg-[#fcfbf9] text-[#183b2b] antialiased min-h-screen selection:bg-[#047857] selection:text-white">

      {/* Archive Dark Hero Header */}
      <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 border-b border-white/10 overflow-hidden bg-[#0a120e] text-white">
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.95] tracking-tight text-white">
              Manufacturing &amp; <br />
              <span className="text-emerald-400">Industrial Division</span>
            </h1>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light max-w-2xl border-l-2 border-emerald-500/80 pl-4">
              Explore Sampan Group&apos;s industrial manufacturing hub in Alfadanga, Faridpur—featuring Sampan Industrial Park, eco-friendly hollow bricks &amp; tiles, and automated PET beverage bottling.
            </p>
          </div>
        </div>
      </section>

      {/* Concerns Grid Section */}
      <section className="py-20 bg-[#fcfbf9] text-[#183b2b] relative overflow-hidden border-b border-neutral-200">
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">

          <div className="grid md:grid-cols-3 gap-8">
            {manufacturingConcerns.map((concern) => (
              <article
                key={concern.id}
                className="group border border-neutral-200 bg-white flex flex-col justify-between overflow-hidden hover:border-neutral-900 transition-all duration-300 shadow-sm hover:shadow-md rounded-none"
              >
                <div>
                  {/* Photo Header Box */}
                  <div className="relative h-56 w-full overflow-hidden bg-neutral-900">
                    <Image
                      src={concern.image}
                      alt={concern.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm border border-white/20 font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 text-white rounded-none">
                      {concern.category}
                    </span>

                    <span className="absolute top-4 right-4 font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 border backdrop-blur-md flex items-center gap-1 bg-emerald-950/70 text-emerald-300 border-emerald-500/40 rounded-none">
                      <FaCogs className="text-[9px]" />
                      <span>{concern.status}</span>
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                      <FaMapMarkerAlt style={{ color: concern.accentColor }} />
                      <span>{concern.location}</span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-950 leading-snug">
                      {concern.name}
                    </h3>

                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {concern.description}
                    </p>

                    <div className="pt-3 border-t border-neutral-100 space-y-2">
                      {concern.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-neutral-700 font-mono">
                          <FaCheckCircle className="text-emerald-700 text-[10px] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={concern.link}
                    className="w-full inline-flex items-center justify-between text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-none cursor-pointer"
                    style={{ backgroundColor: concern.accentColor }}
                  >
                    <span>Explore Plant</span>
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
