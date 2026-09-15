import { motion } from "framer-motion";
import { Lightbulb, Cpu, Sparkles, Puzzle, Trophy, Presentation } from "lucide-react";
import SpotlightCard from "../reactbits/SpotlightCard";
import ShinyText from "../reactbits/ShinyText";

const highlights = [
  {
    icon: Lightbulb,
    title: "IDEATION",
    detail: "Rapid brainstorming sessions to formulate bold engineering hypothesis.",
    code: "SYS-01",
  },
  {
    icon: Puzzle,
    title: "PROBLEM SOLVING",
    detail: "Tackle real-world constraints across automation, mechanics, and IoT.",
    code: "SYS-02",
  },
  {
    icon: Cpu,
    title: "ENGINEERING",
    detail: "Turn schematics and CAD designs into functional working hardware systems.",
    code: "SYS-03",
  },
  {
    icon: Sparkles,
    title: "INNOVATION",
    detail: "Push beyond baseline conventional methods with novel mechanisms.",
    code: "SYS-04",
  },
  {
    icon: Trophy,
    title: "COMPETITION",
    detail: "Compete alongside top talent from premier engineering institutions nationwide.",
    code: "SYS-05",
  },
  {
    icon: Presentation,
    title: "EXPOSITION",
    detail: "Deliver high-impact technical demonstrations to esteemed faculty and jurors.",
    code: "SYS-06",
  },
];

export default function Highlights() {
  return (
    <section className="relative bg-lab-black py-32 px-6 overflow-hidden">
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#f2792a 1px, transparent 1px), linear-gradient(90deg, #f2792a 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lab-charcoal border border-lab-orange/30 backdrop-blur-md mb-4">
            <span className="font-mono text-xs tracking-[0.2em] text-lab-cream/80 uppercase">
              <ShinyText text="SYSTEM ARCHITECTURE" speed={4} />
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-lab-cream tracking-tight">
            WHAT'S WAITING <span className="text-lab-orange">INSIDE?</span>
          </h2>
          <p className="text-lab-cream/60 font-mono text-sm max-w-md mx-auto mt-3">
            SIX CORE PILLARS POWERING CONCEPTIA '26
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(242, 121, 42, 0.2)"
                  className="group relative bg-lab-charcoal/70 border-white/[0.08] hover:border-lab-orange/40 rounded-xl p-7 flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-lab-orange/10 border border-lab-orange/30 flex items-center justify-center text-lab-orange group-hover:scale-105 transition-transform duration-200">
                        <Icon size={22} strokeWidth={1.75} />
                      </div>
                      <span className="font-mono text-xs tracking-widest text-lab-orange/60 group-hover:text-lab-orange transition-colors">
                        {item.code}
                      </span>
                    </div>

                    <h3 className="text-lab-cream font-display font-bold text-xl tracking-wide mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-lab-cream/70 text-sm leading-relaxed">
                      {item.detail}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-[11px] font-mono tracking-widest text-lab-cream/40 uppercase">
                      ACTIVE SPEC
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-lab-orange/60 group-hover:bg-lab-orange transition-colors" />
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