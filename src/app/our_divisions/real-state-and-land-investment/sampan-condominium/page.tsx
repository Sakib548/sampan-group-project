import type { Metadata } from "next";
import RealEstateHero2 from "../components/RealEstateHero2";
import UnitTypesAndSizes from "../components/UnitTypesAndSizes";
import FloorPlansViewer from "../components/FloorPlansViewer";
import BuildingSpecificationsModule, { SpecificationCategory } from "../components/BuildingSpecificationsModule";
import LegalCredentialsModule from "../components/LegalCredentialsModule";
import WalkthroughRenderGallery from "../components/WalkthroughRenderGallery";
import RealEstateLocationMap from "../components/RealEstateLocationMap";
import RealEstateEnquiryForm from "../components/RealEstateEnquiryForm";
import DownloadableBrochureCTA from "../components/DownloadableBrochureCTA";
import SiteVisitBookingForm from "../components/SiteVisitBookingForm";

export const metadata: Metadata = {
  title: "Sampan Condominium | Residential Elegance at Express Highway Inn Complex",
  description:
    "Sampan Condominium - Redefining residential elegance within the Express Highway Inn complex. Experience absolute unit privacy balanced with joint ownership of world-class shared amenities by Sampan Development Ltd.",
};

const facts = [
  { value: "Private Units", label: "Absolute Privacy" },
  { value: "Shared Luxury", label: "Joint Ownership Amenities" },
  { value: "Express Highway Inn", label: "Master Complex Footprint" },
  { value: "Residential-Grade", label: "Tranquillity & Luxury" },
];

