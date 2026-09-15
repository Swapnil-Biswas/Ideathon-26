import { motion } from "framer-motion";
import { Laptop, Smartphone, FileSpreadsheet, IdCard, PenTool } from "lucide-react";
import SpotlightCard from "../reactbits/SpotlightCard";

const items = [
  { icon: Laptop, label: "LAPTOPS & CHARGERS", note: "At least 1-2 laptops per team for research, deck building, and design" },
  { icon: Smartphone, label: "SMARTPHONES", note: "Charged phones to participate in Round 1 live web app play" },
  { icon: IdCard, label: "COLLEGE PHOTO IDS", note: "Mandatory physical college student ID for all 3–4 team members at check-in" },
  { icon: FileSpreadsheet, label: "PITCH DECKS / POSTERS", note: "Any format allowed: PPT slides, printed poster boards, or visual aids" },
  { icon: PenTool, label: "SKETCHING KITS", note: "Pens, notebooks, or sketchpads for the intensive 2-hour ideation sprint" },
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
            <span className="font-mono text-xs tracking-[0.2em] text-lab-cream/85 uppercase">
              CHECKLIST
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