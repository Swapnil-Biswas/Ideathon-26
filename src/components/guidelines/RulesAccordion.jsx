import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Shield } from "lucide-react";

const rules = [
  {
    num: "01",
    title: "TEAM COMPOSITION & FREE REGISTRATION",
    content: "Each team must consist of 3 to 4 currently enrolled undergraduate or postgraduate students. Registrations are strictly capped at 50 teams on a first-come, first-served basis with zero registration fee. Valid physical college student IDs are mandatory during morning check-in.",
  },
  {
    num: "02",
    title: "EVENT TIMELINE & THREE-ROUND STRUCTURE",
    content: "CONCEPTIA '26 is an intensive one-day ideathon held on 14th October 2026 (9:00 AM – 4:25 PM) at the BMSIT&M campus. The event progresses through three stages: Round 1 digital filter challenge, Round 2 rapid stage pitches, and Round 3 corporate ideathon sprint.",
  },
  {
    num: "03",
    title: "5 CORPORATE PROBLEM STATEMENTS",
    content: "During Round 3, 5 authentic real-world engineering problem statements provided by our corporate industry partner will be revealed to the 14 finalist teams. Teams enter an intensive 2-hour ideation block to formulate high-impact solutions.",
  },
  {
    num: "04",
    title: "ANY PRESENTATION FORMAT WELCOME",
    content: "Teams have complete creative freedom to present their solutions in whichever format showcases their idea best: slide deck (PPT), physical poster board, or verbal defense with visual aids. Evaluation centers on clarity of thought and strength of the solution.",
  },
  {
    num: "05",
    title: "₹15,000 PRIZE POOL & FAST-TRACK INTERNSHIP",
    content: "The ₹15,000 total prize pool is awarded as: 1st Prize ₹7,000, 2nd Prize ₹5,000, and 3rd Prize ₹3,000. Additionally, members of the 1st prize winning team secure fast-tracked corporate internship opportunities with our industry partner. All jury decisions are final.",
  },
  {
    num: "06",
    title: "SURPRISE WILDCARD REDEMPTION",
    content: "Eliminated in the opening rounds? Don't pack up. Unannounced surprise wildcard redemption challenges will be unveiled live on event day, giving determined teams an exciting chance to claw their way back into the 14 finalist slots!",
  },
];

export default function RulesAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative bg-lab-charcoal py-28 px-6 overflow-hidden">
      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lab-black border border-lab-orange/30 backdrop-blur-md mb-4">
            <Shield className="w-3.5 h-3.5 text-lab-orange" />
            <span className="font-mono text-xs tracking-[0.2em] text-lab-cream/85 uppercase">
              CODE OF CONDUCT
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-lab-cream tracking-tight">
            RULES & <span className="text-lab-orange">REGULATIONS</span>
          </h2>
          <p className="text-lab-cream/60 font-mono text-sm max-w-md mx-auto mt-2">
            STANDARD OPERATING PROCEDURES FOR PARTICIPANTS
          </p>
        </motion.div>

        <div className="space-y-3.5">
          {rules.map((rule, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={rule.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-lab-black/90 border-lab-orange/40 shadow-lg shadow-lab-orange/5"
                    : "bg-lab-black/50 border-white/[0.08] hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-4">
                    <span className="text-lab-orange font-mono font-bold text-sm">
                      {rule.num}
                    </span>
                    <span className="text-lab-cream font-display font-bold text-sm sm:text-base tracking-wide">
                      {rule.title}
                    </span>
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-lab-orange"
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
                      <div className="px-6 pb-6 pt-0 text-lab-cream/70 text-sm leading-relaxed border-t border-white/[0.06]">
                        <p className="pt-4">{rule.content}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}