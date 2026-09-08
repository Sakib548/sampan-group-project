"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaGraduationCap,
  FaUniversity,
  FaMapMarkerAlt,
  FaCar,
  FaClock,
  FaUserGraduate,
  FaChartLine,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaBookOpen,
  FaShieldAlt,
} from "react-icons/fa";

export interface UniversityItem {
  id: string;
  name: string;
  shortName: string;
  campusType: string;
  commuteTime: string;
  distance: string;
  approxStudents: string;
  logo: string;
  highlights: string[];
  description: string;
  rentalDemandTier: "Exceptional" | "Very High" | "High";
  focusDisciplines: string[];
  googleMapsQuery: string;
}

const universitiesData: UniversityItem[] = [
  {
    id: "diu",
    name: "Daffodil International University",
    shortName: "DIU Smart City Campus",
    campusType: "Flagship Permanent Smart City Campus",
    commuteTime: "4 Mins Drive",
    distance: "1.8 km",
    approxStudents: "30,000+ Students & Faculty",
    logo: "/images/university-logos/daffodil-international-university-logo.png",
    highlights: [
      "100+ Acre Green Permanent Smart Campus",
      "Premier Engineering, CS, AI & Business Faculties",
      "Highest concentrated student rental demographic",
    ],
    description:
      "One of the largest private university campuses in South Asia, hosting tens of thousands of local and international students creating permanent rental demand for contemporary apartments.",
    rentalDemandTier: "Exceptional",
    focusDisciplines: ["Computer Science & IT", "Software Engineering", "Business Admin", "Pharmacy"],
    googleMapsQuery: "Daffodil International University Ashulia",
  },
  {
    id: "brac",
    name: "BRAC University",
    shortName: "BRACU Savar / Ashulia Campus",
    campusType: "Residential & Research Campus",
    commuteTime: "12 Mins Drive",
    distance: "5.5 km",
    approxStudents: "20,000+ Students & Academics",
    logo: "/images/university-logos/brac-logo.svg",
    highlights: [
      "Pioneering Residential Semester Programs",
      "Prestigious Global Academic Standing",
      "High faculty and executive scholar housing demand",
    ],
    description:
      "Home to BRAC University's immersive academic programs, attracting students, visiting international faculty, and researchers seeking premium residential apartments.",
    rentalDemandTier: "Exceptional",
    focusDisciplines: ["Architecture & Planning", "Economics & Law", "Biotechnology", "CSE"],
    googleMapsQuery: "BRAC University Residential Campus Savar",
  },
  {
    id: "eastern",
    name: "Eastern University",
    shortName: "EU Permanent Campus",
    campusType: "Ashulia Model Town Campus",
    commuteTime: "2 Mins Drive",
    distance: "0.8 km",
    approxStudents: "8,000+ Students",
    logo: "/images/university-logos/EU_SEAL.svg",
    highlights: [
      "Direct Proximity inside Ashulia Model Town",
      "Leading Faculty of Law & Engineering",
      "Immediate walking distance to campus hubs",
    ],
    description:
      "Situated within the immediate neighborhood of Ashulia Model Town, making Sampan Metro Square an unmatched residential choice for faculty, professors, and students.",
    rentalDemandTier: "Exceptional",
    focusDisciplines: ["Law & Human Rights", "Civil Engineering", "EEE & CSE", "Business"],
    googleMapsQuery: "Eastern University Ashulia Model Town",
  },
  {
    id: "manarat",
    name: "Manarat International University",
    shortName: "MIU Ashulia Campus",
    campusType: "Permanent Scenic Campus",
    commuteTime: "3 Mins Drive",
    distance: "1.2 km",
    approxStudents: "6,500+ Students",
    logo: "/images/university-logos/manarat.png",
    highlights: [
      "State-of-the-Art Permanent Campus along Waterfront",
      "Strong Pharmacy, Journalism & EEE Programs",
      "Consistent year-round demand for family apartments",
    ],
    description:
      "Located within minutes of the project, Manarat's permanent campus brings a vibrant academic and moral community into the immediate Ashulia corridor.",
    rentalDemandTier: "Very High",
    focusDisciplines: ["Pharmacy", "Journalism & Media", "EEE & CSE", "English & Law"],
    googleMapsQuery: "Manarat International University Ashulia",
  },
  {
    id: "city",
    name: "City University",
    shortName: "City University Permanent Campus",
    campusType: "Lush Multi-Acre Campus",
    commuteTime: "5 Mins Drive",
    distance: "2.4 km",
    approxStudents: "10,000+ Students",
    logo: "/images/university-logos/city-university-logo.png",
    highlights: [
      "Sprawling Green Campus in Khagan/Birulia-Ashulia",
      "Prominent Textile Engineering & Agriculture Hub",
      "Steady influx of students and young professionals",
    ],
    description:
      "A fast-expanding multi-disciplinary institution with expansive grounds, generating steady need for secure residential housing and land-share developments.",
    rentalDemandTier: "Very High",
    focusDisciplines: ["Textile Engineering", "Mechanical", "Computer Science", "Agribusiness"],
    googleMapsQuery: "City University Permanent Campus Khagan",
  },
  {
    id: "aub",
    name: "Asian University of Bangladesh",
    shortName: "AUB Permanent Campus",
    campusType: "Ashulia Landmark Campus",
    commuteTime: "4 Mins Drive",
    distance: "2.0 km",
    approxStudents: "7,500+ Students",
    logo: "/images/university-logos/aub.png",
    highlights: [
      "Pioneer in Affordable Quality Higher Education",
      "Extensive Postgraduate & Evening Programs",
      "High demand for faculty residences and scholar flats",
    ],
    description:
      "Established along the main Ashulia growth belt, AUB caters to undergraduate and graduate cohorts needing accessible transit and contemporary housing.",
    rentalDemandTier: "Very High",
    focusDisciplines: ["Social Sciences", "Education & Arts", "Business Studies", "Computer Science"],
    googleMapsQuery: "Asian University of Bangladesh Ashulia",
  },
  {
    id: "aust",
    name: "Ahsanullah University",
    shortName: "AUST Innovation & Campus Hub",
    campusType: "Strategic Higher Education Node",
    commuteTime: "10 Mins Drive",
    distance: "4.8 km",
    approxStudents: "12,000+ Students & Alumni",
    logo: "/images/university-logos/aust_logo.svg",
    highlights: [
      "Top-Ranked Engineering & STEM Institution",
      "Extensive Architectural & Technological Research",
      "High-income faculty, alumni, and engineering workforce",
    ],
    description:
      "Renowned for engineering excellence, Ahsanullah University's academic presence within the northern metro transit perimeter cements the Ashulia belt as Bangladesh's Silicon Corridor.",
    rentalDemandTier: "High",
    focusDisciplines: ["Civil & Structural Eng.", "Mechanical Eng.", "EEE & Telecommunication", "Architecture"],
    googleMapsQuery: "Ahsanullah University of Science and Technology Dhaka",
  },
];

