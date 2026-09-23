import { motion } from "framer-motion";
import { Calendar, MapPin, Trophy, ArrowDown } from "lucide-react";
import { eventConfig } from "../../config/eventConfig";

export default function GuidelinesHero() {
  const jumpLinks = [
    { label: "REQUIREMENTS", href: "#requirements" },
    { label: "CHECKLIST", href: "#checklist" },
    { label: "RULES", href: "#rules" },
    { label: "SCORING RUBRIC", href: "#scoring" },
    { label: "TIMELINE", href: "#timeline" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <section id="rules" className="relative bg-lab-charcoal py-24 sm:py-28 px-6 overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-110 pointer-events-none"
      >
        <source src="/assets/brilliant.mp4" type="video/mp4" />
      </video>

      {/* Subtle ambient amber glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-lab-orange/[0.07] rounded-full blur-[150px] pointer-events-none" />
      {/* Seamless top/bottom dark gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-lab-black/95 via-lab-black/85 to-lab-black pointer-events-none" />

      {/* Ambient glowing lamps */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-lab-orange/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-amber-500/[0.08] rounded-full blur-[140px] pointer-events-none" />

      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#f2792a 1px, transparent 1px), linear-gradient(90deg, #f2792a 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative mx-auto max-w-5xl z-10">
        {/* Top Tag Pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-lab-orange animate-pulse" />
          <span className="font-oxanium text-xs tracking-[0.25em] text-lab-cream font-bold uppercase">
            OFFICIAL HANDBOOK // EVENT PROTOCOLS
          </span>
        </motion.div>

        {/* Oxanium Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-oxanium text-4xl sm:text-6xl lg:text-7xl font-black text-lab-cream tracking-[0.02em] uppercase leading-[0.96] mb-6"
        >
          RULEBOOK &amp;{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-lab-orange to-orange-500 filter drop-shadow-[0_0_30px_rgba(242,121,42,0.45)]">
            GUIDELINES
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl text-base sm:text-lg text-lab-cream/80 leading-relaxed font-body mb-8"
        >
          Comprehensive operational blueprint for <strong className="text-lab-cream font-oxanium">{eventConfig.eventName}</strong>. 
          Review team eligibility standards, scoring rubrics, equipment checklists, and the 3-round tournament progression before check-in.
        </motion.p>

        {/* Quick Meta Specs Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 mb-10"
        >
          <div className="flex items-center gap-2 rounded-xl border border-lab-orange/30 bg-lab-charcoal/80 px-4 py-2.5 text-lab-cream text-xs sm:text-sm font-rajdhani font-semibold tracking-wider">
            <Calendar className="w-4 h-4 text-lab-orange" />
            <span>{eventConfig.eventDate} • ONE-DAY EVENT</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-lab-orange/30 bg-lab-charcoal/80 px-4 py-2.5 text-lab-cream text-xs sm:text-sm font-rajdhani font-semibold tracking-wider">
            <MapPin className="w-4 h-4 text-lab-orange" />
            <span>{eventConfig.venue}</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-2.5 text-amber-300 text-xs sm:text-sm font-rajdhani font-bold tracking-wider">
            <Trophy className="w-4 h-4 text-lab-orange" />
            <span>₹15,000 PRIZE POOL</span>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-emerald-400 text-xs sm:text-sm font-rajdhani font-bold tracking-wider">
            <span>100% FREE ENTRY • 55 TEAMS CAPPED</span>
          </div>
        </motion.div>

        {/* Quick Jump-to Anchor Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="pt-6 border-t border-white/[0.08]"
        >
          <div className="flex items-center gap-2 text-xs font-oxanium font-bold text-lab-orange tracking-widest uppercase mb-3">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            <span>QUICK NAVIGATION SECTORS</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {jumpLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-lab-orange/50 hover:bg-lab-orange/10 text-lab-cream/75 hover:text-amber-300 text-xs font-rajdhani font-bold tracking-wider uppercase transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
