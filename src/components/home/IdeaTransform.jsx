import { motion } from "framer-motion";
import { Lightbulb, PenTool, Ruler, Wrench, Cpu } from "lucide-react";
import SpotlightCard from "../reactbits/SpotlightCard";

const stages = [
  { icon: Lightbulb, label: "01. CONCEPTION", desc: "A spark of curiosity and problem definition." },
  { icon: PenTool, label: "02. SCHEMATIC", desc: "Pinout sketches, math, and system design." },
  { icon: Ruler, label: "03. CAD BLUEPRINT", desc: "3D dimensions, enclosures, and mechanics." },
  { icon: Wrench, label: "04. TESTBED BUILD", desc: "Wiring, soldering, actuators, and code." },
  { icon: Cpu, label: "05. FUNCTIONAL BOT", desc: "Autonomy, precision, and verified output." },
];

export default function IdeaTransform() {
  return (
    <section className="relative bg-lab-black py-32 px-6 overflow-hidden">
      {/* Blueprint grid background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#f2792a 1px, transparent 1px), linear-gradient(90deg, #f2792a 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative max-w-6xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lab-charcoal border border-lab-orange/30 backdrop-blur-md mb-4">
          <span className="font-mono text-xs tracking-[0.2em] text-lab-cream/85 uppercase">
            FABRICATION PIPELINE
          </span>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-lab-cream leading-tight tracking-tight"
        >
          EVERY GREAT MACHINE<br />
          STARTS WITH <span className="text-lab-orange">AN IDEA.</span>
        </motion.h2>
      </div>

      {/* Transformation stages */}
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(242, 121, 42, 0.2)"
                  className="p-6 bg-lab-charcoal/70 border-white/[0.08] hover:border-lab-orange/40 rounded-xl h-full flex flex-col justify-between text-center"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-lab-orange/10 border border-lab-orange/30 flex items-center justify-center mb-5 mx-auto text-lab-orange">
                      <Icon size={24} strokeWidth={1.75} />
                    </div>
                    <p className="text-lab-orange font-mono font-bold text-xs tracking-wider mb-2 uppercase">
                      {stage.label}
                    </p>
                    <p className="text-lab-cream/70 text-xs leading-relaxed">
                      {stage.desc}
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