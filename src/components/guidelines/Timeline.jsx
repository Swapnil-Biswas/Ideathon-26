import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Sun, Sunset } from "lucide-react";

const timelineData = [
  {
    id: 1,
    phase: "PHASE 01",
    time: "08:00 AM",
    name: "REGISTRATION & CHECK-IN",
    period: "morning",
    tag: "REPORTING",
    desc: "Team check-in, college ID verification and kit distribution."
  },
  {
    id: 2,
    phase: "PHASE 02",
    time: "09:00 AM",
    name: "WELCOME ADDRESS",
    period: "morning",
    tag: "BRIEFING",
    desc: "Introduction to ARMS, event overview and rules briefing."
  },
  {
    id: 3,
    phase: "PHASE 03",
    time: "09:30 AM",
    name: "ROUND 1: ROBOTICS QUIZ",
    period: "morning",
    tag: "QUIZ CHALLENGE",
    desc: "55 teams compete; top 20 advance to Round 2."
  },
  {
    id: 4,
    phase: "PHASE 04",
    time: "10:00 AM",
    name: "ROUND 2: QUESTION RELEASE",
    period: "morning",
    tag: "RELEASE",
    desc: "Questions are released to all qualified teams."
  },
  {
    id: 5,
    phase: "PHASE 05",
    time: "10:30 AM",
    name: "QUESTION SELECTION",
    period: "morning",
    tag: "SELECTION",
    desc: "Teams draw chits for their question and turn number."
  },
  {
    id: 6,
    phase: "PHASE 06",
    time: "10:45 AM",
    name: "PITCHING WITH EVALUATION",
    period: "morning",
    tag: "LIVE PITCH",
    desc: "20 teams pitch live; top 10 qualify directly for the finals."
  },
  {
    id: 7,
    phase: "PHASE 07",
    time: "12:00 PM",
    name: "INDUSTRY GUEST ADDRESS",
    period: "afternoon",
    tag: "KEYNOTE",
    desc: "Guest session with the full audience present."
  },
  {
    id: 8,
    phase: "PHASE 08",
    time: "12:30 PM",
    name: "RESULTS ANNOUNCEMENT",
    period: "afternoon",
    tag: "REVEAL",
    desc: "Direct finalists are announced."
  },
  {
    id: 9,
    phase: "PHASE 09",
    time: "12:45 PM",
    name: "LUNCH BREAK",
    period: "afternoon",
    tag: "LUNCH",
    desc: "Dedicated 40-minute break for participants and guests."
  },
  {
    id: 10,
    phase: "PHASE 10",
    time: "02:00 PM",
    name: "PROBLEM SELECTION & EXPLANATION",
    period: "afternoon",
    tag: "BRIEFING",
    desc: "Finalists select a problem; company representative explains each statement."
  },
  {
    id: 11,
    phase: "PHASE 11",
    time: "02:15 PM",
    name: "ROUND 3 PREPARATION",
    period: "afternoon",
    tag: "PREP SPRINT",
    desc: "Ideation, solution development and pitch preparation."
  },
  {
    id: 12,
    phase: "PHASE 12",
    time: "05:00 PM",
    name: "FINAL EVALUATION",
    period: "afternoon",
    tag: "FINALS",
    desc: "Strict 3-minute pitch plus optional 2-minute Q&A per team."
  },
  {
    id: 13,
    phase: "PHASE 13",
    time: "06:20 PM",
    name: "AWARD CEREMONY",
    period: "afternoon",
    tag: "VICTORY",
    desc: "Prize distribution and closing remarks."
  },
];

