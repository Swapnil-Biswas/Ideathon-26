import { motion } from "framer-motion";
import { Compass, Target, Cpu, Layers, ShieldCheck } from "lucide-react";

export default function WhatToday() {
  const directives = [
    {
      num: "01",
      icon: Target,
      title: "DIGITAL FILTER ROUND",
      desc: "A fast-paced 'This or That' rapid-fire assessment testing technical instinct, filtering the field down to the top 20 contenders.",
    },
    {
      num: "02",
      icon: Cpu,
      title: "RAPID PITCH & SURPRISE",
      desc: "Top 20 teams deliver 90-second speed pitches on the main stage — with a few surprises along the way.",
    },
    {
      num: "03",
      icon: Layers,
      title: "CORPORATE IDEATHON SPRINT",
      desc: "14 finalist teams receive 5 real-world industry problem statements, enter a 2-hour prep sprint, and pitch directly before corporate judges for ₹15,000 in prizes.",
    },
  ];

  return (
    <section className="relative bg-lab-black py-24 sm:py-32 px-6 sm:px-10 lg:px-12 overflow-hidden">
      {/* Background artwork — preserved Phineas & Ferb machine backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70 pointer-events-none"
        style={{ backgroundImage: "url('/assets/inventor-machine.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-lab-black/95 via-lab-black/85 to-lab-black/90 pointer-events-none" />

      {/* Seamless top and bottom transition fades to eliminate seam clipping */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-lab-black via-lab-black/80 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-lab-black via-lab-black/80 to-transparent pointer-events-none z-10" />

      {/* Atmospheric ambient glows */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-lab-orange/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-amber-500/[0.08] rounded-full blur-[140px] pointer-events-none" />

      {/* Blueprint technical grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#f2792a 1px, transparent 1px), linear-gradient(90deg, #f2792a 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-6xl xl:max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Heading & Mission Thesis */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Top Tag without vibecoded effects */}
              <div className="inline-flex items-center gap-2 text-lab-orange text-xs tracking-[0.22em] font-oxanium font-semibold mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-lab-orange" />
              <span>THE INVENTOR'S CALLING</span>
            </div>

            {/* Decorative Top Cyber Hairline */}
            <div className="flex items-center gap-3 w-44 mb-4 opacity-70">
              <div className="h-[2px] w-12 bg-gradient-to-r from-lab-orange to-lab-glow" />
              <div className="w-1.5 h-1.5 rotate-45 border border-lab-orange bg-lab-black" />
              <div className="h-px flex-1 bg-gradient-to-r from-lab-orange/60 to-transparent" />
            </div>

            {/* Main Headline with Oxanium & First Page Aesthetic */}
            <h2 className="font-oxanium text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-lab-cream leading-[0.98] mb-6 tracking-[0.03em] uppercase">
              BUILD <br />
              SOMETHING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-200 to-lab-orange filter drop-shadow-[0_0_30px_rgba(242,121,42,0.45)]">
                AWESOME.
              </span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-lab-cream/80 text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-body">
              <strong className="text-lab-cream font-semibold font-oxanium">CONCEPTIA '26</strong> is a premier
              one-day ideathon organized by ARMS at BMSIT&amp;M on 14th October 2026. 50 teams compete across 3 structured
              rounds, solving real-world engineering problem statements provided by our corporate industry partner.
            </p>

            {/* Motto / Callout HUD Banner */}
            <div className="relative p-4 rounded-xl bg-lab-charcoal/70 border border-white/10 backdrop-blur-md max-w-xl">
              <div className="flex items-start gap-3.5">
                <div>
                  <span className="font-oxanium text-xs font-bold text-lab-orange tracking-wider uppercase block mb-1">
                    INVENTION PHILOSOPHY
                  </span>
                  <p className="text-lab-cream/85 text-sm font-sans leading-relaxed">
                    Big ideas start small. Every breakthrough begins with a prototype.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Tech Mission Brief Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl border border-lab-orange/30 bg-lab-charcoal/85 backdrop-blur-xl shadow-xl p-6 sm:p-8 overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-lab-orange/15 border border-lab-orange/40 flex items-center justify-center">
                    <Compass className="w-5 h-5 text-lab-orange" />
                  </div>
                  <div>
                    <h3 className="text-lab-cream font-oxanium font-bold text-lg tracking-wider">
                      MISSION BRIEF
                    </h3>
                    <span className="text-[11px] font-mono text-lab-orange/80 tracking-widest uppercase">
                      SYSTEM PROTOCOL 01
                    </span>
                  </div>
                </div>
              </div>

              {/* Directives List */}
              <div className="space-y-4">
                {directives.map((dir) => {
                  const Icon = dir.icon;
                  return (
                    <motion.div
                      key={dir.num}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.07] hover:border-lab-orange/45 hover:bg-lab-orange/[0.04] transition-all duration-300 flex items-start gap-3.5 group"
                    >
                      <div className="flex flex-col items-center gap-1">
                        <span className="font-oxanium text-xs font-bold text-lab-orange px-2 py-0.5 rounded bg-lab-orange/15 border border-lab-orange/30 group-hover:border-lab-orange/60">
                          {dir.num}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className="w-3.5 h-3.5 text-lab-orange" />
                          <h4 className="font-oxanium text-xs font-bold tracking-wider text-lab-cream group-hover:text-lab-glow transition-colors">
                            {dir.title}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-lab-cream/75 leading-relaxed font-body">
                          {dir.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Terminal Footer Telemetry */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-lab-cream/45">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-lab-orange" />
                  <span>CLEARANCE: LEVEL 01</span>
                </span>
                <span>ARMS-BMSIT // 2026</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}