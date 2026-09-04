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
  title: "Sampan Taj | 1,350 sft Single-Unit Luxury Residences in Bashundhara",
  description:
    "Official presentation of Sampan Taj in Block F, Bashundhara R/A — 9-storied boutique residential building with 1 apartment per floor (1,350 sft), 40% open space, and premium finishes by Sampan Developments Ltd.",
};

const facts = [
  { value: "1,350 sft", label: "Single Unit Flat" },
  { value: "9-Storied", label: "G+8 Building Height" },
  { value: "1 Flat / Floor", label: "Maximum Privacy (8 Total)" },
  { value: "Bashundhara F", label: "Plot 235, Road 2" },
];

const units = [
  {
    id: "taj-1350-suite",
    name: "Sampan Taj Single Unit Residence — 1,350 sq ft",
    category: "3-Bedroom Single Unit Flat per Floor",
    sizeSqFt: "1,350 sq ft",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 4,
    priceRange: "Contact for Official Pricing",
    orientation: "25-ft Road Facing (40% Open Space)",
    highlights: [
      "Exclusive 1 Flat Per Floor Privacy (Only 8 Apartments in total building)",
      "Master Bed (14'-1\" x 9'-6\") with attached bath & private verandah (6'-5\" x 3'-6\")",
      "Child Bed (11'-3\" x 9'-6\") with attached bath & Guest Bed (12'-2\" x 9'-0\") with verandah",
      "Spacious Living Room (13'-2\" x 10'-1\") with verandah & Open Dining (11'-3\" x 9'-6\")",
      "Kitchen (7'-5\" x 5'-10\") with dedicated utility verandah & double gas burner line",
      "7 Covered Car Parking Bays on Ground Floor",
    ],
  },
];

const landShareTiers = [
  {
    title: "Bashundhara Block-F Land Share Tier",
    shareSize: "3.5 Katha Total Land Share",
    equityRatio: "1 Full Floor Apartment Share (1/8th Share)",
    deedRegistration: "Sub-Kabala Registered (REHAB Member Developer)",
    keyBenefits: [
      "Direct Sub-Kabala Land Share Registration in Bashundhara R/A",
      "Single Flat Per Floor confidentiality and high privacy",
      "Developed by Sampan Developments Ltd (REHAB Member)",
    ],
  },
];

const progressMilestones = [
  { stage: "Plot Purchase & Bashundhara Mutation", completionPercent: 100, status: "Completed" as const, targetDate: "Done", notes: "Plot 235, Block F Title Cleared" },
  { stage: "BNBC Structural & Architectural Plan", completionPercent: 100, status: "Completed" as const, targetDate: "Done", notes: "1,350 sft Layout Approved" },
  { stage: "Piling & Ground Foundation", completionPercent: 40, status: "In Progress" as const, targetDate: "Active Phase", notes: "Groundwork & Car Parking Setup" },
];

const floorPlans = [
  {
    id: "fp-taj-typical",
    name: "Sampan Taj — Typical Floor Plan (1,350 sft)",
    category: "Typical Single Unit Floor Layout",
    sizeSqFt: "1,350 sq ft",
    image: "/images/projects/sampantaj.jpg",
    description: "3 Bedrooms, 3 Baths, 4 Verandahs, Living, Dining, Kitchen + Utility Verandah, Lift Lobby (6'-0\" x 4'-11\") & Stair (17'-0\" x 8'-0\").",
    features: [
      "Master Bed: 14'-1\" x 9'-6\" + Bath & Verandah",
      "Child Bed: 11'-3\" x 9'-6\" + Bath & Bed: 12'-2\" x 9'-0\"",
      "Living (13'-2\" x 10'-1\") & Dining (11'-3\" x 9'-6\")",
      "Kitchen: 7'-5\" x 5'-10\" + Verandah (2'-2\" x 6'-1\")",
    ],
  },
];

