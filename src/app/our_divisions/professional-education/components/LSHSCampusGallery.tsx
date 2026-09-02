import Image from "next/image";

export default function LSHSCampusGallery() {
  const photos = [
    {
      title: "London Campus Lecture Room",
      category: "UK Campus",
      src: "/images/brand/lshs.png",
      caption: "Interactive lecture theatre located on Camden High Street, London.",
    },
    {
      title: "Digital Learning & CIPS Exam Portal",
      category: "E-Learning",
      src: "/images/brand/lshs.png",
      caption: "24/7 cloud LMS with video lectures, mock exam question banks, and case studies.",
    },
    {
      title: "Executive Library & Case Study Lab",
      category: "Study Lounge",
      src: "/images/brand/lshs.png",
      caption: "Stocked with official CIPS study guides, academic journals, and discussion spaces.",
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-[#f8fafc] text-[#183b2b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0b73b9] bg-sky-100 px-3.5 py-1 rounded-full">
            Facility Tour
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mt-4 text-slate-900">
            Campus & Learning Facility Photos
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Experience our modern London campus classrooms, digital learning environment, and study facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className="bg-white border border-sky-900/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative aspect-video bg-[#0c4a6e] overflow-hidden p-6 flex items-center justify-center">
                <div className="relative w-40 h-40">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="absolute top-3 left-3 bg-black/60 text-[#f4d210] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                  {photo.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 font-serif group-hover:text-[#0b73b9] transition-colors">
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
