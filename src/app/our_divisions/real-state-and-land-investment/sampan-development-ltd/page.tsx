import type { Metadata } from "next";
import UnitTypesAndSizes from "../components/UnitTypesAndSizes";
import LandShareStructure from "../components/LandShareStructure";
import ConstructionProgressTracker from "../components/ConstructionProgressTracker";
import FloorPlansViewer from "../components/FloorPlansViewer";
import LegalCredentialsModule from "../components/LegalCredentialsModule";
import WalkthroughRenderGallery from "../components/WalkthroughRenderGallery";
import PaymentPlanCalculator from "../components/PaymentPlanCalculator";
import SiteVisitBookingForm from "../components/SiteVisitBookingForm";
import DownloadableBrochureCTA from "../components/DownloadableBrochureCTA";
import RealEstateLocationMap from "../components/RealEstateLocationMap";
import RealEstateHero2 from "../components/RealEstateHero2";

export const metadata: Metadata = {
  title: "Sampan Development Ltd | Master Architectural & Land Development",
  description:
    "Flagship real estate and urban development company of Sampan Group. Developing commercial hubs, land-share residential towers, and sustainable infrastructure across Bangladesh.",
};

const facts = [
  { value: "Flagship", label: "Group Division" },
  { value: "10+ Projects", label: "Ongoing & Planned" },
  { value: "100% Cleared", label: "Land Deed Titles" },
  { value: "Dhaka & Beyond", label: "Prime Corridors" },
];

// Successful Projects
const successfulProjects = [
  {
    id: "sdl-sampan-highway-inn",
    name: "Sampan Highway Inn",
    category: "Highway Hospitality",
    sizeSqFt: "450–1,200 sq ft",
    bedrooms: 1,
    bathrooms: 1,
    balconies: 1,
    priceRange: "BDT 45 Lacs+",
    orientation: "Dhaka-Khulna Highway",
    highlights: [
      "Prime Highway Transit Landmark",
      "Luxury Guest Suites & Multi-Cuisine Restaurant",
      "Ample Highway Parking & 24/7 Security",
    ],
    image: "/images/projects/sampan-highway-inn.png",
    link: "/our_divisions/hospitality-highway-travel/sampan-highway-inn",
  },
  {
    id: "sdl-flagship-9",
    name: "Sampan 21st Century ",
    category: "Residential Building",
    sizeSqFt: "800–2,500 sq ft",
    bedrooms: 0,
    bathrooms: 2,
    balconies: 1,
    priceRange: "BDT 1.1 Crore",
    orientation: "Bashundhara R/A (Besides NSU)",
    highlights: [
      "Modern Corporate Suites & Financial Counters",
      "Central HVAC & Energy Efficient Facade",
      "24/7 Monitored Access Control",
    ],
    image: "/images/projects/21.jpg",
    link: "/our_divisions/real-state-and-land-investment/sampan-21st-century",
  },
  {
    id: "sdl-flagship-5",
    name: "Sampan Taj ",
    category: "Residential Building",
    sizeSqFt: "1,800+ sq ft",
    bedrooms: 3,
    bathrooms: 4,
    balconies: 3,
    priceRange: "BDT 1.45 Crore",
    orientation: "Bashundhara R/A (Besides AIUB)",
    highlights: [
      "Exclusive Prime Residential Neighborhood",
      "Smart Home Automation Systems",
      "Rooftop Garden & Lounge",
    ],
    image: "/images/projects/sampantaj.jpg",
    link: "/our_divisions/real-state-and-land-investment/sampan-taj",
  },
  {
    id: "sdl-flagship-4",
    name: "Sampan Niketon",
    category: "Residential Building",
    sizeSqFt: "1,250 sq ft",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    priceRange: "BDT 95 Lacs",
    orientation: " Gulshan ",
    highlights: [
      "8-Storied Landmark on Gulshan Link Road",
      "RAJUK Approved Structural Design",
      "40% Open Space & Ample Ventilation",
    ],
    image: "/images/projects/sampanniketon.jpg",
    link: "/our_divisions/real-state-and-land-investment/sampan-niketon",
  },
  {
    id: "sdl-sampan-white-house",
    name: "Sampan White House",
    category: "Highway Hospitality",
    sizeSqFt: "400–1,100 sq ft",
    bedrooms: 1,
    bathrooms: 1,
    balconies: 1,
    priceRange: "BDT 38 Lacs+",
    orientation: "Dhaka-Khulna Highway",
    highlights: [
      "Comfortable Motel Suites & Green Courtyard",
      "Family-Friendly Rest Stop & Dining Experience",
      "Dedicated Highway Tourist Hospitality",
    ],
    image: "/images/projects/Sampan-White-House-&-Motel.png",
    link: "/our_divisions/hospitality-highway-travel/sampan-white-house",
  },
];

