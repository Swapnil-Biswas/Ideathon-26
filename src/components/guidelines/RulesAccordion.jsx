import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Shield } from "lucide-react";

const rules = [
  {
    num: "01",
    category: "ELIGIBILITY",
    title: "TEAM COMPOSITION & FREE REGISTRATION",
    content: "Each team must consist of strictly 3 to 4 currently enrolled undergraduate or postgraduate students. Cross-department, inter-branch, and cross-institutional teams are permitted. Registrations are strictly capped at 50 teams on a first-come, first-served basis via Unstop with 100% free entry. Mandatory physical college ID cards required at check-in.",
  },
  {
    num: "02",
    category: "FORMAT & ROUNDS",
    title: "EVENT TIMELINE & THREE-ROUND STRUCTURE",
    content: "CONCEPTIA '26 is an intensive full-day in-person ideathon held on 14th October 2026 (9:00 AM – 4:25 PM) at the BMSIT&M campus in Bengaluru. Teams progress through Round 1 digital filter challenge, Round 2 rapid main stage pitches, and Round 3 corporate ideathon sprint.",
  },
  {
    num: "03",
    category: "FORMAT & ROUNDS",
    title: "5 CORPORATE PROBLEM STATEMENTS",
    content: "During Round 3, 5 authentic real-world engineering problem statements supplied by our corporate industry partner will be revealed exclusively to the 14 finalist teams. Teams enter an intensive 2-hour ideation block to formulate high-impact, technologically viable solutions.",
  },
  {
    num: "04",
    category: "FORMAT & ROUNDS",
    title: "ANY PRESENTATION FORMAT WELCOME",
    content: "Teams have complete creative freedom to present their solutions in whichever medium showcases their concept best: digital slide deck (PPT / Figma), physical printed poster boards, or oral jury defense with visual models. Evaluation centers strictly on logical clarity, technical depth, and solution feasibility.",
  },
  {
    num: "05",
    category: "PRIZES & WILDCARD",
    title: "₹15,000 PRIZE POOL & CORPORATE INTERNSHIP",
    content: "The ₹15,000 total cash prize pool is awarded as: 1st Prize ₹7,000, 2nd Prize ₹5,000, and 3rd Prize ₹3,000. Additionally, members of the 1st prize winning team secure fast-tracked corporate internship opportunities with our industry partner. All jury evaluations and scorecard verdicts are final.",
  },
  {
    num: "06",
    category: "PRIZES & WILDCARD",
    title: "SURPRISE WILDCARD REDEMPTION ROUNDS",
    content: "Eliminated during the opening digital filter or rapid pitches? Do not pack up. Unannounced surprise wildcard redemption challenges will be unveiled live on event day, giving determined contenders an opportunity to fight their way back into the 14 finalist slots!",
  },
];

const categories = ["ALL", "ELIGIBILITY", "FORMAT & ROUNDS", "PRIZES & WILDCARD"];

export default function RulesAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredRules = selectedCategory === "ALL"
    ? rules
    : rules.filter((r) => r.category === selectedCategory);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="rules" className="relative bg-lab-charcoal py-24 sm:py-28 px-6 overflow-hidden">
      {/* Subtle ambient amber glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-lab-orange/[0.07] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lab-black/80 border border-lab-orange/30 backdrop-blur-md mb-4 shadow-md">
            <Shield className="w-3.5 h-3.5 text-lab-orange" />
            <span className="font-oxanium text-xs tracking-[0.25em] text-lab-cream font-bold uppercase">
              CODE OF CONDUCT // OPERATIONAL PROTOCOLS
            </span>
          </div>

          <h2 className="font-oxanium text-4xl sm:text-5xl font-black text-lab-cream tracking-[0.02em] uppercase">
            RULES &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-lab-orange to-orange-500 filter drop-shadow-[0_0_25px_rgba(242,121,42,0.4)]">
              REGULATIONS
            </span>
          </h2>
          <p className="text-lab-cream/70 font-rajdhani font-semibold text-sm sm:text-base tracking-[0.18em] uppercase max-w-md mx-auto mt-2 mb-8">
            STANDARD OPERATING PROCEDURES FOR PARTICIPANTS
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenIndex(0);
                }}
                className={`px-4 py-1.5 rounded-xl font-oxanium text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-lab-orange text-lab-black shadow-md shadow-lab-orange/25 scale-105"
                    : "bg-lab-black/60 border border-white/[0.08] text-lab-cream/70 hover:text-white hover:border-lab-orange/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Rules Accordion Items */}
        <div className="space-y-3.5">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-3.5"
            >
              {filteredRules.map((rule, i) => {
                const isOpen = openIndex === i;
                return (
                  <motion.div
                    key={rule.num}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: i * 0.05, duration: 0.35 }}
                    className={`rounded-2xl transition-all duration-300 overflow-hidden border backdrop-blur-xl ${
                      isOpen
                        ? "bg-lab-black/95 border-lab-orange/50 shadow-[0_8px_30px_rgba(242,121,42,0.12)] ring-1 ring-lab-orange/30"
                        : "bg-lab-black/60 border-white/[0.08] hover:border-lab-orange/40 hover:bg-lab-black/80"
                    }`}
                  >
                    <button
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors focus:outline-none group"
                    >
                      <span className="flex items-center gap-3 sm:gap-4">
                        <span className="text-xs font-oxanium font-bold px-2 py-1 rounded bg-lab-charcoal border border-lab-orange/30 text-lab-orange">
                          {rule.num}
                        </span>
                        <span className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                          <span className={`font-oxanium font-bold text-sm sm:text-base tracking-wide transition-colors ${isOpen ? "text-amber-300" : "text-lab-cream group-hover:text-amber-300"}`}>
                            {rule.title}
                          </span>
                          <span className="text-[10px] font-oxanium tracking-widest text-lab-cream/40 uppercase hidden sm:inline-block">
                            // {rule.category}
                          </span>
                        </span>
                      </span>

                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex-shrink-0 w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-lab-orange group-hover:border-lab-orange/40"
                      >
                        <ChevronDown size={16} />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-6 pb-6 pt-1 text-lab-cream/80 text-sm leading-relaxed border-t border-white/[0.06] font-body">
                            <p className="pt-3">{rule.content}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}