"use client";

import { FormEvent } from "react";
import Image from "next/image";
import { FiMail, FiPhone, FiMapPin, FiClock, FiArrowRight, FiMessageSquare } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const contactItems = [
  {
    title: "Email Us",
    value: "info@sampangroup.com.bd",
    href: "mailto:info@sampangroup.com.bd",
    Icon: FiMail,
  },
  {
    title: "Call Us",
    value: "+880 1929918400–11",
    href: "tel:+8801929918400",
    Icon: FiPhone,
  },
  {
    title: "Visit Us",
    value: "Sampan 21st Century Tower, H 284, Rd 1/A, Block B, Bashundhara R/A, Dhaka, Bangladesh, 1229",
    Icon: FiMapPin,
  },
  {
    title: "Office Hours",
    value: "10:00 AM – 06:00 PM",
    Icon: FiClock,
  },
];

const locationContacts = [
  {
    name: "Express Highway Inn",
    type: "Hospitality & Facilities",
    address: "Dhaka–Chattogram Highway, Bangladesh",
    phone: "+880 1700 000 001",
    email: "expressinn@sampangroup.com.bd",
  },
  {
    name: "Sampan Highway Inn",
    type: "Hospitality & Travel Stop",
    address: "Dhaka–Khulna Highway, Bangladesh",
    phone: "+880 1700 000 002",
    email: "highwayinn@sampangroup.com.bd",
  },
  {
    name: "Sampan Agro & Golf Resort",
    type: "Lifestyle & Leisure",
    address: "Moulvibazar, Bangladesh",
    phone: "+880 1700 000 003",
    email: "agrogolf@sampangroup.com.bd",
  },
];

