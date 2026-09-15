import { motion } from "framer-motion";
import { Lightbulb, Zap, Hammer, Trophy } from "lucide-react";
import ShinyText from "../reactbits/ShinyText";
import SpotlightCard from "../reactbits/SpotlightCard";

const journey = [
  {
    num: "01",
    icon: Lightbulb,
    title: "IDEATE",
    desc: "Formulate your problem statement, target persona, and innovative solution thesis.",
    tag: "DISCOVERY PHASE"
  },
  {
    num: "02",
    icon: Zap,
    title: "INNOVATE",
    desc: "Architect hardware schematics, pinout designs, and software algorithmic logic.",
    tag: "ARCHITECTURE"
  },
  {
    num: "03",
    icon: Hammer,
    title: "BUILD",
    desc: "Rapid prototyping sprint: assemble circuits, flash code, calibrate sensors, and iterate.",
    tag: "PROTOTYPING"
  },
  {
    num: "04",
    icon: Trophy,
    title: "WIN",
    desc: "Pitch live demonstration before the panel of veteran judges and mechatronics faculty.",
    tag: "CHAMPIONSHIP"
  },
];

export default function JourneySteps() {
  return (
    <section className="relative bg-lab-charcoal py-32 px-6 overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none"
      >
        <source src="/assets/phineas-idea-build.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-lab-charcoal/80 pointer-events-none" />

      {/* Ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-lab-orange/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lab-black border border-lab-orange/30 backdrop-blur-md mb-4">
            <span className="font-mono text-xs tracking-[0.2em] text-lab-cream/80 uppercase">
              <ShinyText text="THE ROADMAP" speed={4} />
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-lab-cream tracking-tight">
            FOUR STAGES. <span className="text-lab-orange">ONE BUILD.</span>
          </h2>
          <p className="text-lab-cream/60 font-mono text-sm max-w-md mx-auto mt-3">
            FROM BLANK CANVAS TO FUNCTIONAL ROBOTIC HARDWARE
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {journey.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(242, 121, 42, 0.25)"
                  className="h-full p-6 bg-lab-black/60 border-white/[0.08] hover:border-lab-orange/40 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-lab-charcoal border border-lab-orange/30 flex items-center justify-center text-lab-orange shadow-lg shadow-lab-orange/10">
                        <Icon size={22} />
                      </div>
                      <span className="font-mono font-bold text-2xl text-lab-orange/40">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-lab-cream mb-2 tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-lab-cream/70 text-xs leading-relaxed mb-6">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-widest text-lab-orange uppercase">
                      {step.tag}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-lab-orange" />
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