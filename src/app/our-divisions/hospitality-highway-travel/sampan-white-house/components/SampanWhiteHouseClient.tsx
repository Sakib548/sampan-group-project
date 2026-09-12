"use client";

import HeroOverview from "./HeroOverview";
import OnlineBookingWidget from "./OnlineBookingWidget";
import MilestoneCounter from "./MilestoneCounter";
import FacilitiesList from "./FacilitiesList";
import HighwayRouteVisualizer from "./HighwayRouteVisualizer";
import LocationAndMap from "./LocationAndMap";
import PricingOverview from "./PricingOverview";
import VirtualTourViewer from "./VirtualTourViewer";
import PhotoVideoGallery from "./PhotoVideoGallery";
import NearbyLocationModule from "./NearbyLocationModule";
import PressMediaCarousel from "./PressMediaCarousel";
import GuestReviews from "./GuestReviews";
import UGCFeed from "./UGCFeed";
import BookEnquireCTA from "./BookEnquireCTA";
import { FaRoute, FaCalendarCheck, FaPhoneAlt, FaBed, FaGlassCheers, FaCompass } from "react-icons/fa";

export default function SampanWhiteHouseClient() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#F5F5F2] text-neutral-900 antialiased selection:bg-[#e8b84b] selection:text-neutral-950">

      {/* OVERVIEW (Hero with Background Image & Transparent Navbar Dark Contrast) */}
      <HeroOverview onOpenBooking={() => scrollToSection("booking-widget")} />

      {/* ONLINE BOOKING WIDGET (Instant Calculator & Reservation) */}
      {/* <OnlineBookingWidget /> */}

      {/* MILESTONE COUNTER (Track Record & Scale) */}
      <MilestoneCounter />

      {/* FACILITIES / OFFERINGS LIST (Category Filtered Cards) */}
      <FacilitiesList />

      {/* DEDICATED HIGHWAY-ROUTE MAP (Corridor Map & Mile Markers) */}
      <HighwayRouteVisualizer />

      {/* LOCATION + LIVE MAP (GPS Coordinates, Hub Distances & Embedded Map) */}
      <LocationAndMap />

      {/* ROOM / PACKAGE PRICING OVERVIEW (Transparent Tiers & Inclusions) */}
      {/* <PricingOverview /> */}

      {/* VIRTUAL TOUR (360° Walkthrough Simulator & Interactive Hotspots) */}
      {/* <VirtualTourViewer /> */}

      {/* PHOTO / VIDEO GALLERY (Masonry Showcase & Drone Video) */}
      <PhotoVideoGallery />

      {/* "NEARBY AT THIS LOCATION" MODULE (Adjacent Assets & Attractions) */}
      <NearbyLocationModule />

      {/* PRESS / MEDIA MENTIONS CAROUSEL (National Press Mentions) */}
      {/* <PressMediaCarousel /> */}

      {/* GUEST REVIEWS (Verified Traveler Feedback & Rating Scorecard) */}
      {/* <GuestReviews /> */}

      {/* USER-GENERATED CONTENT FEED (#SampanWhiteHouse Community) */}
      {/* <UGCFeed /> */}

      {/* BOOK / ENQUIRE CTA (Direct Hotline, WhatsApp & Instant Form) */}
      {/* <BookEnquireCTA onOpenBookingWidget={() => scrollToSection("booking-widget")} /> */}

      {/* Floating Highway Quick Navigation Bar (Only Icons and Text) */}
      {/* <aside aria-label="Highway Quick Navigation" className="fixed bottom-6 inset-x-0 z-40 flex justify-center pointer-events-none px-4">
        <div className="pointer-events-auto flex items-center gap-4 sm:gap-6 text-xs font-mono font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          <button
            onClick={() => scrollToSection("route-map")}
            className="flex items-center gap-1.5 text-neutral-200 hover:text-white transition-colors cursor-pointer"
          >
            <FaRoute className="text-[#e8b84b] text-sm" />
            <span>Route</span>
          </button>

          <button
            onClick={() => scrollToSection("facilities")}
            className="flex items-center gap-1.5 text-neutral-200 hover:text-white transition-colors cursor-pointer"
          >
            <FaBed className="text-[#e8b84b] text-sm" />
            <span>Facilities</span>
          </button>

          <button
            onClick={() => scrollToSection("booking-widget")}
            className="flex items-center gap-1.5 text-[#e8b84b] hover:text-[#f3cd6d] font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <FaCalendarCheck className="text-sm" />
            <span>Book Now</span>
          </button>

          <a
            href="tel:+8801929918408"
            className="flex items-center gap-1.5 text-neutral-200 hover:text-[#e8b84b] transition-colors cursor-pointer"
          >
            <FaPhoneAlt className="text-[#e8b84b] text-xs" />
            <span>+880 1929-918408</span>
          </a>
        </div>
      </aside> */}

    </main>
  );
}
