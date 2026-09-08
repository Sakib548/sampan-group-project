import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaSubway,
  FaGraduationCap,
  FaUniversity,
  FaPlaneDeparture,
  FaDumbbell,
  FaSwimmingPool,
  FaUsers,
  FaPray,
  FaHelicopter,
  FaShieldAlt,
  FaCompass,
} from "react-icons/fa";
import RealEstateHero2 from "../components/RealEstateHero2";
import UnitTypesAndSizes from "../components/UnitTypesAndSizes";
import LandShareStructure from "../components/LandShareStructure";
import FloorPlansViewer from "../components/FloorPlansViewer";
import LegalCredentialsModule from "../components/LegalCredentialsModule";
import WalkthroughRenderGallery from "../components/WalkthroughRenderGallery";
import RealEstateLocationMap from "../components/RealEstateLocationMap";
import RealEstateEnquiryForm from "../components/RealEstateEnquiryForm";
import DownloadableBrochureCTA from "../components/DownloadableBrochureCTA";
import SiteVisitBookingForm from "../components/SiteVisitBookingForm";
import SurroundingUniversitiesModule from "../components/SurroundingUniversitiesModule";

export const metadata: Metadata = {
  title: "Sampan Metro Square | Ashulia Land-Share Residential Project",
  description:
    "Own a piece of Ashulia's next address. A premium land-share residential project designed for those investing in a visionary future home, not just a plot.",
};

const facts = [
  { value: "12 Katha", label: "Land Footprint" },
  { value: "B+G 12", label: "Floors Architecture" },
  { value: "1,300± sq ft", label: "Expansive Units" },
  { value: "72 Shares", label: "Exclusive Allotted" },
];

const units = [
  {
    id: "type-a",
    name: "Type A - 1,300 sq ft Contemporary Suite",
    category: "3-Bedroom Layout",
    sizeSqFt: "1,300 sq ft",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    priceRange: "BDT 58 Lacs",
    orientation: "South-East Facing",
    highlights: [
      "Spacious Master Suite with Private Balcony",
      "Open Concept Living & Dining Space",
      "Separate Servant / Utility Restroom",
    ],
  },
  {
    id: "type-b",
    name: "Type B - 1,480 sq ft Deluxe Corner Suite",
    category: "3-Bedroom Deluxe",
    sizeSqFt: "1,480 sq ft",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 3,
    priceRange: "BDT 64 Lacs",
    orientation: "Corner Open View",
    highlights: [
      "Corner Unit with 3-Side Natural Cross Ventilation",
      "Fitted Gourmet Kitchen & Utility Veranda",
      "Dedicated Covered Car Parking Allocation",
    ],
  },
];

const landShareTiers = [
  {
    title: "Standard Residential Land Share",
    shareSize: "Undivided Proportional Katha",
    equityRatio: "1 Apartment Unit Share",
    keyBenefits: [
      "72 exclusive land shares allotted across 12 Katha footprint",
      "100% transparent construction cost sharing",
      "Direct mutual land deed registration & full owner mutation",
      "Zero developer intermediary profit markups",
    ],
  },
  {
    title: "Commercial & Corner Land Share",
    shareSize: "Premium Undivided Katha",
    equityRatio: "1 Unit + Parking Share",
    keyBenefits: [
      "Priority corner floor & panoramic unit selection",
      "Includes dedicated ground floor covered parking share",
      "100% transparent construction cost sharing",
      "High capital appreciation potential along the Ashulia Metro corridor",
    ],
  },
];

const locationBenefits = [
  {
    icon: FaSubway,
    title: "20 Mins to Metro Rail",
    description: "Only a 20-minute drive from the Uttara Metro Rail Station, ensuring rapid transit across Dhaka.",
    metric: "20 Mins",
    image: "/images/our_divisions/sampan-metro-square/metro-rail.jpeg",
  },
  {
    icon: FaGraduationCap,
    title: "8+ Universities & 16+ Schools",
    description: "Surrounded by 8+ reputable universities and 16+ top-tier academic institutions in the educational hub.",
    metric: "Education Hub",
    image: "/images/our_divisions/sampan-metro-square/university.jpeg",
  },
  {
    icon: FaUniversity,
    title: "5+ Major Banking Institutions",
    description: "Convenient proximity to 5+ major scheduled commercial banks and financial branches.",
    metric: "5+ Banks",
    image: "/images/our_divisions/sampan-metro-square/bank.jpg",
  },
  {
    icon: FaPlaneDeparture,
    title: "Direct Highway & Airport Access",
    description: "Direct access to the Ashulia Highway Interchange and Hazrat Shahjalal International Airport.",
    metric: "Rapid Corridor",
    image: "/images/our_divisions/sampan-metro-square/airport.jpeg",
  },
];

