import type { Metadata } from "next";
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
import RealEstateHero2 from "../components/RealEstateHero2";

export const metadata: Metadata = {
  title: "Sampan Niketon | 1,250 sft Residential Apartments in Shanti Niketon",
  description:
    "Official presentation of Sampan Niketon — 8-storied residential building on Gulshan Link Road (Plot 168/10, Shanti Niketon) with 1,250 sft South & North-facing units, RAJUK approval, and 40% open space.",
};

const facts = [
  { value: "1,250 sft", label: "Type-A & B Flats" },
  { value: "8-Storied", label: "G+7 Building Height" },
  { value: "5 Katha", label: "Total Land Area" },
  { value: "30-ft & 25-ft", label: "Dual Road Facing" },
];

const units = [
  {
    id: "nik-type-a",
    name: "Type-A Residence — 1,250 sq ft (South Facing)",
    category: "3-Bedroom South Facing Suite",
    sizeSqFt: "1,250 sq ft",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 3,
    priceRange: "Contact for Pricing & Resale",
    orientation: "South Facing (30-ft Front Road)",
    highlights: [
      "Master Bed (11'-10\" x 10'-4\") with attached bath & private verandah",
      "Child Bed (11'-0\" x 9'-6\") & Guest Bed (11'-3\" x 9'-6\")",
      "Living Room (13'-2\" x 10'-4\") with verandah & Dining Area (11'-6\" x 10'-2\")",
      "Kitchen (7'-5\" x 5'-10\") with dedicated utility verandah",
      "30-ft South Road & 25-ft North Road dual access",
    ],
  },
  {
    id: "nik-type-b",
    name: "Type-B Residence — 1,250 sq ft (North Facing)",
    category: "3-Bedroom North Facing Suite",
    sizeSqFt: "1,250 sq ft",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 3,
    priceRange: "Contact for Pricing & Resale",
    orientation: "North Facing (25-ft Front Road)",
    highlights: [
      "Master Bed (11'-10\" x 11'-2\") with attached bath & private verandah",
      "Bed (11'-10\" x 10'-2\") & Bed (10'-10\" x 11'-2\")",
      "Spacious Living (11'-6\" x 13'-2\") with verandah & Dining (11'-6\" x 10'-2\")",
      "Kitchen (7'-5\" x 5'-10\") with dedicated utility verandah",
      "40% open space design for optimal natural light and airflow",
    ],
  },
];

const landShareTiers = [
  {
    title: "Shanti Niketon Land Share Tier",
    shareSize: "5 Katha Undivided Proportional Share",
    equityRatio: "1 Residential Unit Share",
    deedRegistration: "Sub-Kabala Registered with RAJUK Approval",
    keyBenefits: [
      "Direct Sub-Kabala Land Registration",
      "RAJUK Approved Plan (No. RAJUK/NAA/3C-491/11/697 STHA)",
      "High Value Asset in Tejgaon-Gulshan Link Road corridor",
    ],
  },
];

const progressMilestones = [
  { stage: "RAJUK Building Plan Approval", completionPercent: 100, status: "Completed" as const, targetDate: "Done (2011)", notes: "Approval No. RAJUK/NAA/3C-491/11/697" },
  { stage: "Structural & Superstructure Completion", completionPercent: 100, status: "Completed" as const, targetDate: "Done", notes: "8-Storied Structure Complete" },
  { stage: "Successful Project Handover", completionPercent: 100, status: "Completed" as const, targetDate: "Handed Over", notes: "Completed & Handed Over Landmark" },
];

