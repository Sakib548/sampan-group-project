export default function ResortPricingComparison() {
  const comparison = [
    { feature: "Resort Entry & Grounds Access", dayVisitor: "Paid Day Pass (2,000 BDT)", member: "Unlimited Free Year-Round Access" },
    { feature: "Golf Fairway & Tee Times", dayVisitor: "Standard Green Fee Rates", member: "Priority Tee Times + 50% Off Green Fees" },
    { feature: "Toptracer Practice Range", dayVisitor: "Standard Hourly Bay Rates", member: "Complimentary 2 Hours Weekly + VIP Bay" },
    { feature: "VVIP Villa Booking Discount", dayVisitor: "Standard Seasonal Tariff", member: "30% Member Discount Year-Round" },
    { feature: "SAGCL VIP Club Lounge Access", dayVisitor: "Restricted / VIP Only", member: "Exclusive Full Member & Guest Access" },
    { feature: "Boating & Wellness Spa", dayVisitor: "À la Carte Retail Price", member: "20% Discount on Spa & Lake Boating" },
    { feature: "Annual Member Gala & Tournaments", dayVisitor: "Not Eligible", member: "Complimentary VIP Gala Invitation" },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#f8faf6] text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full">
            Privilege Comparison Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-[#071d13]">
            SAGCL Membership vs. Day-Visitor Privileges
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Compare the exclusive benefits, discounted rates, and VIP access unlocked with SAGCL membership.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white border border-emerald-900/10 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-12 bg-[#071d13] text-white p-4 sm:p-6 text-xs font-bold uppercase tracking-wider">
            <div className="col-span-5 sm:col-span-4">Resort Feature / Privilege</div>
            <div className="col-span-3 text-center sm:text-left text-slate-300">Day Visitor Pass</div>
            <div className="col-span-4 sm:col-span-5 text-right font-serif text-amber-400">SAGCL Member Privileges</div>
          </div>

          <div className="divide-y divide-slate-100 text-xs sm:text-sm">
            {comparison.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-emerald-50/40 transition-colors"
              >
                <div className="col-span-5 sm:col-span-4 font-bold text-[#071d13]">
                  {row.feature}
                </div>

                <div className="col-span-3 text-center sm:text-left text-slate-500 font-medium">
                  {row.dayVisitor}
                </div>

                <div className="col-span-4 sm:col-span-5 text-right font-semibold text-emerald-800">
                  <span className="text-amber-500 font-bold mr-1.5">✓</span>
                  {row.member}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