const elevatedAmenities = [
  {
    icon: FaBuilding,
    title: "B+G 12-Floor Modern Design",
    description: "Architectural B+G 12-floor building engineered for contemporary living with expansive units starting at 1,300+ sq ft.",
    tag: "Architecture",
    images: [
      { src: "/images/our_divisions/sampan-metro-square/metro-square.png", label: "Architecture" },
    ],
  },
  {
    icon: FaHelicopter,
    title: "Exclusive Rooftop Drone Port",
    description: "Future-ready rooftop drone landing station designed for aerial logistics and emergency accessibility.",
    tag: "Future-Ready",
    images: [
      { src: "/images/our_divisions/sampan-metro-square/drone.png", label: "Drone Port" },
    ],
  },
  {
    icon: FaSwimmingPool,
    title: "Gym & Private Swimming Pool",
    description: "State-of-the-art fitness gymnasium paired with an exclusive temperature-tempered private swimming pool.",
    tag: "Wellness",
    images: [
      { src: "/images/our_divisions/sampan-metro-square/modern-gym-interior.jpg.jpeg", label: "Fitness Gym" },
      { src: "/images/our_divisions/sampan-metro-square/swimming_pool.jpeg", label: "Infinity Pool" },
    ],
  },
  {
    icon: FaUsers,
    title: "Community Hall & Prayer Room",
    description: "Spacious multi-purpose community gathering hall alongside a serene, dedicated on-site prayer room.",
    tag: "Community",
    images: [
      { src: "/images/our_divisions/sampan-metro-square/community_hall.png", label: "Community Hall" },
      { src: "/images/our_divisions/sampan-metro-square/11.Prayers-Room.png", label: "Prayer Room" },
    ],
  },
];

const floorPlans = [
  {
    id: "fp-master",
    name: "Master Architectural Site Plan (12 Katha)",
    category: "Site Plan",
    sizeSqFt: "12 Katha Footprint",
    image: "/images/projects/unit-coming-soon.jpg",
    description: "Architectural footprint engineered on 12 Katha land with 40-ft road frontage, perimeter security, and landscaped setbacks.",
    features: ["12 Katha Master Land Footprint", "B+G 12-Floor Structural Grid", "Gated Security Guard Post"],
  },
  {
    id: "fp-typical",
    name: "Typical Floor Layout (B+G 12 Floors)",
    category: "Typical Floor",
    sizeSqFt: "Expansive Units (1,300+ sq ft)",
    image: "/images/concerns/sampan-dev-ltd.png",
    description: "Optimized residential floor layout with 3-side cross ventilation, high-speed passenger elevators, and dual fire exits.",
    features: ["Units starting at 1,300+ sq ft", "Dual High-Speed Elevators", "Continuous Natural Light Corridors"],
  },
];

const legalCredentials = [
  {
    authority: "Ministry of Land / AC Land",
    approvalTitle: "Clear Land Deed Titles & Mutation",
    referenceNumber: "CS, SA, RS & City Jorip Cleared",
    status: "100% Cleared",
    description: "All land parcels 100% mutated with clear land deed titles, zero encumbrances, and verified ownership records.",
  },
  {
    authority: "RAJUK / Local Municipality",
    approvalTitle: "Structural Building Clearance",
    referenceNumber: "B+G 12-Storey Engineering Clearance",
    status: "Approved",
    description: "Approved structural height and setback clearances under contemporary urban development guidelines.",
  },
];

const renders = [
  {
    id: "r-1",
    title: "Sampan Metro Square Exterior Elevation",
    category: "exterior" as const,
    categoryLabel: "Exterior Renders",
    image: "/images/projects/unit-coming-soon.jpg",
    type: "image" as const,
    description: "B+G 12-floor modern glass & contemporary facade designed for elevated urban living.",
  },
  {
    id: "r-2",
    title: "Living Room Interior Render",
    category: "interior" as const,
    categoryLabel: "Interior Vistas",
    image: "/images/projects/unit-coming-soon.jpg",
    type: "image" as const,
    description: "Expansive 3-bedroom living and dining area with ambient natural lighting and premium finishes.",
  },
];

