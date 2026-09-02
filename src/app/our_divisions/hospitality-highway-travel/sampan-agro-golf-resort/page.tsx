import type { Metadata } from "next";
import ResortHero from "../components/ResortHero";
import ResortOverview from "../components/ResortOverview";
import ResortMasterplanMap from "../components/ResortMasterplanMap";
import ResortPhasedTimeline from "../components/ResortPhasedTimeline";
import ResortPricingComparison from "../components/ResortPricingComparison";
import ResortFoundingMemberPricing from "../components/ResortFoundingMemberPricing";
import ResortPreLaunchWaitlist from "../components/ResortPreLaunchWaitlist";
import ResortDroneProgress from "../components/ResortDroneProgress";
import GolfMediaGallery from "../../golf-zone/components/GolfMediaGallery";
import GolfLocationAndMap from "../../golf-zone/components/GolfLocationAndMap";
import GolfNearbyModule from "../../golf-zone/components/GolfNearbyModule";

export const metadata: Metadata = {
  title: "Sampan Agro & Golf Resort (Ongoing) | 160-Acre Eco-Agro & Championship Golf Fairways",
  description:
    "Sampan Agro & Golf Resort is Bangladesh's premier 160-acre destination combining championship golf fairways, VVIP luxury eco-villas, organic farm-to-table dining, and wellness spa facilities.",
};

const resortFacts = [
  { value: "160 Acres", label: "Masterplanned Estate" },
  { value: "9-Hole", label: "Executive Golf Course" },
  { value: "40 Villas", label: "Luxury VVIP Eco-Villas" },
  { value: "Phased 2026", label: "Opening Roadmap" },
];

const resortLandmarks = [
  { landmark: "Sampan Golf Academy", distance: "300 meters", driveTime: "2 Mins Walk" },
  { landmark: "Sampan Short Drive Range", distance: "400 meters", driveTime: "3 Mins Walk" },
  { landmark: "Sampan Cafe Metro", distance: "4 km", driveTime: "5 Mins Drive" },
  { landmark: "Sampan Highway Inn", distance: "6 km", driveTime: "8 Mins Drive" },
];

const resortGallery = [
  {
    id: "resort-1",
    title: "Championship Fairway & Golf Greens",
    category: "Golf Fairways",
    type: "photo" as const,
    src: "/images/featuredConcerns/sampan-agro-golf-resort.png",
    caption: "PGA-calibrated fairway turf with water hazards and natural contours.",
  },
  {
    id: "resort-2",
    title: "VVIP Eco-Villa & Private Plunge Pool",
    category: "Luxury Villas",
    type: "photo" as const,
    src: "/images/featuredConcerns/sampan-agro-golf-resort.png",
    caption: "Secluded eco-villas featuring private infinity pools and butler service.",
  },
  {
    id: "resort-3",
    title: "Organic Farm-to-Table Crop Estate",
    category: "Agro Farm",
    type: "photo" as const,
    src: "/images/concerns/3-sampan-eco-agro.png",
    caption: "Solar-drip irrigated organic fruit orchards and greenhouse vegetables.",
  },
  {
    id: "resort-4",
    title: "Boating Lake & Wellness Spa Pier",
    category: "Recreation & Spa",
    type: "photo" as const,
    src: "/images/facilities/highway_inn/all_day_comfort.png",
    caption: "Natural lake for kayaking and serene wellness spa retreats.",
  },
];

export default function SampanAgroGolfResortPage() {
  return (
    <main className="min-h-screen bg-[#f8faf6] text-[#183b2b]">
      {/* SECTION 1: Hero Header */}
      <ResortHero
        title="Sampan Agro & Golf Resort"
        subtitle="Integrated Luxury Resort, Championship Fairways & Sustainable Organic Farm Escape"
        concernName="Sampan Agro & Golf Resort"
        statusBadge="Ongoing Development — Phased Opening 2026"
        description="A 160-acre sanctuary where championship golf fairways, luxury eco-villas, organic farm-to-table dining, and wellness spa retreats come together."
        facts={resortFacts}
        bannerImage="/images/brand/agroandgolf.png"
      />

      {/* SECTION 2: Overview */}
      <ResortOverview />

      {/* SECTION 3: Masterplan Overview & Interactive Map */}
      <ResortMasterplanMap />

      {/* SECTION 4: Phased-Opening Timeline */}
      <ResortPhasedTimeline />

      {/* SECTION 5: Founding Member Pricing */}
      <ResortFoundingMemberPricing />

      {/* SECTION 6: Membership vs. Day-Visitor Pricing Comparison */}
      <ResortPricingComparison />

      {/* SECTION 7: Drone Footage of Construction Progress */}
      <ResortDroneProgress />

      {/* SECTION 8: Photo / Video Gallery */}
      <GolfMediaGallery
        title="Resort Photo & Media Gallery"
        subtitle="Take a visual tour inside our golf fairways, VVIP luxury villas, organic farms, and lake facilities."
        mediaItems={resortGallery}
      />

      {/* SECTION 9: Location + Map */}
      <GolfLocationAndMap
        title="Resort Location & Accessibility"
        subtitle="Positioned in Sreemangal, Moulvibazar — easily accessible via expressways from Dhaka and Sylhet."
        projectName="Sampan Agro & Golf Resort"
        address="Sampan Agro & Golf Complex, Sreemangal, Moulvibazar, Sylhet Division, Bangladesh."
        gpsCoordinates="24.3000° N, 91.7000° E"
        landmarks={resortLandmarks}
      />

      {/* SECTION 10: "Nearby at this location" module */}
      <GolfNearbyModule
        currentStoreName="Sampan Agro & Golf Resort"
        locationHubName="Sampan Agro Complex, Moulvibazar"
      />

      {/* SECTION 11 & 12: Pre-launch Waitlist Signup & Enquiry CTA */}
      <ResortPreLaunchWaitlist
        title="Pre-Launch Waitlist & Founding Member Signup"
        subtitle="Register your interest to secure founding member share pricing and receive VIP preview invitation passes."
        projectName="Sampan Agro & Golf Resort"
      />
    </main>
  );
}
