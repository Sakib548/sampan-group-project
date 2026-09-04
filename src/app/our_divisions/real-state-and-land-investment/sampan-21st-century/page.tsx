import type { Metadata } from "next";
import RealEstateHero from "../components/RealEstateHero";
import UnitTypesAndSizes from "../components/UnitTypesAndSizes";
import LandShareStructure from "../components/LandShareStructure";
import ConstructionProgressTracker from "../components/ConstructionProgressTracker";
import FloorPlansViewer from "../components/FloorPlansViewer";
import BuildingSpecificationsModule, { SpecificationCategory } from "../components/BuildingSpecificationsModule";
import LegalCredentialsModule from "../components/LegalCredentialsModule";
import WalkthroughRenderGallery from "../components/WalkthroughRenderGallery";
import PaymentPlanCalculator from "../components/PaymentPlanCalculator";
import SiteVisitBookingForm from "../components/SiteVisitBookingForm";
import DownloadableBrochureCTA from "../components/DownloadableBrochureCTA";
import RealEstateLocationMap from "../components/RealEstateLocationMap";

export const metadata: Metadata = {
  title: "Sampan Twenty First Century | Luxury 2,000 sq ft Residences",
  description:
    "Official presentation of Sampan Twenty First Century — 2,000 sq ft luxury apartments, south-facing with 40% open space, 25ft wide road, and earthquake-resistant BNBC engineering by Sampan Developments Ltd.",
};

const facts = [
  { value: "2,000 sq ft", label: "Typical Floor Area" },
  { value: "South Facing", label: "40% Open Space" },
  { value: "25'-0\" Road", label: "Front Road Facing" },
  { value: "BNBC Standard", label: "Earthquake Resistant" },
];

const units = [
  {
    id: "21st-typical-suite",
    name: "Typical 2,000 sq ft Luxury Apartment",
    category: "4-Bedroom Full Floor Residence",
    sizeSqFt: "2,000 sq ft",
    bedrooms: 4,
    bathrooms: 4,
    balconies: 4,
    priceRange: "Contact for Official Pricing",
    orientation: "South Facing (40% Open Space & Front Setback)",
    highlights: [
      "Master Bed (15'-6\" x 11'-0\") with attached bath & private verandah",
      "Spacious Living (10'-8\" x 13'-0\"), Dining (11'-8\" x 14'-0\") & Family Living (9'-0\" x 11'-2\")",
      "Child Bed (13'-0\" x 12'-0\") & Bed (11'-2\" x 11'-4\") with verandahs",
      "Kitchen (10'-4\" x 6'-3\") with dedicated utility verandah & double gas burner line",
      "25'-0\" Wide Front Road Facing with landscaped entry approach",
    ],
  },
];

const landShareTiers = [
  {
    title: "21st Century Land Share Tier",
    shareSize: "Undivided Proportional Land Share",
    equityRatio: "1 Full Apartment Share",
    deedRegistration: "Sub-Kabala Registered (REHAB Member Developer)",
    keyBenefits: [
      "Direct Sub-Kabala Land Share Registration",
      "40% Open Space with landscaped front setback",
      "Built by Sampan Developments Ltd (REHAB Member)",
    ],
  },
];

const progressMilestones = [
  { stage: "Land Title Mutation & Sub-Kabala", completionPercent: 100, status: "Completed" as const, targetDate: "Done", notes: "Clear Title Deed" },
  { stage: "Architectural & Floor Plan Approval", completionPercent: 100, status: "Completed" as const, targetDate: "Done", notes: "2,000 sq ft Typical Layout" },
  { stage: "Foundation & Construction Work", completionPercent: 25, status: "In Progress" as const, targetDate: "Active Phase", notes: "Piling & Structure Setup" },
];