const floorPlans = [
  {
    id: "fp-nik-type-a",
    name: "Sampan Niketon — Type-A Floor Plan (South Facing)",
    category: "1,250 sq ft Typical Layout",
    sizeSqFt: "1,250 sq ft",
    image: "/images/projects/sampanniketon.jpg",
    description: "3 Bedrooms, 3 Baths, 3 Verandahs, Living (13'-2\" x 10'-4\"), Dining (11'-6\" x 10'-2\"), Kitchen & Utility Verandah.",
    features: [
      "Master Bed: 11'-10\" x 10'-4\" + Bath & Verandah",
      "Child Bed (11'-0\" x 9'-6\") & Guest Bed (11'-3\" x 9'-6\")",
      "Living Room: 13'-2\" x 10'-4\" + Verandah",
      "Staircase & Lift Lobby (7'-0\" x 16'-4\")",
    ],
  },
  {
    id: "fp-nik-type-b",
    name: "Sampan Niketon — Type-B Floor Plan (North Facing)",
    category: "1,250 sq ft Typical Layout",
    sizeSqFt: "1,250 sq ft",
    image: "/images/projects/sampanniketon.jpg",
    description: "3 Bedrooms, 3 Baths, 3 Verandahs, Living (11'-6\" x 13'-2\"), Dining (11'-6\" x 10'-2\"), Kitchen & Utility Verandah.",
    features: [
      "Master Bed: 11'-10\" x 11'-2\" + Bath & Verandah",
      "Bed (11'-10\" x 10'-2\") & Bed (10'-10\" x 11'-2\")",
      "Spacious Living: 11'-6\" x 13'-2\" + Verandah",
      "Kitchen: 7'-5\" x 5'-10\" + Utility Verandah",
    ],
  },
];

const specifications: SpecificationCategory[] = [
  {
    categoryName: "Structural & Engineering",
    iconName: "structure",
    items: [
      "Structural design based on ACI, ASTM, and BNBC standards for earthquake safety.",
      "5\" thick brick wall separation between all apartments.",
      "High standard steel, bricks, stone chips, Sylhet sand, and UPVC sewerage pipes.",
      "5 Katha land with 40% open space, 30-ft South road & 25-ft North road.",
    ],
  },
  {
    categoryName: "Building Amenities & Security",
    iconName: "utility",
    items: [
      "Secured main gate, reception area, security guard room, and intercom service.",
      "Ground floor covered car parking spaces.",
      "International standard passenger lift with spacious lift lobby on each floor.",
      "MS protective stair railings and smooth plaster wall finish.",
    ],
  },
  {
    categoryName: "Electrical & Fittings",
    iconName: "utility",
    items: [
      "Foreign electrical switches & plug sockets (Clipsal / MK / Lalon / equivalent).",
      "BRB / Eastern / Paradise concealed copper cables in PVC conduits.",
      "AC provision in Master Bedroom & TV/Dish line sockets in Master Bed and Living.",
      "Separate power line & three-phase/single phase electric meter for each flat.",
    ],
  },
  {
    categoryName: "Flooring & Finishing",
    iconName: "floors",
    items: [
      "Attractive RAK Homogeneous floor tiles in all lift lobbies and staircases.",
      "Quality homogeneous floor tiles in all living, dining, and bed rooms.",
      "Smooth plastic paint finish in soft colors on all internal walls and ceilings.",
      "Lime terracing and engineering treatment on rooftop with clothes drying line.",
    ],
  },
  {
    categoryName: "Standby Generator & Utilities",
    iconName: "lift",
    items: [
      "Standby generator covering lift, water pumps, staircase, lobby, intercom, car park, security room & main gate.",
      "Generator backs up 1 light + 1 fan point in Master Bed and 1 light + 1 fan point in Living Room.",
      "Deep tube well water supply system with WASA connection.",
      "Individual double burner gas line outlet per apartment.",
    ],
  },
];

const legalCredentials = [
  {
    authority: "RAJUK (Rajdhani Unnayan Kartripakkha)",
    approvalTitle: "Building Plan Approval",
    referenceNumber: "RAJUK/NAA/3C-491/11/697 STHA",
    status: "100% Approved",
    description: "Official RAJUK building plan approval dated 06-07-2011 for 8-storied residential construction.",
  },
];

