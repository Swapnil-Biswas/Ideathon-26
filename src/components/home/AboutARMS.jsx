import { motion } from "framer-motion";
import { Cpu, Target, Compass } from "lucide-react";
import SpotlightCard from "../reactbits/SpotlightCard";

export default function AboutARMS() {
  return (
    <section className="relative bg-lab-black py-32 px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-lab-orange/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lab-charcoal border border-lab-orange/30 backdrop-blur-md mb-4">
            <Cpu className="w-3.5 h-3.5 text-lab-orange" />
            <span className="font-mono text-xs tracking-[0.2em] text-lab-cream/85 uppercase">
              ORGANIZING BODY
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-lab-cream tracking-tight mb-3">
            ABOUT <span className="text-lab-orange">ARMS</span>
          </h2>
          <p className="text-lab-cream/60 font-mono text-sm tracking-widest uppercase">
            ADVANCED ROBOTICS AND MECHATRONICS SYSTEMS • BMSIT&M
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <SpotlightCard
            spotlightColor="rgba(242, 121, 42, 0.25)"
            className="bg-lab-charcoal/80 border-white/[0.08] hover:border-lab-orange/40 rounded-2xl p-8 sm:p-12 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/[0.06]">
              <div className="w-12 h-12 rounded-xl bg-lab-orange/10 border border-lab-orange/30 flex items-center justify-center text-lab-orange">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lab-cream font-display font-bold text-xl tracking-wide">
                  The Robotics Society of BMSIT&M
                </h3>
                <span className="text-xs font-mono text-lab-orange tracking-widest">
                  EST. BENGALURU, INDIA
                </span>
              </div>
            </div>

            <p className="text-lab-cream/80 text-sm sm:text-base leading-relaxed mb-6">
              ARMS (Advanced Robotics and Mechatronics Society) is a student-driven
              technical society at BMSIT&M focused on robotics, industrial automation,
              embedded systems, artificial intelligence, and edge compute. We empower students
              to transform audacious concepts into working prototypes through intensive
              workshops, national hackathons, and research testbeds.
            </p>

            <p className="text-lab-cream/80 text-sm sm:text-base leading-relaxed mb-8">
              From autonomous navigation algorithms and kinematic arm design to
              sensor fusion and computer vision pipelines, ARMS champions practical
              engineering excellence, cross-functional teamwork, and national competition victories.
            </p>

            <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-lab-orange/10 border border-lab-orange/30 flex items-center justify-center text-lab-orange flex-shrink-0 mt-0.5">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <p className="text-lab-orange font-mono text-xs tracking-widest font-bold uppercase mb-1">
                  CORE VISION
                </p>
                <p className="text-lab-cream font-display font-semibold text-base sm:text-lg leading-snug">
                  To cultivate a championship community of visionary engineers who pioneer
                  intelligent, autonomous, and impactful mechatronic solutions for the world.
                </p>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}