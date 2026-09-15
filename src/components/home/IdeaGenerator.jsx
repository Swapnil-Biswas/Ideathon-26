import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shuffle, Sparkles, Wand2 } from "lucide-react";
import SpotlightCard from "../reactbits/SpotlightCard";

const words1 = ["Autonomous", "Swarm", "Edge AI", "Computer Vision", "Teleoperated", "Bipedal", "Sensor Fusion"];
const words2 = ["Search & Rescue", "Precision Agriculture", "Subsea Exploration", "Industrial Inspection", "Disaster Relief", "Warehouse Logistics"];
const words3 = ["Mobile Rover", "Manipulator Arm", "Micro-Aerial Drone", "Quadruped Robot", "Exoskeleton Rig"];

export default function IdeaGenerator() {
  const [idea, setIdea] = useState("Autonomous + Search & Rescue + Mobile Rover");

  const generate = () => {
    const a = words1[Math.floor(Math.random() * words1.length)];
    const b = words2[Math.floor(Math.random() * words2.length)];
    const c = words3[Math.floor(Math.random() * words3.length)];
    setIdea(`${a} • ${b} • ${c}`);
  };

  return (
    <section className="relative bg-lab-black py-32 px-6 pb-48 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-lab-orange/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lab-charcoal border border-lab-orange/30 backdrop-blur-md mb-4">
          <Wand2 className="w-3.5 h-3.5 text-lab-orange" />
          <span className="font-mono text-xs tracking-[0.2em] text-lab-cream/85 uppercase">
            IDEATION MATRIX
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl font-black text-lab-cream tracking-tight mb-8">
          STUCK FOR A <span className="text-lab-orange">PROTOTYPE CONCEPT?</span>
        </h2>

        <motion.button
          onClick={generate}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2.5 px-8 py-4 bg-lab-orange text-lab-black font-mono text-xs sm:text-sm font-bold tracking-widest uppercase rounded-full hover:bg-lab-glow shadow-xl shadow-lab-orange/20 mb-10 transition-colors"
        >
          <Shuffle size={16} /> GENERATE RANDOM SPEC
        </motion.button>

        <div className="min-h-[120px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {idea && (
              <motion.div
                key={idea}
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -15 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-xl"
              >
                <SpotlightCard
                  spotlightColor="rgba(242, 121, 42, 0.25)"
                  className="bg-lab-charcoal/90 border-lab-orange/40 rounded-2xl px-8 py-7 shadow-2xl"
                >
                  <div className="flex items-center justify-center gap-2 text-lab-orange font-mono text-xs tracking-widest uppercase mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>SYNTHESIZED THESIS SPEC</span>
                  </div>
                  <p className="font-display text-xl sm:text-2xl font-bold text-lab-cream tracking-wide">
                    {idea}
                  </p>
                </SpotlightCard>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Silhouette character artwork */}
      <motion.img
        src="/assets/phineas-ferb-walking-silhouette.png"
        alt="Phineas and Ferb silhouette"
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        whileInView={{ opacity: 0.85, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.2 }}
        className="hidden md:block absolute bottom-4 right-2 lg:right-8 w-80 lg:w-[32rem] pointer-events-none drop-shadow-[0_20px_20px_rgba(0,0,0,0.6)]"
      />
    </section>
  );
}