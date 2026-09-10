"use client";

import { useState, useEffect, useRef } from "react";
import { 
  FaUsers, 
  FaStar, 
  FaParking, 
  FaGlassCheers, 
  FaUtensils, 
  FaShieldAlt 
} from "react-icons/fa";

const milestones = [
  {
    icon: FaUsers,
    target: 95000,
    suffix: "+",
    label: "Event Guests Hosted",
    description: "Weddings, receptions, corporate meets & family celebrations served with elegance",
  },
  {
    icon: FaStar,
    target: 4.9,
    isDecimal: true,
    suffix: " ★",
    label: "Host Satisfaction",
    description: "Over 1,800+ positive reviews for grand hospitality and exquisite menu taste",
  },
  {
    icon: FaGlassCheers,
    target: 500,
    suffix: "+",
    label: "Central AC Hall Capacity",
    description: "Column-free grand banquet layout configured for weddings & corporate conventions",
  },
  {
    icon: FaParking,
    target: 100,
    suffix: "+",
    label: "Valet Vehicle Bays",
    description: "Wide paved ground with dedicated valet personnel and 24/7 CCTV surveillance",
  },
  {
    icon: FaUtensils,
    target: 20,
    suffix: " Min",
    label: "Express Feast Guarantee",
    description: "Piping-hot Shahi Kacchi, Polao, Roast, and multi-cuisine buffet lines",
  },
  {
    icon: FaShieldAlt,
    target: 365,
    suffix: " Days",
    label: "24/7 Power Security",
    description: "Full industrial generator redundancy guaranteeing zero blackout downtime",
  },
];

export default function PartyCenterMilestoneCounter() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(milestones.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2000;
          const steps = 60;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

            setCounts(
              milestones.map((m) => {
                const val = m.target * easeOut(progress);
                return m.isDecimal ? parseFloat(val.toFixed(1)) : Math.floor(val);
              })
            );

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts(milestones.map((m) => m.target));
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="bg-[#F5F5F2] py-24 sm:py-32 text-neutral-950 border-b border-neutral-200">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border border-amber-700/30 bg-amber-50 px-4 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-amber-800 mb-4">
            <span>Our Track Record</span>
          </div>
          <h2 className="text-[clamp(2.2rem,4.5vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950">
            Grand celebrations by the numbers.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600">
            Engineered to deliver flawless event execution, royal feasts, and complete peace of mind for event hosts.
          </p>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-none border border-neutral-200 bg-white p-8 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:border-amber-600 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Top Amber Accent Line */}
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-amber-600 transition-all duration-500 group-hover:w-full" />

                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-none border border-amber-700/30 bg-amber-50 text-amber-800">
                    <Icon className="text-lg" />
                  </div>
                  <span className="font-mono text-xs font-bold text-neutral-400">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-950 group-hover:text-amber-800 transition-colors">
                    {item.isDecimal ? counts[index].toFixed(1) : counts[index].toLocaleString()}
                  </span>
                  <span className="text-2xl font-bold text-amber-600">
                    {item.suffix}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-bold text-neutral-950 tracking-tight">
                  {item.label}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
