import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Shield } from "lucide-react";
import ShinyText from "../reactbits/ShinyText";

const rules = [
  {
    num: "01",
    title: "TEAM COMPOSITION & ELIGIBILITY",
    content: "Each team must consist of 2 to 4 currently enrolled college students. All participants must present legitimate institutional photo identification during check-in. Inter-college and inter-branch teams are allowed.",
  },
  {
    num: "02",
    title: "ORIGINALITY & INTELLECTUAL PROPERTY",
    content: "All design work, circuit schematics, and prototype code developed during the sprint must be original. Pre-existing open-source libraries and standard reference designs are allowed provided proper attribution is made.",
  },
  {
    num: "03",
    title: "LAB SAFETY & EQUIPMENT USAGE",
    content: "Standard electrical and mechanical safety rules must be strictly adhered to. Workspaces with soldering stations, high-current power supplies, or sharp hand tools must be operated responsibly with eye protection where necessary.",
  },
  {
    num: "04",
    title: "SUBMISSION DELIVERABLES",
    content: "Teams must submit: (1) System Architecture schematic / CAD render, (2) Functional hardware or embedded firmware demo, and (3) A 5-slide technical pitch deck summarizing value proposition, novelty, and test results.",
  },
  {
    num: "05",
    title: "CODE OF CONDUCT & JURY DECISION",
    content: "Fair play, sportsmanship, and professional decorum are paramount. Any form of plagiarism or hardware tampering will result in immediate disqualification. The jury panel's scoring decisions are final and binding.",
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
            <span className="font-mono text-xs tracking-[0.2em] text-lab-cream/80 uppercase">
              <ShinyText text="CODE OF CONDUCT" speed={4} />
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