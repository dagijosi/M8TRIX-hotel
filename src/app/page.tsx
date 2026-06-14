'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaBars,
  FaTimes,
  FaStar,
  FaWifi,
  FaUtensils,
  FaDumbbell,
  FaConciergeBell,
} from "react-icons/fa";

/* ------------------------------------------------------------------ */
/*  Theme                                                               */
/*  Cream:  #FBF7F0   Dark:  #2B2620   Gold:  #9C8156   Gold light: #C9AE85 */
/* ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const galleryImages = [
  { src: "/image/bed1.jpg", title: "Deluxe room", category: "rooms" },
  { src: "/image/bed2.jpg", title: "Premium suite", category: "rooms" },
  { src: "/image/shower.jpg", title: "Bathroom", category: "rooms" },
  { src: "/image/sofa.jpg", title: "Lounge", category: "rooms" },
  { src: "/image/food2.jpg", title: "Restaurant", category: "dining" },
  { src: "/image/food3.jpg", title: "Breakfast room", category: "dining" },
  { src: "/image/burfood.jpg", title: "Kitchen", category: "dining" },
  { src: "/image/drink.jpg", title: "Bar", category: "dining" },
  { src: "/image/gym.jpg", title: "Fitness center", category: "facilities" },
  { src: "/image/colider.jpg", title: "Exterior", category: "facilities" },
  { src: "/image/drink2.jpg", title: "Wine selection", category: "dining" },
  { src: "/image/juice.jpg", title: "Fresh juices", category: "dining" },
];

const categories = [
  { id: "all", label: "All" },
  { id: "rooms", label: "Rooms" },
  { id: "dining", label: "Dining" },
  { id: "facilities", label: "Facilities" },
];

const stats = [
  { value: "42", label: "Rooms & suites" },
  { value: "3★", label: "Star rated comfort" },
  { value: "24", label: "Hour front desk" },
  { value: "100%", label: "Non-smoking rooms" },
];

const rooms = [
  {
    name: "Standard Room",
    desc: "A comfortable queen room with a work desk, fast wifi, and an en-suite bathroom — everything you need for a short stay.",
    price: "59",
    img: "/image/bed1.jpg",
  },
  {
    name: "Deluxe Room",
    desc: "More space, a larger bed, and a seating area. Our most popular choice for both business and leisure guests.",
    price: "79",
    img: "/image/bed2.jpg",
  },
  {
    name: "Executive Suite",
    desc: "A separate living area, premium bathroom amenities, and extra storage — ideal for longer visits.",
    price: "109",
    img: "/image/shower.jpg",
  },
];

const amenities = [
  { icon: <FaUtensils />, title: "Restaurant", time: "7:00 – 22:00", desc: "Breakfast buffet, all-day dining, and a varied evening menu." },
  { icon: <FaConciergeBell />, title: "Bar & lounge", time: "12:00 – 23:00", desc: "Wine, beer, and a short cocktail list in a relaxed setting." },
  { icon: <FaDumbbell />, title: "Fitness center", time: "6:00 – 22:00", desc: "Free weights, cardio machines, and a stretching area." },
  { icon: <FaWifi />, title: "Free wifi", time: "Available everywhere", desc: "High-speed wireless internet throughout the hotel." },
];

/* ------------------------------------------------------------------ */
/*  Navbar                                                              */
/* ------------------------------------------------------------------ */

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { href: "#about", label: "About", id: "about" },
    { href: "#rooms", label: "Rooms", id: "rooms" },
    { href: "#gallery", label: "Gallery", id: "gallery" },
    { href: "#amenities", label: "Amenities", id: "amenities" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const sectionIds = ["home", ...links.map((l) => l.id)];

    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const offset = 100;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#FBF7F0]/95 backdrop-blur-sm border-b border-[#2B2620]/10' : 'bg-[#FBF7F0]/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#9C8156] flex-shrink-0">
            <Image src="/image/logo.jpg" alt="M8TRIX Hotel logo" fill className="object-cover" />
          </div>
          <div>
            <span className="font-serif text-xl tracking-tight text-[#2B2620]">
              M8TRIX <span className="text-[#9C8156]">HOTEL</span>
            </span>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#2B2620]/50 -mt-0.5">
              Comfort & Convenience · 3-Star
            </p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wide transition-colors relative pb-1 ${
                activeSection === l.id
                  ? 'text-[#2B2620] font-medium after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-[#9C8156] after:rounded-full'
                  : 'text-[#2B2620]/70 hover:text-[#2B2620]'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium px-5 py-2.5 rounded-full bg-[#9C8156] text-[#FBF7F0] hover:bg-[#86713F] transition-colors"
          >
            Book now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl text-[#2B2620]"
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#FBF7F0] border-t border-[#2B2620]/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-base ${activeSection === l.id ? 'text-[#9C8156] font-medium' : 'text-[#2B2620]'}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-sm font-medium px-5 py-3 rounded-full bg-[#9C8156] text-[#FBF7F0] text-center"
          >
            Book now
          </a>
        </div>
      )}
    </nav>
  );
};

