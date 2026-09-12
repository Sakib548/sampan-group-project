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
      {/* <PartyCenterMenuOverview /> */}

      {/* AVAILABILITY CALENDAR */}
      {/* <PartyCenterAvailabilityCalendar /> */}

      {/* MENU CUSTOMIZATION & CATERING BUILDER */}
      {/* <PartyCenterMenuCustomizer /> */}

      {/* HIGHWAY CORRIDOR ROUTE MAP */}
      <PartyCenterHighwayRouteVisualizer />

      {/* LOCATION + LIVE MAP & HUB DISTANCES */}
      <PartyCenterLocationAndMap />

      {/* PHOTO GALLERY (Masonry Lightbox Showcase) */}
      <PartyCenterPhotoVideoGallery />

      {/* VIRTUAL HALL & RESTAURANT TOUR */}
      <PartyCenterVirtualTour />

      {/* TESTIMONIALS & PAST EVENT REVIEWS */}
      {/* <PartyCenterTestimonials /> */}

      {/* "NEARBY AT THIS LOCATION" MODULE */}
      <PartyCenterNearbyLocationModule />

      {/* ONLINE DATE-CHECK & BOOKING REQUEST FORM */}
      {/* <PartyCenterDateCheckForm /> */}

      {/* Floating Highway Quick Navigation Bar (Only Icons and Text) */}
      {/* <aside aria-label="Highway Quick Navigation" className="fixed bottom-6 inset-x-0 z-40 flex justify-center pointer-events-none px-4">
        <div className="pointer-events-auto flex items-center gap-4 sm:gap-6 text-xs font-mono font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          <button
            onClick={() => scrollToSection("route-map")}
            className="flex items-center gap-1.5 text-neutral-200 hover:text-white transition-colors cursor-pointer"
          >
            <FaRoute className="text-amber-400 text-sm" />
            <span>Route</span>
          </button>

          <button
            onClick={() => scrollToSection("facilities")}
            className="flex items-center gap-1.5 text-neutral-200 hover:text-white transition-colors cursor-pointer"
          >
            <FaGlassCheers className="text-amber-400 text-sm" />
            <span>Facilities</span>
          </button>

          <button
            onClick={() => scrollToSection("booking-form")}
            className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <FaCalendarCheck className="text-sm" />
            <span>Book Date</span>
          </button>

          <a
            href="tel:+8801929918408"
            className="flex items-center gap-1.5 text-neutral-200 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <FaPhoneAlt className="text-amber-400 text-xs" />
            <span>+880 1929-918408</span>
          </a>
        </div>
      </aside> */}

    </main>
  );
}
