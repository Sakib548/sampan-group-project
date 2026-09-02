"use client";

import { useState, useEffect } from "react";

export default function LSHSIntakeCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 28,
    hours: 14,
    minutes: 42,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        return { ...prev, seconds: 59, minutes: (prev.minutes - 1 + 60) % 60 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const intakes = [
    {
      name: "Autumn 2026 CIPS Batch",
      examWindow: "November 2026 CIPS Exams",
      deadline: "September 30, 2026",
      status: "Admissions Closing Soon",
    },
    {
      name: "Winter 2027 CIPS Batch",
      examWindow: "March 2027 CIPS Exams",
      deadline: "December 15, 2026",
      status: "Pre-Registration Open",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b73b9] bg-sky-100 px-3.5 py-1 rounded-full">
            Intake Countdown & Calendar
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-slate-900">
            Upcoming CIPS Exam Intake Deadlines
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Secure your seat for the Autumn 2026 batch before the CIPS UK registration window closes.
          </p>
        </div>

        {/* Live Ticker Box */}
        <div className="bg-[#0c4a6e] text-white rounded-3xl p-8 sm:p-12 shadow-2xl max-w-4xl mx-auto text-center border border-sky-700/40 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f4d210] bg-sky-950 px-3.5 py-1 rounded-full border border-sky-800">
            Registration Deadline Ticker — Autumn 2026 Batch
          </span>

          <div className="grid grid-cols-4 gap-4 max-w-xl mx-auto my-8">
            <div className="bg-sky-950/80 border border-sky-800/60 rounded-2xl p-4">
              <div className="text-3xl sm:text-4xl font-bold font-mono text-[#f4d210]">
                {timeLeft.days}
              </div>
              <div className="text-[10px] uppercase font-bold text-sky-200 mt-1">Days</div>
            </div>
            <div className="bg-sky-950/80 border border-sky-800/60 rounded-2xl p-4">
              <div className="text-3xl sm:text-4xl font-bold font-mono text-[#f4d210]">
                {timeLeft.hours}
              </div>
              <div className="text-[10px] uppercase font-bold text-sky-200 mt-1">Hours</div>
            </div>
            <div className="bg-sky-950/80 border border-sky-800/60 rounded-2xl p-4">
              <div className="text-3xl sm:text-4xl font-bold font-mono text-[#f4d210]">
                {timeLeft.minutes}
              </div>
              <div className="text-[10px] uppercase font-bold text-sky-200 mt-1">Mins</div>
            </div>
            <div className="bg-sky-950/80 border border-sky-800/60 rounded-2xl p-4">
              <div className="text-3xl sm:text-4xl font-bold font-mono text-[#f4d210]">
                {timeLeft.seconds}
              </div>
              <div className="text-[10px] uppercase font-bold text-sky-200 mt-1">Secs</div>
            </div>
          </div>

          <a
            href="#enrollment-form"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#f4d210] hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
          >
            Register Before Timer Expires →
          </a>
        </div>

        {/* Intakes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {intakes.map((it, idx) => (
            <div
              key={idx}
              className="bg-sky-50/60 border border-sky-900/10 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900 bg-[#f4d210] px-2.5 py-1 rounded-md mb-2 inline-block">
                  {it.status}
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  {it.name}
                </h3>
                <p className="text-xs text-slate-600 mt-2">
                  Target Exam Window: <strong>{it.examWindow}</strong>
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Registration Cut-off: <strong className="text-[#0b73b9]">{it.deadline}</strong>
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-sky-900/10">
                <a href="#enrollment-form" className="text-xs font-bold text-[#0b73b9] hover:underline">
                  Enroll in Batch →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
