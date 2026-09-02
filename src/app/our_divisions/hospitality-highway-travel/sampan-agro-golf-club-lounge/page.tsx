import type { Metadata } from "next";
import ResortHero from "../components/ResortHero";
import ClubMembershipTiers from "../components/ClubMembershipTiers";
import ClubMemberPortalTeaser from "../components/ClubMemberPortalTeaser";
import ClubReferralProgram from "../components/ClubReferralProgram";
import ClubFAQ from "../components/ClubFAQ";
import ResortPreLaunchWaitlist from "../components/ResortPreLaunchWaitlist";
import GolfMediaGallery from "../../golf-zone/components/GolfMediaGallery";
import GolfNearbyModule from "../../golf-zone/components/GolfNearbyModule";
import GolfLocationAndMap from "../../golf-zone/components/GolfLocationAndMap";

export const metadata: Metadata = {
  title: "Sampan Agro & Golf Club & Lounge (SAGCL) | VIP Membership Shares & Club Privileges",
  description:
    "Sampan Agro & Golf Club & Lounge (SAGCL) offers VIP membership shares, private dining lounges, priority golf fairway access, and executive member networking.",
};

const clubFacts = [
  { value: "SAGCL VIP", label: "Gold Laurel Emblem" },
  { value: "3 Tiers", label: "Silver, Gold & Corporate" },
  { value: "100%", label: "Exclusive Member Portal" },
  { value: "Ongoing", label: "Pre-Launch Share Allocation" },
];

const clubGallery = [
  {
    id: "club-1",
    title: "SAGCL Member Dining Lounge",
    category: "VIP Lounge",
    type: "photo" as const,
    src: "/images/featuredConcerns/sampan-agro-golf-resort.png",
    caption: "Artisanal fine dining and private executive conference suites.",
  },
  {
    id: "club-2",
    title: "Championship Golf Fairways",
    category: "Golf Fairway",
    type: "photo" as const,
    src: "/images/featuredConcerns/sampan-agro-golf-resort.png",
    caption: "Priority tee-time reservations reserved for SAGCL primary members.",
  },
  {
    id: "club-3",
    title: "Lounge Pool Deck & Bar",
    category: "Pool Deck",
    type: "photo" as const,
    src: "/images/facilities/highway_inn/all_day_comfort.png",
    caption: "Sunkissed pool deck, refreshment bar, and sunset lounge seating.",
  },
];

const clubLandmarks = [
  { landmark: "Sampan Agro & Golf Resort", distance: "Adjacent (100 meters)", driveTime: "1 Min Walk" },
  { landmark: "Sampan Golf Academy", distance: "200 meters", driveTime: "2 Mins Walk" },
  { landmark: "Sampan Short Drive Range", distance: "300 meters", driveTime: "3 Mins Walk" },
  { landmark: "Sampan Highway Inn", distance: "6 km", driveTime: "8 Mins Drive" },
];

export default function SampanAgroGolfClubLoungePage() {
  return (
    <main className="min-h-screen bg-[#f8faf6] text-[#183b2b]">
      {/* SECTION 1: Hero Header */}
      <ResortHero
        title="Sampan Agro & Golf Club & Lounge"
        subtitle="Exclusive SAGCL VIP Membership Shares, Private Lounge & Resort Privileges"
        concernName="Sampan Agro & Golf Club & Lounge (SAGCL)"
        statusBadge="Ongoing Development — Membership Pre-Launch 2026"
        description="The pinnacle of private club membership in Bangladesh, offering executive lounge access, priority golf fairway tee-times, villa discounts, and digital member portal services."
        facts={clubFacts}
        bannerImage="/images/brand/sampanagroandgolfclubandlounge.png"
      />

      {/* SECTION 2 & 3: Membership Tiers & Pricing per Tier */}
      <ClubMembershipTiers />

      {/* SECTION 4: Facility Photo Gallery */}
      <GolfMediaGallery
        title="SAGCL Club & Lounge Photo Gallery"
        subtitle="Explore our VIP dining lounge, pool deck, executive meeting rooms, and golf fairways."
        mediaItems={clubGallery}
      />

      {/* SECTION 5: Member-Only Portal Teaser */}
      <ClubMemberPortalTeaser />

      {/* SECTION 6: Referral Program Details */}
      <ClubReferralProgram />

      {/* SECTION 7: FAQ Accordion */}
      <ClubFAQ />

      {/* SECTION 8: Location + Map */}
      <GolfLocationAndMap
        title="SAGCL Club & Lounge Location"
        subtitle="Located within the main clubhouse complex at Sampan Agro & Golf Complex, Sreemangal."
        projectName="Sampan Agro & Golf Club & Lounge (SAGCL)"
        address="Sampan Agro & Golf Complex, Sreemangal, Moulvibazar, Sylhet Division, Bangladesh."
        gpsCoordinates="24.3000° N, 91.7000° E"
        landmarks={clubLandmarks}
      />

      {/* SECTION 9: "Nearby at this location" module */}
      <GolfNearbyModule
        currentStoreName="Sampan Agro & Golf Club & Lounge"
        locationHubName="Sampan Agro Complex, Moulvibazar"
      />

      {/* SECTION 10: Sign-up / Enquiry CTA Form */}
      <div id="club-signup">
        <ResortPreLaunchWaitlist
          title="Apply for SAGCL Membership & Pre-Launch Share"
          subtitle="Submit your application to the SAGCL Membership Committee for review and reserve your founding equity share."
          projectName="Sampan Agro & Golf Club & Lounge (SAGCL)"
        />
      </div>
    </main>
  );
}
