"use client";

import { FaCheckCircle, FaStar, FaLeaf, FaShieldAlt } from "react-icons/fa";

interface PricingPackage {
  id: string;
  name: string;
  subtitle: string;
  priceBDT: string;
  unit: string;
  popular?: boolean;
  inclusions: string[];
  idealFor: string;
}

const packagesData: PricingPackage[] = [
  {
    id: "day-refresh-pass",
    name: "Day-Long Resort Refresh Pass",
    subtitle: "Ideal for Expressway Travelers & Day Visitors",
    priceBDT: "1,850",
    unit: "per guest",
    inclusions: [
      "Welcome Farm Juice & Morning Tea",
      "Lakeside Buffet Lunch",
      "Pedal Boating & Lake Access",
      "Botanical Trails & Garden Walk",
      "Petting Lawns & Relaxation Benches",
      "Complimentary Wi-Fi & Gated Parking",
    ],
    idealFor: "Family day trips & highway travelers looking for a refreshing nature break.",
  },
  {
    id: "eco-cottage-night",
    name: "Lakeview Eco-Cottage Stay",
    subtitle: "Overnight Luxury & Peaceful Retreat",
    priceBDT: "6,500",
    unit: "per night / 2 guests",
    popular: true,
    inclusions: [
      "AC Eco-Cottage with Private Lake Balcony",
      "Complimentary Breakfast & Dinner",
      "Evening Clay-Oven BBQ Dinner",
      "Unlimited Boating & Pier Angling Access",
      "Welcome Fruit Basket & Refreshments",
      "24/7 Concierge & Hospitality Service",
    ],
    idealFor: "Couples & families seeking an immersive, peaceful weekend lake stay.",
  },
  {
    id: "family-agro-suite",
    name: "Family Lakeside Villa (2D/1N)",
    subtitle: "Two-Bedroom Waterfront Family Villa",
    priceBDT: "12,000",
    unit: "per night / up to 5 guests",
    inclusions: [
      "Spacious 2-Bedroom Lakeview Villa",
      "All Meals (Breakfast, Lunch & BBQ Dinner)",
      "Private Boat & Fishing Gear Access",
      "Evening Bonfire & Campfire Setup",
      "Outdoor Lawn Games & Badminton",
      "Dedicated Cottage Caretaker",
    ],
    idealFor: "Larger families and friend groups seeking privacy, comfort, and space.",
  },
  {
    id: "corporate-wellness",
    name: "Corporate Eco-Retreat Package",
    subtitle: "Executive Offsite & Team Outing",
    priceBDT: "2,200",
    unit: "per delegate (Min 15)",
    inclusions: [
      "Exclusive Lawn & Event Pavilion Access",
      "Welcome Drinks & Gourmet Buffet Lunch",
      "Morning & Evening Artisanal Tea Break",
      "Team Building Grounds & Boating",
      "Sound & Projection AV Equipment",
      "Reserved Coach & Car Parking",
    ],
    idealFor: "Corporate teams, strategy retreats, AGMs, and annual family days.",
  },
];

export default function PricingOverview({ onSelectPackage }: { onSelectPackage?: (pkgName: string) => void }) {
  return (
    <section id="packages" className="py-24 bg-[#10251b] text-white relative border-b border-white/10">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#b9e583]/40 bg-[#b9e583]/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#b9e583] mb-4">
              <FaLeaf className="text-xs" />
              <span>Resort Stay Packages</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
              Stay Packages &amp; <span className="font-semibold text-[#b9e583]">Day Passes</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/70 leading-relaxed font-normal">
            Transparent, all-inclusive pricing with zero hidden charges. All packages include access to the scenic lake and resort grounds.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packagesData.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative border p-8 flex flex-col justify-between transition-all duration-500 ${
                pkg.popular
                  ? "border-[#b9e583] bg-[#0c1c14] shadow-2xl shadow-[#b9e583]/10"
                  : "border-white/15 bg-[#0c1c14]/80 hover:border-white/30"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#b9e583] text-[#0c1c14] font-mono text-[10px] font-bold uppercase tracking-widest px-4 py-1 shadow-md">
                  Most Popular Retreat
                </div>
              )}

              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#b9e583]">
                  {pkg.subtitle}
                </span>

                <h3 className="text-xl font-bold text-white mt-2 leading-snug">
                  {pkg.name}
                </h3>

                {/* Price Display */}
                <div className="my-6 border-y border-white/10 py-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-mono text-[#b9e583]">BDT</span>
                    <span className="text-4xl font-bold text-white font-mono">{pkg.priceBDT}</span>
                  </div>
                  <span className="text-xs text-white/50 font-mono mt-1 block">{pkg.unit}</span>
                </div>

                <p className="text-xs text-white/70 italic mb-6 leading-relaxed font-normal">
                  "{pkg.idealFor}"
                </p>

                {/* Inclusions List */}
                <div className="space-y-3 mb-8">
                  <span className="font-mono text-[11px] font-bold uppercase text-white/80 block">
                    What's Included:
                  </span>
                  {pkg.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-white/80">
                      <FaCheckCircle className="text-[#b9e583] text-[11px] mt-0.5 shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href="#booking-widget"
                  onClick={() => onSelectPackage && onSelectPackage(pkg.name)}
                  className={`w-full inline-flex items-center justify-center py-3.5 px-4 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                    pkg.popular
                      ? "bg-[#b9e583] hover:bg-[#a6db6c] text-[#0c1c14] shadow-lg shadow-[#b9e583]/20"
                      : "bg-white/10 hover:bg-white text-white hover:text-[#0c1c14] border border-white/20"
                  }`}
                >
                  Book This Package
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Trust Note */}
        <div className="mt-12 p-6 border border-white/15 bg-[#0c1c14] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/70">
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-xl text-[#b9e583]" />
            <span>Guaranteed organic food quality &amp; hygienic sanitation standards across all accommodations.</span>
          </div>
          <span className="text-[#b9e583] font-bold">Custom Group Quotes Available</span>
        </div>

      </div>
    </section>
  );
}