export interface SurroundingUniversitiesModuleProps {
  title?: string;
  subtitle?: string;
  bgTheme?: "divisions-green" | "about-ivory" | "white";
}

export default function SurroundingUniversitiesModule({
  title = "Surrounded by Dhaka's Premier Universities",
  subtitle = "Ashulia is metropolitan Dhaka's undisputed Education Capital. Positioned right in the center of 7+ renowned universities, Sampan Metro Square offers unparalleled residential livability and guaranteed rental demand.",
  bgTheme = "divisions-green",
}: SurroundingUniversitiesModuleProps) {
  const [selectedId, setSelectedId] = useState<string>(universitiesData[0].id);
  const [filterTier, setFilterTier] = useState<string>("all");

  const selectedUni = universitiesData.find((u) => u.id === selectedId) || universitiesData[0];

  const filteredUnis = universitiesData.filter((u) => {
    if (filterTier === "all") return true;
    if (filterTier === "under-5-mins") {
      const mins = parseInt(u.commuteTime);
      return !isNaN(mins) && mins <= 5;
    }
    if (filterTier === "exceptional") {
      return u.rentalDemandTier === "Exceptional";
    }
    return true;
  });

  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="universities-hub" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      {/* Signature Ambient Radial Gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(0,161,116,0.09),transparent_26%),radial-gradient(circle_at_94%_92%,rgba(239,99,107,0.07),transparent_23%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 border border-[#ca8a04]/40 bg-[#ca8a04]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ca8a04]">
              <FaGraduationCap className="text-xs" />
              <span>Higher Education &amp; University Corridor</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-current leading-tight">
              {title}
            </h2>

            <p className="text-sm sm:text-base leading-relaxed opacity-85 font-normal">
              {subtitle}
            </p>
          </div>

          {/* Quick Metrics Badge Strip */}
          <div className="flex flex-wrap lg:flex-col gap-3 shrink-0">
            <div className="border border-current/15 bg-white px-5 py-3 shadow-sm flex items-center gap-3">
              <FaUniversity className="text-[#ca8a04] text-lg" />
              <div>
                <div className="font-mono text-base font-bold text-current">7+ Major Universities</div>
                <div className="text-[10px] font-mono uppercase opacity-60">Within 2 - 12 Mins Reach</div>
              </div>
            </div>
            <div className="border border-current/15 bg-white px-5 py-3 shadow-sm flex items-center gap-3">
              <FaUserGraduate className="text-emerald-700 text-lg" />
              <div>
                <div className="font-mono text-base font-bold text-current">90,000+ Students</div>
                <div className="text-[10px] font-mono uppercase opacity-60">Thriving Academic Ecosystem</div>
              </div>
            </div>
          </div>
        </div>

        {/* Intuitive University Logo Quick-Bar */}
        <div className="mb-10 p-4 sm:p-5 bg-white border border-current/15 shadow-sm">
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#ca8a04]">
              Quick Select Campus Logo:
            </span>
            <span className="text-[11px] font-mono opacity-60 hidden sm:inline-block">
              Click any emblem to inspect details
            </span>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-7 gap-2.5 sm:gap-4 items-center">
            {universitiesData.map((uni) => {
              const isSelected = uni.id === selectedId;
              return (
                <button
                  key={uni.id}
                  onClick={() => setSelectedId(uni.id)}
                  title={`Select ${uni.name}`}
                  className={`group p-2.5 sm:p-3 border transition-all duration-300 flex flex-col items-center justify-center gap-1.5 cursor-pointer bg-white ${
                    isSelected
                      ? "border-[#ca8a04] shadow-md ring-2 ring-[#ca8a04]/30 -translate-y-0.5"
                      : "border-neutral-200 hover:border-neutral-400 hover:shadow-xs opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="h-10 w-10 sm:h-12 sm:w-12 relative flex items-center justify-center">
                    <Image
                      src={uni.logo}
                      alt={`${uni.name} Logo`}
                      width={48}
                      height={48}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <span
                    className={`font-mono text-[9px] sm:text-[10px] uppercase font-bold text-center leading-tight truncate w-full ${
                      isSelected ? "text-[#ca8a04]" : "text-neutral-600 group-hover:text-neutral-900"
                    }`}
                  >
                    {uni.id.toUpperCase()}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
          <button
            onClick={() => setFilterTier("all")}
            className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer border ${
              filterTier === "all"
                ? "bg-[#183b2b] text-white border-[#183b2b] shadow-sm"
                : "bg-white text-current border-current/20 hover:border-current"
            }`}
          >
            All 7 Universities
          </button>
          <button
            onClick={() => setFilterTier("under-5-mins")}
            className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer border ${
              filterTier === "under-5-mins"
                ? "bg-[#183b2b] text-white border-[#183b2b] shadow-sm"
                : "bg-white text-current border-current/20 hover:border-current"
            }`}
          >
            Immediate Vicinity (&le; 5 Mins)
          </button>
          <button
            onClick={() => setFilterTier("exceptional")}
            className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer border ${
              filterTier === "exceptional"
                ? "bg-[#183b2b] text-white border-[#183b2b] shadow-sm"
                : "bg-white text-current border-current/20 hover:border-current"
            }`}
          >
            Highest Student Density
          </button>
        </div>

        {/* Intuitive 2-Column Interactive Workspace */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: List of Universities with Logos */}
          <div className="lg:col-span-5 space-y-3">
            {filteredUnis.map((uni) => {
              const isSelected = uni.id === selectedId;
              return (
                <div
                  key={uni.id}
                  onClick={() => setSelectedId(uni.id)}
                  className={`border transition-all duration-300 p-4 sm:p-5 cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? "bg-white border-[#ca8a04] shadow-md -translate-y-0.5"
                      : "bg-white/85 hover:bg-white border-current/15 hover:border-current/40 shadow-sm"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 left-0 h-full w-1.5 bg-[#ca8a04]" />
                  )}

                  <div className="flex items-center gap-4">
                    {/* University Logo Badge */}
                    <div className="h-12 w-12 sm:h-14 sm:w-14 bg-white border border-neutral-200 p-1.5 shrink-0 flex items-center justify-center shadow-xs">
                      <Image
                        src={uni.logo}
                        alt={`${uni.name} Logo`}
                        width={48}
                        height={48}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    <div className="space-y-1 min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ca8a04] truncate">
                          {uni.campusType}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-current leading-snug truncate">
                        {uni.name}
                      </h4>
                      <p className="text-xs opacity-70 flex items-center gap-2 pt-0.5">
                        <FaUserGraduate className="text-[#ca8a04] text-[11px] shrink-0" />
                        <span className="truncate">{uni.approxStudents}</span>
                      </p>
                    </div>

                    <div className="text-right shrink-0 space-y-1">
                      <span className="inline-flex items-center gap-1.5 bg-[#f3f6f2] border border-current/15 px-2.5 py-1 font-mono text-[10px] sm:text-[11px] font-bold text-[#ca8a04]">
                        <FaClock className="text-[9px]" />
                        <span>{uni.commuteTime}</span>
                      </span>
                      <div className="text-[10px] font-mono opacity-60 text-right">
                        {uni.distance}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Showcase Card with Prominent University Logo */}
          <div className="lg:col-span-7 border border-current/15 bg-white p-8 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-[#ca8a04]" />

            <div className="space-y-6">
              {/* Card Header with Big Logo */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-b border-current/10 pb-6">
                <div className="flex items-center gap-4 sm:gap-5">
                  {/* Big University Logo */}
                  <div className="h-16 w-16 sm:h-20 sm:w-20 bg-white border border-neutral-200 p-2 shrink-0 flex items-center justify-center shadow-sm">
                    <Image
                      src={selectedUni.logo}
                      alt={`${selectedUni.name} Official Logo`}
                      width={80}
                      height={80}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#ca8a04] font-bold">
                      <FaUniversity className="text-xs" />
                      <span>{selectedUni.shortName}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-current leading-tight">
                      {selectedUni.name}
                    </h3>
                    <p className="text-xs font-mono opacity-70 mt-0.5 flex items-center gap-2">
                      <FaMapMarkerAlt className="text-red-600" />
                      <span>Ashulia Metropolitan Growth Corridor</span>
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-end gap-2 shrink-0">
                  <div className="bg-[#183b2b] text-white px-3.5 py-2 font-mono text-xs font-bold uppercase tracking-wider text-right shadow-sm">
                    <span className="block text-[10px] opacity-75 font-normal">Drive Time</span>
                    <span>{selectedUni.commuteTime}</span>
                  </div>
                  <div className="text-xs font-mono text-[#ca8a04] font-bold">
                    Distance: {selectedUni.distance}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed opacity-85 font-normal">
                {selectedUni.description}
              </p>

              {/* Highlights & Key Features */}
              <div className="space-y-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider block text-[#ca8a04]">
                  Campus Infrastructure &amp; Proximity Highlights
                </span>
                <div className="grid sm:grid-cols-1 gap-2.5">
                  {selectedUni.highlights.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-[#f3f6f2] border border-current/10 text-xs font-normal"
                    >
                      <FaCheckCircle className="text-emerald-700 text-sm shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Academic Disciplines */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider block opacity-70">
                  Major Academic Disciplines
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedUni.focusDisciplines.map((disc, idx) => (
                    <span
                      key={idx}
                      className="bg-white border border-current/20 px-3 py-1 font-mono text-xs font-medium text-current"
                    >
                      {disc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Rental Demand & Equity Impact Strip */}
              <div className="p-4 bg-gradient-to-r from-[#183b2b]/5 to-transparent border-l-4 border-emerald-600 font-mono text-xs space-y-1">
                <div className="flex justify-between items-center">
                  <span className="opacity-75 uppercase font-bold">Rental Occupancy Rating:</span>
                  <span className="text-emerald-800 font-bold bg-emerald-100 px-2.5 py-0.5 uppercase tracking-wider">
                    {selectedUni.rentalDemandTier} Demand
                  </span>
                </div>
                <p className="text-[11px] opacity-75 pt-1 font-sans">
                  Guarantees continuous 12-month tenant interest from university professors, administrative officers, and student groups seeking high-standard 3-bedroom suites.
                </p>
              </div>

              {/* Interactive Directions Link */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    selectedUni.googleMapsQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#183b2b] hover:bg-[#ca8a04] text-white hover:text-neutral-950 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-md cursor-pointer"
                >
                  <FaCar className="text-xs" />
                  <span>View Route on Google Maps</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>

                <a
                  href="#enquiry-form"
                  className="inline-flex items-center gap-2 border border-current/20 hover:border-current px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-current transition-colors"
                >
                  <FaBookOpen className="text-xs text-[#ca8a04]" />
                  <span>Consult Investment Equity</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Investor Takeaway Bar */}
        <div className="mt-12 border border-current/15 bg-white p-6 sm:p-8 shadow-sm grid md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#ca8a04]">
              <FaChartLine className="text-base" />
              <h5 className="font-mono text-xs font-bold uppercase tracking-wider">Uninterrupted Rental Yield</h5>
            </div>
            <p className="text-xs opacity-80 leading-relaxed font-normal">
              7 renowned universities host a permanent captive market of faculty members, administrative staff, and students needing high-grade rental apartments.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#ca8a04]">
              <FaShieldAlt className="text-base" />
              <h5 className="font-mono text-xs font-bold uppercase tracking-wider">Cultured &amp; Secure Environment</h5>
            </div>
            <p className="text-xs opacity-80 leading-relaxed font-normal">
              Ashulia Model Town offers wide planned roads, tranquil surroundings, and an intellectual neighborhood ideal for families and children.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#ca8a04]">
              <FaClock className="text-base" />
              <h5 className="font-mono text-xs font-bold uppercase tracking-wider">Metro Corridor Synergy</h5>
            </div>
            <p className="text-xs opacity-80 leading-relaxed font-normal">
              Only 20 minutes from the Uttara Metro Rail Station, bridging academic institutions seamlessly to Uttara, Mirpur, and Dhaka&apos;s commercial hubs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
