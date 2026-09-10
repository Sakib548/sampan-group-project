"use client";

import { useState } from "react";

export default function GolfBayBookingWidget() {
  const [bayType, setBayType] = useState("Toptracer VIP Technology Bay");
  const [durationHours, setDurationHours] = useState(2);
  const [golfersCount, setGolfersCount] = useState(4);
  const [selectedTime, setSelectedTime] = useState("07:00 PM (Night Floodlit)");
  const [booked, setBooked] = useState(false);

  const bayTypes = [
    { name: "Standard Automated Tee Bay", ratePerHour: 1500, capacity: "Up to 4 Golfers" },
    { name: "Toptracer VIP Technology Bay", ratePerHour: 2500, capacity: "Up to 6 Golfers + Lounge" },
    { name: "Executive Suite Bay (Private Bar)", ratePerHour: 4000, capacity: "Up to 10 Golfers + Catering" },
  ];

  const currentBayObj = bayTypes.find((b) => b.name === bayType) || bayTypes[1];
  const totalPriceBDT = currentBayObj.ratePerHour * durationHours;

  const timeOptions = [
    "07:00 AM (Early Bird)",
    "11:00 AM (Daytime)",
    "04:00 PM (Sunset)",
    "07:00 PM (Night Floodlit)",
    "09:30 PM (Late Night)",
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full">
            Online Bay Booking System
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-[#091e15]">
            Reserve Your Driving Bay & Toptracer Suite
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Choose your preferred driving bay, play interactive Toptracer games, order snacks, and enjoy floodlit golf practice.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#091e15] to-emerald-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-emerald-700/40">
          {booked ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-amber-400 text-emerald-950 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-bold font-serif text-white">
                Driving Bay Reserved Successfully!
              </h3>
              <div className="bg-emerald-900/60 border border-emerald-700/40 rounded-2xl p-6 max-w-lg mx-auto text-left text-xs space-y-2">
                <p><strong className="text-amber-400">Bay Reserved:</strong> {bayType}</p>
                <p><strong className="text-amber-400">Group Size:</strong> {golfersCount} Players</p>
                <p><strong className="text-amber-400">Duration:</strong> {durationHours} Hours ({selectedTime})</p>
                <p><strong className="text-amber-400">Total Price:</strong> {totalPriceBDT.toLocaleString()} BDT</p>
              </div>
              <button
                onClick={() => setBooked(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-xs uppercase tracking-wider transition-all"
              >
                Reserve Another Bay
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Controls */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <label className="block text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2">
                    1. Select Bay Category
                  </label>
                  <div className="space-y-2">
                    {bayTypes.map((b, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setBayType(b.name)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-xs font-semibold border flex items-center justify-between transition-all ${
                          bayType === b.name
                            ? "bg-emerald-600 text-white border-amber-400 shadow-md"
                            : "bg-emerald-900/40 text-emerald-100 border-emerald-800 hover:bg-emerald-900/70"
                        }`}
                      >
                        <div>
                          <div className="font-bold">{b.name}</div>
                          <div className="text-[10px] text-emerald-200/80 font-normal">{b.capacity}</div>
                        </div>
                        <span className="font-bold text-amber-400">{b.ratePerHour.toLocaleString()} BDT / hr</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2">
                      2. Duration (Hours)
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4].map((hrs) => (
                        <button
                          key={hrs}
                          type="button"
                          onClick={() => setDurationHours(hrs)}
                          className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                            durationHours === hrs
                              ? "bg-amber-400 text-emerald-950 border-amber-300"
                              : "bg-emerald-900/50 text-white border-emerald-700 hover:bg-emerald-800"
                          }`}
                        >
                          {hrs} Hr{hrs > 1 ? "s" : ""}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2">
                      3. Number of Golfers
                    </label>
                    <select
                      value={golfersCount}
                      onChange={(e) => setGolfersCount(Number(e.target.value))}
                      className="w-full px-4 py-2.5 rounded-xl bg-emerald-900/50 border border-emerald-700 text-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                        <option key={n} value={n} className="bg-emerald-950 text-white">
                          {n} Golfer{n > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2">
                    4. Preferred Time Slot
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-emerald-900/50 border border-emerald-700 text-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    {timeOptions.map((t, idx) => (
                      <option key={idx} value={t} className="bg-emerald-950 text-white">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Calculator Summary */}
              <div className="lg:col-span-5 bg-emerald-900/40 border border-emerald-700/40 rounded-2xl p-6 flex flex-col justify-between h-full">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4 pb-2 border-b border-emerald-700/40">
                    Live Bay Price Calculator
                  </h4>
                  <div className="space-y-4 text-xs">
                    <div>
                      <span className="text-emerald-300 block font-medium">Selected Bay</span>
                      <span className="font-bold text-white text-sm">{currentBayObj.name}</span>
                    </div>
                    <div>
                      <span className="text-emerald-300 block font-medium">Rate Breakdown</span>
                      <span className="font-mono text-emerald-200">
                        {currentBayObj.ratePerHour.toLocaleString()} BDT × {durationHours} hour(s)
                      </span>
                    </div>
                    <div>
                      <span className="text-emerald-300 block font-medium">Toptracer Ball Tracking</span>
                      <span className="text-amber-400 font-bold">Included (Unlimited Range Balls)</span>
                    </div>
                    <div>
                      <span className="text-emerald-300 block font-medium">Food & Beverage Service</span>
                      <span className="text-emerald-200">In-Bay Lounge Service Available</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-emerald-700/40 flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-200 uppercase tracking-wider">Total Amount:</span>
                    <span className="text-3xl font-bold font-serif text-amber-400">
                      {totalPriceBDT.toLocaleString()} BDT
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => setBooked(true)}
                    className="w-full py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-xs uppercase tracking-wider shadow-xl transition-all"
                  >
                    Confirm Bay Booking
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