/* ------------------------------------------------------------------ */
/*  Hero                                                                */
/* ------------------------------------------------------------------ */

const Hero = () => {
  return (
    <section id="home" className="relative bg-[#FBF7F0] pt-32 md:pt-44 pb-20 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2B2620]/5 border border-[#2B2620]/10 mb-6">
              <FaStar className="text-[#9C8156] text-xs" />
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#2B2620]/70">
                Comfort meets convenience
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl text-[#2B2620] leading-[1.15] mb-6 max-w-xl">
              Experience <span className="text-[#9C8156] underline decoration-[#C9AE85] decoration-4 underline-offset-8">M8TRIX</span> Hospitality Defined.
            </h1>

            <p className="text-[#2B2620]/60 text-base md:text-lg max-w-lg mb-10 leading-relaxed">
              M8TRIX Hotel combines high quality 3-star comfort, modern facilities, and premium service to make your business or leisure trip relaxing and memorable.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-[#9C8156] text-[#FBF7F0] text-sm font-semibold px-7 py-4 rounded-full hover:bg-[#86713F] transition-colors"
              >
                Book exclusive rates <FaArrowRight className="text-xs" />
              </a>
              <a
                href="#amenities"
                className="inline-flex items-center gap-3 bg-white text-[#2B2620] text-sm font-semibold px-7 py-4 rounded-full border border-[#2B2620]/10 hover:border-[#2B2620]/30 transition-colors"
              >
                Explore amenities
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#2B2620]/10 text-sm text-[#2B2620]/70">
                <FaMapMarkerAlt className="text-[#9C8156]" /> Convenient central location
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#2B2620]/10 text-sm text-[#2B2620]/70">
                <FaStar className="text-[#9C8156]" /> 3-star standard excellence
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <Image src="/image/sofa.jpg" alt="Lounge seating at M8TRIX Hotel" fill priority className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  About + Stats                                                       */
/* ------------------------------------------------------------------ */

const About = () => {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 mb-20">
          <div className="md:col-span-4">
            <p className="text-[#9C8156] text-sm tracking-[0.2em] uppercase mb-4 font-semibold">About us</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2B2620] leading-tight">
              Comfort meets convenience.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 flex flex-col gap-6 text-[#2B2620]/65 text-base md:text-lg leading-relaxed">
            <p>
              Welcome to our 3-star hotel, where comfort meets convenience and every guest is treated with genuine hospitality. We are dedicated to providing a relaxing and enjoyable stay for both business and leisure travelers.
            </p>
            <p>
              Our hotel offers well-furnished, comfortable rooms designed to meet your everyday needs, along with modern amenities that ensure a pleasant and stress-free experience. Guests can enjoy quality dining, friendly service, and a welcoming atmosphere that feels like a home away from home.
            </p>
            <p>
              Whether you are visiting for work, travel, or relaxation, our hotel is the perfect choice for a comfortable stay at an affordable price. We take pride in delivering excellent service, maintaining high standards of cleanliness, and ensuring every guest leaves with a memorable experience.
            </p>
            <p className="text-[#2B2620] font-medium">
              We look forward to welcoming you and making your stay truly enjoyable.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#FBF7F0] rounded-2xl border border-[#2B2620]/5 p-6 md:p-8 text-center">
              <div className="font-serif text-4xl md:text-5xl text-[#9C8156] mb-2">{s.value}</div>
              <div className="text-xs md:text-sm text-[#2B2620]/60 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  Rooms                                                               */
/* ------------------------------------------------------------------ */

const Rooms = () => {
  return (
    <section id="rooms" className="bg-[#FBF7F0] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-[#9C8156] text-sm tracking-[0.2em] uppercase mb-4 font-semibold">Rooms & rates</p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2B2620] leading-tight">Find your room.</h2>
          </div>
          <p className="text-[#2B2620]/50 text-sm max-w-xs">
            Rates shown per night, including breakfast and taxes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {rooms.map((r) => (
            <div key={r.name} className="bg-white rounded-2xl border border-[#2B2620]/5 overflow-hidden group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={r.img}
                  alt={r.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between mb-3 gap-4">
                  <h3 className="font-serif text-2xl text-[#2B2620]">{r.name}</h3>
                  <div className="text-right whitespace-nowrap">
                    <span className="font-serif text-2xl text-[#9C8156]">${r.price}</span>
                    <span className="text-[#2B2620]/40 text-sm"> / night</span>
                  </div>
                </div>
                <p className="text-[#2B2620]/60 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  Gallery                                                             */
/* ------------------------------------------------------------------ */

const Gallery = () => {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? galleryImages : galleryImages.filter((g) => g.category === active);

  return (
    <section id="gallery" className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <p className="text-[#9C8156] text-sm tracking-[0.2em] uppercase mb-4 font-semibold">Gallery</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2B2620] leading-tight mb-8">
            A look around M8TRIX.
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`text-sm px-5 py-2.5 rounded-full font-medium transition-colors ${
                  active === c.id
                    ? 'bg-[#9C8156] text-white'
                    : 'bg-[#FBF7F0] text-[#2B2620]/60 hover:text-[#2B2620] border border-[#2B2620]/5'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((img) => (
            <div key={img.src} className="group relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2620]/70 via-[#2B2620]/0 to-[#2B2620]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {img.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  Amenities                                                           */
/* ------------------------------------------------------------------ */

const Amenities = () => {
  return (
    <section id="amenities" className="bg-[#FBF7F0] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <p className="text-[#9C8156] text-sm tracking-[0.2em] uppercase mb-4 font-semibold">What we offer</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#2B2620] leading-tight">
            Amenities & hours.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((a) => (
            <div key={a.title} className="bg-white rounded-2xl border border-[#2B2620]/5 p-6 hover:border-[#9C8156]/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#9C8156]/10 text-[#9C8156] flex items-center justify-center text-lg mb-5">
                {a.icon}
              </div>
              <h3 className="font-serif text-xl text-[#2B2620] mb-2">{a.title}</h3>
              <p className="text-[#2B2620]/60 text-sm leading-relaxed mb-3">{a.desc}</p>
              <p className="text-[#9C8156] text-xs font-semibold uppercase tracking-wide">{a.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  Contact                                                             */
/* ------------------------------------------------------------------ */

const Contact = () => {
  return (
    <section id="contact" className="bg-[#2B2620] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-6">
            <p className="text-[#C9AE85] text-sm tracking-[0.2em] uppercase mb-4 font-semibold">Visit</p>
            <h2 className="font-serif text-4xl md:text-6xl text-[#FBF7F0] leading-tight mb-8">
              Come stay with us soon.
            </h2>
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-[#9C8156] text-[#FBF7F0] text-sm font-semibold px-7 py-4 rounded-full hover:bg-[#C9AE85] hover:text-[#2B2620] transition-colors"
            >
              Book exclusive rates <FaArrowRight className="text-xs" />
            </a>
          </div>

          <div className="md:col-span-5 md:col-start-8 flex flex-col gap-8">
            <div className="flex gap-4">
              <FaMapMarkerAlt className="text-[#C9AE85] mt-1 flex-shrink-0" />
              <div>
                <p className="text-[#FBF7F0] font-medium mb-1">Address</p>
                <p className="text-[#FBF7F0]/50 text-sm">City Center</p>
              </div>
            </div>
            <div className="flex gap-4">
              <FaPhone className="text-[#C9AE85] mt-1 flex-shrink-0" />
              <div>
                <p className="text-[#FBF7F0] font-medium mb-1">Phone</p>
                <p className="text-[#FBF7F0]/50 text-sm">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex gap-4">
              <FaEnvelope className="text-[#C9AE85] mt-1 flex-shrink-0" />
              <div>
                <p className="text-[#FBF7F0] font-medium mb-1">Email</p>
                <p className="text-[#FBF7F0]/50 text-sm">info@m8trixhotel.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*  Footer                                                              */
/* ------------------------------------------------------------------ */

const Footer = () => {
  return (
    <footer className="bg-[#2B2620] border-t border-[#FBF7F0]/10 py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#9C8156] flex-shrink-0">
            <Image src="/image/logo.jpg" alt="M8TRIX Hotel logo" fill className="object-cover" />
          </div>
          <span className="font-serif text-xl text-[#FBF7F0]">M8TRIX <span className="text-[#9C8156]">HOTEL</span></span>
        </div>
        <span className="text-[#FBF7F0]/40 text-sm">© 2026 M8TRIX Hotel. All rights reserved.</span>
      </div>
    </footer>
  );
};

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FBF7F0] font-sans">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Gallery />
      <Amenities />
      <Contact />
      <Footer />
    </div>
  );
}