import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GolfHero from "./components/GolfHero";
import GolfNearbyModule from "./components/GolfNearbyModule";

export const metadata: Metadata = {
  title: "Golf Zone | Sampan Golf Academy & Short Drive Range",
  description:
    "Explore Sampan Group's premier Golf Zone featuring Sampan Golf Academy and Sampan Short Drive Range.",
};

const divisionFacts = [
  { value: "Q4 2026", label: "Division Launch" },
  { value: "35+ Bays", label: "Toptracer Automated Range" },
  { value: "TrackMan 4", label: "PGA Swing Simulators" },
  { value: "Floodlit", label: "Night Driving Range" },
];

const golfConcerns = [
  {
    id: "sampan-golf-academy",
    name: "Sampan Golf Academy",
    badge: "Coming Soon — Launching Q4 2026",
    tagline: "Professional PGA-certified coaching, TrackMan 4 video swing analysis, putting studio, junior academy, and tournament preparation.",
    href: "/our_divisions/golf-zone/sampan-golf-academy",
    image: "/images/brand/golfacademy.png",
    highlights: [
      "PGA Class A Certified Head Professional",
      "TrackMan 4 Launch Monitor & Video Optics Lab",
      "Junior & Youth Talent Development Pathway",
      "Monthly Medal & Stroke Play Tournament Calendar",
    ],
  },
  {
    id: "sampan-short-drive-range",
    name: "Sampan Short Drive Range",
    badge: "Coming Soon — Launching Q4 2026",
    tagline: "Short game precision practice, automated tee bays, Toptracer target tracking, floodlit night driving, and corporate lounge events.",
    href: "/our_divisions/golf-zone/sampan-short-drive-range",
    image: "/images/brand/golfrage.png",
    highlights: [
      "35+ Climate-Controlled Automated Tee Bays",
      "Toptracer Interactive Ball Tracking Telemetry",
      "High-Lumen Floodlit Night Driving & Sports Bar",
      "Live Leaderboard Scoring & Corporate Packages",
    ],
  },
];

export default function GolfZonePage() {
  return (
    <main className="bg-[#f8faf6] text-[#183b2b] min-h-screen">
      {/* Hero Header */}
      <GolfHero
        title="Golf Zone Division"
        subtitle="Premier Professional Golf Academy & Automated Short Drive Practice Range"
        concernName="Sampan Group Golf Zone"
        statusBadge="Archive & Development Hub — Coming Soon 2026"
        description="Developing Bangladesh's premier golf infrastructure, combining PGA-certified training labs with state-of-the-art Toptracer short-drive practice range and floodlit sports lounges."
        facts={divisionFacts}
        logo="/images/brand/golfacademy.png"
        bannerImage="/images/our_divisions/golf-zone/hero_banner.jpg"
        backgroundImage="/images/our_divisions/golf-zone/hero_banner.jpg"
      />

      {/* Concerns Showcase */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full">
              Division Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-[#091e15]">
              Golf Zone Flagship Concerns
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Explore our upcoming professional academy and short-drive practice range facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {golfConcerns.map((concern) => (
              <div
                key={concern.id}
                className="bg-emerald-50/50 border border-emerald-900/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-200">
                      {concern.badge}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700">
                      Golf Zone Flagship
                    </span>
                  </div>

                  <div className="flex items-center gap-6 mb-6">
                    <div className="relative w-20 h-20 bg-white p-2 rounded-2xl border border-emerald-200 flex-shrink-0 shadow-sm">
                      <Image
                        src={concern.image}
                        alt={concern.name}
                        fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#091e15] font-serif group-hover:text-emerald-800 transition-colors">
                        {concern.name}
                      </h3>
                      <p className="text-xs font-medium text-emerald-700 mt-1 uppercase tracking-wider">
                        Coming Soon to Sampan Agro & Golf Complex
                      </p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {concern.tagline}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-emerald-900/10">
                    {concern.highlights.map((hl, i) => (
                      <div key={i} className="flex items-center text-xs sm:text-sm text-emerald-950 font-medium">
                        <span className="text-amber-500 font-bold mr-2">✓</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6">
                  <Link
                    href={concern.href}
                    className="block w-full py-4 rounded-xl bg-[#091e15] hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow-lg group-hover:scale-[1.01]"
                  >
                    View Full Facility Page & Requirements →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Location Module */}
      <GolfNearbyModule
        currentStoreName="Golf Zone Overview"
        locationHubName="Sampan Agro & Golf Complex, Moulvibazar"
      />
    </main>
  );
}
