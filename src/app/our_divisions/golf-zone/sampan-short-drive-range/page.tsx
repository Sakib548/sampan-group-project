import type { Metadata } from "next";
import GolfHero from "../components/GolfHero";
import GolfWhatItOffers from "../components/GolfWhatItOffers";
import GolfFacilitiesOverview from "../components/GolfFacilitiesOverview";
import GolfHoursOfOperation from "../components/GolfHoursOfOperation";
import GolfPricingTiers from "../components/GolfPricingTiers";
import GolfBayBookingWidget from "../components/GolfBayBookingWidget";
import GolfLeaderboard from "../components/GolfLeaderboard";
import GolfCorporatePackages from "../components/GolfCorporatePackages";
import GolfMediaGallery from "../components/GolfMediaGallery";
import GolfLocationAndMap from "../components/GolfLocationAndMap";
import GolfNearbyModule from "../components/GolfNearbyModule";
import GolfEnquiryForm from "../components/GolfEnquiryForm";

export const metadata: Metadata = {
  title: "Sampan Short Drive Range (Coming Soon) | Toptracer Automated Golf Driving Range",
  description:
    "Sampan Short Drive Range features 35+ automated tee bays, Toptracer shot tracking, floodlit night practice, live leaderboards, and corporate event lounges.",
};

const rangeFacts = [
  { value: "35+ Bays", label: "Automated Driving Bays" },
  { value: "Toptracer", label: "Shot Tracking Telemetry" },
  { value: "Floodlit", label: "Night Driving Range" },
  { value: "250+ Yds", label: "Target Green Field" },
];

const rangeOffers = [
  {
    title: "Short Game Precision Practice",
    description: "Target greens situated at 50, 100, 150, and 200 yards with laser rangefinder optics for precision wedge and iron control.",
    tag: "Target Accuracy",
  },
  {
    title: "Toptracer Interactive Ball Tracking",
    description: "Every bay is equipped with Toptracer touchscreens delivering real-time ball speed, curve, carry distance, and virtual game modes.",
    tag: "Toptracer Tech",
  },
  {
    title: "Floodlit Night Driving & Sports Lounge",
    description: "High-intensity LED lights illuminate fairways after dark, paired with music, lounge seating, and food & beverage service.",
    tag: "Night Atmosphere",
  },
  {
    title: "Automated Power Tee Elevators",
    description: "Automated ball feeders dispense golf balls to your custom tee height with zero manual bending or bucket loading.",
    tag: "Automated Bays",
  },
  {
    title: "Live Leaderboard Scoring Challenges",
    description: "Compete in weekly Longest Drive and Closest-to-Pin challenges displayed on facility leaderboards and mobile apps.",
    tag: "Leaderboard",
  },
  {
    title: "Group & Corporate Event Suites",
    description: "Private VIP bay lounges with dedicated catering, private host service, and custom tournament formatting.",
    tag: "Corporate Events",
  },
];

const rangeFacilities = [
  {
    title: "Automated Power Tee Bays",
    category: "Driving Range Deck",
    specs: "35 Climate-Controlled Bays",
    description: "Dual-deck driving bays with automated ball dispensers, overhead fan cooling, infrared heaters, and ergonomic sofa seating.",
    highlights: ["Automated Tee Height", "Climate Controlled", "USB Charging Ports", "In-Bay Dining Tables"],
  },
  {
    title: "Toptracer Telemetry Screens",
    category: "Ball Tracking Tech",
    specs: "21.5 Inch Touchscreens",
    description: "High-definition interactive touchscreens displaying flight path, apex height, smash factor, and fun target games like PointsGame & Angry Birds.",
    highlights: ["PointsGame & Virtual Golf", "Instant Ball Speed", "Mobile App Sync", "Multiplayer Modes"],
  },
  {
    title: "Short Game Chipping & Pitching Green",
    category: "Outdoor Practice",
    specs: "8,000 Sq. Ft. Real Turf",
    description: "Natural Bermuda turf chipping green surrounded by sand traps, deep rough, and undulating slopes for scramble mastery.",
    highlights: ["Natural Bermuda Turf", "Bunker Sand Traps", "Flop-Shot Wall", "Chipping Target Rings"],
  },
  {
    title: "Floodlit Night Fairway & Target Markers",
    category: "Lighting System",
    specs: "100,000 Lumens LED Arena",
    description: "Zero-glare floodlighting highlighting target flags, water hazard markers, and distance signage until midnight.",
    highlights: ["Zero-Glare LED Arena", "Color Target Lighting", "High Visibility Balls", "All-Weather Driving"],
  },
];

const rangePricing = [
  {
    name: "Standard Tee Bay Pass",
    priceBDT: "1,500 BDT",
    duration: "1 Hour Bay Rental",
    tag: "Individual Practice",
    features: [
      "1 Hour Automated Tee Bay Access (Up to 4 golfers)",
      "Unlimited High-Quality Range Balls",
      "Standard Distance & Target Markers",
      "Complimentary Club Rental (7-Iron & Wedge)",
      "Access to Short Game Chipping Green",
    ],
  },
  {
    name: "Toptracer VIP Technology Suite",
    priceBDT: "2,500 BDT",
    duration: "1 Hour VIP Suite Rental",
    tag: "Most Popular",
    featured: true,
    features: [
      "1 Hour Toptracer Touchscreen Suite (Up to 6 golfers)",
      "Unlimited Range Balls & Automated Tee Elevation",
      "Full Toptracer Virtual Golf & Tournament Modes",
      "VIP Sofa Lounge Seating & In-Bay Food Service",
      "Entry into Monthly Live Leaderboard Challenges",
    ],
  },
  {
    name: "10-Hour Bucket Pass",
    priceBDT: "12,000 BDT",
    duration: "Flexible 10 Hours",
    tag: "Regular Golfer Savings",
    features: [
      "10 Individual Hours of Range Bay Access",
      "Valid for 90 Days from Purchase",
      "Toptracer Tracking Included on All Sessions",
      "10% Discount on Pro Shop Purchases",
      "Free 30-min Swing Check with Assistant Pro",
    ],
  },
];

