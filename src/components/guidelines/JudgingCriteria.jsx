import { motion } from "framer-motion";
import { Lightbulb, Sparkles, Target, Presentation, CheckCircle2 } from "lucide-react";
import SpotlightCard from "../reactbits/SpotlightCard";

const criteria = [
  {
    icon: Target,
    label: "CLARITY & LOGICAL DEPTH",
    weight: "30%",
    pct: 30,
    desc: "Rigorous understanding of the corporate engineering statement and structured problem decomposition.",
    highlights: ["Problem Root-Cause Analysis", "Mathematical & Logical Architecture", "Clear System Boundaries"],
  },
  {
    icon: Sparkles,
    label: "INNOVATION & NOVELTY",
    weight: "25%",
    pct: 25,
    desc: "Creative technical breakthroughs beyond standard textbook or off-the-shelf implementations.",
    highlights: ["Original Architectural Twist", "Hardware/Software Synergy", "Defensible Competitive Edge"],
  },
  {
    icon: Lightbulb,
    label: "FEASIBILITY & IMPACT",
    weight: "25%",
    pct: 25,
    desc: "Practical manufacturability, economic viability, and measurable industrial/social impact.",
    highlights: ["Realistic Bill-of-Materials (BOM)", "Scalability & Reliability", "Real-World Deployment Plan"],
  },
  {
    icon: Presentation,
    label: "PITCH & JURY DEFENSE",
    weight: "20%",
    pct: 20,
    desc: "Persuasive stage delivery, technical articulation, and agile defense during corporate Q&A.",
    highlights: ["5-Minute Pitch Precision", "Composure in Cross-Examination", "Visual / Physical Demonstration"],
  },
];

export default function JudgingCriteria() {
  return (
    <section id="scoring" className="relative bg-lab-black py-24 sm:py-28 px-6 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-lab-orange/[0.08] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2  mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-lab-orange animate-pulse" />
            <span className="font-oxanium text-xs tracking-[0.25em] text-lab-cream font-bold uppercase">
              SCORING RUBRIC // 100-POINT JURY INDEX
            </span>
          </div>

          <h2 className="font-oxanium text-4xl sm:text-5xl font-black text-lab-cream tracking-[0.02em] uppercase">
            JUDGING{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-lab-orange to-orange-500 filter drop-shadow-[0_0_25px_rgba(242,121,42,0.4)]">
              CRITERIA
            </span>
          </h2>
          <p className="text-lab-cream/70 font-rajdhani font-semibold text-sm sm:text-base tracking-[0.18em] uppercase max-w-md mx-auto mt-2">
            HOW YOUR SOLUTION WILL BE EVALUATED BY CORPORATE JUDGES
          </p>
        </motion.div>

        {/* 4 Cards Grid (Fixed from lg:grid-cols-5 to lg:grid-cols-4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {criteria.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group h-full"
              >
                <SpotlightCard
                  spotlightColor="rgba(242, 121, 42, 0.25)"
                  className="relative h-full bg-lab-charcoal/80 border border-white/[0.08] hover:border-lab-orange/50 hover:shadow-[0_12px_35px_-10px_rgba(242,121,42,0.22)] rounded-2xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-xl transition-all duration-300"
                >
                  <div>
                    {/* Top Bar: Icon and Weight Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-lab-black/80 border border-lab-orange/30 flex items-center justify-center text-lab-orange shadow-md shadow-black/50 group-hover:border-lab-orange group-hover:scale-105 transition-all duration-300">
                        <Icon size={22} strokeWidth={2} />
                      </div>
                      <div className="text-right">
                        <span className="font-oxanium font-black text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-lab-orange filter drop-shadow-[0_0_12px_rgba(242,121,42,0.4)]">
                          {item.weight}
                        </span>
                      </div>
                    </div>

                    {/* Progress Track */}
                    <div className="w-full h-1 bg-white/[0.06] rounded-full overflow-hidden mb-5">
                      <motion.div
                        className="h-full bg-gradient-to-r from-lab-orange to-amber-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct * 3.33}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </div>

                    {/* Label & Description */}
                    <h3 className="text-lab-cream font-oxanium font-bold text-base tracking-wide mb-2 uppercase group-hover:text-amber-300 transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-lab-cream/70 text-xs sm:text-sm leading-relaxed mb-5 font-body">
                      {item.desc}
                    </p>
                  </div>

                  {/* Highlights checklist */}
                  <div className="pt-4 border-t border-white/[0.06] space-y-2">
                    {item.highlights.map((point) => (
                      <div key={point} className="flex items-center gap-2 text-xs font-rajdhani font-semibold text-lab-cream/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-lab-orange flex-shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
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