const specifications: SpecificationCategory[] = [
  {
    categoryName: "Structural & Engineering",
    iconName: "structure",
    items: [
      "Foundation and super structure designed according to BNBC codes (Earthquake & Wind Intensity).",
      "60,000 psi deformed steel bars (BSRM / Rahim Steel) & 1st class brickwork.",
      "Lafarge Surma / Seven Rings / Shah Cement & Sylhet coarse sand.",
      "3.5 Katha land area with 40% open space & 25-ft wide road facing.",
    ],
  },
  {
    categoryName: "Building Entrance & Security",
    iconName: "utility",
    items: [
      "Secured decorative entrance gate with matching elevation lamp posts.",
      "Reception room & lobby with well-furnished reception desk & seating.",
      "Good quality standard Intercom system connecting all apartments.",
      "Loggia tiles & comfortable internal driveway with 7 covered parking bays.",
    ],
  },
  {
    categoryName: "Doors & Windows",
    iconName: "doors",
    items: [
      "Solid Chittagong Teak decorative main door with security lock, chain & viewer.",
      "Gamari / Mahogany veneer flush internal doors with French polish.",
      "5mm tinted glass sliding windows with mohair lining & aluminum sections.",
      "Secured M.S. Window grills & PVC bathroom doors.",
    ],
  },
  {
    categoryName: "Flooring & Interior Tiles",
    iconName: "floors",
    items: [
      "12\" x 12\" best quality homogeneous floor tiles in all rooms.",
      "Non-slip ceramic tiles in staircases, lift lobbies, and corridors.",
      "Comfortable handrails along staircase (17'-0\" x 8'-0\").",
      "Smooth plastic paint finish on all internal walls and ceilings.",
    ],
  },
  {
    categoryName: "Bathroom Fittings",
    iconName: "bath",
    items: [
      "Good quality sanitary wares from RAK / FU-WANG / China Brand.",
      "Chrome-plated fittings (Nazma / Sharif / Equal) with towel rails & soap holders.",
      "Hot & cold water line provision in Master Bathroom.",
      "Matching glazed ceramic wall and floor tiles in all 3 bathrooms.",
    ],
  },
  {
    categoryName: "Kitchen & Utilities",
    iconName: "kitchen",
    items: [
      "Impressively designed platform with tiles worktop & stainless steel sink.",
      "Double burner gas outlet per apartment as per govt rules.",
      "Independent electricity meters (DESCO/DPDC) & WASA water line.",
      "Dedicated utility verandah attached to kitchen.",
    ],
  },
  {
    categoryName: "Lift & Standby Generator",
    iconName: "lift",
    items: [
      "International standard 8-person passenger lift with attractive cabin.",
      "Imported standby generator supplying power for lift, water pump, common lights & 2 light + 2 fan points per flat.",
      "Two WASA electric motor pumps (one standby) with RCC overhead tank.",
      "Roof top parapet wall and clothes drying line.",
    ],
  },
];

const legalCredentials = [
  {
    authority: "Bashundhara R/A & Ministry of Land",
    approvalTitle: "Plot 235 Block-F Sub-Kabala Deed & Mutation",
    referenceNumber: "REHAB Member Developer",
    status: "100% Cleared",
    description: "Clear deed title in Block F, Bashundhara R/A by Sampan Developments Ltd (REHAB Member).",
  },
];

const renders = [
  {
    id: "r-taj-1",
    title: "Sampan Taj 9-Storied Architectural Elevation",
    category: "exterior" as const,
    categoryLabel: "Exterior Renders",
    image: "/images/projects/sampantaj.jpg",
    type: "image" as const,
    description: "Modern 9-storied elevation with terracotta accents, glass balconies, and secured entrance gate.",
  },
];