export default function Timeline() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredStages = activeFilter === "all"
    ? timelineData
    : timelineData.filter((s) => s.period === activeFilter);

  return (
    <section id="timeline" className="relative bg-lab-charcoal py-24 sm:py-28 px-6 overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-lab-orange/[0.06] rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Clock className="w-3.5 h-3.5 text-lab-orange" />
            <span className="font-oxanium text-xs tracking-[0.25em] text-lab-cream font-bold uppercase">
              SCHEDULE OF OPERATIONS // OCTOBER 14, 2026
            </span>
          </div>

          <h2 className="font-oxanium text-4xl sm:text-5xl font-black text-lab-cream tracking-[0.02em] uppercase">
            EVENT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-lab-orange to-orange-500 filter drop-shadow-[0_0_25px_rgba(242,121,42,0.4)]">
              TIMELINE
            </span>
          </h2>
          <p className="text-lab-cream/70 font-rajdhani font-semibold text-sm sm:text-base tracking-[0.18em] uppercase max-w-md mx-auto mt-2 mb-8">
            FROM CHECK-IN AT 8:00 AM TO THE FINAL AWARD AT 6:30 PM
          </p>

          {/* Shift Filter Switcher */}
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-1.5 rounded-xl font-oxanium text-xs font-bold tracking-wider uppercase transition-all ${
                activeFilter === "all"
                  ? "bg-lab-orange text-lab-black shadow-md shadow-lab-orange/25"
                  : "bg-lab-black/60 border border-white/[0.08] text-lab-cream/70 hover:text-white"
              }`}
            >
              ALL SESSIONS (13 PHASES)
            </button>
            <button
              onClick={() => setActiveFilter("morning")}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl font-oxanium text-xs font-bold tracking-wider uppercase transition-all ${
                activeFilter === "morning"
                  ? "bg-lab-orange text-lab-black shadow-md shadow-lab-orange/25"
                  : "bg-lab-black/60 border border-white/[0.08] text-lab-cream/70 hover:text-white"
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>MORNING (08:00 - 11:30)</span>
            </button>
            <button
              onClick={() => setActiveFilter("afternoon")}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl font-oxanium text-xs font-bold tracking-wider uppercase transition-all ${
                activeFilter === "afternoon"
                  ? "bg-lab-orange text-lab-black shadow-md shadow-lab-orange/25"
                  : "bg-lab-black/60 border border-white/[0.08] text-lab-cream/70 hover:text-white"
              }`}
            >
              <Sunset className="w-3.5 h-3.5" />
              <span>AFTERNOON (12:00 - 18:30)</span>
            </button>
          </div>
        </motion.div>

        {/* Connected Chronological Timeline Cards */}
        <div className="relative border-l-2 border-lab-orange/30 ml-4 sm:ml-32 pl-6 sm:pl-8 space-y-6">
          {filteredStages.map((stage, i) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
              className="relative group"
            >
              <div className="absolute -left-[31px] sm:-left-[39px] top-4 w-4 h-4 rounded-full bg-lab-black border-2 border-lab-orange flex items-center justify-center group-hover:scale-125 transition-transform duration-200">
                <div className="w-1.5 h-1.5 rounded-full bg-lab-orange group-hover:bg-amber-300" />
              </div>

              <div className="hidden sm:block absolute -left-36 top-3 w-28 text-right font-oxanium font-bold text-xs text-lab-orange">
                {stage.time}
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-lab-black/75 border border-white/[0.08] hover:border-lab-orange/50 hover:bg-lab-black/90 backdrop-blur-xl transition-all duration-300 shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="sm:hidden px-2 py-0.5 rounded bg-lab-orange/20 border border-lab-orange/30 text-lab-orange font-oxanium font-bold text-xs">
                      {stage.time}
                    </span>
                    <span className="font-oxanium text-xs font-bold tracking-widest text-lab-orange/80">
                      {stage.phase}
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-oxanium font-bold bg-white/[0.04] border border-white/[0.08] text-amber-300">
                    {stage.tag}
                  </span>
                </div>

                <h3 className="font-oxanium font-bold text-base sm:text-lg text-lab-cream mb-1 tracking-wide group-hover:text-amber-300 transition-colors">
                  {stage.name}
                </h3>
                <p className="text-lab-cream/70 text-xs sm:text-sm leading-relaxed font-body">
                  {stage.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}