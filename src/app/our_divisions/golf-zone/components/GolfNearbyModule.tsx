import Image from "next/image";
import Link from "next/link";

interface NearbyConcern {
  name: string;
  category: string;
  distance: string;
  tagline: string;
  href: string;
  logo: string;
}

interface GolfNearbyModuleProps {
  currentStoreName: string;
  locationHubName?: string;
  nearbyConcerns?: NearbyConcern[];
}

export default function GolfNearbyModule({
  currentStoreName,
  locationHubName = "Sampan Agro & Golf Complex",
  nearbyConcerns = [
    {
      name: "Sampan Agro & Golf Resort",
      category: "Hospitality & Leisure",
      distance: "Adjacent (300 meters)",
      tagline: "Integrated resort, dining, pool, and family leisure destination.",
      href: "/our_divisions/hospitality-highway-travel/sampan-agro-golf-resort",
      logo: "/images/brand/agroandgolf.png",
    },
    {
      name: "Sampan Short Drive Range",
      category: "Golf Zone",
      distance: "Adjacent (100 meters)",
      tagline: "Toptracer practice bays, night floodlit driving, and corporate events.",
      href: "/our_divisions/golf-zone/sampan-short-drive-range",
      logo: "/images/brand/golfrage.png",
    },
    {
      name: "Sampan Cafe Metro",
      category: "Real Estate & Dining",
      distance: "4 km",
      tagline: "Hydro car wash, auto showroom, and artisanal garden cafe.",
      href: "/our_divisions/real-state-and-land-investment/sampan-cafe-metro",
      logo: "/images/brand/sampanauto.png",
    },
    {
      name: "Sampan Highway Inn",
      category: "Hospitality & Leisure",
      distance: "6 km",
      tagline: "Flagship highway stopover, premium hotel rooms, and restaurant.",
      href: "/our_divisions/hospitality-highway-travel/sampan-highway-inn",
      logo: "/images/brand/sampanhighwayinn.png",
    },
  ],
}: GolfNearbyModuleProps) {
  const filtered = nearbyConcerns.filter((c) => c.name !== currentStoreName);

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#091e15] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-800">
            Nearby at this Location
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-white">
            Integrated Destination Ecosystem
          </h2>
          <p className="text-base sm:text-lg text-emerald-100/70 mt-4 leading-relaxed">
            Conveniently connected to sister Sampan hospitality, dining, and leisure facilities within the {locationHubName}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="bg-emerald-950/60 border border-emerald-800/40 hover:border-emerald-500/50 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-950/80 px-2.5 py-1 rounded-md border border-amber-800/50">
                    📍 {item.distance}
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-300 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-xl bg-white p-1.5 flex-shrink-0 border border-emerald-700/30">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain p-1"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors font-serif leading-tight">
                    {item.name}
                  </h3>
                </div>

                <p className="text-xs text-emerald-100/70 leading-relaxed">
                  {item.tagline}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-800/30 flex items-center justify-between">
                <Link
                  href={item.href}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
                >
                  View Facility <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