const landmarks = [
  { landmark: "Eastern University (Ashulia Model Town)", distance: "0.8 km", driveTime: "2 Mins" },
  { landmark: "Manarat International University", distance: "1.2 km", driveTime: "3 Mins" },
  { landmark: "Daffodil International University (Smart Campus)", distance: "1.8 km", driveTime: "4 Mins" },
  { landmark: "Asian University of Bangladesh", distance: "2.0 km", driveTime: "4 Mins" },
  { landmark: "City University (Khagan Campus)", distance: "2.4 km", driveTime: "5 Mins" },
  { landmark: "Ahsanullah University (Campus Extension)", distance: "4.8 km", driveTime: "10 Mins" },
  { landmark: "BRAC University (Residential Campus)", distance: "5.5 km", driveTime: "12 Mins" },
  { landmark: "Uttara Metro Rail Station", distance: "6.5 km", driveTime: "20 Mins" },
  { landmark: "Hazrat Shahjalal Int'l Airport", distance: "12 km", driveTime: "25 Mins" },
];

export default function SampanMetroSquarePage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#dc2626] selection:text-white">
      {/* 1. Project Overview */}
      <RealEstateHero2
        title="Sampan Metro Square."
        subtitle="Ashulia Land-Share Residential Project"
        divisionName="Sampan Development Ltd"
        description="Own a piece of Ashulia's next address. A premium land-share residential project designed for those investing in a visionary future home, not just a plot."
        image="/images/projects/sampanmetrosquare.jpg"
        facts={facts}
        accentColor="#dc2626"
        locationLabel="Ashulia Model Town, Dhaka"
        primaryCtaLabel="Discover the Project"
        primaryCtaLink="#blueprint"
      />

      {/* 2. Land Size & Structure - The Blueprint */}
      <section id="blueprint" className="py-24 relative overflow-hidden bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(0,161,116,0.09),transparent_26%),radial-gradient(circle_at_94%_92%,rgba(239,99,107,0.07),transparent_23%)]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 border border-[#ca8a04]/40 bg-[#ca8a04]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ca8a04] mb-4">
                <FaBuilding className="text-xs" />
                <span>Land Size &amp; Architecture</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-neutral-950">
                The Blueprint.
              </h2>
            </div>
            <p className="max-w-xl text-sm sm:text-base leading-relaxed text-neutral-700 font-normal">
              Masterfully designed on a 12 Katha land footprint. The architecture features a B+G 12-floor building, engineered for modern contemporary living.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="border border-neutral-300 bg-white p-6 space-y-1 shadow-sm">
              <span className="text-xs font-mono uppercase text-neutral-500">Total Footprint</span>
              <p className="text-3xl font-mono font-bold text-[#ca8a04]">12 Katha</p>
              <p className="text-xs text-neutral-600 pt-1">Prime land parcel in Ashulia Model Town</p>
            </div>
            <div className="border border-neutral-300 bg-white p-6 space-y-1 shadow-sm">
              <span className="text-xs font-mono uppercase text-neutral-500">Structural Height</span>
              <p className="text-3xl font-mono font-bold text-neutral-950">B+G 12 Floors</p>
              <p className="text-xs text-neutral-600 pt-1">Basement + Ground + 12 Storeys architecture</p>
            </div>
            <div className="border border-neutral-300 bg-white p-6 space-y-1 shadow-sm">
              <span className="text-xs font-mono uppercase text-neutral-500">Expansive Units</span>
              <p className="text-3xl font-mono font-bold text-neutral-950">1,300± sq ft</p>
              <p className="text-xs text-neutral-600 pt-1">Spacious 3-bedroom modern residences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Unit Types & Layout Configurations */}
      {/* <UnitTypesAndSizes
        title="Apartment Unit Configurations"
        subtitle="Explore expansive residential layouts engineered for modern contemporary living starting at 1,300+ sq ft."
        units={units}
        bgTheme="divisions-green"
      /> */}

      {/* 3. Land Share Structure - Equity & Ownership */}
      <LandShareStructure
        title="Equity & Ownership."
        subtitle="A highly transparent, high-yield investment framework."
        totalLandArea="12 Katha"
        totalSharesCount="72 Exclusive Shares"
        registrationStatus="Clear Land Deed Titles"
        tiers={landShareTiers}
        bgTheme="about-ivory"
      />

      {/* 4. Location & Map - Strategic Coordinates */}
      <RealEstateLocationMap
        title="Strategic Coordinates."
        subtitle="Located in Ashulia Model Town (Amin Mohammad Group), Block–A, Road–11, 12, Plot–A (33, 34, 35, 36). Positioned right next to the Ashulia growth corridor, ensuring seamless accessibility and appreciating value."
        projectName="Sampan Metro Square"
        address="Ashulia Model Town (Amin Mohammad Group), Block–A, Road–11, 12, Plot–A (33, 34, 35, 36), Ashulia, Dhaka"
        gpsCoordinates="23.8704° N, 90.3148° E"
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.5407189150123!2d90.31223757402395!3d23.870437478588713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c3000c8cf04b%3A0x2edcd08f02adb65c!2sSampan%20Metro%20Square!5e0!3m2!1sen!2sbd!4v1788852483456!5m2!1sen!2sbd"
        googleMapsUrl="https://maps.app.goo.gl/3JKeytsHT6AzjtCt5"
        landmarks={landmarks}
        bgTheme="divisions-green"
      />

      {/* 5. Project Location Benefits - Connected Urban Living */}
      <section className="py-24 relative overflow-hidden bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(0,161,116,0.09),transparent_26%),radial-gradient(circle_at_94%_92%,rgba(239,99,107,0.07),transparent_23%)]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 border border-[#ca8a04]/40 bg-[#ca8a04]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ca8a04] mb-4">
                <FaCompass className="text-xs" />
                <span>Regional Connectivity</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-neutral-950">
                Connected Urban Living.
              </h2>
            </div>
            <p className="max-w-xl text-sm sm:text-base leading-relaxed text-neutral-700 font-normal">
              Experience a premium lifestyle situated right in the education and transit hub of Dhaka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locationBenefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={idx}
                  className="border border-neutral-300/80 bg-white overflow-hidden relative flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                    <div className="absolute top-3 left-3">
                      <span className="inline-block font-mono text-[10px] font-bold uppercase tracking-wider text-[#ca8a04] bg-neutral-950/85 backdrop-blur-sm px-2.5 py-1 border border-[#ca8a04]/30 shadow-sm">
                        {benefit.metric}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 h-10 w-10 bg-white/95 backdrop-blur-sm border border-neutral-200 flex items-center justify-center text-[#ca8a04] text-lg shadow-sm group-hover:bg-[#ca8a04] group-hover:text-neutral-950 transition-colors">
                      <IconComponent />
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-neutral-950 leading-snug group-hover:text-[#ca8a04] transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Surrounding Universities Enclave - Highlighting 7 Premier Institutions */}
      {/* <SurroundingUniversitiesModule
        title="Surrounded by Dhaka's Premier Universities."
        subtitle="Ashulia Model Town is the intellectual and higher-education capital of metropolitan Dhaka. Positioned directly amidst 7 prestigious universities, Sampan Metro Square guarantees continuous year-round rental occupancy and enduring capital appreciation."
        bgTheme="divisions-green"
      /> */}

      {/* 6. Project Benefits - Elevated Amenities */}
      <section className="py-24 relative overflow-hidden bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_4%,rgba(0,161,116,0.09),transparent_26%),radial-gradient(circle_at_94%_92%,rgba(239,99,107,0.07),transparent_23%)]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 border border-[#ca8a04]/40 bg-[#ca8a04]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#ca8a04] mb-4">
                <FaBuilding className="text-xs" />
                <span>Curated Lifestyle</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-current">
                Elevated Amenities.
              </h2>
            </div>
            <p className="max-w-xl text-sm sm:text-base leading-relaxed opacity-80 font-normal">
              Every detail is curated to enhance your daily experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {elevatedAmenities.map((amenity, idx) => {
              const IconComp = amenity.icon;
              const hasMultipleImages = amenity.images.length > 1;

              return (
                <div
                  key={idx}
                  className="border border-neutral-300/80 bg-white overflow-hidden relative flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  {hasMultipleImages ? (
                    <div className="relative h-48 w-full overflow-hidden bg-neutral-100 flex">
                      {amenity.images.map((img, i) => (
                        <div
                          key={i}
                          className={`relative h-full flex-1 transition-all duration-500 ease-out hover:flex-[2.2] group/photo overflow-hidden ${
                            i === 0 ? "border-r border-white/30" : ""
                          }`}
                        >
                          <Image
                            src={img.src}
                            alt={img.label || amenity.title}
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                            className="object-cover group-hover/photo:scale-110 transition-transform duration-500 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

                          {/* Mini label for each photo */}
                          <div className="absolute bottom-2.5 left-2.5 z-10 pointer-events-none">
                            <span className="inline-block text-[9px] font-mono font-bold uppercase tracking-wider text-white/90 bg-black/60 backdrop-blur-sm px-2 py-0.5 border border-white/20">
                              {img.label}
                            </span>
                          </div>
                        </div>
                      ))}

                      {/* Tag badge for whole card */}
                      <div className="absolute top-3 left-3 z-10 pointer-events-none">
                        <span className="inline-block font-mono text-[10px] font-bold uppercase tracking-wider text-[#ca8a04] bg-neutral-950/85 backdrop-blur-sm px-2.5 py-1 border border-[#ca8a04]/30 shadow-sm">
                          {amenity.tag}
                        </span>
                      </div>

                      {/* Icon */}
                      <div className="absolute bottom-3 right-3 z-20 h-10 w-10 bg-white/95 backdrop-blur-sm border border-neutral-200 flex items-center justify-center text-[#ca8a04] text-lg shadow-sm group-hover:bg-[#ca8a04] group-hover:text-neutral-950 transition-colors pointer-events-none">
                        <IconComp />
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                      <Image
                        src={amenity.images[0].src}
                        alt={amenity.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-block font-mono text-[10px] font-bold uppercase tracking-wider text-[#ca8a04] bg-neutral-950/85 backdrop-blur-sm px-2.5 py-1 border border-[#ca8a04]/30 shadow-sm">
                          {amenity.tag}
                        </span>
                      </div>

                      <div className="absolute bottom-3 right-3 z-10 h-10 w-10 bg-white/95 backdrop-blur-sm border border-neutral-200 flex items-center justify-center text-[#ca8a04] text-lg shadow-sm group-hover:bg-[#ca8a04] group-hover:text-neutral-950 transition-colors">
                        <IconComp />
                      </div>
                    </div>
                  )}

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-neutral-950 leading-snug group-hover:text-[#ca8a04] transition-colors">
                        {amenity.title}
                      </h3>
                      <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                        {amenity.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Floor Plans Viewer */}
      {/* <FloorPlansViewer
        title="Floor Plans & Architectural Blueprints"
        subtitle="Inspect structural blueprints and floor plan arrangements for the B+G 12-floor residential tower."
        plans={floorPlans}
        bgTheme="about-ivory"
      /> */}

      {/* Legal Credentials */}
      {/* <LegalCredentialsModule
        title="Legal & Regulatory Clearances"
        subtitle="100% clear land title deed mutation and municipality approvals."
        credentials={legalCredentials}
        bgTheme="divisions-green"
      /> */}

      {/* 3D Walkthrough Gallery */}
      {/* <WalkthroughRenderGallery
        title="3D Render Gallery"
        subtitle="Photorealistic architectural renders of Sampan Metro Square tower."
        items={renders}
        bgTheme="about-ivory"
      /> */}

      {/* 7. Enquiry Form - Private Consultation */}
      <RealEstateEnquiryForm
        title="Book a visit."
        subtitle="Connect with our property advisors to secure your share and discuss equity models."
        projectName="Sampan Metro Square"
        submitButtonText="Request Details"
        bgTheme="divisions-green"
      />

      {/* 8. Downloadable Brochure - The Prospectus */}
      <DownloadableBrochureCTA
        projectName="Sampan Metro Square"
        badge="Downloadable Documentation"
        title="The Prospectus."
        subtitle="Gain immediate access to the master architectural plan, floor layouts."
        ctaText="Download PDF Brochure"
        bgTheme="about-ivory"
      />

      {/* 9. Site Visit Booking - Experience the Site */}
      <SiteVisitBookingForm
        title="Experience the Site."
        subtitle="Book a VIP site visit to Ashulia. Schedule a guided tour with our senior property consultants. Complimentary AC transport pickup available from Dhaka City."
        projectName="Sampan Metro Square"
        submitButtonText="Schedule Site visit"
        bgTheme="divisions-green"
      />
    </main>
  );
}
