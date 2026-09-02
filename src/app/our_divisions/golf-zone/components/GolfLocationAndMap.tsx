interface Landmark {
  landmark: string;
  distance: string;
  driveTime: string;
}

interface GolfLocationAndMapProps {
  title?: string;
  subtitle?: string;
  projectName: string;
  address: string;
  gpsCoordinates: string;
  embedMapUrl?: string;
  landmarks: Landmark[];
}

export default function GolfLocationAndMap({
  title = "Location & Regional Accessibility",
  subtitle = "Strategically positioned adjacent to Sampan Agro & Golf Resort, providing fast connectivity from Dhaka expressway and regional hubs.",
  projectName,
  address,
  gpsCoordinates,
  embedMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.482025178652!2d91.7000!3d24.3000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDE4JzAwLjAiTiA5McKwNDInMDAuMCJF!5e0!3m2!1sen!2sbd!4v1625000000000!5m2!1sen!2sbd",
  landmarks,
}: GolfLocationAndMapProps) {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#091e15] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950 px-3.5 py-1 rounded-full border border-emerald-800">
            Location + Map
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-white">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-emerald-100/70 mt-4 leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Info Box */}
          <div className="lg:col-span-5 bg-emerald-950/60 border border-emerald-800/40 rounded-3xl p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
                  Facility Address
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 font-serif">
                  {projectName}
                </h3>
                <p className="text-sm text-emerald-100/80 mt-2 leading-relaxed">
                  {address}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-900/40 border border-emerald-700/30">
                <span className="text-xs text-emerald-300 font-semibold block">
                  GPS Coordinates
                </span>
                <span className="text-sm font-mono text-white mt-1 block">
                  📍 {gpsCoordinates}
                </span>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300/80 mb-3">
                  Key Transit Distances
                </h4>
                <div className="space-y-2.5">
                  {landmarks.map((lm, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl bg-emerald-900/20 border border-emerald-800/30 text-xs"
                    >
                      <span className="font-medium text-emerald-100">{lm.landmark}</span>
                      <div className="text-right">
                        <span className="font-bold text-amber-400">{lm.distance}</span>
                        <span className="text-emerald-300/70 ml-2">({lm.driveTime})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-800/40 flex items-center justify-between text-xs text-emerald-200">
              <span>Valet & Covered Parking Available</span>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-amber-400 hover:underline"
              >
                Open Maps →
              </a>
            </div>
          </div>

          {/* Embedded Google Map iframe */}
          <div className="lg:col-span-7 relative min-h-[400px] rounded-3xl overflow-hidden border border-emerald-800/40 shadow-2xl">
            <iframe
              src={embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${projectName} Map`}
              className="absolute inset-0 w-full h-full filter saturate-[0.8] contrast-[1.1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
