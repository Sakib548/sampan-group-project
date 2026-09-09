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
import { FaRoute, FaCalendarCheck, FaPhoneAlt, FaBed, FaCompass } from "react-icons/fa";

export default function SampanHighwayInnClient() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#F5F5F2] text-neutral-900 antialiased selection:bg-emerald-600 selection:text-white">

      {/* OVERVIEW (Hero & Brand Introduction) */}
      <HeroOverview onOpenBooking={() => scrollToSection("booking-widget")} />

      {/* ONLINE BOOKING WIDGET (Interactive Calculator & Instant Reservation) */}
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

      {/* PRESS / MEDIA MENTIONS CAROUSEL (National Press & Critics) */}
      {/* <PressMediaCarousel /> */}

      {/* GUEST REVIEWS (Verified Traveler Feedback & Rating Scorecard) */}
      {/* <GuestReviews /> */}

      {/* USER-GENERATED CONTENT FEED (#SampanHighwayInn Social Community) */}
      {/* <UGCFeed /> */}

      {/* BOOK / ENQUIRE CTA (Direct Hotline, WhatsApp & Instant Form) */}
      {/* <BookEnquireCTA onOpenBookingWidget={() => scrollToSection("booking-widget")} /> */}

      {/* Floating Highway Quick Navigation Bar (Square Style) */}
      <aside aria-label="Highway Quick Navigation" className="fixed bottom-6 inset-x-0 z-40 flex justify-center pointer-events-none px-4">
        <div className="pointer-events-auto bg-neutral-950/90 border border-white/20 backdrop-blur-xl px-4 py-2.5 rounded-none shadow-2xl flex items-center gap-2 sm:gap-4 text-xs font-mono font-bold text-white">
          <button
            onClick={() => scrollToSection("route-map")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-none hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <FaRoute className="text-emerald-400" />
            <span className="hidden sm:inline">Route</span>
          </button>

          <button
            onClick={() => scrollToSection("facilities")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-none hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <FaBed className="text-emerald-400" />
            <span className="hidden sm:inline">Facilities</span>
          </button>

          {/* <button
            onClick={() => scrollToSection("virtual-tour")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-none hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <FaCompass className="text-emerald-400" />
            <span className="hidden md:inline">360° Tour</span>
          </button> */}

          <button
            onClick={() => scrollToSection("booking-widget")}
            className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-1.5 rounded-none font-mono font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
          >
            <FaCalendarCheck />
            <span>Book Now</span>
          </button>

          <a
            href="tel:+880 1711-459387"
            className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-none transition-colors"
          >
            <FaPhoneAlt className="text-amber-400 text-[10px]" />
            <span className="hidden lg:inline">+880 1711-459387</span>
          </a>
        </div>
      </aside>

    </main>
  );
}
