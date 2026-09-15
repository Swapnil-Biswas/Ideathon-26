import { motion } from "framer-motion";
import { Users, ShieldCheck, Globe, MapPin } from "lucide-react";
import { eventConfig } from "../../config/eventConfig";
import SpotlightCard from "../reactbits/SpotlightCard";
import ShinyText from "../reactbits/ShinyText";

const specs = [
  {
    icon: Users,
    label: "TEAM COMPOSITION",
    value: "2 to 4 Members",
    subtext: "Inter-disciplinary & cross-college teams permitted",
    code: "REQ-01"
  },
  {
    icon: ShieldCheck,
    label: "PARTICIPANT ELIGIBILITY",
    value: "UG & PG Engineering Students",
    subtext: "Valid college ID required during check-in",
    code: "REQ-02"
  },
  {
    icon: Globe,
    label: "REGISTRATION PORTAL",
    value: "Official Unstop Platform",
    subtext: "Instant confirmation and team dashboard",
    code: "REQ-03"
  },
  {
    icon: MapPin,
    label: "ON-CAMPUS VENUE",
    value: eventConfig.venue,
    subtext: "Dedicated laboratory & testing arena",
    code: "REQ-04"
  },
];

export default function TeamRequirements() {
  return (
    <section className="relative bg-lab-charcoal py-28 px-6 overflow-hidden">
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lab-black border border-lab-orange/30 backdrop-blur-md mb-4">
            <span className="font-mono text-xs tracking-[0.2em] text-lab-cream/80 uppercase">
              <ShinyText text="SPECIFICATIONS" speed={4} />
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-lab-cream tracking-tight">
            TEAM <span className="text-lab-orange">REQUIREMENTS</span>
          </h2>
          <p className="text-lab-cream/60 font-mono text-sm max-w-md mx-auto mt-2">
            CRITICAL CRITERIA FOR COMPETITION QUALIFICATION
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {specs.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(242, 121, 42, 0.22)"
                  className="bg-lab-black/70 border-white/[0.08] hover:border-lab-orange/40 rounded-xl p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-lab-orange/10 border border-lab-orange/30 flex items-center justify-center text-lab-orange">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <span className="font-mono text-xs tracking-widest text-lab-orange/60">
                      {spec.code}
                    </span>
                  </div>

                  <p className="text-lab-orange text-xs font-mono tracking-widest font-semibold uppercase mb-1">
                    {spec.label}
                  </p>
                  <p className="text-lab-cream font-display font-bold text-xl mb-1">
                    {spec.value}
                  </p>
                  <p className="text-lab-cream/60 text-xs">
                    {spec.subtext}
                  </p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}