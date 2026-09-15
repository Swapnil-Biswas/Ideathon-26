import { motion } from "framer-motion";
import { Lightbulb, Wrench, Sparkles, Compass } from "lucide-react";
import SpotlightCard from "../reactbits/SpotlightCard";
import ShinyText from "../reactbits/ShinyText";

export default function WhatToday() {
  return (
    <section className="relative bg-lab-charcoal py-28 px-6 overflow-hidden">
      {/* Background artwork */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-85 pointer-events-none"
        style={{ backgroundImage: "url('/assets/inventor-machine.jpg')" }}
      />
      <div className="absolute inset-0 bg-lab-charcoal/80 pointer-events-none" />

      {/* Ambient orange glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lab-orange/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-invention-sky/[0.08] rounded-full blur-[130px] pointer-events-none" />

      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#f2792a 1px, transparent 1px), linear-gradient(90deg, #f2792a 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-lab-orange text-xs tracking-[0.25em] font-mono font-medium mb-4 bg-lab-orange/10 px-3.5 py-1.5 rounded-full border border-lab-orange/30 backdrop-blur-sm"
            >
              <Wrench className="w-3.5 h-3.5 text-lab-orange" />
              <ShinyText text="THE INVENTOR'S CALLING" speed={3.5} className="text-xs font-semibold" />
            </motion.div>

            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-lab-cream leading-[0.95] mb-6 tracking-tight">
              BUILD<br />
              SOMETHING<br />
              <span className="text-lab-orange">AWESOME.</span>
            </h2>

            <p className="text-lab-cream/80 text-base sm:text-lg leading-relaxed max-w-lg mb-8">
              CONCEPTIA '26 is an intercollege ideathon where students transform
              bold engineering concepts into functional prototypes through robotics,
              mechatronics, and rapid problem-solving.
            </p>

            <div className="flex items-center gap-3 text-invention-yellow text-sm font-medium bg-invention-yellow/10 border border-invention-yellow/20 px-4 py-2.5 rounded-xl w-fit backdrop-blur-sm">
              <Lightbulb className="w-4 h-4 text-invention-yellow flex-shrink-0" />
              <span>Big ideas start small. Every breakthrough begins with a prototype.</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <SpotlightCard
              spotlightColor="rgba(242, 121, 42, 0.25)"
              className="p-8 border-white/10 bg-lab-black/60 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-lab-orange/20 border border-lab-orange/40 flex items-center justify-center">
                  <Compass className="w-5 h-5 text-lab-orange" />
                </div>
                <div>
                  <h3 className="text-lab-cream font-bold text-lg">Mission Brief</h3>
                  <span className="text-xs font-mono text-lab-cream/50 tracking-wider">SYSTEM PROTOCOL 01</span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-lab-cream/70">
                <div className="p-3.5 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-lab-orange mt-0.5 flex-shrink-0" />
                  <p>Pick a real-world engineering challenge across Robotics, IoT, or Automation.</p>
                </div>
                <div className="p-3.5 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-lab-orange mt-0.5 flex-shrink-0" />
                  <p>Design system schematics, architecture, and practical working models.</p>
                </div>
                <div className="p-3.5 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-lab-orange mt-0.5 flex-shrink-0" />
                  <p>Pitch to distinguished industry mentors and compete for championship titles.</p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}