// Upcoming and Ongoing Projects
const upcomingProjects = [
  {
    id: "sdl-express-highway-inn",
    name: "Express Highway Inn",
    category: "Highway Transit and Luxury Lounge",
    sizeSqFt: "500–1,400 sq ft",
    bedrooms: 1,
    bathrooms: 1,
    balconies: 1,
    priceRange: "BDT 50 Lacs+",
    orientation: "Dhaka–Chattogram Highway, Near Kanchpur Bridge",
    highlights: [
      "Modern Highway Transit Accommodation",
      "VIP Club Lounge & Corporate Meeting Facilities",
      "Direct Expressway Access & Valet Services",
    ],
    image: "/images/projects/express-highway-inn.jpg",
    link: "/our_divisions/hospitality-highway-travel/express-highway-inn",
  },
  {
    id: "sdl-flagship-1",
    name: "Sampan Metro Square",
    category: "Residential Land Share",
    sizeSqFt: "1,350+ sq ft",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    priceRange: "BDT 58 Lacs",
    orientation: "Ashulia Model Town (Amin Mohammad Group)",
    highlights: [
      "B+G 12-floor building, engineered for modern contemporary living",
      "Exclusive rooftop drone landing station.",
      "State-of-the-art gym and private swimming pool",
      // "Sub-Kabala Land Deed Registration",
      "20 Mins to Uttara Metro Station",
      "Spacious community hall and a dedicated prayer room.",
    ],
    image: "/images/our_divisions/sampan-metro-square/metro-square.png",
    link: "/our_divisions/real-state-and-land-investment/sampan-metro-square",
  },
  {
    id: "sdl-flagship-2",
    name: "Sampan Trade Emporium ",
    category: "Commercial Zone",
    sizeSqFt: "650–3,000 sq ft",
    bedrooms: 0,
    bathrooms: 2,
    balconies: 1,
    priceRange: "BDT 1.2 Crore+",
    orientation: "Commercial Hub (near Express Highway Inn)",
    highlights: [
      "The epicentre of Modern Commerce",
      "High Lease Rental Opportunities",
      "Ample Underground Valet Parking",
    ],
    link: "/our_divisions/real-state-and-land-investment/sampan-trade-emporium",
  },





  {
    id: "sdl-flagship-6",
    name: "Sampan Nexus ",
    category: "Residential Land Share",
    sizeSqFt: "950–2,200 sq ft",
    bedrooms: 2,
    bathrooms: 2,
    balconies: 2,
    priceRange: "BDT 42 Lacs+",
    orientation: "Mawna ",
    highlights: [
      "Commercial Retail + Residential Apartments",
      "Rapidly Growing Industrial Growth Belt",
      // "Sub-Kabala Ready Land Registration",
    ],
    link: "/our_divisions/real-state-and-land-investment/sampan-nexus",
  },
  {
    id: "sdl-flagship-7",
    name: "Sampan  Condominium ",
    category: "Residential Building",
    sizeSqFt: "1,550 sq ft",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 3,
    priceRange: "BDT 85 Lacs",
    orientation: "Residential Building (Express Highway Inn)",
    highlights: [
      "High-Elevation City Panoramas",
      "Dedicated Sub-Station & 100% Power Backup",
      "Multi-Tier Biometric Security",
    ],
    link: "/our_divisions/real-state-and-land-investment/sampan-skyline",
  },
  {
    id: "sdl-flagship-8",
    name: "Sampan Cafe Metro ",
    category: "Commercial Plaza",
    sizeSqFt: "400–1,800 sq ft",
    bedrooms: 0,
    bathrooms: 2,
    balconies: 0,
    priceRange: "BDT 65 Lacs+",
    orientation: "Aftabnagar",
    highlights: [
      "Prime Footfall Metro Transit Location",
      "Boutique Cafe & Retail Showroom Bays",
      "High Rental Yield Investment",
    ],
    link: "/our_divisions/real-state-and-land-investment/sampan-cafe-metro",
  },
];