export default function ContactPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="bg-[#F5F5F2] text-neutral-950 overflow-x-hidden font-sans antialiased selection:bg-emerald-500 selection:text-white">
      
      {/* 01. FULL-HEIGHT CINEMATIC HERO WITH BANNER IMAGE */}
      <section className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#050505] text-white pt-28 pb-0">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sampan-3.png" // Your banner image
            alt="Sampan Group Architecture"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Cinematic Gradient Overlays for Text Legibility */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/40"></div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#050505]/60 to-transparent"></div>

        {/* Top Content */}
        <div className="relative z-10 mx-auto max-w-[1600px] px-[5vw] w-full flex-1 flex flex-col justify-center">
          <p className="mb-6 font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-500 flex items-center gap-3">
            <span className="block w-8 h-px bg-emerald-500"></span>
            Sampan Group / Contact
          </p>
          <h1 className="text-[clamp(3rem,9vw,9rem)] font-semibold leading-[0.85] tracking-[-0.04em] mb-10">
            Let&apos;s Build <br />
            <span className="text-white/40">What Comes Next.</span>
          </h1>
          <p className="max-w-xl text-base leading-[1.8] text-white/80 lg:text-lg">
            For partnerships, investments, careers, or general enquiries, reach out to our team. We look forward to hearing from you.
          </p>
        </div>

        {/* Quick Contact Grid (Anchored at bottom) */}
        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-[1600px] px-[5vw]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10 backdrop-blur-md">
              {contactItems.map((item) => {
                const Icon = item.Icon;
                const content = (
                  <div className="group p-8 border-b border-r border-white/10 transition-colors duration-300 hover:bg-white/[0.05] h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="flex h-12 w-12 items-center justify-center border border-white/20 text-emerald-500 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400 mb-3">{item.title}</h2>
                    <p className="text-base text-white/90 leading-relaxed [overflow-wrap:anywhere]">{item.value}</p>
                  </div>
                );

                return item.href ? (
                  <a key={item.title} href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={item.title}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 02. FORM & MAP SECTION */}
      <section className="bg-[#F5F5F2] py-24 lg:py-32 relative overflow-hidden">
        <div className="mx-auto max-w-[1600px] px-[5vw] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left: Form */}
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-700 mb-6 flex items-center gap-3">
              <span className="block w-8 h-px bg-emerald-700"></span>
              General Enquiry
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] mb-16 text-neutral-950">
              Tell us how <br />
              <span className="text-neutral-400">we can help.</span>
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 max-w-2xl">
              <div className="relative">
                <input id="name" type="text" placeholder=" " className="peer w-full bg-transparent border-b border-neutral-300 py-3 focus:outline-none focus:border-emerald-500 placeholder:text-transparent text-neutral-950 text-lg" required />
                <label htmlFor="name" className="absolute left-0 top-3 text-neutral-500 text-lg transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:tracking-[0.3em] peer-focus:uppercase peer-focus:text-emerald-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:tracking-[0.3em] peer-[:not(:placeholder-shown)]:uppercase">Name</label>
              </div>
              <div className="relative">
                <input id="phone" type="tel" placeholder=" " className="peer w-full bg-transparent border-b border-neutral-300 py-3 focus:outline-none focus:border-emerald-500 placeholder:text-transparent text-neutral-950 text-lg" />
                <label htmlFor="phone" className="absolute left-0 top-3 text-neutral-500 text-lg transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:tracking-[0.3em] peer-focus:uppercase peer-focus:text-emerald-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:tracking-[0.3em] peer-[:not(:placeholder-shown)]:uppercase">Phone Number</label>
              </div>
              <div className="relative">
                <input id="email" type="email" placeholder=" " className="peer w-full bg-transparent border-b border-neutral-300 py-3 focus:outline-none focus:border-emerald-500 placeholder:text-transparent text-neutral-950 text-lg" required />
                <label htmlFor="email" className="absolute left-0 top-3 text-neutral-500 text-lg transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:tracking-[0.3em] peer-focus:uppercase peer-focus:text-emerald-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:tracking-[0.3em] peer-[:not(:placeholder-shown)]:uppercase">Email</label>
              </div>
              <div className="relative">
                <input id="company" type="text" placeholder=" " className="peer w-full bg-transparent border-b border-neutral-300 py-3 focus:outline-none focus:border-emerald-500 placeholder:text-transparent text-neutral-950 text-lg" />
                <label htmlFor="company" className="absolute left-0 top-3 text-neutral-500 text-lg transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:tracking-[0.3em] peer-focus:uppercase peer-focus:text-emerald-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:tracking-[0.3em] peer-[:not(:placeholder-shown)]:uppercase">Company</label>
              </div>
              <div className="relative md:col-span-2">
                <input id="subject" type="text" placeholder=" " className="peer w-full bg-transparent border-b border-neutral-300 py-3 focus:outline-none focus:border-emerald-500 placeholder:text-transparent text-neutral-950 text-lg" required />
                <label htmlFor="subject" className="absolute left-0 top-3 text-neutral-500 text-lg transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:tracking-[0.3em] peer-focus:uppercase peer-focus:text-emerald-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:tracking-[0.3em] peer-[:not(:placeholder-shown)]:uppercase">Subject</label>
              </div>
              <div className="relative md:col-span-2">
                <textarea id="message" placeholder=" " rows={4} className="peer w-full bg-transparent border-b border-neutral-300 py-3 focus:outline-none focus:border-emerald-500 placeholder:text-transparent text-neutral-950 text-lg resize-none" required></textarea>
                <label htmlFor="message" className="absolute left-0 top-3 text-neutral-500 text-lg transition-all duration-300 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:tracking-[0.3em] peer-focus:uppercase peer-focus:text-emerald-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:tracking-[0.3em] peer-[:not(:placeholder-shown)]:uppercase">Message</label>
              </div>
              
              <div className="md:col-span-2 mt-4">
                <button type="submit" className="group inline-flex items-center gap-5 border-b border-neutral-400 pb-3 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-neutral-900 transition-all duration-500 hover:border-emerald-500 hover:text-emerald-600">
                  Submit Enquiry
                  <FiArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-2" />
                </button>
              </div>
            </form>
          </div>

          {/* Right: Map & Info */}
          <div className="lg:col-span-5 lg:pl-8">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-700 mb-6 flex items-center gap-3">
              <span className="block w-8 h-px bg-emerald-700"></span>
              Head Office
            </p>
            <h2 className="text-[clamp(1.5rem,2vw,2rem)] font-semibold leading-[1.1] tracking-[-0.02em] mb-8 text-neutral-950">
              Sampan 21st Century Tower
            </h2>
            
            <div className="relative w-full h-[400px] overflow-hidden border border-neutral-200 shadow-sm group">
              <iframe
                src="https://www.google.com/maps?q=SAMPAN%2021ST%20CENTURY%20TOWER%2C%20House%23284%2C%20Block%20B%2C%20Road%23%201%2FA%2C%20Bashundhara%2C%20Dhaka%2C%20Bangladesh%2C%201229&z=15&output=embed"
                className="absolute inset-0 w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                style={{ border: 0, filter: "invert(0.92) hue-rotate(160deg) brightness(0.9) contrast(0.9) saturate(0.5)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              {/* Architectural overlay frame */}
              <div className="absolute inset-0 pointer-events-none border-8 border-[#F5F5F2]"></div>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#F5F5F2] via-transparent to-transparent opacity-40"></div>
            </div>

            <div className="mt-8 space-y-4 text-sm text-neutral-600">
              <p className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-emerald-600 flex-shrink-0" />
                <span>Sampan 21st Century Tower, H 284, Rd 1/A, Block B, Bashundhara R/A, Dhaka, Bangladesh, 1229</span>
              </p>
              <p className="flex items-center gap-3">
                <FiClock className="text-emerald-600 flex-shrink-0" />
                <span>Office Hours: 10:00 AM – 06:00 PM</span>
              </p>
              <a href="mailto:info@sampangroup.com.bd" className="flex items-center gap-3 hover:text-emerald-600 transition-colors">
                <FiMail className="text-emerald-600 flex-shrink-0" />
                <span>info@sampangroup.com.bd</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 03. DIVISION DIRECTORY */}
      <section className="bg-[#050505] text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 bg-emerald-500 blur-[200px]"></div>

        <div className="relative z-10 mx-auto max-w-[1600px] px-[5vw]">
          <div className="mb-20">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.4em] text-emerald-500 mb-6 flex items-center gap-3">
              <span className="block w-8 h-px bg-emerald-500"></span>
              Division Directory
            </p>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-[-0.03em] leading-none">
              Contact a <br />
              <span className="text-white/40">Sampan destination.</span>
            </h2>
          </div>

          {/* Architectural Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-white/10">
            {locationContacts.map((location) => (
              <article 
                key={location.name} 
                className="group border-b border-r border-white/10 p-8 lg:p-10 transition-colors duration-300 hover:bg-white/[0.03] flex flex-col"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-500 mb-4">
                  {location.type}
                </p>
                <h3 className="text-2xl font-semibold mb-6 tracking-[-0.02em] text-white group-hover:text-emerald-400 transition-colors">
                  {location.name}
                </h3>
                <div className="space-y-3 text-sm text-neutral-500 border-t border-white/10 pt-6 mt-auto">
                  <p className="flex items-start gap-3">
                    <FiMapPin className="mt-1 text-neutral-600 flex-shrink-0" />
                    <span>{location.address}</span>
                  </p>
                  <a href={`tel:${location.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-white transition-colors">
                    <FiPhone className="text-neutral-600 flex-shrink-0" />
                    <span>{location.phone}</span>
                  </a>
                  <a href={`mailto:${location.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
                    <FiMail className="text-neutral-600 flex-shrink-0" />
                    <span>{location.email}</span>
                  </a>
                </div>
                <div className="h-[2px] w-0 group-hover:w-full bg-emerald-500 transition-all duration-500 mt-8"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp & Live Chat Widgets */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:bottom-8 md:right-8">
        {/* Live Chat Widget Placeholder */}
        <button 
          className="bg-neutral-950 text-white p-4 shadow-xl flex items-center gap-3 hover:bg-neutral-800 transition-colors duration-300 group backdrop-blur-md border border-white/10"
          aria-label="Open Live Chat"
        >
          <FiMessageSquare className="w-5 h-5 md:w-6 md:h-6" />
          <span className="hidden md:block font-mono text-[11px] tracking-[0.25em] uppercase">Live Chat</span>
        </button>
        
        {/* WhatsApp Widget */}
        <a 
          href="https://wa.me/8801912234588" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-emerald-600 text-white p-4 shadow-xl flex items-center gap-3 hover:bg-emerald-500 transition-colors duration-300 group"
          aria-label="Talk to an Advisor on WhatsApp"
        >
          <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
          <span className="hidden md:block font-mono text-[11px] tracking-[0.25em] uppercase">WhatsApp</span>
        </a>
      </div>

    </main>
  );
}