const landmarks = [
  { landmark: "Bashundhara Convention Centre", distance: "Opposite", driveTime: "1 Min Walk" },
  { landmark: "North South University & IUB", distance: "0.3 km", driveTime: "2 Mins Walk" },
  { landmark: "Evercare (Apollo) Hospital", distance: "0.8 km", driveTime: "3 Mins Drive" },
  { landmark: "Jamuna Future Park & Pragati Sarani", distance: "1.2 km", driveTime: "5 Mins Drive" },
  { landmark: "RAJUK 300-ft Purbachal Expressway", distance: "0.7 km", driveTime: "3 Mins Drive" },
];

const developerInfo = {
  companyName: "SAMPAN DEVELOPMENTS LTD.",
  tagline: "Changing the living style",
  corporateOffice: "Tanaka Tower (2nd floor), 42/1 Gha, Segun Bagicha, Dhaka-1000",
  phones: ["88-02-9564094", "88-02-9515372", "88-02-8332999"],
  website: "www.sampandevelopmentsltd.com",
  rehabMember: true,
};

export default function SampanTajPage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#25633a] selection:text-white">

      {/* 1. Hero Overview */}
      <RealEstateHero
        title="Sampan Taj"
        subtitle="1,350 sft Single Flat Per Floor Luxury Residences"
        divisionName="Sampan Development Ltd"
        statusBadge="Plot 235, Block F, Bashundhara R/A"
        statusType="ongoing"
        description="A prestigious 9-storied boutique residence offering complete 1-flat-per-floor privacy (8 apartments total), 1,350 sft 3-bedroom floor plans, 4 verandahs, 40% open space, and dedicated car parking in Bashundhara R/A."
        image="/images/projects/sampantaj.jpg"
        facts={facts}
        accentColor="#25633a"
        badgeColor="#25633a"
      />

      {/* 2. Unit Configurations */}
      <UnitTypesAndSizes
        units={units}
        bgTheme="divisions-green"
      />

      {/* 3. Building Specifications Module (From Official Brochure) */}
      <BuildingSpecificationsModule
        projectName="Sampan Taj"
        subheading="Official architectural, structural engineering, and interior specification details from project profile."
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
        totalLandArea="3.5 Katha"
        totalSharesCount="8 Exclusive Flat Shares"
        registrationStatus="Sub-Kabala Ready"
        tiers={landShareTiers}
        bgTheme="about-ivory"
      />

      {/* 6. Location + Map */}
      <RealEstateLocationMap
        projectName="Sampan Taj"
        address="Plot 235, Road 2, Block F, Bashundhara R/A, Baridhara, Dhaka."
        gpsCoordinates="23.8124° N, 90.4326° E"
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14601.6!2d90.4326!3d23.8124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c64c103a5613%3A0x4b8e2b834460f1b2!2sBashundhara%20Residential%20Area%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
        landmarks={landmarks}
        bgTheme="divisions-green"
      />

      {/* 7. Construction Progress */}
      <ConstructionProgressTracker
        overallCompletionPercentage={50}
        expectedHandoverDate="Active Construction Phase"
        currentPhase="Piling & Structural Frame Construction"
        milestones={progressMilestones}
        bgTheme="about-ivory"
      />

      {/* 8. Legal Credentials */}
      <LegalCredentialsModule
        credentials={legalCredentials}
        bgTheme="divisions-green"
      />

      {/* 9. 3D Renders */}
      <WalkthroughRenderGallery
        items={renders}
        bgTheme="about-ivory"
      />

      {/* 10. Payment Calculator */}
      <PaymentPlanCalculator
        defaultPropertyPriceBDT={13500000}
        bgTheme="divisions-green"
      />

      {/* 11. Brochure CTA */}
      <DownloadableBrochureCTA
        projectName="Sampan Taj"
        bgTheme="about-ivory"
      />

      {/* 12. Site Visit Form */}
      <SiteVisitBookingForm
        projectName="Sampan Taj"
        bgTheme="divisions-green"
      />

    </main>
  );
}