const units = [...successfulProjects, ...upcomingProjects];

const landShareTiers = [
  {
    title: "Master Division Land Share Portfolio",
    shareSize: "1.0 - 1.5 Katha Undivided",
    equityRatio: "1 Unit Ownership Share",
    // deedRegistration: "Direct Sub-Kabala Deed",
    keyBenefits: [
      // "Direct Government Registered Sub-Kabala Deed",
      "Zero Intermediary Profit Margins",
      "Transparent Construction Cost Schedule",
    ],
  },
];

const progressMilestones = [
  {
    stage: "Land Acquisition & Title Deed Verification",
    completionPercent: 100,
    status: "Completed" as const,
    targetDate: "Done (2024)",
    notes: "100% Mutation & Clear Deed Titles Secured" /* Sub-Kabala */,
  },
  {
    stage: "Architectural Engineering & RAJUK Approvals",
    completionPercent: 90,
    status: "In Progress" as const,
    targetDate: "Q3 2026",
    notes: "Soil test reports & structural engineering clearance complete",
  },
  {
    stage: "Piling, Construction & Handover",
    completionPercent: 45,
    status: "In Progress" as const,
    targetDate: "Q4 2028",
    notes: "Ongoing structural frame casting across project sites",
  },
];

const floorPlans = [
  {
    id: "fp-sdl-master",
    name: "Sampan Development Portfolio Master Plan",
    category: "Division Master Plan",
    sizeSqFt: "Multi-Acre Development Grid",
    image: "/images/concerns/sampan-dev-ltd.png",
    description:
      "Master architectural planning incorporating green zones, commercial facades, and residential towers.",
    features: [
      "Sustainable Green Corridors",
      "100% Sound Earthquake Resistant Grid",
      "Gated Security Control",
    ],
  },
];

const legalCredentials = [
  {
    authority: "Ministry of Land / AC Land",
    approvalTitle: "Clear Land Deed Titles", // Sub-Kabala
    referenceNumber: "CS, SA, RS & City Jorip Cleared",
    status: "100% Verified",
    description:
      "All division land parcels mutated with zero legal encumbrances.",
  },
  {
    authority: "RAJUK / Local Municipalities",
    approvalTitle: "Urban Development & Setback Clearances",
    referenceNumber: "RAJUK / Municipality Approved Plans",
    status: "Approved",
    description:
      "Approved structural height and setback clearances under urban development guidelines.",
  },
];

const renders = [
  {
    id: "r-sdl-1",
    title: "Sampan Development Architectural Vision",
    category: "exterior" as const,
    categoryLabel: "Exterior Architecture",
    image: "/images/concerns/sampan-dev-ltd.png",
    type: "image" as const,
    description:
      "Flagship urban architecture and land-share developments across prime transit corridors.",
  },
];

const landmarks = [
  {
    landmark: "Ashulia Metro Corridor",
    distance: "6 km",
    driveTime: "15 Mins",
  },
  { landmark: "Expressway Transit Hub", distance: "4 km", driveTime: "8 Mins" },
  {
    landmark: "Hazrat Shahjalal Int'l Airport",
    distance: "12 km",
    driveTime: "25 Mins",
  },
];

