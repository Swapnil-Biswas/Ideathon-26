import { useState } from "react";
import { motion } from "framer-motion";
import { Laptop, Smartphone, FileSpreadsheet, IdCard, PenTool, CheckCircle2, Circle } from "lucide-react";
import SpotlightCard from "../reactbits/SpotlightCard";

const initialItems = [
  { 
    id: "laptops", 
    icon: Laptop, 
    label: "LAPTOPS & CHARGERS", 
    category: "COMPUTE RIG", 
    note: "At least 1–2 laptops per team for research, deck creation, 3D modeling, and design." 
  },
  { 
    id: "phones", 
    icon: Smartphone, 
    label: "SMARTPHONES", 
    category: "DIGITAL FILTER", 
    note: "Charged smartphones to participate in Round 1 live web app 'This or That' rapid challenge." 
  },
  { 
    id: "ids", 
    icon: IdCard, 
    label: "COLLEGE PHOTO IDS", 
    category: "AUTHENTICATION", 
    note: "Physical college student ID card mandatory for all 3–4 team members at morning check-in." 
  },
  { 
    id: "decks", 
    icon: FileSpreadsheet, 
    label: "PITCH DECKS / POSTERS", 
    category: "SUBMISSION", 
    note: "Any presentation format allowed: slide decks (PPT), physical printed posters, or visual aids." 
  },
  { 
    id: "sketching", 
    icon: PenTool, 
    label: "SKETCHING & DRAFT KITS", 
    category: "RAPID SPRINT", 
    note: "Pens, notebooks, or sketchpads for the intensive 2-hour problem solving and architecture design." 
  },
];

export default function WhatToBring() {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const packedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPct = Math.round((packedCount / initialItems.length) * 100);

  return (
    <section id="checklist" className="relative bg-lab-black py-24 sm:py-28 px-6 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[400px] bg-lab-orange/[0.06] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
                    <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-lab-orange animate-pulse" />
            <span className="font-oxanium text-xs tracking-[0.25em] text-lab-cream font-bold uppercase">
              HACKER ARSENAL // PRE-EVENT CHECKLIST
            </span>
          </div>

          <h2 className="font-oxanium text-4xl sm:text-5xl font-black text-lab-cream tracking-[0.02em] uppercase">
            WHAT TO{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-lab-orange to-orange-500 filter drop-shadow-[0_0_25px_rgba(242,121,42,0.4)]">
              BRING
            </span>
          </h2>
          <p className="text-lab-cream/70 font-rajdhani font-semibold text-sm sm:text-base tracking-[0.18em] uppercase max-w-md mx-auto mt-2 mb-6">
            ESSENTIAL KIT FOR THE COMPETITION ARENA
          </p>

          {/* Interactive Readiness Progress Meter */}
          <div className="max-w-md mx-auto p-4 rounded-xl bg-lab-charcoal/80 border border-white/[0.08] backdrop-blur-md">
            <div className="flex justify-between items-center text-xs font-oxanium font-bold mb-2">
              <span className="text-lab-cream/80 tracking-wider">FIELD KIT READINESS:</span>
              <span className="text-lab-orange">{packedCount} OF {initialItems.length} PACKED ({progressPct}%)</span>
            </div>
            <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-400 to-lab-orange rounded-full"
                animate={{ width: `${progressPct}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <p className="text-[11px] font-rajdhani text-lab-cream/50 tracking-wider mt-2">
              Click any kit card below to check off items as you prepare.
            </p>
          </div>
        </motion.div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {initialItems.map((item, i) => {
            const Icon = item.icon;
            const isChecked = !!checkedItems[item.id];

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -5 }}
                onClick={() => toggleCheck(item.id)}
                className="cursor-pointer select-none group h-full"
              >
                <SpotlightCard
                  spotlightColor="rgba(242, 121, 42, 0.25)"
                  className={`relative h-full rounded-2xl p-6 flex flex-col justify-between text-center transition-all duration-300 backdrop-blur-xl ${
                    isChecked
                      ? "bg-lab-charcoal/95 border-emerald-500/60 shadow-[0_0_20px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/30"
                      : "bg-lab-charcoal/70 border-white/[0.08] hover:border-lab-orange/40 hover:bg-lab-charcoal/85"
                  }`}
                >
                  <div>
                    {/* Top Status Checkmark & Category */}
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
                      <span className="text-[10px] font-oxanium font-bold tracking-widest text-lab-orange/80 uppercase">
                        {item.category}
                      </span>
                      {isChecked ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Circle className="w-4 h-4 text-white/30 group-hover:text-lab-orange transition-colors" />
                      )}
                    </div>

                    {/* Icon Core */}
                    <div className="w-12 h-12 rounded-xl bg-lab-black/80 border border-lab-orange/30 flex items-center justify-center mb-4 mx-auto text-lab-orange shadow-md shadow-black/50 group-hover:scale-105 group-hover:border-lab-orange transition-all duration-300">
                      <Icon size={22} strokeWidth={2} />
                    </div>

                    {/* Title */}
                    <p className={`font-oxanium font-bold text-sm tracking-wide mb-2 uppercase transition-colors ${isChecked ? "text-emerald-300" : "text-lab-cream group-hover:text-amber-300"}`}>
                      {item.label}
                    </p>

                    {/* Description */}
                    <p className="text-lab-cream/70 text-xs leading-relaxed font-body">
                      {item.note}
                    </p>
                  </div>

                  {/* Footer Check Status */}
                  <div className="pt-3 border-t border-white/[0.06] mt-4">
                    <span className={`text-[11px] font-rajdhani font-bold tracking-widest uppercase ${isChecked ? "text-emerald-400" : "text-lab-cream/40 group-hover:text-lab-orange"}`}>
                      {isChecked ? "PACKED ✓" : "CLICK TO PACK"}
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