const renders = [
  {
    id: "r-nik-1",
    title: "Sampan Niketon Building Elevation",
    category: "exterior" as const,
    categoryLabel: "Exterior Renders",
    image: "/images/projects/sampanniketon.jpg",
    type: "image" as const,
    description: "8-storied modern residential elevation situated on Shanti Niketon, Gulshan Link Road.",
  },
];

const landmarks = [
  { landmark: "Gulshan Shooting Club & Aarong", distance: "0.8 km", driveTime: "2 Mins" },
  { landmark: "Niketon Gate & BRAC Bank", distance: "0.4 km", driveTime: "1 Min" },
  { landmark: "Mohakhali Bus Stand", distance: "1.2 km", driveTime: "3 Mins" },
  { landmark: "Tejgaon-Gulshan Link Road", distance: "0.2 km", driveTime: "1 Min Walk" },
  { landmark: "Indian High Commission / Embassy Zone", distance: "1.5 km", driveTime: "4 Mins" },
];

const developerInfo = {
  companyName: "SAMPAN DEVELOPMENTS LTD.",
  tagline: "Changing the living style",
  corporateOffice: "Tanaka Tower (2nd floor), 42/1 Gha, Segun Bagicha, Dhaka-1000",
  phones: ["88-02-9564094", "88-02-9515372", "88-02-8332999"],
  website: "www.sampandevelopmentsltd.com",
  rehabMember: true,
};

export default function SampanNiketonPage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#25633a] selection:text-white">

      {/* 1. Hero Overview */}
      <RealEstateHero2
        title="Sampan Niketon"
        subtitle="1,250 sft 3-Bedroom Residential Apartments in Shanti Niketon"
        divisionName="Sampan Development Ltd"
        statusBadge="RAJUK Approved Project"
        statusType="completed"
        description="An 8-storied residential landmark located at Plot 168/10, Shanti Niketon (Gulshan Link Road), offering 1,250 sft South & North-facing 3-bedroom apartments with 40% open space and RAJUK approval."
        image="/images/projects/sampanniketon.jpg"
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
        projectName="Sampan Niketon"
        subheading="Official engineering, architectural parameters, RAJUK approval details, and finishing specifications."
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
        totalLandArea="5 Katha"
        totalSharesCount="14 Residential Units"
        registrationStatus="Sub-Kabala Ready"
        tiers={landShareTiers}
        bgTheme="about-ivory"
      />

      {/* 6. Location + Map */}
      <RealEstateLocationMap
        projectName="Sampan Niketon"
        address="Plot 168/10, Road 4, Shanti Niketon, Gulshan Link Road, Tejgaon, Dhaka."
        gpsCoordinates="23.7782° N, 90.4084° E"
        embedMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14603.6!2d90.4084!3d23.7782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7715b9a89eb%3A0x6b5c00d603a111b2!2sNiketon%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
        landmarks={landmarks}
        bgTheme="divisions-green"
      />

      {/* 7. Construction Progress */}
      <ConstructionProgressTracker
        overallCompletionPercentage={100}
        expectedHandoverDate="Handed Over"
        currentPhase="Fully Completed & Inhabited Project"
        milestones={progressMilestones}
        bgTheme="about-ivory"
      />

      {/* 8. Legal Credentials */}
      <LegalCredentialsModule
        credentials={legalCredentials}
        bgTheme="divisions-green"
      />

      {/* 9. 3D Renders / Project Photos */}
      <WalkthroughRenderGallery
        items={renders}
        bgTheme="about-ivory"
      />

      {/* 10. Payment Calculator */}
      <PaymentPlanCalculator
        defaultPropertyPriceBDT={12500000}
        bgTheme="divisions-green"
      />

      {/* 11. Brochure CTA */}
      <DownloadableBrochureCTA
        projectName="Sampan Niketon"
        bgTheme="about-ivory"
      />

      {/* 12. Site Visit Form */}
      <SiteVisitBookingForm
        projectName="Sampan Niketon"
        bgTheme="divisions-green"
      />

    </main>
  );
}
