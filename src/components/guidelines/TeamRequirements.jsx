import { motion } from "framer-motion";
import { Users, ShieldCheck, Globe, MapPin } from "lucide-react";
import { eventConfig } from "../../config/eventConfig";
import SpotlightCard from "../reactbits/SpotlightCard";

const specs = [
  {
    icon: Users,
    label: "TEAM COMPOSITION",
    value: "3 to 4 Members",
    subtext: "Strictly 3–4 members per team; cross-branch & cross-college allowed.",
    tag: "CROSS-BRANCH ELIGIBLE",
    code: "REQ-01",
  },
  {
    icon: ShieldCheck,
    label: "PARTICIPANT CAP",
    value: "50 Teams Capped",
    subtext: "Limited to 50 teams on a first-come, first-served basis via Unstop.",
    tag: "CAP STRICTLY ENFORCED",
    code: "REQ-02",
  },
  {
    icon: Globe,
    label: "REGISTRATION FEE",
    value: "100% Free (No Fee)",
    subtext: "Zero registration fees; breakfast, lunch, refreshments & kit provided.",
    tag: "FREE ENTRY PASS",
    code: "REQ-03",
  },
  {
    icon: MapPin,
    label: "ON-CAMPUS VENUE",
    value: eventConfig.venue,
    subtext: "BMSIT&M Bengaluru • 14th October 2026 (Full-day intensive hackathon).",
    tag: "IN-PERSON SPRINT",
    code: "REQ-04",
  },
];

export default function TeamRequirements() {
  return (
    <section id="requirements" className="relative bg-lab-charcoal py-24 sm:py-28 px-6 overflow-hidden">
      {/* Subtle ambient amber aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-lab-orange/[0.07] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lab-black/80 border border-lab-orange/30 backdrop-blur-md mb-4 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-lab-orange animate-pulse" />
            <span className="font-oxanium text-xs tracking-[0.25em] text-lab-cream font-bold uppercase">
              SPECIFICATIONS // ELIGIBILITY
            </span>
          </div>

          <h2 className="font-oxanium text-4xl sm:text-5xl font-black text-lab-cream tracking-[0.02em] uppercase">
            TEAM{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-lab-orange to-orange-500 filter drop-shadow-[0_0_25px_rgba(242,121,42,0.4)]">
              REQUIREMENTS
            </span>
          </h2>
          <p className="text-lab-cream/70 font-rajdhani font-semibold text-sm sm:text-base tracking-[0.18em] uppercase max-w-md mx-auto mt-2">
            CRITICAL CRITERIA FOR COMPETITION QUALIFICATION
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {specs.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <SpotlightCard
                  spotlightColor="rgba(242, 121, 42, 0.22)"
                  className="relative h-full bg-lab-black/80 border border-white/[0.08] hover:border-lab-orange/50 hover:shadow-[0_10px_30px_rgba(242,121,42,0.18)] rounded-2xl p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-lab-charcoal border border-lab-orange/30 flex items-center justify-center text-lab-orange shadow-md shadow-black/50 group-hover:border-lab-orange group-hover:scale-105 transition-all duration-300">
                        <Icon size={22} strokeWidth={2} />
                      </div>
                      <span className="font-oxanium text-xs font-bold tracking-widest text-lab-orange/70 group-hover:text-lab-orange transition-colors">
                        {spec.code}
                      </span>
                    </div>

                    <p className="text-lab-orange text-xs font-oxanium tracking-widest font-bold uppercase mb-1">
                      {spec.label}
                    </p>
                    <p className="text-lab-cream font-oxanium font-bold text-xl sm:text-2xl mb-2 group-hover:text-amber-300 transition-colors">
                      {spec.value}
                    </p>
                    <p className="text-lab-cream/70 text-xs sm:text-sm leading-relaxed font-body mb-5">
                      {spec.subtext}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-[11px] font-rajdhani font-bold tracking-wider text-lab-cream/60 uppercase">
                      STATUS
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-oxanium font-bold bg-white/[0.04] border border-white/[0.08] text-amber-300 group-hover:border-lab-orange/40 transition-colors">
                      {spec.tag}
                    </span>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}