const floorPlans = [
  {
    id: "fp-21st-typical",
    name: "Sampan Twentyfirst Century — Typical Floor Plan",
    category: "Typical Apartment Layout",
    sizeSqFt: "2,000 sq ft",
    image: "/images/projects/21.jpg",
    description: "4-Bedroom layout with Master Bed, Child Bed, 2 Guest Beds, Living, Dining, Family Living, 4 Baths, 4 Verandahs & Kitchen.",
    features: [
      "Master Bed: 15'-6\" x 11'-0\" + Verandah & Bath",
      "Living (10'-8\" x 13'-0\") & Dining (11'-8\" x 14'-0\")",
      "Family Living: 9'-0\" x 11'-2\"",
      "Stair (8'-0\" x 15'-0\") & Lift (6'-0\" x 5'-8\") Lobby",
    ],
  },
  {
    id: "fp-21st-ground",
    name: "Sampan Twentyfirst Century — Ground Floor Plan",
    category: "Parking & Utility Layout",
    sizeSqFt: "2,000 sq ft Ground Footprint",
    image: "/images/projects/21.jpg",
    description: "Spacious car parking floor layout, Security Guard Room (7'-0\" x 8'-5\"), Substation & Generator Room (14'-0\" x 10'-10\"), Lift and Staircase.",
    features: [
      "25'-0\" Wide Front Road Entry",
      "Substation & Generator Room: 14'-0\" x 10'-10\"",
      "Security / Reception Room with Bath: 7'-0\" x 8'-5\"",
      "Multiple Covered Car Parking Bays",
    ],
  },
];

const specifications: SpecificationCategory[] = [
  {
    categoryName: "Structural & Engineering",
    iconName: "structure",
    items: [
      "Structural design engineered to withstand earthquakes according to BNBC standards.",
      "5\" thick 1st class brick internal and external walls with smooth finish.",
      "40% open space with South facing orientation & grand front setback.",
      "25'-0\" wide road facing entry approach.",
    ],
  },
  {
    categoryName: "Doors & Windows",
    iconName: "doors",
    items: [
      "Solid Teak Wood main door for superior elegance and security.",
      "Seasoned Mahogany or equivalent wood door frames.",
      "Partex / Gamari flush inner doors; durable PVC bathroom doors.",
      "4\" Bronze / Aluminum sliding windows with 5mm tinted glass & secured M.S. Grill.",
    ],
  },
  {
    categoryName: "Flooring & Tiles",
    iconName: "floors",
    items: [
      "12\" x 12\" best quality homogeneous floor tiles (RAK / FU-WANG / matching) in all rooms.",
      "Non-slip ceramic floor tiles in all corridors, lobbies, and staircases.",
      "Spacious lift lobby on each floor with homogeneous tiles.",
      "Staircase equipped with suitable protective handrails.",
    ],
  },
  {
    categoryName: "Bathroom Fittings",
    iconName: "bath",
    items: [
      "Best quality sanitary wares from RAK / FU-WANG / China Brand.",
      "Glazed non-slip ceramic floor tiles from RAK / China Brand.",
      "Hot & cold water provision in Master Bathroom.",
      "Best quality towel rails, toilet paper holders, soap cases, and accessories.",
    ],
  },
  {
    categoryName: "Kitchen & Utilities",
    iconName: "kitchen",
    items: [
      "Matching ceramic wall tiling up to full height and burner area.",
      "Double burner gas outlet and stainless steel kitchen sink.",
      "Dedicated utility verandah attached to kitchen.",
      "Individual apartment-wise electric meters and double burner gas line.",
    ],
  },
  {
    categoryName: "Lift & Power Standby",
    iconName: "lift",
    items: [
      "European standard lift (Macpuarsa / equivalent) with stops on all floors.",
      "Standby generator covering lift, water pumps, common lighting, and fan/light points per apartment.",
      "Substation & Generator room (14'-0\" x 10'-10\") on Ground Floor.",
      "Dedicated Security / Reception Room (7'-0\" x 8'-5\") with attached toilet.",
    ],
  },
];

const legalCredentials = [
  {
    authority: "REHAB & Ministry of Land",
    approvalTitle: "Clear Sub-Kabala Land Title & Mutation",
    referenceNumber: "REHAB Member Developer",
    status: "100% Cleared",
    description: "Developed by Sampan Developments Ltd, official REHAB Member with clear title deed and registered land share.",
  },
];