const units = [
  {
    id: "condo-type-a",
    name: "Grand Sky Suite - 2,200 sq ft",
    category: "4-Bedroom Corner Penthouse Suite",
    sizeSqFt: "2,200 sq ft",
    bedrooms: 4,
    bathrooms: 4,
    balconies: 4,
    priceRange: "Contact for Official Pricing",
    orientation: "South-East Corner with Panoramic Scenic View",
    highlights: [
      "Master Suite (16'-2\" x 12'-0\") with walk-in wardrobe, attached luxury bath & private panoramic balcony",
      "Expansive Living & Formal Dining with floor-to-ceiling "" acoustic glass facade",
      "2 Deluxe Bedrooms with ensuite bathrooms & private garden verandas",
      "Executive Study / Guest Room (12'-0\" x 11'-6\") with cross-ventilation",
      "Gourmet Island Kitchen with connected utility gallery & maid's quarters with bath",
      "Dual Dedicated Covered Valet Parking Bays & EV supercharger access",
    ],
    image: "/images/projects/sampan-condominium-interior.jpg",
  },
  {
    id: "condo-type-b",
    name: "Executive Urban Residence - 1,750 sq ft",
    category: "3-Bedroom Luxury Apartment",
    sizeSqFt: "1,750 sq ft",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 3,
    priceRange: "Contact for Official Pricing",
    orientation: "South Facing with 40% Open Landscaped Setback",
    highlights: [
      "Master Bedroom (15'-0\" x 11'-6\") with luxury ensuite bath & private veranda",
      "Spacious Family Living (14'-0\" x 12'-6\") & Open Dining Area (12'-0\" x 10'-6\")",
      "Two Generous Children & Guest Bedrooms with abundant natural daylight",
      "Contemporary Kitchen with granite countertops, double burner line & dry yard",
      """ double-glazed acoustic windows for whisper-quiet privacy",
      "Covered Ground Floor Parking Slot with EV Charging Provision",
    ],
    image: "/images/projects/sampan-condominium.jpg",
  },
  {
    id: "condo-type-c",
    name: "Contemporary Suite - 1,450 sq ft",
    category: "3-Bedroom Modern Suite",
    sizeSqFt: "1,450 sq ft",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    priceRange: "Contact for Official Pricing",
    orientation: "Expressway Boulevard & Landscaped Garden View",
    highlights: [
      "Well-proportioned 3-Bedroom layout optimized for modern family comfort",
      "Open-concept Living & Dining Hall with wide sliding glass balcony doors",
      "Master Bed with designer porcelain tile bathroom & private morning view deck",
      "Modern Modular Kitchen layout with heavy-duty exhaust line & utility bay",
      "High-efficiency cross-ventilation designed to reduce artificial cooling demand",
      "Designated Reserved Car Parking Bay with automated RFID gate access",
    ],
    image: "/images/projects/sampan-condominium.jpg",
  },
];

const floorPlans = [
  {
    id: "fp-condo-grand-2200",
    name: "Sampan Condominium - Grand Sky Suite Layout",
    category: "4-Bedroom Corner Plan (2,200 sq ft)",
    sizeSqFt: "2,200 sq ft",
    image: "/images/projects/sampan-condominium-interior.jpg",
    description: "Ultra-luxury corner layout featuring 4 Bedrooms, 4 Bathrooms, 4 Private Balconies, Expansive Family Lounge, Formal Dining, Gourmet Kitchen, and Maid's Accommodations.",
    features: [
      "Master Suite: 16'-2\" x 12'-0\" + Walk-in Closet & Bath",
      "Living Hall (18'-6\" x 14'-0\") & Dining (14'-0\" x 12'-0\")",
      "Bed 2: 14'-0\" x 12'-0\" & Bed 3: 13'-6\" x 11'-6\"",
      "Dual Passenger Lifts (10-Person) & High-Speed Stretcher Lift",
    ],
  },
  {
    id: "fp-condo-exec-1750",
    name: "Sampan Condominium - Executive Residence Layout",
    category: "3-Bedroom Executive Plan (1,750 sq ft)",
    sizeSqFt: "1,750 sq ft",
    image: "/images/projects/sampan-condominium.jpg",
    description: "Spacious 3-Bedroom family residence with open-concept living hall, 3 Balconies, fitted kitchen with utility veranda, and dedicated foyer entry.",
    features: [
      "Master Bed: 15'-0\" x 11'-6\" + Private Sky Balcony",
      "Living (14'-0\" x 12'-6\") & Dining (12'-0\" x 10'-6\")",
      "Bed 2: 13'-0\" x 11'-0\" & Bed 3: 12'-0\" x 11'-0\"",
      "Ground Floor Covered Parking & Security Guard Station",
    ],
  },
];

const specifications: SpecificationCategory[] = [
  {
    categoryName: "Shared World-Class Amenities",
    iconName: "utility",
    items: [
      "Full joint ownership access to Express Highway Inn complex amenities, gardens, and recreation spaces.",
      "24/7 on-site multi-cuisine dining, cafe, and exclusive priority in-residence room service delivery.",
      "Resort-style swimming pool, wellness fitness gymnasium, and steam/sauna facilities.",
      "Executive business lounge, private meeting suites, and White Hall banquet event center access.",
      "High-speed multi-bay EV charging hub, automated RFID security gates, and 24/7 manned surveillance.",
    ],
  },
  {
    categoryName: "Structural & Engineering",
    iconName: "structure",
    items: [
      "Substructure & superstructure engineered strictly in accordance with Bangladesh National Building Code (BNBC) seismic standards.",
      "High-yield 60,000+ psi deformed steel reinforcement bars from certified Tier-1 mills (BSRM / AKS).",
      "Heavy-duty cast-in-situ concrete piling with deep foundation testing & soil compaction clearance.",
      "Cylinder test crushing strength verified at 28 days by accredited civil engineering testing laboratories.",
    ],
  },
  {
    categoryName: "Privacy, Acoustics & Finishes",
    iconName: "floors",
    items: [
      "Acoustically insulated double-glazed windows ensuring absolute private tranquillity from highway surroundings.",
      "Solid decorative seasoned wood main entrance doors with high-security biometric locks & brass hardware.",
      "24\" x 24\" / 32\" x 32\" imported mirror-finish porcelain floor tiles in living, dining, and all bedrooms.",
      "Separate utility balconies with dedicated washing machine inlet, drainage outlet & anti-skid rustic ceramic tiling.",
    ],
  },
  {
    categoryName: "Elevator & Power Infrastructure",
    iconName: "lift",
    items: [
      "Dual European-standard high-speed passenger elevators (10-passenger capacity) with V3F smooth ride control.",
      "One dedicated heavy-duty medical stretcher elevator with automatic emergency rescue device (ARD).",
      "100% full standby sound-attenuated diesel generator backup for elevators, pumps, common lighting, and residences.",
      "Independent electrical substation with HT/LT panels, power factor improvement (PFI) plant & lightning protection.",
    ],
  },
];

const developerInfo = {
  companyName: "Sampan Development Ltd",
  tagline: "A Sister Concern of Sampan Group",
  corporateOffice: "Dhaka, Bangladesh",
  phones: ["+880 1929-918408", "+880 1713-000000"],
  website: "https://www.sampangroup.com.bd",
  rehabMember: true,
};

const legalCredentials = [
  {
    authority: "Urban Development & Building Authority",
    approvalTitle: "Architectural & Structural Engineering Clearance",
    referenceNumber: "Building Code Clearance Approved",
    status: "100% Verified",
    description: "Approved multi-storey residential building design compliant with setbacks, height regulations, and highway buffer norms.",
  },
  {
    authority: "Ministry of Land & Revenue Registry",
    approvalTitle: "Clear Title Mutation & Land Demarcation",
    referenceNumber: "CS, SA, RS & City Jorip Mutation Cleared",
    status: "100% Mutation Secured",
    description: "Freehold clear title land parcel with 100% government revenue payment clearance and zero encumbrances.",
  },
  {
    authority: "Real Estate & Housing Association of Bangladesh",
    approvalTitle: "Official REHAB Member Developer",
    referenceNumber: "REHAB Membership Certified",
    status: "Active Registered Member",
    description: "Built under strict code of conduct and building standards mandated for certified real estate developers in Bangladesh.",
  },
];

const renders = [
  {
    id: "r-condo-1",
    title: "Sampan Condominium - Architectural Facade",
    category: "exterior" as const,
    categoryLabel: "Exterior Architecture",
    image: "/images/projects/unit-coming-soon.jpg",
    type: "image" as const,
    description: "Contemporary architectural facade featuring double-glazed glass curtain walls, private sky terraces, and illuminated grand entrance within Express Highway Inn complex.",
  },
  {
    id: "r-condo-2",
    title: "Panoramic Sky Living & Dining Suite",
    category: "interior" as const,
    categoryLabel: "Interior Living",
    image: "/images/projects/unit-coming-soon.jpg",
    type: "image" as const,
    description: "Expansive floor-to-ceiling glass panoramic living room with designer marble kitchen island and twilight vistas.",
  },
];

const landmarks = [
  { landmark: "Express Highway Inn Complex", distance: "0 m", driveTime: "On-Site Footprint" },
  { landmark: "Bhanga Junction Expressway Interchange", distance: "16 km", driveTime: "15 Mins" },
  { landmark: "Padma Bridge Toll Plaza (Mawa)", distance: "39 km", driveTime: "30 Mins" },
  { landmark: "Gopalganj District Hub", distance: "36 km", driveTime: "32 Mins" },
  { landmark: "Barishal Divisional Airport Hub", distance: "68 km", driveTime: "55 Mins" },
  { landmark: "Dhaka Zero Point / Jatrabari", distance: "74 km", driveTime: "1h 05m" },
  { landmark: "Khulna Divisional City Hub", distance: "106 km", driveTime: "1h 35m" },
];

export default function SampanCondominiumPage() {
  return (
    <main className="bg-[#f3f6f2] text-[#183b2b] antialiased selection:bg-[#25633a] selection:text-white">

      {/* 1. Project Overview */}
      <RealEstateHero2
        title="Sampan Condominium."
        subtitle="Residential Elegance within Express Highway Inn Complex"
        divisionName="Sampan Development Ltd"
        description="Redefining residential elegance within the Express Highway Inn complex. Experience the absolute privacy of your own premium unit, perfectly balanced with joint ownership of world-class shared amenities."
        image="/images/projects/sampan-condominium.jpg"
        facts={facts}
        accentColor="#ca8a04"
        locationLabel="Express Highway Inn Footprint, Dhaka–Khulna Expressway Corridor"
        primaryCtaLabel="Explore the Residences"
        primaryCtaLink="#residences"
      />

      {/* Explore the Residences - Unit Configurations */}
      {/* <UnitTypesAndSizes
        id="residences"
        title="Condominium Residences & Suite Configurations"
        subtitle="Discover available 3 & 4 bedroom private units with "" acoustic glazing, panoramic balconies, and premium finishes."
        units={units}
        bgTheme="divisions-green"
      /> */}

      {/* Building Specifications & Shared Amenities Module */}
      {/* <BuildingSpecificationsModule
        projectName="Sampan Condominium"
        subheading="Comprehensive structural engineering, acoustic privacy standards, and joint ownership of world-class complex amenities."
        categories={specifications}
        developerInfo={developerInfo}
        bgTheme="about-ivory"
      /> */}

      {/* Floor Plans & Layouts */}
      {/* <FloorPlansViewer
        title="Condominium Floor Plans & Layouts"
        subtitle="Detailed architectural floor layouts showcasing optimized space planning, natural daylight, and cross-ventilation."
        plans={floorPlans}
        bgTheme="divisions-green"
      /> */}

      {/* Architectural Perspectives & Renders */}
      {/* <WalkthroughRenderGallery
        title="Architectural Perspectives & Virtual Renders"
        subtitle="Experience modern condominium living within the Express Highway Inn footprint through high-resolution architectural visualizations."
        items={renders}
        bgTheme="about-ivory"
      /> */}

      {/* Legal & Regulatory Clearances */}
      {/* <LegalCredentialsModule
        title="Verified Legal Clearances & Credentials"
        subtitle="Every aspect of land ownership, zoning approval, and engineering clearance is verified and legally compliant."
        credentials={legalCredentials}
        bgTheme="divisions-green"
      /> */}

      {/* 2. Location & Map */}
      {/* <RealEstateLocationMap
        title="Strategic Connectivity."
        subtitle="Prominently situated within the Express Highway Inn footprint. Offering immediate transit access to major corridors while maintaining a secure, serene residential environment."
        projectName="Sampan Condominium"
        address="Express Highway Inn Footprint, Dhaka–Khulna Expressway Corridor, Bangladesh."
        gpsCoordinates="23.260465° N, 89.765979° E"
        embedMapUrl="https://www.google.com/maps?q=23.2604651,89.7659791&hl=en&z=14&output=embed"
        landmarks={landmarks}
        ctaText="View Interactive Map"
        bgTheme="about-ivory"
      /> */}

      {/* 3. Enquiry Form */}
      <RealEstateEnquiryForm
        title="Book a visit."
        subtitle="Connect with our property advisors to discuss unit availability, pricing, and the exclusive benefits of our condominium ownership model."
        projectName="Sampan Condominium"
        submitButtonText="Inquire"
        phoneLabel="Contact Number"
        unitPreferences={[
          "Grand Sky Suite (2,200 sq ft)",
          "Executive Urban Residence (1,750 sq ft)",
          "Contemporary Suite (1,450 sq ft)",
          "Custom Penthouse Unit",
          "General Condominium Inquiry",
        ]}
        advisoryServices={[
          "Direct condominium unit ownership & title allocation",
          "Exclusive joint ownership of Express Highway Inn complex amenities",
          "Full pricing schedule & ownership model consultation",
        ]}
        bgTheme="divisions-green"
      />

      {/* 4. Downloadable Brochure */}
      <DownloadableBrochureCTA
        projectName="Sampan Condominium"
        badge="Official Prospectus"
        title="The Prospectus."
        subtitle="Download the official Sampan Condominium prospectus. Review detailed architectural floor plans, shared amenity access, and complete investment frameworks."
        ctaText="Download PDF Brochure"
        bgTheme="about-ivory"
      />

      {/* 5. Site Visit Booking */}
      <SiteVisitBookingForm
        title="Experience Sampan."
        subtitle="Schedule a private, guided viewing of our model units."
        projectName="Sampan Condominium"
        submitButtonText="Book site visit"
        bgTheme="divisions-green"
      />

    </main>
  );
}
