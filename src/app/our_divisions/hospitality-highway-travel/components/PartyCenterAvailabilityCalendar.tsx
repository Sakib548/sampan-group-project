"use client";

import { useState } from "react";

export default function PartyCenterAvailabilityCalendar() {
  const [selectedMonth, setSelectedMonth] = useState("November 2026");

  const dates = [
    { date: "Fri, Nov 6", slot: "Evening Reception", status: "Booked", color: "bg-red-100 text-red-700 border-red-200" },
    { date: "Sat, Nov 7", slot: "Day & Evening", status: "Available", color: "bg-emerald-100 text-emerald-800 border-emerald-200" },
    { date: "Fri, Nov 13", slot: "Evening Wedding", status: "Booked", color: "bg-red-100 text-red-700 border-red-200" },
    { date: "Sat, Nov 14", slot: "Day Seminar", status: "Available", color: "bg-emerald-100 text-emerald-800 border-emerald-200" },
    { date: "Fri, Nov 20", slot: "Day & Evening", status: "Available", color: "bg-emerald-100 text-emerald-800 border-emerald-200" },
    { date: "Sat, Nov 21", slot: "Evening Party", status: "Pending", color: "bg-amber-100 text-amber-800 border-amber-200" },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full">
            Real-Time Date Status
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-slate-900">
            Party Hall Availability Calendar
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Check open weekend dates and peak wedding season availability.
          </p>

          {/* Month Selector Buttons */}
          <div className="flex justify-center gap-3 mt-6">
            {["October 2026", "November 2026", "December 2026"].map((m) => (
              <button
                key={m}
                onClick={() => setSelectedMonth(m)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedMonth === m
                    ? "bg-[#1e1b18] text-amber-400 shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-amber-50"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {dates.map((d, idx) => (
            <div
              key={idx}
              className="bg-amber-50/40 border border-amber-900/10 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-slate-900 font-serif">
                    {d.date}
                  </span>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border ${d.color}`}>
                    {d.status}
                  </span>
                </div>
                <p className="text-xs text-slate-600">
                  Time Slot: <strong>{d.slot}</strong>
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-amber-900/10 text-right">
                {d.status === "Available" ? (
                  <a href="#booking-form" className="text-xs font-bold text-amber-700 hover:underline">
                    Reserve This Date →
                  </a>
                ) : (
                  <span className="text-xs text-slate-400 italic">Date Locked</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
