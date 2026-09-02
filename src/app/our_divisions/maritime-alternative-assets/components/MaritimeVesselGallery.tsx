import Image from "next/image";

export default function MaritimeVesselGallery() {
  const photos = [
    {
      title: "Pearl Dining Saloon & Lounge",
      category: "Interior Dining",
      src: "/images/brand/industrialpark.png",
      caption: "Seafood fine dining restaurant offering 360-degree ocean view windows.",
    },
    {
      title: "VIP Balcony Stateroom Suite",
      category: "Luxury Cabins",
      src: "/images/brand/industrialpark.png",
      caption: "Spacious guest staterooms with private ocean-view verandas and en-suite marble baths.",
    },
    {
      title: "Panoramic Sun Deck & Sky Bar",
      category: "Outdoor Deck",
      src: "/images/brand/industrialpark.png",
      caption: "Top deck featuring open-air lounge seating, jacuzzi, and sunset cocktail bar.",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0077b6] bg-cyan-100 px-3.5 py-1 rounded-full">
            Visual Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-[#07162c]">
            Vessel Architecture & Photo Gallery
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Take a visual tour inside the luxury suites, dining saloons, and sun decks of Sampan Floating Pearl.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className="bg-cyan-50/40 border border-cyan-900/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative aspect-video bg-[#07162c] overflow-hidden p-6 flex items-center justify-center">
                <div className="relative w-40 h-40">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="absolute top-3 left-3 bg-black/60 text-amber-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                  {photo.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-[#07162c] font-serif group-hover:text-[#0077b6] transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
