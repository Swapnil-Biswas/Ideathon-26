import { motion } from "framer-motion";
import { Lightbulb, Sparkles, Target, Presentation } from "lucide-react";
import SpotlightCard from "../reactbits/SpotlightCard";

const criteria = [
  { icon: Target, label: "CLARITY & LOGICAL DEPTH", weight: "30%", desc: "Clear understanding of the problem statement and structured engineering thesis." },
  { icon: Sparkles, label: "INNOVATION & NOVELTY", weight: "25%", desc: "Originality and creative breakthrough in the proposed engineering approach." },
  { icon: Lightbulb, label: "FEASIBILITY & IMPACT", weight: "25%", desc: "Practical viability, technical feasibility, and real-world industrial impact." },
  { icon: Presentation, label: "PITCH & JURY DEFENSE", weight: "20%", desc: "Persuasive delivery, effective communication, and articulation during Q&A." },
];

export default function JudgingCriteria() {
  return (
    <section className="relative bg-lab-black py-28 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lab-orange/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lab-charcoal border border-lab-orange/30 backdrop-blur-md mb-4">
            <span className="font-mono text-xs tracking-[0.2em] text-lab-cream/85 uppercase">
              SCORING METRICS
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-lab-cream tracking-tight">
            JUDGING <span className="text-lab-orange">CRITERIA</span>
          </h2>
          <p className="text-lab-cream/60 font-mono text-sm max-w-md mx-auto mt-2">
            100-POINT COMPREHENSIVE JURY RUBRIC
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {criteria.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(242, 121, 42, 0.25)"
                  className="bg-lab-charcoal/70 border-white/[0.08] hover:border-lab-orange/40 rounded-xl p-6 flex flex-col justify-between text-center h-full"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-lab-orange/10 border border-lab-orange/30 flex items-center justify-center mb-4 mx-auto text-lab-orange">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <p className="text-lab-orange font-mono font-black text-3xl tracking-tight mb-2">
                      {item.weight}
                    </p>
                    <p className="text-lab-cream font-display font-bold text-sm tracking-wide mb-2">
                      {item.label}
                    </p>
                    <p className="text-lab-cream/60 text-xs leading-relaxed">
                      {item.desc}
                    </p>
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