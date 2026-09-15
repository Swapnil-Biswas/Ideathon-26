import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function PerryEasterEgg() {
  const [found, setFound] = useState(false);

  const handleClick = () => {
    setFound(true);
    setTimeout(() => setFound(false), 3000);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleClick}
        aria-label="Secret Agent Easter Egg"
        className="text-lab-cream/10 hover:text-lab-orange/40 transition-colors text-xs select-none"
      >
        ⎯▲⎯
      </button>

      <AnimatePresence>
        {found && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-lab-orange text-lab-black font-display font-bold text-xs px-4 py-2 rounded-lg whitespace-nowrap shadow-xl z-50"
          >
            <p className="flex items-center gap-1">
              <span>YOU FOUND PERRY!</span>
              <ShieldCheck className="w-3.5 h-3.5" />
            </p>
            <p className="font-normal text-[10px] mt-0.5">
              AGENT P HAS ENTERED THE LAB.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}