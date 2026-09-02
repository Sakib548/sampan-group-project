import type { Metadata } from "next";
import MaritimeHero from "../components/MaritimeHero";
import MaritimeShipShareWorks from "../components/MaritimeShipShareWorks";
import MaritimeVesselOverview from "../components/MaritimeVesselOverview";
import MaritimeOwnerBenefits from "../components/MaritimeOwnerBenefits";
import MaritimeOpportunityStatus from "../components/MaritimeOpportunityStatus";
import MaritimeEnquiryForm from "../components/MaritimeEnquiryForm";
import MaritimeLegalCredentials from "../components/MaritimeLegalCredentials";
import MaritimeBrochureDownload from "../components/MaritimeBrochureDownload";
import MaritimeVesselGallery from "../components/MaritimeVesselGallery";
import MaritimeRouteOverview from "../components/MaritimeRouteOverview";
import MaritimeVideoWalkthrough from "../components/MaritimeVideoWalkthrough";
import MaritimeWhatsAppCTA from "../components/MaritimeWhatsAppCTA";
import MaritimeFAQ from "../components/MaritimeFAQ";

export const metadata: Metadata = {
  title: "Sampan Floating Pearl (Coming Soon) | Fractional Maritime Asset Shares",
  description:
    "Sampan Floating Pearl is a fractional luxury vessel investment opportunity in Bangladesh offering quarterly charter dividend yields, asset-backed security, and VIP cruise privileges.",
};

export default function SampanFloatingPearlPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#183b2b]">
      {/* SECTION 1: Hero Header & Vessel Highlights */}
      <MaritimeHero
        title="Sampan Floating Pearl"
        subtitle="Fractional Luxury Vessel & Maritime Alternative Asset Investment Shares"
        concernName="Sampan Floating Pearl Venture"
        statusBadge="Coming Soon — Pre-Launch Phase 1 Open"
        description="Bangladesh's premier fractional maritime asset opportunity — allowing private investors to hold legal equity share units in a 3,200 GRT luxury cruise vessel operating across coastal Bay of Bengal routes."
      />

      {/* SECTION 2: How ship space share works, in plain language */}
      <MaritimeShipShareWorks />

      {/* SECTION 3: Vessel / Project Overview */}
      <MaritimeVesselOverview />

      {/* SECTION 4: Owner Benefits Breakdown */}
      <MaritimeOwnerBenefits />

      {/* SECTION 5: Current Opportunity Status */}
      <MaritimeOpportunityStatus />

      {/* SECTION 6: Legal & Registration Credentials */}
      <MaritimeLegalCredentials />

      {/* SECTION 7: Downloadable Brochure PDF */}
      <MaritimeBrochureDownload />

      {/* SECTION 8: Photo Gallery of the Vessel */}
      <MaritimeVesselGallery />

      {/* SECTION 9: Route / Operating Area Overview */}
      <MaritimeRouteOverview />

      {/* SECTION 10: Video Walkthrough of the Vessel */}
      <MaritimeVideoWalkthrough />

      {/* SECTION 11: CRM-linked Enquiry Form */}
      <MaritimeEnquiryForm />

      {/* SECTION 12: FAQ Accordion */}
      <MaritimeFAQ />

      {/* SECTION 13: Direct WhatsApp CTA Button & Floating Widget */}
      <MaritimeWhatsAppCTA />
    </main>
  );
}
