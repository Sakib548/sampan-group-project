import type { Metadata } from "next";
import PartyCenterHero from "../components/PartyCenterHero";
import PartyCenterOverview from "../components/PartyCenterOverview";
import PartyCenterFacilities from "../components/PartyCenterFacilities";
import PartyCenterMenuOverview from "../components/PartyCenterMenuOverview";
import PartyCenterPackagePricing from "../components/PartyCenterPackagePricing";
import PartyCenterAvailabilityCalendar from "../components/PartyCenterAvailabilityCalendar";
import PartyCenterDateCheckForm from "../components/PartyCenterDateCheckForm";
import PartyCenterMenuCustomizer from "../components/PartyCenterMenuCustomizer";
import PartyCenterVirtualTour from "../components/PartyCenterVirtualTour";
import PartyCenterTestimonials from "../components/PartyCenterTestimonials";
import GolfMediaGallery from "../../golf-zone/components/GolfMediaGallery";
import GolfLocationAndMap from "../../golf-zone/components/GolfLocationAndMap";
import GolfNearbyModule from "../../golf-zone/components/GolfNearbyModule";

export const metadata: Metadata = {
  title: "Sampan Highway Inn Restaurant & Party Center | Grand Event Hall & Fine Highway Dining",
  description:
    "Sampan Highway Inn Restaurant & Party Center offers central AC banquet halls for 500+ guests, wedding reception packages, gourmet Bengali & Chinese catering, and live BBQ dining.",
};

const partyGallery = [
  {
    id: "pc-1",
    title: "Grand Banquet Hall Stage & Lighting",
    category: "Wedding Stage",
    type: "photo" as const,
    src: "/images/facilities/highway_inn/dining_area.png",
    caption: "Customizable wedding stage backdrop with LED ambient lighting.",
  },
  {
    id: "pc-2",
    title: "Shahi Kacchi Feast & Buffet Spread",
    category: "Gourmet Catering",
    type: "photo" as const,
    src: "/images/facilities/highway_inn/buffet_setup.png",
    caption: "Freshly prepared Kacchi Biryani, Polao, Roast, and salad buffet line.",
  },
  {
    id: "pc-3",
    title: "VIP Dining Saloon & Family Lounge",
    category: "VIP Dining",
    type: "photo" as const,
    src: "/images/facilities/highway_inn/all_day_comfort.png",
    caption: "Private air-conditioned dining suites for family celebrations.",
  },
];

const pcLandmarks = [
  { landmark: "Sampan Highway Inn", distance: "Adjacent (Same Premises)", driveTime: "1 Min Walk" },
  { landmark: "Sampan White House", distance: "Adjacent (50 meters)", driveTime: "1 Min Walk" },
  { landmark: "Sampan Cafe Metro", distance: "3 km", driveTime: "4 Mins Drive" },
  { landmark: "Dhaka-Sylhet Highway Toll Plaza", distance: "5 km", driveTime: "6 Mins Drive" },
];

export default function SampanHighwayInnRestaurantPartyCenterPage() {
  return (
    <main className="min-h-screen bg-[#f8faf6] text-[#183b2b]">
      {/* SECTION 1: Hero Header */}
      <PartyCenterHero
        title="Sampan Highway Inn Restaurant & Party Center"
        subtitle="Premier Highway Dining, Grand Banquet Halls & Celebration Venue"
        concernName="Sampan Highway Inn Restaurant & Party Center"
        statusBadge="Now Booking Weddings & Corporate Events 2026"
        description="Bangladesh's leading highway event venue and multi-cuisine restaurant — featuring central air-conditioned banquet halls accommodating up to 500+ guests, gourmet catering, and live BBQ dining."
      />

      {/* SECTION 2: Overview */}
      <PartyCenterOverview />

      {/* SECTION 3: Facilities */}
      <PartyCenterFacilities />

      {/* SECTION 4: Menu Overview */}
      <PartyCenterMenuOverview />

      {/* SECTION 5: Event Package Pricing */}
      <PartyCenterPackagePricing />

      {/* SECTION 6: Availability Calendar */}
      <PartyCenterAvailabilityCalendar />

      {/* SECTION 7: Menu Customization & Catering-Only Option */}
      <PartyCenterMenuCustomizer />

      {/* SECTION 8: Photo / Video Gallery */}
      <GolfMediaGallery
        title="Party Center Photo & Video Gallery"
        subtitle="Explore our banquet hall stage decorations, buffet spreads, and VIP dining saloons."
        mediaItems={partyGallery}
      />

      {/* SECTION 9: Virtual Hall Tour */}
      <PartyCenterVirtualTour />

      {/* SECTION 10: Testimonials & Past Event Reviews */}
      <PartyCenterTestimonials />

      {/* SECTION 11: Location + Map */}
      <GolfLocationAndMap
        title="Venue Location & Accessibility"
        subtitle="Located along the primary Dhaka-Sylhet Highway corridor with spacious valet parking."
        projectName="Sampan Highway Inn Restaurant & Party Center"
        address="Sampan Highway Complex, Dhaka-Sylhet Highway, Bangladesh."
        gpsCoordinates="24.3100° N, 91.7100° E"
        landmarks={pcLandmarks}
      />

      {/* SECTION 12: "Nearby at this location" module */}
      <GolfNearbyModule
        currentStoreName="Sampan Highway Inn Restaurant & Party Center"
        locationHubName="Sampan Highway Complex"
      />

      {/* SECTION 13: Online Date-Check & Booking Request Form */}
      <PartyCenterDateCheckForm />
    </main>
  );
}