export default function SampanDevelopmentLtdPage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#ca8a04] selection:text-neutral-950">
      {/* 1. Hero Overview - Dark for Transparent Navbar Contrast */}
      <RealEstateHero2
        title="Sampan Development Ltd"
        subtitle="Architecting Legacy."
        divisionName="Real Estate & Land Investment Division"
        statusBadge="Division Flagship"
        statusType="flagship"
        description="Visionary commercial and residential developments. Engineered for modern living, strategic growth, and enduring value."
        image="/images/projects/sampan-development.jpeg"
        facts={facts}
        accentColor="#0284c7"
        badgeColor="#0284c7"
      />

      {/* 2. Successful Projects */}
      <UnitTypesAndSizes
        id="successful-projects"
        badge="Delivered Portfolio"
        title="Successful Projects"
        subtitle="Completed landmark developments across our residential, commercial zone, and investment portfolio."
        units={successfulProjects}
        bgTheme="divisions-green"
      />

      {/* 3. Upcoming & Ongoing Projects */}
      <UnitTypesAndSizes
        id="upcoming-projects"
        badge=""
        title="Upcoming & Ongoing Projects"
        subtitle="Explore upcoming developments, transit hubs, and residential land-share projects currently under development,planning and execution."
        units={upcomingProjects}
        bgTheme="about-ivory"
      />

      {/* 3. Land Share Model - AboutPreview Warm Ivory bg-[#F5F5F2] */}
      {/* <LandShareStructure
        title="Flagship Land Share Ownership Model"
        subtitle="Direct land deed registration with zero middleman markups across all project sites."
        totalLandArea="50+ Katha Portfolio"
        totalSharesCount="200+ Land Shares"
        // registrationStatus="Sub-Kabala Deed Cleared"
        tiers={landShareTiers}
        bgTheme="about-ivory"
      /> */}

      {/* 4. Location + Map - DivisionsSection Soft Green bg-[#f3f6f2] */}
      {/* <RealEstateLocationMap
        title="Strategic Corridor Locations"
        subtitle="Positioned along high-growth transit corridors in Ashulia, Dhaka, and Expressway Hubs."
        projectName="Sampan Development Ltd"
        address="Flagship Division Headquarters & Project Sites, Dhaka, Bangladesh."
        gpsCoordinates="23.8103° N, 90.4125° E"
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14600.0!2d90.4125!3d23.8103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ4JzM3LjEiTiA5MMKwMjQnNDUuMCJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
        landmarks={landmarks}
        bgTheme="divisions-green"
      /> */}

      {/* 5. Construction Progress - AboutPreview Warm Ivory bg-[#F5F5F2] */}
      {/* <ConstructionProgressTracker
        title="Division Project Development Status"
        subtitle="Track live site developments, architectural milestones, and expected handover timelines."
        overallCompletionPercentage={65}
        expectedHandoverDate="2026 - 2028 Phases"
        currentPhase="Multi-Site Piling & Superstructure Framing"
        milestones={progressMilestones}
        bgTheme="about-ivory"
      /> */}

      {/* 6. Floor Plans - DivisionsSection Soft Green bg-[#f3f6f2] */}
      {/* <FloorPlansViewer
        title="Master Blueprints & Plot Layouts"
        subtitle="Examine precision engineered architectural floor plan layouts and master site plans."
        plans={floorPlans}
        bgTheme="divisions-green"
      /> */}

      {/* 7. Legal Credentials - AboutPreview Warm Ivory bg-[#F5F5F2] */}
      {/* <LegalCredentialsModule
        title="Regulatory Approvals & Legal Clearances"
        subtitle="100% verified clear land title deeds and government municipal sanctions."
        credentials={legalCredentials}
        bgTheme="about-ivory"
      /> */}

      {/* 8. 3D Renders - DivisionsSection Soft Green bg-[#f3f6f2] */}
      {/* <WalkthroughRenderGallery
        title="3D Renders & Architectural Showcase"
        subtitle="Explore photorealistic 3D architectural renders of flagship division developments."
        items={renders}
        bgTheme="divisions-green"
      /> */}

      {/* 9. Payment Calculator - AboutPreview Warm Ivory bg-[#F5F5F2] */}
      {/* <PaymentPlanCalculator
        title="Investment Payment Plan Estimator"
        subtitle="Estimate down payments, flexible monthly installment schedules, and handover balances."
        defaultPropertyPriceBDT={5800000}
        bgTheme="about-ivory"
      /> */}

      {/* 10. Brochure Download - DivisionsSection Soft Green bg-[#f3f6f2] */}
      <DownloadableBrochureCTA
        projectName="Sampan Development Ltd"
        bgTheme="divisions-green"
      />

      {/* 11. Site Visit Form - AboutPreview Warm Ivory bg-[#F5F5F2] */}
      <SiteVisitBookingForm
        title="Book VIP Site Visit & Property Consultation"
        subtitle="Schedule a guided site tour with our property team. Complimentary vehicle transport available upon request."
        projectName="Sampan Development Ltd"
        bgTheme="about-ivory"
      />
    </main>
  );
}
