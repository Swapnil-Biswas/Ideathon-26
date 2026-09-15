import { motion } from "framer-motion";
import { Bot, Cpu, Layers } from "lucide-react";
import SpotlightCard from "../reactbits/SpotlightCard";

export default function BigIdeas() {
  const pillars = [
    {
      icon: <Bot className="w-6 h-6 text-lab-orange" />,
      title: "HARDWARE & ROBOTICS",
      desc: "Autonomous bots, embedded actuators, custom mechanical assemblies, and mechatronic design.",
      code: "PROTOCOL: EMBEDDED_ROBOTICS"
    },
    {
      icon: <Cpu className="w-6 h-6 text-lab-orange" />,
      title: "AI & SENSOR FUSION",
      desc: "Real-time edge compute, computer vision perception, telemetry analysis, and smart automation.",
      code: "PROTOCOL: INTELLIGENT_EDGE"
    },
    {
      icon: <Layers className="w-6 h-6 text-lab-orange" />,
      title: "RAPID PROTOTYPING",
      desc: "CAD blueprints, physical circuit testbeds, and proof-of-concept functional builds.",
      code: "PROTOCOL: RAPID_FABRICATION"
    }
  ];

  return (
    <section className="relative bg-lab-black py-32 px-6 overflow-hidden">
      {/* Inventor silhouette background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none"
        style={{ backgroundImage: "url('/assets/inventor-silhouette.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-lab-black via-lab-black/85 to-lab-black pointer-events-none" />

      {/* Layered ambient glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-lab-orange/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-lab-orange/[0.07] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lab-charcoal border border-lab-orange/30 backdrop-blur-md mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-lab-orange" />
            <span className="font-mono text-xs tracking-[0.2em] text-lab-cream/85 uppercase">
              HARDWARE DOMAINS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-lab-cream leading-[0.95] tracking-tight mb-6"
          >
            BIG IDEAS.<br />
            <span className="text-lab-orange">BOLDER BUILDS.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-mono text-base sm:text-lg text-lab-cream/60 tracking-wider"
          >
            THE FRONTIER OF HARDWARE INNOVATION AND CREATIVE ENGINEERING
          </motion.p>
        </div>

        {/* 3 Pillars Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
            >
              <SpotlightCard
                spotlightColor="rgba(242, 121, 42, 0.22)"
                className="h-full p-8 bg-lab-charcoal/70 border-white/[0.08] hover:border-lab-orange/40 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-lab-orange/10 border border-lab-orange/30 flex items-center justify-center mb-6">
                    {pillar.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-lab-cream mb-3 tracking-wide">
                    {pillar.title}
                  </h3>
                  <p className="text-lab-cream/70 text-sm leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="font-mono text-[11px] text-lab-orange/80 tracking-widest">
                    {pillar.code}
                  </span>
                  <span className="font-mono text-xs text-lab-cream/30">0{idx + 1}</span>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}