const renders = [
  {
    id: "r-21st-1",
    title: "Sampan Twentyfirst Century Front Elevation",
    category: "exterior" as const,
    categoryLabel: "Exterior Renders",
    image: "/images/projects/21.jpg",
    type: "image" as const,
    description: "South-facing modern facade with 40% open space and brick-and-glass exterior architectural detailing.",
  },
];

const landmarks = [
  { landmark: "25'-0\" Wide Front Road", distance: "0 km", driveTime: "Direct Access" },
  { landmark: "Corporate Center & Markets", distance: "1.5 km", driveTime: "4 Mins" },
];

const developerInfo = {
  companyName: "SAMPAN DEVELOPMENTS LTD.",
  tagline: "Changing the living style",
  corporateOffice: "Tanaka Tower (2nd floor), 42/1 Gha, Segun Bagicha, Dhaka-1000",
  phones: ["88-02-9564094", "88-02-9515372", "88-02-8332999"],
  website: "www.sampandevelopmentsltd.com",
  rehabMember: true,
};

export default function Sampan21stCenturyPage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#25633a] selection:text-white">

      {/* 1. Hero Overview */}
      <RealEstateHero
        title="Sampan Twenty First Century"
        subtitle="2,000 sq ft Luxury South-Facing Residences"
        divisionName="Sampan Development Ltd"
        statusBadge="REHAB Registered Project"
        statusType="ongoing"
        description="A premier South-facing residential address engineered with 40% open space, 2,000 sq ft typical floor plans, 25ft wide road frontage, and BNBC earthquake-resistant structural standards."
        image="/images/projects/21.jpg"
        facts={facts}
        accentColor="#25633a"
        badgeColor="#00a651"
      />

      {/* 2. Unit Configurations */}
      <UnitTypesAndSizes
        units={units}
        bgTheme="divisions-green"
      />

      {/* 3. Building Specifications Module (New from Brochure) */}
      <BuildingSpecificationsModule
        projectName="Sampan Twentyfirst Century"
        subheading="Comprehensive architectural, structural, and interior material specifications from official project brochure."
        categories={specifications}
        developerInfo={developerInfo}
        bgTheme="about-ivory"
      />

      {/* 4. Floor Plans */}
      <FloorPlansViewer
        plans={floorPlans}
        bgTheme="divisions-green"
      />

      {/* 5. Land Share Model */}
      <LandShareStructure
        totalLandArea="20 Katha"
        totalSharesCount="Land Share Registered"
        registrationStatus="Sub-Kabala Ready"
        tiers={landShareTiers}
        bgTheme="about-ivory"
      />

      {/* 6. Location + Map */}
      <RealEstateLocationMap
        projectName="Sampan Twenty First Century"
        address="25-ft Wide Road, Dhaka, Bangladesh."
        gpsCoordinates="23.8212° N, 90.3554° E"
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14599.6!2d90.3554!3d23.8212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ5JzE2LjMiTiA5MMKwMjEnMTkuNCJF!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
        landmarks={landmarks}
        bgTheme="divisions-green"
      />

      {/* 7. Construction Progress */}
      <ConstructionProgressTracker
        overallCompletionPercentage={45}
        expectedHandoverDate="Active Development"
        currentPhase="Structure & Floor Layout Construction"
        milestones={progressMilestones}
        bgTheme="about-ivory"
      />

      {/* 8. Legal Credentials */}
      <LegalCredentialsModule
        credentials={legalCredentials}
        bgTheme="divisions-green"
      />

      {/* 9. 3D Renders & Elevation */}
      <WalkthroughRenderGallery
        items={renders}
        bgTheme="about-ivory"
      />

      {/* 10. Payment Calculator */}
      <PaymentPlanCalculator
        defaultPropertyPriceBDT={12000000}
        bgTheme="divisions-green"
      />

      {/* 11. Brochure Download */}
      <DownloadableBrochureCTA
        projectName="Sampan Twenty First Century"
        bgTheme="about-ivory"
      />

      {/* 12. Site Visit Form */}
      <SiteVisitBookingForm
        projectName="Sampan Twenty First Century"
        bgTheme="divisions-green"
      />

    </main>
  );
}
