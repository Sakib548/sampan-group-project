"use client";

import { useState } from "react";
import Image from "next/image";

interface MediaItem {
  id: string;
  title: string;
  category: string;
  type: "photo" | "video";
  src: string;
  caption: string;
}

interface GolfMediaGalleryProps {
  title?: string;
  subtitle?: string;
  mediaItems: MediaItem[];
}

export default function GolfMediaGallery({
  title = "Photo & Video Gallery",
  subtitle = "Take a visual tour inside our TrackMan simulator bays, floodlit night driving range, short game greens, and player lounges.",
  mediaItems,
}: GolfMediaGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(mediaItems.map((item) => item.category)))];

  const filteredItems =
    activeCategory === "All"
      ? mediaItems
      : mediaItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#f8faf6] text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full">
            Visual Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-[#091e15]">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            {subtitle}
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-[#091e15] text-amber-400 shadow-md"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-emerald-50 hover:text-emerald-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden border border-emerald-900/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-video overflow-hidden bg-emerald-950">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-amber-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/20">
                  {item.category}
                </span>
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-12 h-12 rounded-full bg-amber-400 text-emerald-950 flex items-center justify-center font-bold shadow-lg">
                      ▶
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-[#091e15] group-hover:text-emerald-700 transition-colors font-serif">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
