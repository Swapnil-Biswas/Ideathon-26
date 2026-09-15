import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const stages = [
  { name: "CHECK-IN & REGISTRATION", time: "09:00 AM", phase: "PHASE 01" },
  { name: "WELCOME & ROUND OVERVIEW", time: "09:30 AM", phase: "PHASE 02" },
  { name: "ROUND 1: DIGITAL FILTER", time: "09:45 AM", phase: "PHASE 03" },
  { name: "REFRESHMENTS BREAK", time: "10:10 AM", phase: "PHASE 04" },
  { name: "ROUND 2: RAPID PITCH & SURPRISE", time: "10:30 AM", phase: "PHASE 05" },
  { name: "LUNCH BREAK", time: "11:30 AM", phase: "PHASE 06" },
  { name: "KEYNOTE & PROBLEM STATEMENT REVEAL", time: "12:05 PM", phase: "PHASE 07" },
  { name: "ROUND 3: 2-HR IDEATION SPRINT", time: "12:50 PM", phase: "PHASE 08" },
  { name: "FINAL STAGE PITCHES (14 TEAMS)", time: "02:50 PM", phase: "PHASE 09" },
  { name: "JURY DELIBERATION", time: "03:50 PM", phase: "PHASE 10" },
  { name: "PRIZE DISTRIBUTION & CLOSING", time: "04:05 PM", phase: "PHASE 11" },
];

export default function Timeline() {
  return (
    <section className="relative bg-lab-charcoal py-28 px-6 overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lab-black border border-lab-orange/30 backdrop-blur-md mb-4">
            <Clock className="w-3.5 h-3.5 text-lab-orange" />
            <span className="font-mono text-xs tracking-[0.2em] text-lab-cream/85 uppercase">
              SCHEDULE OF OPERATIONS
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-lab-cream tracking-tight">
            EVENT <span className="text-lab-orange">TIMELINE</span>
          </h2>
          <p className="text-lab-cream/60 font-mono text-sm max-w-md mx-auto mt-2">
            PRECISION CHRONOLOGY FOR INNOVATION DAY
          </p>
        </motion.div>

        {/* Timeline grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="relative p-5 rounded-xl bg-lab-black/70 border border-white/[0.08] hover:border-lab-orange/40 transition-colors flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] text-lab-orange font-bold tracking-widest">
                  {stage.phase}
                </span>
                <span className="font-mono text-xs text-lab-cream/40 bg-white/[0.04] px-2.5 py-0.5 rounded">
                  {stage.time}
                </span>
              </div>
              <p className="text-lab-cream font-display font-bold text-base tracking-wide">
                {stage.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}