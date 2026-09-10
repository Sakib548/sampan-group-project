interface OfferItem {
  title: string;
  description: string;
  tag: string;
  iconSvg?: React.ReactNode;
}

interface GolfWhatItOffersProps {
  title: string;
  subtitle: string;
  concernName: string;
  offers: OfferItem[];
}

export default function GolfWhatItOffers({
  title,
  subtitle,
  concernName,
  offers,
}: GolfWhatItOffersProps) {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3.5 py-1 rounded-full">
            Core Philosophy & Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-[#091e15]">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-emerald-50/50 hover:bg-emerald-50 border border-emerald-900/10 hover:border-emerald-600/30 rounded-2xl p-8 transition-all hover:shadow-xl group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform shadow-md">
                    0{index + 1}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                    {offer.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#091e15] mb-3 group-hover:text-emerald-800 transition-colors">
                  {offer.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {offer.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-900/10 flex items-center text-xs font-semibold text-emerald-800 group-hover:text-emerald-600">
                <span>{concernName} Standard</span>
                <span className="ml-auto">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
