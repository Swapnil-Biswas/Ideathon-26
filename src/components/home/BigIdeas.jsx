import { motion } from "framer-motion";
import { Bot, Cpu, Layers } from "lucide-react";
import SpotlightCard from "../reactbits/SpotlightCard";

export default function BigIdeas() {
  const pillars = [
    {
      icon: Bot,
      title: "HARDWARE & ROBOTICS",
      desc: "Autonomous bots, embedded actuators, custom mechanical assemblies, and mechatronic design.",
      code: "PROTOCOL: EMBEDDED_ROBOTICS",
      num: "01",
    },
    {
      icon: Cpu,
      title: "AI & SENSOR FUSION",
      desc: "Real-time edge compute, computer vision perception, telemetry analysis, and smart automation.",
      code: "PROTOCOL: INTELLIGENT_EDGE",
      num: "02",
    },
    {
      icon: Layers,
      title: "RAPID PROTOTYPING",
      desc: "CAD blueprints, physical circuit testbeds, and proof-of-concept functional builds.",
      code: "PROTOCOL: RAPID_FABRICATION",
      num: "03",
    },
  ];

  return (
    <section className="relative bg-lab-black py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
             {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source src="/assets/phineas-idea-build1.mp4" type="video/mp4" />
      </video> 
      {/* Light overlay just for text contrast */}
      <div className="absolute inset-0 bg-lab-black/35 pointer-events-none" />
      {/* Ambient gradient fades */}
      <div className="absolute inset-0 bg-gradient-to-b from-lab-black via-lab-black/90 to-lab-black pointer-events-none" />

      {/* Atmospheric amber glows */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[350px] bg-lab-orange/[0.08] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[300px] bg-amber-500/[0.06] rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lab-charcoal/90 border border-lab-orange/40 backdrop-blur-md mb-4 shadow-lg shadow-black/40"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-lab-orange animate-pulse" />
            <span className="font-oxanium text-xs tracking-[0.25em] text-lab-cream font-bold uppercase">
              HARDWARE DOMAINS
            </span>
          </motion.div>

          {/* Futuristic Oxanium Headline with Amber Gradient */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-oxanium text-4xl sm:text-6xl font-black text-lab-cream leading-[0.96] tracking-[0.02em] uppercase mb-4"
          >
            BIG IDEAS.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-lab-orange to-orange-500 filter drop-shadow-[0_0_24px_rgba(242,121,42,0.45)]">
              BOLDER BUILDS.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-rajdhani font-semibold text-sm sm:text-base text-lab-cream/70 tracking-[0.2em] uppercase max-w-xl mx-auto"
          >
            THE FRONTIER OF HARDWARE INNOVATION AND CREATIVE ENGINEERING
          </motion.p>
        </div>

        {/* 3 Compact, Sleek Engineering Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group h-full"
              >
                <SpotlightCard
                  spotlightColor="rgba(242, 121, 42, 0.22)"
                  className="relative h-full p-7 rounded-2xl bg-lab-charcoal/80 border border-white/[0.08] hover:border-lab-orange/40 hover:shadow-[0_12px_35px_-10px_rgba(242,121,42,0.18)] backdrop-blur-xl flex flex-col justify-between transition-all duration-300"
                >
                  <div>
                    {/* Icon Housing with Subtle Amber Glow */}
                    <div className="relative mb-6 inline-block">
                      <div className="w-12 h-12 rounded-xl bg-lab-black/80 border border-lab-orange/30 flex items-center justify-center text-lab-orange shadow-md shadow-black/50 group-hover:border-lab-orange group-hover:scale-105 group-hover:text-amber-300 transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="absolute -inset-1 bg-lab-orange/15 rounded-xl blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Title */}
                    <h3 className="font-oxanium font-bold text-xl text-lab-cream mb-3 tracking-wide group-hover:text-amber-300 transition-colors">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lab-cream/70 text-sm leading-relaxed mb-6 font-body">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Footer with Protocol Code & Number */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="font-oxanium text-[11px] text-lab-orange/85 tracking-widest font-semibold">
                      {pillar.code}
                    </span>
                    <span className="font-oxanium font-bold text-xs text-lab-cream/40 group-hover:text-lab-orange transition-colors">
                      {pillar.num}
                    </span>
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