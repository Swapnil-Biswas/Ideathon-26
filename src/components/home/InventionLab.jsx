import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap } from "lucide-react";

const messages = [
  "INVENTION PROTOCOL ACTIVATED.",
  "BIG IDEA DETECTED.",
  "BUILD THE IMPOSSIBLE.",
  "FERB, GET THE TOOLS!",
  "CONCEPTIA MODE: ON.",
  "PERRY APPROVES.",
];

const sparkPositions = [
  { x: -60, y: -40 }, { x: 60, y: -50 }, { x: -80, y: 20 },
  { x: 80, y: 10 }, { x: 0, y: -70 }, { x: -30, y: 50 },
];

export default function InventionLab() {
  const [active, setActive] = useState(false);
  const [message, setMessage] = useState("");

  const handleActivate = () => {
    if (active) return;
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMsg);
    setActive(true);
    setTimeout(() => setActive(false), 4000);
  };

  return (
    <section className="relative bg-lab-charcoal py-28 px-6 overflow-hidden">
      {/* Background silhouette animation — REQUIRES phineas-ferb-silhouette.mp4 in public/assets/ */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/assets/phineas-ferb-silhouette.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-lab-charcoal/60" />

      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-lab-orange text-sm tracking-[0.25em] font-medium mb-3">
          THE INVENTION LAB
        </p>
        <div className="relative inline-block">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-lab-cream mb-4">
            FERB, I KNOW WHAT<br />WE'RE GONNA <span className="text-lab-orange">BUILD!</span>
          </h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="hidden sm:block absolute -right-16 -top-6 bg-lab-orange text-lab-black text-xs font-bold px-3 py-1.5 rounded-full comic-border border-lab-black"
          >
            <span className="inline-flex items-center gap-1">
              LET'S GO! <Zap size={12} fill="currentColor" />
            </span>
          </motion.div>
        </div>

        {/* Machine panel */}
        <div className="relative mt-14 bg-lab-black border-2 border-lab-orange/30 rounded-2xl p-10 sm:p-14 overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            viewBox="0 0 400 200"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M20 100 H150 V40 H280"
              stroke="#f2792a"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: active ? 1 : 0.3 }}
              transition={{ duration: 1.2 }}
            />
            <motion.path
              d="M20 150 H100 V180 H380"
              stroke="#f2792a"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: active ? 1 : 0.2 }}
              transition={{ duration: 1.4 }}
            />
          </svg>

          <div className="relative flex justify-center gap-3 mb-8">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-lab-orange"
                animate={{
                  opacity: active ? [0.3, 1, 0.3] : 0.25,
                  boxShadow: active
                    ? "0 0 12px 2px rgba(242,121,42,0.8)"
                    : "0 0 0px 0px rgba(242,121,42,0)",
                }}
                transition={{
                  repeat: active ? Infinity : 0,
                  duration: 1,
                  delay: i * 0.15,
                }}
              />
            ))}
          </div>

          <motion.svg
            className="relative mx-auto w-20 h-20 text-lab-orange mb-8"
            viewBox="0 0 100 100"
            fill="none"
            animate={{ rotate: active ? 360 : 0 }}
            transition={{ duration: 2, repeat: active ? Infinity : 0, ease: "linear" }}
          >
            <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="2" />
            {[...Array(8)].map((_, i) => (
              <rect
                key={i}
                x="47"
                y="12"
                width="6"
                height="12"
                fill="currentColor"
                transform={`rotate(${(i * 360) / 8} 50 50)`}
              />
            ))}
          </motion.svg>

          <p className="text-lab-cream/40 text-xs tracking-widest mb-6">
            {active ? (
              <span className="text-lab-orange">● SYSTEM ONLINE</span>
            ) : (
              "○ SYSTEM STANDBY"
            )}
          </p>

          <motion.button
            onClick={handleActivate}
            whileHover={!active ? { scale: 1.06, rotate: -1 } : {}}
            whileTap={!active ? { scale: 0.92, rotate: 2 } : {}}
            transition={{ type: "spring", stiffness: 400, damping: 12 }}
            disabled={active}
            className="relative px-8 py-4 bg-lab-orange text-lab-black font-bold tracking-widest rounded-full hover:bg-lab-glow disabled:opacity-70"
          >
            <span className="flex items-center gap-2">
              <Zap size={18} fill="currentColor" /> ACTIVATE INVENTION
            </span>
          </motion.button>

          <div className="h-10 mt-6">
            <AnimatePresence mode="wait">
              {active && (
                <motion.p
                  key={message}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-lab-orange font-display font-bold tracking-wide text-sm sm:text-base"
                >
                  {message}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          {/* Spark burst on activation */}
          <AnimatePresence>
            {active &&
              sparkPositions.map((pos, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                  animate={{ opacity: [1, 0], x: pos.x, y: pos.y, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.03 }}
                  className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-lab-orange pointer-events-none"
                />
              ))}
          </AnimatePresence>
         
        </div>

        
      </div>
    </section>
  );
}