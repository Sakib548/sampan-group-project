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
import { FaRoute, FaCalendarCheck, FaPhoneAlt, FaLeaf, FaCompass, FaCamera } from "react-icons/fa";

export default function SampanEcoAgroClient() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-[#0c1c14] text-white antialiased selection:bg-[#b9e583] selection:text-[#0c1c14]">

      {/* 1. OVERVIEW (Hero with Dark Forest Contrast) */}
      <HeroOverview onOpenBooking={() => scrollToSection("book-enquire-cta")} />

      {/* 2. MILESTONE COUNTER (Track Record & Scale) */}
      {/* <MilestoneCounter /> */}

      {/* 3. FACILITIES / RESORT OFFERINGS LIST (Category Filtered Cards) */}
      <FacilitiesList />

      {/* 4. ROOM / PACKAGE PRICING OVERVIEW (Commented out per client request until pricing is finalized) */}
      {/* <PricingOverview onSelectPackage={() => scrollToSection("book-enquire-cta")} /> */}

      {/* 5. ONLINE BOOKING WIDGET (Commented out per client request until cost estimator/payment details are provided) */}
      {/* <OnlineBookingWidget /> */}

      {/* 6. PHOTO / VIDEO GALLERY (Resort Showcase & YouTube Video) */}
      <PhotoVideoGallery />

      {/* 7. DEDICATED HIGHWAY-ROUTE MAP (Corridor Map & Mile Markers) */}
      <HighwayRouteVisualizer />

      {/* 8. BOOK / ENQUIRE CTA (Direct Hotline, WhatsApp & Instant Form) */}
      <BookEnquireCTA onOpenBookingWidget={() => scrollToSection("book-enquire-cta")} />

      {/* Floating Quick Navigation Dock */}
      {/* <aside aria-label="Resort Quick Navigation" className="fixed bottom-6 inset-x-0 z-40 flex justify-center pointer-events-none px-4">
        <div className="pointer-events-auto bg-[#07130d]/65 border border-[#b9e583]/30 backdrop-blur-xl px-4 py-2.5 shadow-2xl flex items-center gap-2 sm:gap-4 text-xs font-mono font-bold text-white">

          <button
            onClick={() => scrollToSection("gallery")}
            className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <FaCamera className="text-[#b9e583]" />
            <span className="hidden sm:inline">Gallery</span>
          </button>

          <button
            onClick={() => scrollToSection("facilities")}
            className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <FaCompass className="text-[#b9e583]" />
            <span className="hidden sm:inline">Amenities</span>
          </button>

          <button
            onClick={() => scrollToSection("route-map")}
            className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <FaRoute className="text-[#b9e583]" />
            <span className="hidden md:inline">Route</span>
          </button>

          <button
            onClick={() => scrollToSection("book-enquire-cta")}
            className="flex items-center gap-1.5 bg-[#b9e583] hover:bg-[#a6db6c] text-[#0c1c14] px-4 py-1.5 font-mono font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
          >
            <FaCalendarCheck />
            <span>Inquire / Book</span>
          </button>

          <a
            href="tel:+8801929918408"
            className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 transition-colors"
          >
            <FaPhoneAlt className="text-[#b9e583] text-[10px]" />
            <span className="hidden lg:inline">+880 1929-918408</span>
          </a>

        </div>
      </aside> */}

    </main>
  );
}
