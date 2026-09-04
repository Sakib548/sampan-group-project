import type { Metadata } from "next";
import GolfHero from "../components/GolfHero";
import GolfWhatItOffers from "../components/GolfWhatItOffers";
import GolfFacilitiesOverview from "../components/GolfFacilitiesOverview";
import GolfInstructorProfiles from "../components/GolfInstructorProfiles";
import GolfPricingTiers from "../components/GolfPricingTiers";
import GolfJuniorSpotlight from "../components/GolfJuniorSpotlight";
import GolfTournamentCalendar from "../components/GolfTournamentCalendar";
import GolfLessonBookingWidget from "../components/GolfLessonBookingWidget";
import GolfMediaGallery from "../components/GolfMediaGallery";
import GolfLocationAndMap from "../components/GolfLocationAndMap";
import GolfNearbyModule from "../components/GolfNearbyModule";
import GolfEnquiryForm from "../components/GolfEnquiryForm";

export const metadata: Metadata = {
  title: "Sampan Golf Academy (Coming Soon) | Professional PGA Golf Training",
  description:
    "Sampan Golf Academy offers PGA-certified coaching, TrackMan 4 video swing telemetry, junior talent pathways, putting studios, and tournament preparation.",
};

const academyFacts = [
  { value: "PGA Class A", label: "Certified Master Coach" },
  { value: "TrackMan 4", label: "Dual Radar Telemetry" },
  { value: "3 Dedicated", label: "Simulator Bays" },
  { value: "Junior Squad", label: "Youth Development" },
];

const offers = [
  {
    title: "TrackMan 4 Swing Biomechanics Lab",
    description: "High-speed optical camera tracking, launch monitor metrics, spin axis diagnostics, and 3D kinetic video feedback.",
    tag: "High Tech",
  },
  {
    title: "1-on-1 PGA Master Coaching",
    description: "Customized lesson plans tailored to your swing signature, handicap goals, and course management strategy.",
    tag: "PGA Standard",
  },
  {
    title: "Short Game & Wedge Matrix Training",
    description: "Championship putting greens, sand bunker play optics, and distance-calibrated wedge scoring sessions.",
    tag: "Precision",
  },
  {
    title: "Junior & Youth Talent Academy",
    description: "Structured progressive junior curriculum for ages 5-18 fostering sportsmanship, kinetic fundamentals, and college pathways.",
    tag: "Youth Spotlight",
  },
  {
    title: "Monthly Medal & Tournament Preparation",
    description: "Stroke play mental toughness prep, WAGR ranking guidance, and simulator tournament play.",
    tag: "Competition",
  },
  {
    title: "Custom Club Fitting & Putter Alignment Studio",
    description: "Bespoke club specification fitting with Fujikura, KBS shafts, Titleist Vokey wedge matrix, and SAM PuttLab optics.",
    tag: "Custom Fitting",
  },
];

const academyFacilities = [
  {
    title: "TrackMan 4 Simulator Bays",
    category: "Indoor Swing Lab",
    specs: "3 Climate-Controlled Bays",
    description: "Equipped with dual-radar launch monitors, high-speed impact cameras, projection screens, and 200+ virtual championship courses.",
    highlights: ["Dual-Radar Telemetry", "200+ Virtual Courses", "Impact Video Replay", "High-Definition Projection"],
  },
  {
    title: "Championship Putting & Chipping Green Studio",
    category: "Short Game Area",
    specs: "1,500 Sq. Ft. Synthetic Turf",
    description: "Precision-molded slopes, stimpmeter green speeds (10.5 - 12), and laser target alignment lines for putter mastery.",
    highlights: ["Stimpmeter Speed 11", "SAM PuttLab Alignment Optics", "Bunker Practice Trap", "Contoured Break Surfaces"],
  },
  {
    title: "Video Swing Analysis Suite",
    category: "Diagnostic Studio",
    specs: "Quad-Angle High Speed Video",
    description: "Frame-by-frame kinetic analysis software comparing your swing side-by-side with PGA Tour pros.",
    highlights: ["240 FPS Cameras", "Side-by-Side PGA Comparison", "Pressure Mat Weight Transfer", "Instant Tablet Export"],
  },
  {
    title: "Members' Pro Shop & Fitting Lounge",
    category: "Club & Gear Studio",
    specs: "Exclusive Retail & Lounge",
    description: "Stocked with premium golf apparel, Titleist, TaylorMade, Callaway gear, and custom club fitting benches.",
    highlights: ["Bespoke Shaft Fitting", "Grip Replacement Station", "Premium Leather Goods", "Coffee & Refreshment Bar"],
  },
];

const academyPricing = [
  {
    name: "Beginner Foundation Clinic",
    priceBDT: "15,000 BDT",
    duration: "4 Weeks (8 Group Sessions)",
    tag: "Starter Package",
    features: [
      "8 Group Lessons (Max 5 students per coach)",
      "Fundamental swing grip, posture & alignment",
      "Complimentary range balls during clinic hours",
      "Short game chipping & putting intro",
      "Academy Certificate of Completion",
    ],
  },
  {
    name: "Private PGA 1-on-1 Masterclass",
    priceBDT: "35,000 BDT",
    duration: "10 Private Sessions",
    tag: "Most Popular",
    featured: true,
    features: [
      "10 Private 60-min sessions with PGA Head Coach",
      "TrackMan 4 video swing analysis & metric reports",
      "Custom Club & Putter Fitting Session included",
      "Unlimited TrackMan simulator bay practice access",
      "Priority tournament calendar entry",
    ],
  },
  {
    name: "Junior Elite Squad Pass",
    priceBDT: "20,000 BDT",
    duration: "Quarterly Membership",
    tag: "Youth Special",
    features: [
      "Weekly junior squad group training (Ages 8-17)",
      "Quarterly Junior Medal competition entry",
      "Video trajectory reports sent to parents",
      "Equipment borrowing program for kids",
      "Summer & Winter Golf Camp discount",
    ],
  },
];

