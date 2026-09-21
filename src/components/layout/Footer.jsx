import { Link } from "react-router-dom";
import {
  Instagram,
  Linkedin,
  MapPin,
  Calendar,
  Trophy,
  ArrowUp,
  ExternalLink,
  Users
} from "lucide-react";
import { eventConfig } from "../../config/eventConfig";
import PerryEasterEgg from "../shared/PerryEasterEgg";
import RegisterButton from "../shared/RegisterButton";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Overview", href: "/#overview" },
    { label: "Roadmap", href: "/#roadmap" },
    { label: "Highlights & Prizes", href: "/#highlights" },
    { label: "Timeline & Schedule", href: "/guidelines#timeline" },
    { label: "About ARMS", href: "/#about" },
    { label: "Rulebook & Guidelines", href: "/guidelines" },
  ];

  return (
    <footer className="relative bg-lab-black border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-lab-orange/[0.06] rounded-full blur-[160px] pointer-events-none" />

      {/* Blueprint grid accent */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#f2792a 1px, transparent 1px), linear-gradient(90deg, #f2792a 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Pre-Footer Action Banner */}
      <div className="relative border-b border-white/[0.08] bg-lab-charcoal/50 backdrop-blur-md py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-lab-orange animate-pulse" />
              <span className="font-oxanium text-[11px] font-bold text-lab-orange tracking-widest uppercase">
                REGISTRATIONS ACTIVE // 55 TEAMS CAP
              </span>
            </div>
            <h3 className="font-oxanium text-2xl sm:text-3xl font-black text-lab-cream uppercase tracking-wide">
              READY TO BUILD AT <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-lab-orange">CONCEPTIA '26?</span>
            </h3>
            <p className="text-lab-cream/70 text-sm font-body max-w-xl mt-1">
              Join 55 elite student hardware teams on 14th October 2026. Compete across 3 rounds for ₹15,000 in cash prizes.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <RegisterButton size="default" />
            <Link
              to="/guidelines"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.12] hover:border-lab-orange/50 text-lab-cream hover:text-amber-300 font-oxanium font-bold text-xs tracking-wider uppercase transition-all"
            >
              <span>VIEW RULEBOOK</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main 4-Column Grid */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* Column 1: Organization & Identity (Col span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-3 group select-none">
              <img
                src="/assets/A.R.M.S.png"
                alt="ARMS Club Logo"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_12px_rgba(242,121,42,0.35)]"
              />
              <div>
                <span className="font-oxanium text-2xl font-black tracking-wider text-lab-cream leading-none group-hover:text-lab-glow transition-colors block">
                  CONCEPTIA<span className="text-lab-orange">'26</span>
                </span>
                <span className="text-[10px] font-oxanium font-bold tracking-widest text-lab-orange uppercase block mt-0.5">
                  ARMS • BMSIT&amp;M BENGALURU
                </span>
              </div>
            </Link>

            <p className="text-lab-cream/70 text-xs sm:text-sm leading-relaxed font-body">
              The premier one-day hardware ideathon and mechatronics innovation sprint organized by ARMS (Advanced Robotics and Mechatronics Society) at BMS Institute of Technology &amp; Management.
            </p>

            <div className="flex items-center gap-3 pt-1">
              {eventConfig.instagramUrl && (
                <a
                  href={eventConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ARMS Instagram"
                  className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-lab-orange/60 hover:bg-lab-orange/10 flex items-center justify-center text-lab-cream/70 hover:text-lab-orange transition-all"
                >
                  <Instagram size={17} />
                </a>
              )}
              {eventConfig.linkedinUrl && (
                <a
                  href={eventConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ARMS LinkedIn"
                  className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-lab-orange/60 hover:bg-lab-orange/10 flex items-center justify-center text-lab-cream/70 hover:text-lab-orange transition-all"
                >
                  <Linkedin size={17} />
                </a>
              )}
              <a
                href={eventConfig.unstopUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Unstop Registration"
                className="px-3.5 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-lab-orange/60 hover:bg-lab-orange/10 flex items-center gap-1.5 text-lab-cream/70 hover:text-amber-300 font-oxanium text-xs font-bold tracking-wider uppercase transition-all"
              >
                <span>UNSTOP PORTAL</span>
                <ExternalLink size={13} />
              </a>
            </div>

            {/* BMSIT&M Campus Logo & Text (Compact Reference Size) */}
            <a
              href="https://bmsit.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 pt-3 border-t border-white/[0.06] group w-fit select-none"
            >
              <img
                src="/assets/bmsit.png"
                alt="BMSIT&M Logo"
                className="h-[22px] sm:h-6 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.12)]"
              />
              <span className="font-oxanium text-base sm:text-[18px] font-bold tracking-wider text-lab-cream leading-none group-hover:text-lab-glow transition-colors">
                BMSIT<span className="text-lab-orange">&amp;M</span>
              </span>
            </a>
          </div>

          {/* Column 2: Quick Navigation (Col span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-oxanium text-xs font-bold tracking-[0.2em] text-lab-orange uppercase pb-2 border-b border-white/[0.06]">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-rajdhani font-semibold">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-lab-cream/75 hover:text-lab-orange hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Event Intel & Fast Facts (Col span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-oxanium text-xs font-bold tracking-[0.2em] text-lab-orange uppercase pb-2 border-b border-white/[0.06]">
              EVENT INTEL
            </h4>
            <div className="space-y-3 text-xs font-rajdhani font-semibold text-lab-cream/80">
              <div className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-lab-orange flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-oxanium font-bold text-lab-cream text-[13px]">{eventConfig.eventDate}</p>
                  <p className="text-[11px] text-lab-cream/60">08:00 AM – 06:30 PM IST (One Day)</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-lab-orange flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-oxanium font-bold text-lab-cream text-[13px]">{eventConfig.venue}</p>
                  <p className="text-[11px] text-lab-cream/60">Yelahanka, Bengaluru, Karnataka</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Trophy className="w-4 h-4 text-lab-orange flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-oxanium font-bold text-amber-300 text-[13px]">{eventConfig.prizePool} PRIZE POOL</p>
                  <p className="text-[11px] text-lab-cream/60">1st: ₹7K, 2nd:₹5K, 3rd:₹3K</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Users className="w-4 h-4 text-lab-orange flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-oxanium font-bold text-lab-cream text-[13px]">3–4 MEMBERS PER TEAM</p>
                  <p className="text-[11px] text-lab-cream/60">100% Free Entry • 55 Teams Capped</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Campus Map & Location (Col span 3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-oxanium text-xs font-bold tracking-[0.2em] text-lab-orange uppercase pb-2 border-b border-white/[0.06] flex items-center justify-between">
              <span>VENUE LOCATION</span>
              <span className="text-[10px] font-oxanium text-lab-cream/40">BMSIT&amp;M</span>
            </h4>

            {/* Embedded Google Map */}
            <div className="relative rounded-xl border border-white/[0.1] overflow-hidden bg-lab-charcoal shadow-md group">
              <iframe
                title="BMSIT&M Campus Location"
                src="https://maps.google.com/maps?q=BMS+Institute+of+Technology+and+Management+Yelahanka+Bengaluru&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-36 rounded-xl border-0 filter grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Direct Google Maps Direction Link */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=BMS+Institute+of+Technology+and+Management+Yelahanka+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-lab-orange/50 text-lab-cream/80 hover:text-amber-300 text-xs font-rajdhani font-semibold tracking-wider transition-all group"
            >
              <span className="flex items-center gap-1.5 truncate">
                <MapPin className="w-3.5 h-3.5 text-lab-orange flex-shrink-0" />
                <span className="truncate">Yelahanka, Bengaluru • 560064</span>
              </span>
              <ExternalLink className="w-3 h-3 text-lab-orange flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="relative border-t border-white/[0.06] bg-lab-black py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-lab-cream/50 font-rajdhani tracking-wider">
            <span>© 2026 ARMS (Advanced Robotics and Mechatronics Society). All rights reserved.</span>
            <PerryEasterEgg />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-oxanium font-semibold text-lab-orange/80 tracking-widest uppercase">
              BMSIT&amp;M // CONCEPTIA 2026
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-8 h-8 rounded-lg bg-lab-charcoal border border-white/[0.08] hover:border-lab-orange/60 flex items-center justify-center text-lab-cream/60 hover:text-lab-orange transition-all"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}