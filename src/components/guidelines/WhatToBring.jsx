import { motion } from "framer-motion";
import { Laptop, Wrench, Cpu, BatteryCharging, Package } from "lucide-react";
import SpotlightCard from "../reactbits/SpotlightCard";
import ShinyText from "../reactbits/ShinyText";

const items = [
  { icon: Laptop, label: "DEVELOPER RIGS", note: "Laptops, IDEs, drivers, and charging bricks" },
  { icon: Wrench, label: "HARDWARE TOOLS", note: "Wire strippers, screwdrivers, pliers, and multimeter" },
  { icon: Cpu, label: "CONTROLLERS", note: "Arduinos, ESP32s, Raspberry Pis, sensors, & breakout boards" },
  { icon: BatteryCharging, label: "POWER PACKS", note: "LiPo batteries, power banks, 5V/12V adapters, and USB cables" },
  { icon: Package, label: "CHASSIS & PARTS", note: "Casters, motors, wheels, brackets, and structural elements" },
];

export default function WhatToBring() {
  return (
    <section className="relative bg-lab-black py-28 px-6 overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lab-charcoal border border-lab-orange/30 backdrop-blur-md mb-4">
            <span className="font-mono text-xs tracking-[0.2em] text-lab-cream/80 uppercase">
              <ShinyText text="CHECKLIST" speed={4} />
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-lab-cream tracking-tight">
            WHAT TO <span className="text-lab-orange">BRING</span>
          </h2>
          <p className="text-lab-cream/60 font-mono text-sm max-w-md mx-auto mt-2">
            ESSENTIAL KIT FOR THE HACKATHON ARENA
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {items.map((item, i) => {
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
                  spotlightColor="rgba(242, 121, 42, 0.22)"
                  className="bg-lab-charcoal/70 border-white/[0.08] hover:border-lab-orange/40 rounded-xl p-6 flex flex-col items-center text-center h-full justify-between"
                >
                  <div className="w-12 h-12 rounded-xl bg-lab-orange/10 border border-lab-orange/30 flex items-center justify-center mb-4 text-lab-orange">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-lab-cream font-display font-bold text-sm tracking-wider mb-2 uppercase">
                      {item.label}
                    </p>
                    <p className="text-lab-cream/60 text-xs leading-relaxed">
                      {item.note}
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