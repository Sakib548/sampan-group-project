"use client";

import { useState } from "react";

export default function GolfLeaderboard() {
  const [activeTab, setActiveTab] = useState<"longest" | "accuracy">("longest");

  const longestDriveLeaders = [
    { rank: 1, name: "Farhan Ahmed", scoreMetric: "318 Yards", bay: "Bay 12 (Toptracer VIP)", date: "Aug 28, 2026", club: "Callaway Paradym 9.0°" },
    { rank: 2, name: "Zubair Rahman", scoreMetric: "305 Yards", bay: "Bay 04 (Standard Tee)", date: "Aug 29, 2026", club: "TaylorMade Qi10 10.5°" },
    { rank: 3, name: "Imtiaz Hossain", scoreMetric: "298 Yards", bay: "Bay 15 (Executive Suite)", date: "Aug 30, 2026", club: "Titleist TSR3 9.0°" },
    { rank: 4, name: "Nafis Abdullah", scoreMetric: "289 Yards", bay: "Bay 08 (Standard Tee)", date: "Sep 01, 2026", club: "PING G430 MAX" },
    { rank: 5, name: "Sajid Khan", scoreMetric: "282 Yards", bay: "Bay 02 (Standard Tee)", date: "Sep 01, 2026", club: "Cobra Darkspeed" },
  ];

  const pinAccuracyLeaders = [
    { rank: 1, name: "Tariqul Islam", scoreMetric: "0.8 Feet to Pin", bay: "Bay 07 (Target Island)", date: "Aug 30, 2026", club: "Titleist Vokey 56°" },
    { rank: 2, name: "Saad Mahmud", scoreMetric: "1.4 Feet to Pin", bay: "Bay 11 (Toptracer VIP)", date: "Aug 29, 2026", club: "Mizuno Pro 245 8-Iron" },
    { rank: 3, name: "Asif Iqbal", scoreMetric: "2.1 Feet to Pin", bay: "Bay 03 (Standard Tee)", date: "Aug 31, 2026", club: "Callaway Jaws Raw 52°" },
    { rank: 4, name: "Kazi Nabil", scoreMetric: "2.7 Feet to Pin", bay: "Bay 14 (Executive Suite)", date: "Sep 01, 2026", club: "PING Glide 4.0 50°" },
    { rank: 5, name: "Rezaul Karim", scoreMetric: "3.2 Feet to Pin", bay: "Bay 09 (Standard Tee)", date: "Sep 02, 2026", club: "TaylorMade MG4 60°" },
  ];

  const currentLeaders = activeTab === "longest" ? longestDriveLeaders : pinAccuracyLeaders;

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-[#091e15] to-emerald-950 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-amber-950/80 px-3.5 py-1 rounded-full border border-amber-800">
            Leaderboard & Live Telemetry
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-white">
            Toptracer Range Monthly Challenge
          </h2>
          <p className="text-base sm:text-lg text-emerald-100/70 mt-4 leading-relaxed">
            Every shot tracked automatically by Toptracer high-speed cameras. Compete for monthly trophies and pro shop gear vouchers!
          </p>

          {/* Selector Tabs */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setActiveTab("longest")}
              className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "longest"
                  ? "bg-amber-400 text-emerald-950 shadow-lg scale-[1.02]"
                  : "bg-emerald-900/60 text-emerald-200 border border-emerald-700/50 hover:bg-emerald-800"
              }`}
            >
              🚀 Longest Drive Challenge
            </button>
            <button
              onClick={() => setActiveTab("accuracy")}
              className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "accuracy"
                  ? "bg-amber-400 text-emerald-950 shadow-lg scale-[1.02]"
                  : "bg-emerald-900/60 text-emerald-200 border border-emerald-700/50 hover:bg-emerald-800"
              }`}
            >
              🎯 Closest to Pin Accuracy
            </button>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="max-w-4xl mx-auto bg-emerald-900/40 border border-emerald-700/40 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-12 bg-emerald-950/80 px-6 py-4 text-xs font-bold text-emerald-300 uppercase tracking-wider border-b border-emerald-800">
            <div className="col-span-2 sm:col-span-1">Rank</div>
            <div className="col-span-5 sm:col-span-4">Golfer Name</div>
            <div className="col-span-5 sm:col-span-4 text-right sm:text-left font-mono">
              {activeTab === "longest" ? "Distance" : "Proximity score"}
            </div>
            <div className="hidden sm:block sm:col-span-3 text-right">Bay & Equipment</div>
          </div>

          <div className="divide-y divide-emerald-800/30 text-xs sm:text-sm">
            {currentLeaders.map((leader) => (
              <div
                key={leader.rank}
                className="grid grid-cols-12 px-6 py-4 items-center hover:bg-emerald-900/30 transition-colors"
              >
                <div className="col-span-2 sm:col-span-1 font-bold">
                  {leader.rank === 1 && <span className="text-amber-400 text-lg">🥇 1</span>}
                  {leader.rank === 2 && <span className="text-slate-300 text-lg">🥈 2</span>}
                  {leader.rank === 3 && <span className="text-amber-600 text-lg">🥉 3</span>}
                  {leader.rank > 3 && <span className="text-emerald-300 ml-2">#{leader.rank}</span>}
                </div>

                <div className="col-span-5 sm:col-span-4 font-semibold text-white">
                  {leader.name}
                  <span className="block text-[10px] text-emerald-300/70 font-normal sm:hidden">
                    {leader.bay}
                  </span>
                </div>

                <div className="col-span-5 sm:col-span-4 text-right sm:text-left font-mono font-bold text-amber-400 text-base">
                  {leader.scoreMetric}
                </div>

                <div className="hidden sm:block sm:col-span-3 text-right text-xs text-emerald-200/80">
                  <div className="font-medium text-white">{leader.bay}</div>
                  <div className="text-[10px] text-emerald-300/60">{leader.club}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