const academyGallery = [
  {
    id: "acad-1",
    title: "TrackMan 4 Simulator Bay",
    category: "Simulator Lab",
    type: "photo" as const,
    src: "/images/brand/golfacademy.png",
    caption: "Dual radar technology delivering instant clubhead speed, launch angle, and spin axis metrics.",
  },
  {
    id: "acad-2",
    title: "1-on-1 PGA Coaching Session",
    category: "Coaching",
    type: "photo" as const,
    src: "/images/brand/golfacademy.png",
    caption: "Head Coach David Ross providing real-time swing plane adjustments.",
  },
  {
    id: "acad-3",
    title: "Junior Academy Swing Practice",
    category: "Junior Golf",
    type: "photo" as const,
    src: "/images/brand/golfacademy.png",
    caption: "Young golfers learning fundamental posture and hand-eye coordination.",
  },
  {
    id: "acad-4",
    title: "Putting Green Optics Studio",
    category: "Short Game",
    type: "photo" as const,
    src: "/images/brand/golfacademy.png",
    caption: "Synthetic green studio with laser alignment lines and stimpmeter speed controls.",
  },
];

const academyLandmarks = [
  { landmark: "Sampan Short Drive Range", distance: "100 meters", driveTime: "1 Min Walk" },
  { landmark: "Sampan Agro & Golf Resort", distance: "300 meters", driveTime: "2 Mins Walk" },
  { landmark: "Sampan Cafe Metro", distance: "4 km", driveTime: "5 Mins Drive" },
  { landmark: "Sampan Highway Inn", distance: "6 km", driveTime: "8 Mins Drive" },
];

export default function SampanGolfAcademyPage() {
  return (
    <main className="min-h-screen bg-[#f8faf6] text-[#183b2b]">
      {/* SECTION 1: Hero Header */}
      <GolfHero
        title="Sampan Golf Academy"
        subtitle="Professional PGA-Certified Golf Training & Development"
        concernName="Sampan Golf Academy"
        statusBadge="Coming Soon — Launching Q4 2026"
        description="Bangladesh's premier high-tech golf academy combining PGA Class A coaching, TrackMan 4 dual-radar simulators, putting studios, and junior development pathways."
        facts={academyFacts}
        logo="/images/brand/golfacademy.png"
        bannerImage="/images/our_divisions/sampan-golf-academy/hero_banner.jpg"
        backgroundImage="/images/our_divisions/sampan-golf-academy/hero_banner.jpg"
      />

      {/* SECTION 2: What It Offers */}
      <GolfWhatItOffers
        title="What Sampan Golf Academy Offers"
        subtitle="A holistic golf education system designed to build repeatable swing mechanics, lower handicaps, and train competitive golfers."
        concernName="Sampan Golf Academy"
        offers={offers}
      />

      {/* SECTION 3: Facilities Overview */}
      <GolfFacilitiesOverview
        title="State-of-the-Art Training Facilities"
        subtitle="Designed with climate-controlled TrackMan 4 bays, synthetic putting greens, and high-speed video analysis software."
        facilities={academyFacilities}
      />

      {/* SECTION 4: Instructor Profiles */}
      <GolfInstructorProfiles />

      {/* SECTION 5: Program Pricing / Package Tiers */}
      <GolfPricingTiers
        title="Academy Program Pricing & Package Tiers"
        subtitle="Flexible coaching packages designed for complete beginners, intermediate golfers, and junior talent."
        tiers={academyPricing}
      />

      {/* SECTION 6: Junior / Youth Program Spotlight */}
      <GolfJuniorSpotlight />

      {/* SECTION 7: Tournament / Event Calendar */}
      <GolfTournamentCalendar />

      {/* SECTION 8: Booking System for Lessons / Tee Times */}
      <GolfLessonBookingWidget />

      {/* SECTION 9: Photo / Video Gallery */}
      <GolfMediaGallery
        title="Academy Photo & Video Gallery"
        subtitle="Explore our simulator bays, putting green studios, and coaching sessions."
        mediaItems={academyGallery}
      />

      {/* SECTION 10: Location + Map */}
      <GolfLocationAndMap
        title="Academy Location & Access"
        subtitle="Situated within the Sampan Agro & Golf Complex, easily reachable from major expressways."
        projectName="Sampan Golf Academy"
        address="Sampan Agro & Golf Complex, Moulvibazar, Sylhet Division, Bangladesh."
        gpsCoordinates="24.3000° N, 91.7000° E"
        landmarks={academyLandmarks}
      />

      {/* SECTION 11: Nearby at this location module */}
      <GolfNearbyModule
        currentStoreName="Sampan Golf Academy"
        locationHubName="Sampan Agro & Golf Complex"
      />

      {/* SECTION 12: Enquiry / Enrollment CTA Form */}
      <GolfEnquiryForm
        title="Enroll at Sampan Golf Academy"
        subtitle="Register your interest to secure founding member discounts and pre-book your lesson slot with our PGA coaches."
        projectName="Sampan Golf Academy"
        packageOptions={[
          "PGA Academy 1-on-1 Masterclass (10 Sessions)",
          "Beginner Foundation Clinic (4 Weeks)",
          "Junior Elite Squad Pass (Quarterly)",
          "TrackMan 4 Custom Swing Fitting",
          "General Membership Inquiry",
        ]}
      />
    </main>
  );
}
