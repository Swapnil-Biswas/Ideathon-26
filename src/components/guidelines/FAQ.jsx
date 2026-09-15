import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import ShinyText from "../reactbits/ShinyText";

const faqs = [
  {
    q: "Who can participate in CONCEPTIA '26?",
    a: "Undergraduate and postgraduate students enrolled in recognized engineering or technical universities are eligible. Inter-college and inter-branch teams are enthusiastically welcomed.",
  },
  {
    q: "What is the team size limit?",
    a: "Teams must consist of 2 to 4 members. Solo entries are not permitted to encourage collaborative engineering and hardware prototyping.",
  },
  {
    q: "Can students from different branches form a team?",
    a: "Yes, cross-disciplinary teams (e.g. Mechatronics, Computer Science, Electronics, Mechanical) are highly encouraged because robotics systems require both hardware and software expertise.",
  },
  {
    q: "Where do we register and submit our proposal?",
    a: "Registration is hosted exclusively on the official Unstop platform. Click the 'REGISTER' specular button on the site to access the direct competition portal.",
  },
  {
    q: "What hardware should teams bring?",
    a: "Bring laptops, microcontrollers (Arduino, ESP32, STM32, Raspberry Pi), basic sensors, actuators, and power supplies. High-speed Wi-Fi, soldering stations, and workspace power will be provided.",
  },
  {
    q: "Is there any registration fee?",
    a: "Please refer to the Unstop registration portal for the latest fee details, inclusions, refreshments, and official hacker kits.",
  },
  {
    q: "Who can we contact for technical support or travel queries?",
    a: "You can reach out to the ARMS organizing committee via instagram (@arms.bmsit) or through the coordinators listed on the Unstop portal.",
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
            <span className="font-mono text-xs tracking-[0.2em] text-lab-cream/80 uppercase">
              <ShinyText text="KNOWLEDGE BASE" speed={4} />
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