const rangeGallery = [
  {
    id: "range-1",
    title: "Floodlit Night Driving Range",
    category: "Night Range",
    type: "photo" as const,
    src: "/images/brand/golfacademy.png",
    caption: "High-intensity LED lights illuminating fairways and target greens after dark.",
  },
  {
    id: "range-2",
    title: "Toptracer Interactive Touchscreen",
    category: "Toptracer Tech",
    type: "photo" as const,
    src: "/images/brand/golfacademy.png",
    caption: "Track shot distance, ball speed, and play virtual golf games with friends.",
  },
  {
    id: "range-3",
    title: "Automated Power Tee Bays",
    category: "Driving Bays",
    type: "photo" as const,
    src: "/images/brand/golfacademy.png",
    caption: "Automated ball dispensers set your exact tee height automatically.",
  },
  {
    id: "range-4",
    title: "VIP Executive Lounge Bay",
    category: "Lounge & Dining",
    type: "photo" as const,
    src: "/images/brand/golfacademy.png",
    caption: "Ergonomic sofa seating with in-bay food and beverage service.",
  },
];

const rangeLandmarks = [
  { landmark: "Sampan Golf Academy", distance: "100 meters", driveTime: "1 Min Walk" },
  { landmark: "Sampan Agro & Golf Resort", distance: "400 meters", driveTime: "3 Mins Walk" },
  { landmark: "Sampan Cafe Metro", distance: "4 km", driveTime: "5 Mins Drive" },
  { landmark: "Sampan Highway Inn", distance: "6 km", driveTime: "8 Mins Drive" },
];

export default function SampanShortDriveRangePage() {
  return (
    <main className="min-h-screen bg-[#f8faf6] text-[#183b2b]">
      {/* SECTION 1: Hero Header */}
      <GolfHero
        title="Sampan Short Drive Range"
        subtitle="High-Tech Short Game Practice, Toptracer Bays & Floodlit Sports Lounge"
        concernName="Sampan Short Drive Range"
        statusBadge="Coming Soon — Launching Q4 2026"
        description="Bangladesh's premier automated driving range featuring 35+ Toptracer technology bays, floodlit night driving, live scoring leaderboards, and corporate event lounges."
        facts={rangeFacts}
        logo="/images/brand/golfrage.png"
        bannerImage="/images/our_divisions/sampan-short-drive-range/hero_banner.jpg"
        backgroundImage="/images/our_divisions/sampan-short-drive-range/hero_banner.jpg"
      />

      {/* SECTION 2: What It Offers */}
      <GolfWhatItOffers
        title="What Sampan Short Drive Range Offers"
        subtitle="Combine precision short-game practice with social gaming, night driving, and corporate entertainment."
        concernName="Sampan Short Drive Range"
        offers={rangeOffers}
      />

      {/* SECTION 3: Facilities Overview */}
      <GolfFacilitiesOverview
        title="Range Facilities & Infrastructure"
        subtitle="Engineered with automated power tees, Toptracer tracking telemetry, and 100,000-lumen arena lighting."
        facilities={rangeFacilities}
      />

      {/* SECTION 4: Hours of Operation */}
      <GolfHoursOfOperation />

      {/* SECTION 5: Pricing */}
      <GolfPricingTiers
        title="Bay Rental Rates & Bucket Passes"
        subtitle="Flexible hourly bay rates, Toptracer VIP suites, and discounted 10-hour practice passes."
        tiers={rangePricing}
      />

      {/* SECTION 6: Online Bay Booking System */}
      <GolfBayBookingWidget />

      {/* SECTION 7: Leaderboard / Scoring Feature */}
      <GolfLeaderboard />

      {/* SECTION 8: Group / Corporate Event Packages */}
      <GolfCorporatePackages />

      {/* SECTION 9: Photo / Video Gallery */}
      <GolfMediaGallery
        title="Short Drive Range Photo & Video Gallery"
        subtitle="Take a look at our floodlit night range, Toptracer screens, and sports lounges."
        mediaItems={rangeGallery}
      />

      {/* SECTION 10: Location + Map */}
      <GolfLocationAndMap
        title="Range Location & Access"
        subtitle="Located inside the Sampan Agro & Golf Complex with dedicated valet and visitor parking."
        projectName="Sampan Short Drive Range"
        address="Sampan Agro & Golf Complex, Moulvibazar, Sylhet Division, Bangladesh."
        gpsCoordinates="24.3000° N, 91.7000° E"
        landmarks={rangeLandmarks}
      />

      {/* SECTION 11: Nearby at this location module */}
      <GolfNearbyModule
        currentStoreName="Sampan Short Drive Range"
        locationHubName="Sampan Agro & Golf Complex"
      />

      {/* SECTION 12: Booking / Enquiry CTA */}
      <GolfEnquiryForm
        title="Reserve Your Bay or Inquire Corporate Event"
        subtitle="Pre-register your interest for VIP founding passes, bay reservations, or corporate group bookings."
        projectName="Sampan Short Drive Range"
        packageOptions={[
          "Toptracer VIP Bay Reservation",
          "Corporate Team Scramble Event",
          "VIP Executive Night Out Booking",
          "10-Hour Bucket Pass Pre-Purchase",
          "General Inquiry / Individual Practice",
        ]}
      />
    </main>
  );
}
