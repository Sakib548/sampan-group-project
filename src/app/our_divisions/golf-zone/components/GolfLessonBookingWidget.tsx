"use client";

import { useState } from "react";

export default function GolfLessonBookingWidget() {
  const [selectedInstructor, setSelectedInstructor] = useState("David Ross, PGA (Head Pro)");
  const [selectedLessonType, setSelectedLessonType] = useState("1-on-1 TrackMan Swing Analysis (60 min)");
  const [selectedDate, setSelectedDate] = useState("2026-10-15");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("10:00 AM - 11:00 AM");
  const [booked, setBooked] = useState(false);

  const instructors = [
    "David Ross, PGA (Head Master Pro)",
    "Zainab Chowdhury (Junior Academy Dir.)",
    "Mahmudul Hasan (TPI Fitting Master)",
  ];

  const lessonTypes = [
    { title: "1-on-1 TrackMan Swing Analysis (60 min)", price: "4,500 BDT" },
    { title: "Short Game & Wedge Matrix Clinic (90 min)", price: "3,800 BDT" },
    { title: "Putting Studio & Video Optics Lab (45 min)", price: "3,000 BDT" },
    { title: "Junior Development Assessment (60 min)", price: "2,500 BDT" },
  ];

  const timeSlots = [
    "08:00 AM - 09:00 AM",
    "10:00 AM - 11:00 AM",
    "02:00 PM - 03:00 PM",
    "04:00 PM - 05:00 PM",
    "06:00 PM - 07:00 PM (Floodlit)",
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full">
            Online Booking System
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-[#091e15]">
            Reserve Lessons & TrackMan Tee Times
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Select your preferred PGA coach, lesson format, and time slot for a personalized swing analysis or tee time simulator session.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#091e15] to-emerald-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-emerald-700/40">
          {booked ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-amber-400 text-emerald-950 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-bold font-serif text-white">
                Lesson Reservation Confirmed!
              </h3>
              <div className="bg-emerald-900/60 border border-emerald-700/40 rounded-2xl p-6 max-w-lg mx-auto text-left text-xs space-y-2">
                <p><strong className="text-amber-400">Coach:</strong> {selectedInstructor}</p>
                <p><strong className="text-amber-400">Session:</strong> {selectedLessonType}</p>
                <p><strong className="text-amber-400">Date & Slot:</strong> {selectedDate} at {selectedTimeSlot}</p>
                <p><strong className="text-amber-400">Location:</strong> Sampan Golf Academy Studio Bay 1</p>
              </div>
              <button
                onClick={() => setBooked(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-xs uppercase tracking-wider transition-all"
              >
                Book Another Session
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Settings */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <label className="block text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2">
                    1. Select PGA Instructor
                  </label>
                  <div className="space-y-2">
                    {instructors.map((inst, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedInstructor(inst)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-xs font-semibold border transition-all ${
                          selectedInstructor === inst
                            ? "bg-emerald-600 text-white border-amber-400 shadow-md"
                            : "bg-emerald-900/40 text-emerald-100 border-emerald-800 hover:bg-emerald-900/70"
                        }`}
                      >
                        {inst}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2">
                    2. Select Lesson / Simulator Format
                  </label>
                  <div className="space-y-2">
                    {lessonTypes.map((lt, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setSelectedLessonType(lt.title)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-xs font-semibold border flex items-center justify-between transition-all ${
                          selectedLessonType === lt.title
                            ? "bg-emerald-600 text-white border-amber-400 shadow-md"
                            : "bg-emerald-900/40 text-emerald-100 border-emerald-800 hover:bg-emerald-900/70"
                        }`}
                      >
                        <span>{lt.title}</span>
                        <span className="font-bold text-amber-400 ml-2">{lt.price}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2">
                      3. Select Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-emerald-900/50 border border-emerald-700 text-white text-xs font-mono focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2">
                      4. Select Time Slot
                    </label>
                    <select
                      value={selectedTimeSlot}
                      onChange={(e) => setSelectedTimeSlot(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-emerald-900/50 border border-emerald-700 text-white text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-400"
                    >
                      {timeSlots.map((ts, idx) => (
                        <option key={idx} value={ts} className="bg-emerald-950 text-white">
                          {ts}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Right Booking Summary Box */}
              <div className="lg:col-span-5 bg-emerald-900/40 border border-emerald-700/40 rounded-2xl p-6 flex flex-col justify-between h-full">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4 pb-2 border-b border-emerald-700/40">
                    Booking Summary
                  </h4>
                  <div className="space-y-4 text-xs">
                    <div>
                      <span className="text-emerald-300 block font-medium">Instructor</span>
                      <span className="font-bold text-white text-sm">{selectedInstructor}</span>
                    </div>
                    <div>
                      <span className="text-emerald-300 block font-medium">Session Type</span>
                      <span className="font-bold text-white text-sm">{selectedLessonType}</span>
                    </div>
                    <div>
                      <span className="text-emerald-300 block font-medium">Date & Time</span>
                      <span className="font-bold text-white text-sm">{selectedDate} @ {selectedTimeSlot}</span>
                    </div>
                    <div>
                      <span className="text-emerald-300 block font-medium">Studio Technology</span>
                      <span className="text-emerald-200">TrackMan 4 Dual Radar + High-Speed Optics</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-emerald-700/40">
                  <button
                    type="button"
                    onClick={() => setBooked(true)}
                    className="w-full py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-xs uppercase tracking-wider shadow-xl transition-all"
                  >
                    Confirm Booking Reservation
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
