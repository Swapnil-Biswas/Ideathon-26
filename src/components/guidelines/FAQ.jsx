import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "When and where is CONCEPTIA '26 taking place?",
    a: "CONCEPTIA '26 is a one-day in-person ideathon taking place on 14th October 2026 (9:00 AM – 4:25 PM) at the BMSIT&M campus in Bengaluru.",
  },
  {
    q: "What is the team size and participation cap?",
    a: "Teams must consist of 3 to 4 members. Registrations are strictly capped at 50 teams on a first-come, first-served basis.",
  },
  {
    q: "Is there any registration fee?",
    a: "No! Registration for CONCEPTIA '26 is completely FREE. Refreshments and official event materials are provided.",
  },
  {
    q: "Can students from different branches or colleges collaborate?",
    a: "Yes! Inter-disciplinary (e.g. Mechatronics, CS, Electronics, Mechanical) and cross-college engineering teams are actively encouraged.",
  },
  {
    q: "What are the competition rounds?",
    a: "The event features three rounds: (1) Round 1 Digital Filter 'This or That' rapid-fire quiz, (2) Round 2 Rapid Pitches on the main stage, and (3) Round 3 Corporate Ideathon Sprint where 14 finalist teams solve 5 partner company problem statements.",
  },
  {
    q: "In what format can teams present their solutions?",
    a: "Teams have complete presentation freedom: a slide deck (PPT), a poster display, or a verbal pitch with visual aids. The judges evaluate clarity of thought and strength of the idea, not presentation medium.",
  },
  {
    q: "What are the prizes and career incentives?",
    a: "A total cash prize pool of ₹15,000 (1st: ₹7,000, 2nd: ₹5,000, 3rd: ₹3,000) plus an exclusive fast-tracked corporate internship opportunity for the 1st place winning team.",
  },
  {
    q: "What happens if a team gets eliminated early?",
    a: "Stay tuned! Unannounced surprise wildcard redemption challenges will take place on event day to give eliminated teams an exciting chance to claw their way back into the finals.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative bg-lab-black py-28 px-6 overflow-hidden">
      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lab-charcoal border border-lab-orange/30 backdrop-blur-md mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-lab-orange" />
            <span className="font-mono text-xs tracking-[0.2em] text-lab-cream/85 uppercase">
              KNOWLEDGE BASE
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-lab-cream tracking-tight">
            FREQUENTLY ASKED <span className="text-lab-orange">QUESTIONS</span>
          </h2>
        </motion.div>

        <div className="space-y-3.5">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-lab-charcoal/90 border-lab-orange/40 shadow-lg shadow-lab-orange/5"
                    : "bg-lab-charcoal/50 border-white/[0.08] hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors focus:outline-none"
                >
                  <span className="text-lab-cream font-medium text-sm sm:text-base tracking-wide">
                    {item.q}
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
                      <p className="px-6 pb-6 text-lab-cream/70 text-sm leading-relaxed border-t border-white/[0.06] pt-4">
                        {item.a}
                      </p>
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