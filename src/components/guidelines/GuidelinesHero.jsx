import { motion } from "framer-motion";
import { Calendar, MapPin, ShieldAlert, FileText } from "lucide-react";
import { eventConfig } from "../../config/eventConfig";

export default function GuidelinesHero() {
  return (
    <section className="relative overflow-hidden bg-lab-black px-6 pb-24 pt-36">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-lab-orange/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#f2792a 1px, transparent 1px), linear-gradient(90deg, #f2792a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lab-charcoal border border-lab-orange/30 backdrop-blur-md mb-6"
        >
          <FileText className="w-3.5 h-3.5 text-lab-orange" />
          <span className="font-mono text-xs tracking-widest text-lab-cream/85 uppercase">
            OFFICIAL HANDBOOK • EVENT PROTOCOLS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-lab-cream tracking-tight mb-6"
        >
          RULEBOOK & <span className="text-lab-orange">GUIDELINES</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl text-base sm:text-lg text-lab-cream/75 leading-relaxed mb-8"
        >
          Review the competition framework, team eligibility, scoring metrics, and code of conduct for {eventConfig.eventName} before registering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap items-center gap-3 text-sm font-mono"
        >
          <div className="flex items-center gap-2 rounded-lg border border-lab-orange/30 bg-lab-charcoal/80 px-4 py-2 text-lab-cream">
            <Calendar className="w-4 h-4 text-lab-orange" />
            <span>{eventConfig.eventDate}</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-lab-orange/30 bg-lab-charcoal/80 px-4 py-2 text-lab-cream">
            <MapPin className="w-4 h-4 text-lab-orange" />
            <span>{eventConfig.venue}</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-emerald-400 font-semibold">
            <span>Free Entry • 50 Teams Capped</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
