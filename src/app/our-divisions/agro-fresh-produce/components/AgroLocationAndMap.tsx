"use client";

<<<<<<< HEAD
import { FaMapMarkerAlt, FaCompass, FaPhoneAlt, FaClock, FaTractor, FaFacebook, FaRoute, FaArrowRight } from "react-icons/fa";
=======
import { FaMapMarkerAlt, FaCompass, FaPhoneAlt, FaClock, FaTractor, FaTruck, FaExternalLinkAlt } from "react-icons/fa";
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b

export interface AgroLocationFacility {
  name: string;
  type: string;
  address: string;
<<<<<<< HEAD
  phone?: string;
  operatingHours?: string;
  gpsCoordinates?: string;
  keyAssets?: string[];
=======
  phone: string;
  operatingHours: string;
  gpsCoordinates: string;
  keyAssets: string[];
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
}

export interface AgroLocationAndMapProps {
  title?: string;
  subtitle?: string;
  concernName: string;
  facilities: AgroLocationFacility[];
<<<<<<< HEAD
  embedMapUrl?: string;
  facebookUrl?: string;
  directions?: string[];
=======
  embedMapUrl: string;
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
  bgTheme?: "divisions-green" | "about-ivory" | "white";
  accentColor?: string;
}

export default function AgroLocationAndMap({
  title = "Location & Processing Facilities Map",
  subtitle = "Visit our agro-estates, hatchery hubs, and processing cold-storage centers across Bangladesh.",
  concernName,
  facilities,
  embedMapUrl,
<<<<<<< HEAD
  facebookUrl,
  directions,
=======
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
  bgTheme = "divisions-green",
  accentColor = "#15803d",
}: AgroLocationAndMapProps) {
  const containerClasses = {
    "divisions-green": "bg-[#f3f6f2] text-[#183b2b] border-b border-[#183b2b]/15",
    "about-ivory": "bg-[#F5F5F2] text-neutral-950 border-b border-neutral-300/60",
    "white": "bg-white text-neutral-950 border-b border-neutral-200",
  }[bgTheme];

  return (
    <section id="location-map" className={`py-24 relative overflow-hidden ${containerClasses}`}>
      
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div
            className="inline-flex items-center gap-2 border px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
            style={{ color: accentColor, borderColor: `${accentColor}40`, backgroundColor: `${accentColor}10` }}
          >
            <FaMapMarkerAlt className="text-xs" />
            <span>Facility Locations</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
            {title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            {subtitle}
          </p>
        </div>

<<<<<<< HEAD
        {/* 2-Column Grid: Facility Details + Map or Verified Location Hub Card */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Facilities List */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              {facilities.map((fac, idx) => (
                <div
                  key={idx}
                  className="border border-neutral-300 bg-white p-8 space-y-4 shadow-sm hover:shadow-md transition duration-300"
                >
                  <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                    <div>
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                        {fac.type}
                      </span>
                      <h3 className="text-xl font-bold text-neutral-950 mt-0.5">
                        {fac.name}
                      </h3>
                    </div>
                    <FaTractor className="text-emerald-700 text-xl" />
                  </div>

                  <div className="space-y-2.5 font-mono text-xs text-neutral-700">
                    <div className="flex items-start gap-2.5">
                      <FaMapMarkerAlt className="text-emerald-600 text-sm shrink-0 mt-0.5" />
                      <span className="font-medium text-neutral-900">{fac.address}</span>
                    </div>

                    {fac.phone && (
                      <div className="flex items-center gap-2.5">
                        <FaPhoneAlt className="text-emerald-600 text-xs shrink-0" />
                        <span>{fac.phone}</span>
                      </div>
                    )}

                    {fac.operatingHours && (
                      <div className="flex items-center gap-2.5">
                        <FaClock className="text-emerald-600 text-xs shrink-0" />
                        <span>{fac.operatingHours}</span>
                      </div>
                    )}

                    {fac.gpsCoordinates && (
                      <div className="flex items-center gap-2.5">
                        <FaCompass className="text-emerald-600 text-xs shrink-0" />
                        <span>GPS: {fac.gpsCoordinates}</span>
                      </div>
                    )}
                  </div>

                  {fac.keyAssets && fac.keyAssets.length > 0 && (
                    <div className="pt-3 border-t border-neutral-100 font-mono text-[11px] text-neutral-600">
                      <span className="font-bold text-neutral-900 block mb-1">Estate Highlights:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {fac.keyAssets.map((asset, aIdx) => (
                          <span key={aIdx} className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 text-[10px]">
                            {asset}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Social & Contact Direct Bar */}
            {facebookUrl && (
              <div className="border border-emerald-300 bg-emerald-50/60 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-emerald-950 text-sm">Official Social Updates</h4>
                  <p className="text-xs text-emerald-800/80 font-mono mt-0.5">Follow our harvest updates and farm photo gallery</p>
                </div>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-wider transition shadow-sm shrink-0"
                >
                  <FaFacebook className="text-sm" />
                  <span>Facebook Page</span>
                </a>
              </div>
            )}
          </div>

          {/* Right: Embedded Google Map or Verified Location Hub Card */}
          <div className="lg:col-span-6">
            {embedMapUrl ? (
              <div className="border border-neutral-300 bg-white p-2 shadow-lg h-[480px] lg:h-[580px] relative">
                <iframe
                  src={embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${concernName} Location Map`}
                />
              </div>
            ) : (
              <div className="border border-neutral-300 bg-white p-8 sm:p-10 shadow-lg h-full flex flex-col justify-between space-y-6">
                <div className="space-y-5">
                  <div className="flex items-center gap-2 text-emerald-700 font-mono text-xs font-bold uppercase tracking-wider">
                    <FaMapMarkerAlt className="text-sm" />
                    <span>Verified Agricultural Estate Address</span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 leading-snug">
                      Sampan Eco &amp; Agro
                    </h3>
                    <p className="mt-2 text-sm text-neutral-600 font-mono leading-relaxed">
                      Joydebpur, Boroga, Borice, Alphadanga-7870, Faridpur, Bangladesh.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-200 space-y-3 font-mono text-xs text-neutral-700">
                    <div className="flex items-center gap-2">
                      <FaRoute className="text-emerald-600 shrink-0" />
                      <span className="font-bold text-neutral-900">Road Connectivity:</span>
                      <span>Dhaka &rarr; Padma Bridge &rarr; Bhanga Expressway &rarr; Alphadanga</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaPhoneAlt className="text-emerald-600 shrink-0" />
                      <span className="font-bold text-neutral-900">Direct Hotline:</span>
                      <a href="tel:+8801929918408" className="hover:text-emerald-700 font-bold">+880 1929-918408</a>
                    </div>
                  </div>

                  {directions && directions.length > 0 && (
                    <div className="pt-4 border-t border-neutral-100 space-y-2">
                      <span className="font-mono text-xs font-bold uppercase text-neutral-500 block">
                        Travel &amp; Delivery Route
                      </span>
                      <ul className="space-y-1.5 font-mono text-xs text-neutral-600">
                        {directions.map((d, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">&bull;</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-neutral-200 flex flex-wrap items-center gap-3">
                  {facebookUrl && (
                    <a
                      href={facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider shadow-sm transition"
                    >
                      <FaFacebook className="text-sm" />
                      <span>View Facebook Page</span>
                    </a>
                  )}

                  <a
                    href="#wholesale-inquiry"
                    className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider shadow-sm transition"
                  >
                    <span>Contact Farmgate Desk</span>
                    <FaArrowRight className="text-xs" />
                  </a>
                </div>
              </div>
            )}
=======
        {/* 2-Column Grid: Facility Details + Embedded Map */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Facilities List */}
          <div className="lg:col-span-6 space-y-6">
            {facilities.map((fac, idx) => (
              <div
                key={idx}
                className="border border-neutral-300 bg-white p-8 space-y-4 shadow-sm hover:shadow-md transition duration-300"
              >
                <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                      {fac.type}
                    </span>
                    <h3 className="text-xl font-bold text-neutral-950 mt-0.5">
                      {fac.name}
                    </h3>
                  </div>
                  <FaTractor className="text-emerald-700 text-xl" />
                </div>

                <div className="space-y-2 font-mono text-xs text-neutral-700">
                  <div className="flex items-start gap-2.5">
                    <FaMapMarkerAlt className="text-emerald-600 text-sm shrink-0 mt-0.5" />
                    <span>{fac.address}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <FaPhoneAlt className="text-emerald-600 text-xs shrink-0" />
                    <span>{fac.phone}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <FaClock className="text-emerald-600 text-xs shrink-0" />
                    <span>{fac.operatingHours}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <FaCompass className="text-emerald-600 text-xs shrink-0" />
                    <span>GPS: {fac.gpsCoordinates}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-100 font-mono text-[11px] text-neutral-600">
                  <span className="font-bold text-neutral-900 block mb-1">On-Site Infrastructure:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {fac.keyAssets.map((asset, aIdx) => (
                      <span key={aIdx} className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 text-[10px]">
                        {asset}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Embedded Google Map */}
          <div className="lg:col-span-6 border border-neutral-300 bg-white p-2 shadow-lg h-[480px] lg:h-[580px] relative">
            <iframe
              src={embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${concernName} Location Map`}
            />
>>>>>>> da7d38fc887853141cb2473300dab01f02052f8b
          </div>

        </div>

      </div>
    </section>
  );
}
