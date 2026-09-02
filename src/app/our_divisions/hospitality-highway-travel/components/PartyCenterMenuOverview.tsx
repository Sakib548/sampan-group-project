"use client";

import { useState } from "react";

export default function PartyCenterMenuOverview() {
  const [activeCategory, setActiveCategory] = useState<"bengali" | "chinese" | "bbq">("bengali");

  const bengaliMenu = [
    { name: "Special Shahi Kacchi Biryani", desc: "Premium Basmati rice with tender Mutton pieces, aloo, and secret aromatic spices." },
    { name: "Chicken Roast & Plain Polao", desc: "Golden fried quarter chicken in rich gravy served with aromatic Chinigura rice." },
    { name: "Beef Bhuna & Jali Kabab", desc: "Slow-cooked tender beef curry paired with spiced minced beef kababs." },
    { name: "Borhani, Salad & Shahi Firni", desc: "Traditional digestive sour yogurt drink, fresh garden salad, and saffron rice dessert." },
  ];

  const chineseMenu = [
    { name: "Special Mixed Fried Rice / Chowmein", desc: "Wok-tossed Jasmine rice with prawns, chicken, eggs, and garden vegetables." },
    { name: "Szechuan Chili Chicken & Beef Sizzling", desc: "Spicy wok-fried chicken in red chili garlic sauce and sizzling beef strips." },
    { name: "Crispy Fried Prawns & Spring Rolls", desc: "Golden batter-fried king prawns served with sweet chili dip." },
    { name: "Hot & Sour Soup / Corn Soup", desc: "Classic appetizer soup served with wonton crisps." },
  ];

  const bbqMenu = [
    { name: "Live Charcoal Chicken Boti Kabab", desc: "Marinated boneless chicken cubes charred over live coals." },
    { name: "Live Beef Sheek Kabab & Naan", desc: "Spiced minced beef skewers served with hot butter naan bread." },
    { name: "Grilled Fish Tikka & Smoked Wings", desc: "Fresh fish fillets marinated in green herbs and wood-smoked chicken wings." },
    { name: "Assorted Dips, Mint Chutney & Salads", desc: "Tangy tamarind sauce, garlic mayo, and fresh cut cucumber salads." },
  ];

  const currentMenu =
    activeCategory === "bengali" ? bengaliMenu : activeCategory === "chinese" ? chineseMenu : bbqMenu;

  return (
    <section id="menu-section" className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full">
            Master Chef Culinary Delights
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-slate-900">
            Menu Overview & Feast Offerings
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Choose from our curated traditional wedding feasts, Chinese/Continental buffets, or live charcoal BBQ setups.
          </p>

          {/* Menu Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveCategory("bengali")}
              className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === "bengali"
                  ? "bg-[#1e1b18] text-amber-400 shadow-lg scale-[1.02]"
                  : "bg-slate-100 text-slate-600 border border-slate-200 hover:bg-amber-50"
              }`}
            >
              🍚 Traditional Royal Shahi Feast
            </button>
            <button
              onClick={() => setActiveCategory("chinese")}
              className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === "chinese"
                  ? "bg-[#1e1b18] text-amber-400 shadow-lg scale-[1.02]"
                  : "bg-slate-100 text-slate-600 border border-slate-200 hover:bg-amber-50"
              }`}
            >
              🥢 Chinese & Continental Buffet
            </button>
            <button
              onClick={() => setActiveCategory("bbq")}
              className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === "bbq"
                  ? "bg-[#1e1b18] text-amber-400 shadow-lg scale-[1.02]"
                  : "bg-slate-100 text-slate-600 border border-slate-200 hover:bg-amber-50"
              }`}
            >
              🔥 Live Charcoal BBQ Grill
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {currentMenu.map((item, idx) => (
            <div
              key={idx}
              className="bg-amber-50/40 border border-amber-900/10 rounded-2xl p-6 hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold text-slate-900 font-serif mb-2">
                {item.name}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
