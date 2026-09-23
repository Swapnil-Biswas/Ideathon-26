import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Home } from "lucide-react";
import { Link } from "react-router-dom";
import RegisterButton from "../shared/RegisterButton";

const faqs = [
  {
    category: "GENERAL",
    q: "When and where is CONCEPTIA '26 taking place?",
    a: "CONCEPTIA '26 is an in-person one-day ideathon taking place on 14th October 2026 (8:00 AM – 6:30 PM) at the BMSIT&M campus in Yelahanka, Bengaluru.",
  },
  {
    category: "REGISTRATION",
    q: "What is the team size and participant cap?",
    a: "Teams must consist of strictly 3 to 4 members. Total participation is capped at 55 teams on a first-come, first-served basis via Unstop.",
  },
  {
    category: "REGISTRATION",
    q: "Is there any registration fee?",
    a: "No! Entry for CONCEPTIA '26 is completely FREE. Refreshments will be provided to all registered participants."
  },
  {
    category: "ELIGIBILITY",
    q: "Can students from different branches or colleges collaborate?",
    a: "Yes! Cross-departmental (e.g. Mechatronics, CS, AI/ML, ECE, Mechanical) and inter-college engineering teams are warmly welcomed and encouraged.",
  },
  {
    category: "ROUNDS",
    q: "What is the tournament round structure?",
    a: "The event progresses across three rounds: (1) Round 1 Digital Filter 'This or That' quiz, (2) Round 2 Rapid Stage Pitches, and (3) Round 3 Corporate Ideathon Sprint where 14 finalist teams solve 5 partner industry problem statements.",
  },
  {
    category: "FORMAT",
    q: "In what format can teams present their solutions?",
    a: "Teams have complete creative presentation freedom: a slide deck (PPT / Canva / Figma), a printed poster board, or an oral defense with visual props. Corporate judges evaluate clarity of thought and technical feasibility.",
  },
  {
    category: "PRIZES",
    q: "What are the prizes and career incentives?",
    a: "A total cash prize pool of ₹15,000 awaits the top three teams — ₹7,000 for 1st place, ₹5,000 for 2nd place, and ₹3,000 for 3rd place. Participants also get official certificates and the opportunity to showcase their ideas, tackle real-world problem statements, and gain valuable ideation and pitching experience."
  },
  {
    category: "SURPRISE",
    q: "What happens if our team gets eliminated in preliminary rounds?",
    a:"Don’t leave early! An unannounced surprise will be revealed live on event day.Stay till the end — you never know what’s waiting for you."
}
];

const faqCategories = ["ALL", "REGISTRATION", "ROUNDS", "PRIZES & SURPRISE"];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [selectedCat, setSelectedCat] = useState("ALL");

  const filteredFaqs = selectedCat === "ALL"
    ? faqs
    : selectedCat === "PRIZES & WILDCARD"
    ? faqs.filter((f) => f.category === "PRIZES" || f.category === "WILDCARD")
    : faqs.filter((f) => f.category === selectedCat);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="relative bg-lab-black py-24 sm:py-28 px-6 overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-lab-orange/[0.06] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
                    <div className="inline-flex items-center gap-2 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-lab-orange" />
            <span className="font-oxanium text-xs tracking-[0.25em] text-lab-cream font-bold uppercase">
              KNOWLEDGE BASE // FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 className="font-oxanium text-4xl sm:text-5xl font-black text-lab-cream tracking-[0.02em] uppercase">
            FREQUENTLY ASKED{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-lab-orange to-orange-500 filter drop-shadow-[0_0_25px_rgba(242,121,42,0.4)]">
              QUESTIONS
            </span>
          </h2>
          <p className="text-lab-cream/70 font-rajdhani font-semibold text-sm sm:text-base tracking-[0.18em] uppercase max-w-md mx-auto mt-2 mb-8">
            INSTANT ANSWERS TO COMMON INQUIRIES
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCat(cat);
                  setOpenIndex(0);
                }}
                className={`px-4 py-1.5 rounded-xl font-oxanium text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                  selectedCat === cat
                    ? "bg-lab-orange text-lab-black shadow-md shadow-lab-orange/25 scale-105"
                    : "bg-lab-charcoal/80 border border-white/[0.08] text-lab-cream/70 hover:text-white hover:border-lab-orange/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* FAQs Accordion */}
        <div className="space-y-3.5 mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCat}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-3.5"
            >
              {filteredFaqs.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <motion.div
                    key={item.q}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: i * 0.04, duration: 0.35 }}
                    className={`rounded-2xl transition-all duration-300 overflow-hidden border backdrop-blur-xl ${
                      isOpen
                        ? "bg-lab-charcoal/95 border-lab-orange/50 shadow-[0_8px_30px_rgba(242,121,42,0.12)] ring-1 ring-lab-orange/30"
                        : "bg-lab-charcoal/60 border-white/[0.08] hover:border-lab-orange/40 hover:bg-lab-charcoal/80"
                    }`}
                  >
                    <button
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors focus:outline-none group"
                    >
                      <span className={`font-oxanium font-bold text-sm sm:text-base tracking-wide transition-colors ${isOpen ? "text-amber-300" : "text-lab-cream group-hover:text-amber-300"}`}>
                        {item.q}
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
                          <p className="px-6 pb-6 text-lab-cream/80 text-sm leading-relaxed border-t border-white/[0.06] pt-4 font-body">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Handbook Action Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-r from-lab-charcoal/95 via-lab-black to-lab-charcoal/95 border border-lab-orange/40 p-8 text-center shadow-2xl backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-lab-orange to-transparent" />

          <h3 className="font-oxanium text-2xl sm:text-3xl font-black text-lab-cream uppercase mb-2">
            READY TO CLAIM YOUR SPOT IN THE ARENA?
          </h3>
          <p className="text-lab-cream/70 font-body text-sm sm:text-base max-w-xl mx-auto mb-6">
            Registrations are 100% free and strictly capped at 55 teams. Assemble your 3–4 member squad and register on Unstop before capacity is reached.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <RegisterButton size="default" />
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] border border-white/[0.12] hover:border-lab-orange/50 text-lab-cream hover:text-amber-300 font-oxanium font-bold text-sm tracking-wider uppercase transition-all"
            >
              <Home className="w-4 h-4" />
              <span>RETURN TO HOME</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}