import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Activity, Flag } from "lucide-react";
import { eventConfig } from "../../config/eventConfig";
import SpotlightCard from "../reactbits/SpotlightCard";

function getTimeLeft() {
  const target = new Date(eventConfig.countdownDate).getTime();
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = timeLeft
    ? [
        { label: "DAYS", value: timeLeft.days },
        { label: "HOURS", value: timeLeft.hours },
        { label: "MINUTES", value: timeLeft.minutes },
        { label: "SECONDS", value: timeLeft.seconds },
      ]
    : [];

  return (
    <section className="relative bg-lab-black py-28 px-6 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-lab-orange/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lab-charcoal border border-lab-orange/30 backdrop-blur-md mb-6"
        >
          <Clock className="w-4 h-4 text-lab-orange" />
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-lab-cream/85">
            TEMPORAL SYNC • TIME REMAINING
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-5xl font-black text-lab-cream tracking-tight mb-12"
        >
          {timeLeft ? "THE COUNTDOWN TO INNOVATION" : "EVENT IN PROGRESS"}
        </motion.h2>

        {timeLeft ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {units.map((unit, idx) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(242, 121, 42, 0.3)"
                  className="bg-lab-charcoal/80 border-white/10 p-6 sm:p-8 text-center"
                >
                  <p className="font-mono text-4xl sm:text-6xl font-black text-lab-orange tabular-nums drop-shadow-[0_0_20px_rgba(242,121,42,0.3)]">
                    {String(unit.value).padStart(2, "0")}
                  </p>
                  <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center justify-center gap-1.5">
                    <Activity className="w-3 h-3 text-lab-orange/50" />
                    <span className="text-lab-cream/60 text-xs font-mono font-medium tracking-[0.2em]">
                      {unit.label}
                    </span>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-8 py-6 rounded-2xl bg-lab-orange/10 border border-lab-orange/40"
          >
            <Flag className="w-8 h-8 text-lab-orange" />
            <span className="font-display text-2xl sm:text-4xl font-bold text-lab-orange tracking-wider">
              THE INVENTION HAS BEGUN!
            </span>
          </motion.div>
        )}
      </div>
    </section>
  );
}