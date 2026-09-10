"use client";

import { useState } from "react";

export default function PartyCenterMenuCustomizer() {
  const [serviceMode, setServiceMode] = useState<"fullVenue" | "cateringOnly">("fullVenue");
  const [selectedItems, setSelectedItems] = useState<string[]>([
    "Shahi Mutton Kacchi Biryani",
    "Chicken Roast",
    "Borhani",
  ]);

  const menuOptions = [
    { name: "Shahi Mutton Kacchi Biryani", category: "Rice Feasts" },
    { name: "Chicken Roast & Chinigura Polao", category: "Rice Feasts" },
    { name: "Beef Bhuna / Rezala", category: "Curries & Meats" },
    { name: "Jali Kabab / Mutton Boti Kabab", category: "Kababs" },
    { name: "Borhani & Mint Laban", category: "Beverages" },
    { name: "Shahi Firni / Saffron Jorda", category: "Desserts" },
  ];

  const toggleItem = (name: string) => {
    if (selectedItems.includes(name)) {
      setSelectedItems(selectedItems.filter((i) => i !== name));
    } else {
      setSelectedItems([...selectedItems, name]);
    }
  };

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full">
            Custom Catering & Menu Builder
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-slate-900">
            Menu Customization & Catering-Only Option
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Customize your feast menu item-by-item or order outdoor catering delivered directly to your external wedding venue or home.
          </p>

          {/* Service Mode Selector */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setServiceMode("fullVenue")}
              className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                serviceMode === "fullVenue"
                  ? "bg-[#1e1b18] text-amber-400 shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-amber-50"
              }`}
            >
              🏰 In-Hall Venue + Catering Service
            </button>
            <button
              onClick={() => setServiceMode("cateringOnly")}
              className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                serviceMode === "cateringOnly"
                  ? "bg-[#1e1b18] text-amber-400 shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-amber-50"
              }`}
            >
              🛵 Outdoor Catering-Only Service
            </button>
          </div>
        </div>

        <div className="bg-amber-50/40 border border-amber-900/10 rounded-3xl p-8 sm:p-12 shadow-lg">
          <h3 className="text-xl font-bold font-serif text-slate-900 mb-4">
            Select Your Custom Menu Items:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {menuOptions.map((opt, idx) => {
              const isSelected = selectedItems.includes(opt.name);
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => toggleItem(opt.name)}
                  className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                    isSelected
                      ? "bg-[#1e1b18] text-amber-300 border-amber-400 shadow-md"
                      : "bg-white text-slate-800 border-slate-200 hover:border-amber-400"
                  }`}
                >
                  <div>
                    <span className="text-[10px] uppercase font-bold text-amber-600 block">
                      {opt.category}
                    </span>
                    <span className="text-xs font-bold font-serif">{opt.name}</span>
                  </div>
                  <span className="text-sm font-bold">{isSelected ? "✓" : "+"}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-6 border-t border-amber-900/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-500 font-medium">Selected Custom Items:</span>
              <div className="text-sm font-bold text-slate-900">
                {selectedItems.length} Feast Item(s) Chosen
              </div>
            </div>

            <a
              href="#booking-form"
              className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              Get Custom Quote for Selected Menu →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
