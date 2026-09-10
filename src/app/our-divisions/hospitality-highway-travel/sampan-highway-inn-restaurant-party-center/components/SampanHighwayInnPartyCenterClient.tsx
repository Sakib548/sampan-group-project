"use client";

import PartyCenterHeroOverview from "./PartyCenterHeroOverview";
import PartyCenterMilestoneCounter from "./PartyCenterMilestoneCounter";
import PartyCenterFacilitiesList from "./PartyCenterFacilitiesList";
import PartyCenterHighwayRouteVisualizer from "./PartyCenterHighwayRouteVisualizer";
import PartyCenterLocationAndMap from "./PartyCenterLocationAndMap";
import PartyCenterPhotoVideoGallery from "./PartyCenterPhotoVideoGallery";
import PartyCenterNearbyLocationModule from "./PartyCenterNearbyLocationModule";
import PartyCenterMenuOverview from "../../components/PartyCenterMenuOverview";
import PartyCenterAvailabilityCalendar from "../../components/PartyCenterAvailabilityCalendar";
import PartyCenterMenuCustomizer from "../../components/PartyCenterMenuCustomizer";
import PartyCenterVirtualTour from "../../components/PartyCenterVirtualTour";
import PartyCenterTestimonials from "../../components/PartyCenterTestimonials";
import PartyCenterDateCheckForm from "../../components/PartyCenterDateCheckForm";
import { FaRoute, FaCalendarCheck, FaPhoneAlt, FaGlassCheers } from "react-icons/fa";

export default function SampanHighwayInnPartyCenterClient() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#F5F5F2] text-neutral-900 antialiased selection:bg-amber-500 selection:text-slate-950">

      {/* OVERVIEW (Hero Header with current hero image & amber gradient) */}
      <PartyCenterHeroOverview onOpenBooking={() => scrollToSection("booking-form")} />

      {/* MILESTONE COUNTER (Track Record & Scale) */}
      <PartyCenterMilestoneCounter />

      {/* FACILITIES LIST (Venue Amenities & Infrastructure Grid) */}
      <PartyCenterFacilitiesList onSelectFacility={() => scrollToSection("booking-form")} />

      {/* MENU OVERVIEW & FEAST OFFERINGS */}
      <PartyCenterMenuOverview />

      {/* AVAILABILITY CALENDAR */}
      <PartyCenterAvailabilityCalendar />

      {/* MENU CUSTOMIZATION & CATERING BUILDER */}
      <PartyCenterMenuCustomizer />

      {/* HIGHWAY CORRIDOR ROUTE MAP */}
      <PartyCenterHighwayRouteVisualizer />

      {/* LOCATION + LIVE MAP & HUB DISTANCES */}
      <PartyCenterLocationAndMap />

      {/* PHOTO GALLERY (Masonry Lightbox Showcase) */}
      <PartyCenterPhotoVideoGallery />

      {/* VIRTUAL HALL & RESTAURANT TOUR */}
      <PartyCenterVirtualTour />

      {/* TESTIMONIALS & PAST EVENT REVIEWS */}
      <PartyCenterTestimonials />

      {/* "NEARBY AT THIS LOCATION" MODULE */}
      <PartyCenterNearbyLocationModule />

      {/* ONLINE DATE-CHECK & BOOKING REQUEST FORM */}
      <PartyCenterDateCheckForm />

      {/* Floating Highway Quick Navigation Bar (Matching Highway Inn with Amber Palette) */}
      <aside aria-label="Highway Quick Navigation" className="fixed bottom-6 inset-x-0 z-40 flex justify-center pointer-events-none px-4">
        <div className="pointer-events-auto bg-neutral-950/90 border border-white/20 backdrop-blur-xl px-4 py-2.5 rounded-none shadow-2xl flex items-center gap-2 sm:gap-4 text-xs font-mono font-bold text-white">
          <button
            onClick={() => scrollToSection("route-map")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-none hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <FaRoute className="text-amber-400" />
            <span className="hidden sm:inline">Route</span>
          </button>

          <button
            onClick={() => scrollToSection("facilities")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-none hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <FaGlassCheers className="text-amber-400" />
            <span className="hidden sm:inline">Facilities</span>
          </button>

          <button
            onClick={() => scrollToSection("booking-form")}
            className="flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 px-4 py-1.5 rounded-none font-mono font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
          >
            <FaCalendarCheck />
            <span>Book Date</span>
          </button>

          <a
            href="tel:+8801929918408"
            className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-none transition-colors"
          >
            <FaPhoneAlt className="text-amber-400 text-[10px]" />
            <span className="hidden lg:inline">+880 1929-918408</span>
          </a>
        </div>
      </aside>

    </main>
  );
}
